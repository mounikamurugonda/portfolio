# Mounika's AI Portfolio — Premium Developer Showcase

This is a premium, AI-powered portfolio website for Mounika Murugonda, a Senior Frontend Developer. It features a RAG-based AI chatbot, interactive career timelines, and a modern glassmorphism design system.

## 🚀 Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion, Lenis (Smooth Scroll).
- **Backend:** Node.js, Express, LangChain.
- **AI/LLM:** Sarvam AI (`sarvam-m`), Supabase Vector Store (pgvector).
- **Tooling:** Nx-style Monorepo, Vite, Resend (Email API).

## 📂 Project Structure

```text
├── apps/
│   ├── web/        # React/Vite frontend
│   └── api/        # Node.js/Express backend + RAG scripts
├── supabase/       # Database migrations & SQL schema
└── package.json    # Monorepo orchestration
```

## 🛠️ Prerequisites

- **Node.js:** v18+ (v22 recommended)
- **Supabase Account:** For vector storage and contact messages.
- **Sarvam AI API Key:** For the AI twin's reasoning.
- **Resend API Key:** For automated email notifications.

## 📥 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create `.env` files in both `apps/web` and `apps/api` directories.

**`apps/api/.env`**
```env
PORT=3000
SARVAM_API_KEY=your_key
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_key
```

**`apps/web/.env`**
```env
VITE_API_URL=http://localhost:3000/api
```

### 4. Database Setup
1. Create a new project in [Supabase](https://supabase.com).
2. Enable the `pgvector` extension.
3. Run the migrations found in `./supabase/migrations` to create the `documents` and `contacts` tables.

### 5. Ingest Data (Train the AI)
Populate the vector store with Mounika's professional context.
```bash
cd apps/api
npm run ingest
```

### 6. Run Development Mode
From the root directory:
```bash
npm run dev
```
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3000

## 🚀 Deployment

### Production Build
1. Build both applications:
   ```bash
   npm run build  # Builds the web app
   cd apps/api && npm run build  # Builds the API
   ```

2. Set production environment variables:
   - Update `apps/api/.env` with production URLs and keys.
   - Update `apps/web/.env` with production API URL and Supabase keys.

### Hosting Recommendations
- **Frontend (Web):** Deploy `apps/web/dist` to Vercel, Netlify, or any static host.
- **Backend (API):** Deploy to Railway, Render, or Heroku. Ensure Node.js 18+.
- **Database:** Supabase (already configured).

### Environment Variables for Production
**API (.env):**
```env
PORT=3000
SARVAM_API_KEY=your_production_key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_key
```

**Web (.env):**
```env
VITE_API_URL=https://your-api-domain.com/api
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 🤖 AI Persona & RAG
The chatbot uses **Retrieval-Augmented Generation (RAG)**. 
- Context is sourced from `apps/api/scripts/seed-data.ts`.
- `ingest.ts` clears the database and re-embeds the latest context using the `Xenova/all-MiniLM-L6-v2` local embedding model.
- The backend queries Supabase (pgvector) for relevant matches before calling Sarvam AI.

## ✉️ Contact System
- Submissions are saved to the Supabase `contacts` table.
- A background trigger sends a formatted email notification to Mounika using **Resend**.

## 🛡️ Security
This repo is configured with a strict `.gitignore` to prevent leaking:
- API Keys and secrets (`.env`)
- Local build artifacts (`dist`, `node_modules`)
- Raw resume files or private documents.

---
Built with ❤️ by Mounika Murugonda
