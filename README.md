# AI Image Generator

A full-stack web application that generates images from text prompts using AI. Built with React, Express.js, and integrated with Freepik's AI image generation API.

## Features

- **AI Image Generation**: Generate high-quality images from text descriptions
- **Multiple Styles**: Choose from various artistic styles for your images
- **User Authentication**: Secure authentication powered by Clerk
- **Image Gallery**: Browse and explore generated images
- **Cloud Storage**: Images stored securely with Cloudinary
- **Responsive Design**: Works seamlessly across all devices
- **Database Integration**: PostgreSQL database with Prisma ORM

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for navigation
- **React Query** for data fetching
- **Clerk** for authentication

### Backend
- **Node.js** with **Express.js**
- **TypeScript** for type safety
- **Prisma** ORM with **PostgreSQL**
- **Clerk** for authentication
- **Cloudinary** for image storage
- **Freepik API** for AI image generation

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Docker** (optional, for containerized deployment)

## API Keys Required

You'll need to obtain API keys from the following services:

1. **Clerk** - For user authentication
2. **Cloudinary** - For image storage and management
3. **Freepik API** - For AI image generation
4. **PostgreSQL Database** - Database connection string

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/vivek1504/PicGen
cd image
```

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Environment Variables

Create a `.env` file in the `backend` directory:

```bash
cp .env.example .env
```

Add the following environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/image_generator?schema=public"

# Clerk Authentication
CLERK_PUBLISHABLE_KEY="pk_test_your_clerk_publishable_key"
CLERK_SECRET_KEY="sk_test_your_clerk_secret_key"

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

# Freepik API
FREEPIK_API_KEY="your_freepik_api_key"

# Server Configuration
PORT=4000
NODE_ENV=development
```

#### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Seed the database
npx prisma db seed
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

#### Environment Variables

Create a `.env` file in the `frontend` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:4000

# Clerk Configuration
VITE_CLERK_PUBLISHABLE_KEY="pk_test_your_clerk_publishable_key"
```

### 4. Running the Application

#### Development Mode

Start the backend server:
```bash
cd backend
npm run dev
```

In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:4000

#### Production Mode

Build and start the backend:
```bash
cd backend
npm run build
npm start
```

Build and serve the frontend:
```bash
cd frontend
npm run build
npm run preview
```

## Docker Deployment

### Backend

The backend includes a multi-stage Dockerfile for production deployment:

```bash
cd backend
docker build -t image-generator-backend .
docker run -p 4000:4000 --env-file .env image-generator-backend
```

### Full Stack with Docker Compose

Create a `docker-compose.yml` in the root directory:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: image_generator
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: your_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build: ./backend
    ports:
      - "4000:4000"
    environment:
      - DATABASE_URL=postgresql://postgres:your_password@postgres:5432/image_generator
      - CLERK_SECRET_KEY=your_clerk_secret_key
      - CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
      - CLOUDINARY_API_KEY=your_cloudinary_api_key
      - CLOUDINARY_API_SECRET=your_cloudinary_api_secret
      - FREEPIK_API_KEY=your_freepik_api_key
    depends_on:
      - postgres

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - VITE_API_URL=http://localhost:4000
      - VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

volumes:
  postgres_data:
```

Run with:
```bash
docker-compose up --build
```

## API Endpoints

### Authentication Required Endpoints

- `POST /generate` - Generate an image from a text prompt
  ```json
  {
    "prompt": "A beautiful sunset over mountains",
    "style": "photorealistic"
  }
  ```

### Public Endpoints

- `GET /` - Health check
- `GET /images` - Fetch paginated list of generated images
  - Query parameters: `page` (default: 1)

## Available Styles

The application supports various image styles:
- `photorealistic`
- `cartoon`
- `artistic`
- `digital-art`
- `fantasy`
- `abstract`

## Project Structure

```
image/
├── backend/
│   ├── src/
│   │   └── index.ts          # Main server file
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Environment File Examples

### Backend `.env.example`

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/image_generator?schema=public"

# Authentication - Clerk
CLERK_PUBLISHABLE_KEY="pk_test_your_publishable_key_here"
CLERK_SECRET_KEY="sk_test_your_secret_key_here"

# Image Storage - Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# AI Image Generation - Freepik
FREEPIK_API_KEY="your_freepik_api_key"

# Server Configuration
PORT=4000
NODE_ENV=development
```

### Frontend `.env.example`

```env
# API Configuration
VITE_API_URL=http://localhost:4000

# Authentication - Clerk
VITE_CLERK_PUBLISHABLE_KEY="pk_test_your_publishable_key_here"

# Optional: Additional frontend environment variables
VITE_APP_NAME="AI Image Generator"
VITE_APP_VERSION="1.0.0"
```

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL format
   - Run `npx prisma db push` to sync schema

2. **Authentication Issues**
   - Verify Clerk API keys are correct
   - Ensure frontend and backend use matching Clerk keys

3. **Image Generation Fails**
   - Check Freepik API key and quota
   - Verify Cloudinary configuration
   - Check network connectivity

4. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
   - Check Node.js version compatibility

### Environment Setup Verification

Run these commands to verify your setup:

```bash
# Check Node.js version
node --version

# Check if PostgreSQL is running
pg_isready

# Test backend environment
cd backend && npm run build

# Test frontend environment
cd frontend && npm run build
```
