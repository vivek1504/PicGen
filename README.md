
# 📸 PicGen – AI Image Generator

PicGen is a **full-stack AI-powered image generator** built with:
- **Frontend**: React + TailwindCSS + shadcn/ui  
- **Backend**: Node.js + Express + TypeScript  
- **AI Model**: Hugging Face Inference API (`stabilityai/stable-diffusion-3-medium`)  

Enter a prompt → get an AI-generated image 🎨

---

## 🚀 Features
- Text-to-image generation via Hugging Face API  
- Simple and clean UI (React + Tailwind + shadcn/ui)  
- Realtime image preview (shows default image if no AI image is generated yet)  
- Modular backend with TypeScript

## 📂 Project Structure
PicGen/
│── backend/ # Node.js + Express API (TypeScript)
│── frontend/ # React + Vite + TailwindCSS
│── README.md


---

## ⚡ Getting Started (Run Locally)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/vivek1504/PicGen.git
cd PicGen
```

2️⃣ Backend Setup


```bash
#Go into backend folder:
cd backend
```

```bash
#Install dependencies:
npm install
```
```bash
#Create .env file inside backend/:

HF_TOKEN=your_huggingface_api_token_here
PORT=5000
```
```bash
#Run backend in development:
npm run dev
```

Or build and run:
```bash
npm run build
npm start
```

Backend runs at:
👉 http://localhost:5000

3️⃣ Frontend Setup

```bash
Go into frontend folder:
cd ../frontend
```
```bash
Install dependencies:
npm install
```
```bash
Run development server:
npm run dev
```
Frontend runs at:
👉 http://localhost:5173

Get Hugging Face token from: Hugging Face Settings

🎯 Usage

Start backend → cd backend && npm run dev
Start frontend → cd frontend && npm run dev
Open browser → http://localhost:5173

Enter a prompt in text box → click generate → see your AI image 🎨

📌 Tech Stack

Frontend: React 18, Vite, TailwindCSS, shadcn/ui
Backend: Node.js, Express, TypeScript
AI: Hugging Face Inference API (Stable Diffusion)
