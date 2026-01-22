process.on("uncaughtException", (err) => console.error("Uncaught:", err));
process.on("unhandledRejection", (reason) =>
  console.error("Unhandled Rejection:", reason),
);

import { clerkMiddleware, getAuth, requireAuth } from "@clerk/express";
import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const allowedOrigins = process.env.ALLOWED_ORIGINS;
const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(clerkMiddleware());

[
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "FREEPIK_API_KEY",
  "DATABASE_URL",
].forEach((key) => {
  if (!process.env[key]) console.warn(`⚠️ ${key} not set`);
});

app.get("/", (req, res) => res.send("OK"));

app.post("/generate", requireAuth(), async (req, res) => {
  const { prompt, style } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const { userId } = getAuth(req);

    // Call Freepik API
    const response = await fetch(
      "https://api.freepik.com/v1/ai/text-to-image",
      {
        method: "POST",
        headers: {
          "x-freepik-api-key": process.env.FREEPIK_API_KEY || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guidance_scale: 1,
          image: {
            size: "square_1_1",
          },
          num_images: 1,
          prompt: prompt,
          styling: {
            style: style || "cartoon",
          },
        }),
      },
    );
    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Freepik API Error:", errorData);
      return res.status(500).json({ error: "Failed to generate image" });
    }

    const data = await response.json();
    const image = data.data[0].base64;

    res.json({ image: `data:image/png;base64,${image}` });

    // Upload to Cloudinary
    const imageUrl = await uploadBase64Image(image);

    //update user history in db
    await prisma.image.create({
      data: {
        prompt,
        style: style || "cartoon",
        url: imageUrl,
        userId: userId || "no-user",
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Image generation failed" });
  }
});

app.get("/images", async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = 12;
  const offset = (page - 1) * limit;

  try {
    const totalImages = await prisma.image.count();

    const images = await prisma.image.findMany({
      take: limit,
      skip: offset,
      select: {
        style: true,
        url: true,
        prompt: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const totalPages = Math.ceil(totalImages / limit);

    res.status(200).json({ images, totalPages, currentPage: page });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

async function uploadBase64Image(base64String: string): Promise<string> {
  try {
    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64String}`,
      {
        folder: "ml-results", // optional: organize into a folder
      },
    );
    return result.secure_url; // permanent Cloudinary URL
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    throw err;
  }
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
