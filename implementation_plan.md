# Mounika's AI-Powered Portfolio — Implementation Plan (v2)

## Overview

A premium, **professional-modern** single-page portfolio for **Mounika**, a senior frontend developer. The experience positions her as an **interactive AI-powered developer profile** — every element is interactive and responsive, with scroll-based storytelling, an orbital skill visualization, and an embedded AI chatbot that speaks *as* Mounika (first-person twin persona, not a boring support bot).

**Monorepo structure:**
- `apps/web` — Vite + React + TypeScript + Tailwind v4 + Framer Motion
- `apps/api` — Node.js + Express + LangChain (RAG chatbot backend)

---

## Design Direction ✅ Updated

**Professional-Modern Stunning** (revised from Gen-Z):
- Deep navy / near-black backgrounds with subtle depth layers
- Violet (`#7C3AED`) + Cyan (`#22D3EE`) as accent colors — used with restraint
- Glassmorphism cards with soft glows — elegant, not flashy
- Typography: **Inter** (body) + **Clash Display** (headings) via Google Fonts
- Every component has hover/focus/active states — fully interactive
- Scroll-triggered Framer Motion animations (fade-up, slide, stagger)
- Fully responsive (mobile → desktop)

---

## Key Decisions

### ✅ Contact Form — No CAPTCHA Needed
**Answer to your question:** Cloudflare Turnstile is *only* a bot/spam prevention layer. Since we have our own backend and Supabase, we can:
1. Store contact submissions directly in the `contact_submissions` Supabase table
2. Add **rate limiting** on the Express API (using `express-rate-limit`) to block spam
3. Add a simple **honeypot hidden field** (invisible to real users, bots fill it in)

This is cleaner than adding a third-party CAPTCHA service.

### ✅ Embeddings — Completely Free, No API Key
**Answer to your question:** `text-embedding-3-small` requires an OpenAI API key and is paid (~$0.02/1M tokens — cheap but not free).

**What we'll use instead:** `@xenova/transformers` with the `Xenova/all-MiniLM-L6-v2` model.
- ✅ Runs **locally on the server** — zero cost, zero API key
- ✅ 384-dimension vectors — more than enough for a portfolio knowledge base
- The ingestion script runs once when you set up Supabase, then never again

### ✅ LangChain — Keeping It
LangChain is used for:
- `RecursiveCharacterTextSplitter` — smart chunking of profile content
- `SupabaseVectorStore` — clean pgvector similarity search integration
- LCEL pipeline — compose retrieval → prompt → Sarvam-M in ~15 lines
- Not overkill for RAG — this is exactly its use case

### ✅ Sarvam-M — AI Twin Persona
The chatbot does **not** present itself as "Mounika's assistant." It speaks in first person **as the AI version of Mounika herself**:
> *"Hi! I'm Mounika — well, my AI twin 😄. Ask me anything about my work, skills, or projects!"*

---

## Required Environment Variables

### Frontend (`apps/web/.env`)
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_API_URL=http://localhost:3001
```

### Backend (`apps/api/.env`)
```
SARVAM_API_KEY=...              # from dashboard.sarvam.ai
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...   # keep server-side only
PORT=3001
```
> No OpenAI key needed — embeddings are generated locally.

---

## Proposed Changes

### Root Monorepo

| File | Purpose |
|---|---|
| `package.json` | Workspaces: `apps/web`, `apps/api` |
| `apps/web/package.json` | Vite, React, TS, Tailwind, Framer Motion, Lenis, Supabase JS |
| `apps/api/package.json` | Express, LangChain, @supabase/supabase-js, @xenova/transformers, cors, express-rate-limit |
| `.env.example` | All vars documented |
| `vercel.json` | Frontend deploy + API rewrites |

---

### Frontend — `apps/web/src/`

#### Design System
- `index.css` — Tailwind v4 import + CSS custom properties for full token system
- `lib/animations.ts` — Shared Framer Motion variants

#### Components — `components/ui/`

| Component | Role |
|---|---|
| `GlassCard.tsx` | Base glassmorphism card (backdrop-blur, border glow) |
| `NeonButton.tsx` | Primary/secondary CTAs with shimmer on hover |
| `AnimatedText.tsx` | Word/character staggered reveal |
| `Badge.tsx` | Skill / tech tag badge |
| `SectionWrapper.tsx` | Scroll-triggered fade-up container for every section |

#### Sections — `components/sections/`

| Section | Key UX |
|---|---|
| `Hero.tsx` | Typewriter name reveal, floating skill badges in orbit, two CTAs |
| `Skills.tsx` | SVG orbital constellation — hover node shows years/proficiency/usage |
| `Experience.tsx` | Vertical timeline, click to expand each role (tech stack, contributions, links) |
| `Projects.tsx` | 3-column card grid, hover lifts card and reveals "Problem → Solution → Impact" |
| `Chatbot.tsx` | Embedded chat UI, streaming responses, message history, quickfire prompt chips |
| `Hobbies.tsx` | Animated icon cards (piano 🎹, painting 🎨, swimming 🏊) with micro-interactions |
| `Contact.tsx` | Name/email/message form, honeypot, stores to Supabase via API |

#### Layout
- `Navbar.tsx` — Floating glassmorphism pill nav, scrollspy active section
- `ScrollProgress.tsx` — Thin violet gradient bar at viewport top

#### Hooks
- `useLenis.ts` — Lenis smooth scroll init/teardown
- `useActiveSection.ts` — IntersectionObserver → active nav item
- `useChat.ts` — Chat state (messages[], loading, streaming via SSE/fetch)

#### Lib
- `api.ts` — Typed fetcher for backend endpoints
- `supabase.ts` — Supabase anon client

---

### Backend — `apps/api/src/`

```
src/
  index.ts              — Express app, CORS, rate limiter, routes
  routes/
    chat.ts             — POST /api/chat  (RAG + Sarvam-M)
    contact.ts          — POST /api/contact (form → Supabase)
  lib/
    rag.ts              — LangChain RAG pipeline
    supabase.ts         — Admin Supabase client
    sarvam.ts           — OpenAI client @ https://api.sarvam.ai/v1
scripts/
  ingest.ts             — One-time: chunk profile data → embed → upsert to Supabase
  seed-data.ts          — Mounika's raw profile content (text)
```

#### RAG Pipeline (`lib/rag.ts`) using LangChain
```typescript
// 1. Embed user query locally
const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

// 2. Supabase vector similarity search via LangChain SupabaseVectorStore
const vectorStore = new SupabaseVectorStore(embedder, { client, tableName: 'documents' });
const retriever = vectorStore.asRetriever({ k: 5 });

// 3. LCEL chain: retriever | prompt | sarvam-m
const chain = RunnableSequence.from([
  { context: retriever, question: new RunnablePassthrough() },
  promptTemplate,
  sarvamModel,
  new StringOutputParser(),
]);
```
