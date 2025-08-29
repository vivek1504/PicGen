import { InferenceClient } from "@huggingface/inference";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new InferenceClient(process.env.HF_TOKEN);

app.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;

        const image = await client.textToImage({
            model: "stabilityai/stable-diffusion-3-medium",
            inputs: prompt,
            parameters: { num_inference_steps: 20 },
        });

        //@ts-ignore
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64 = buffer.toString("base64");

        res.json({ image: `data:image/png;base64,${base64}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Image generation failed" });
    }
});

app.listen(5000, () => console.log("🚀 Backend running on http://localhost:5000"));
