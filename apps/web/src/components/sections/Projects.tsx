import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';

const CLOUD_STORY_URL = 'https://63f02208--65e9f78a-f673-44b6-b8ee-abe85b38b80b.lovable.app';

const featuredProject = {
  title: 'Cloud Story Showcase – UX Case Study Portfolio',
  description: 'A dedicated UX case study portfolio built to showcase end-to-end product design thinking — from discovery and user research through wireframes, Figma prototypes, and pixel-perfect delivery. Features the C-Cloud compliance platform case study with annotated design decisions, interaction flows, and design system documentation.',
  url: CLOUD_STORY_URL,
  label: 'View UX Portfolio',
  tags: ['UX Research', 'Figma', 'Interaction Design', 'Design Systems', 'Prototyping', 'Case Study', 'TanStack', 'Tailwind CSS'],
  badge: 'UX Case Study Portfolio · Live',
  gradient: 'from-sky-500/20 to-cyan-500/10',
  accent: 'border-sky-400/40',
};

const projects = [
  {
    title: 'Complyia – Enterprise Compliance Platform',
    description: 'Led frontend architecture of a large-scale enterprise compliance platform using Nx monorepo and micro-frontend architecture. Built Multimodal RAG AI applications, D3.js visualizations rendering 1,000+ nodes, and reduced bundle size by 30%. Delivered scalable, secure, data-driven workflows with reusable component libraries.',
    url: 'https://www.complyia.com',
    label: 'complyia.com',
    tags: ['React 18', 'TypeScript', 'Nx', 'Micro-Frontend', 'D3.js', 'AG Grid', 'Tailwind CSS', 'Multimodal RAG', 'Cursor AI'],
    badge: 'Enterprise · Current',
    gradient: 'from-violet-500/20 to-indigo-500/10',
    accent: 'border-violet-500/30',
  },
  {
    title: 'UtilToolkits – Free Developer Toolbox',
    description: 'Built and launched a comprehensive suite of 95+ free browser-based developer utilities — JSON to TypeScript, Code to Image, SQL Formatter, Cron Generator, CSS tools, and more. All tools run 100% client-side with no data sent to servers. Used by thousands of developers worldwide.',
    url: 'https://utiltoolkits.com',
    label: 'utiltoolkits.com',
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel', 'SEO', 'Client-Side Processing'],
    badge: 'Personal Project · Live',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    accent: 'border-emerald-500/30',
  },
  {
    title: 'AI Portfolio – RAG Chatbot Experience',
    description: 'Designed and built this interactive portfolio from scratch — featuring a RAG-powered AI chatbot that answers questions about my experience using Sarvam AI (LLM) and Supabase vector search. Includes orbital skill visualization, Framer Motion animations, smooth scrolling, and a dark glassmorphism design system.',
    url: '#',
    label: 'You\'re looking at it!',
    tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Node.js', 'LangChain', 'Sarvam AI', 'Supabase', 'pgvector'],
    badge: 'Personal Project · This site',
    gradient: 'from-pink-500/20 to-rose-500/10',
    accent: 'border-pink-500/30',
  },
];

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <motion.div variants={fadeInUp} className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
        <p className="text-text-muted text-lg max-w-2xl">
          Selected works — from enterprise platforms to personal tools built and shipped.
        </p>
      </motion.div>

      {/* Featured UX Showcase — full-width hero card */}
      <motion.div variants={fadeInUp} className="mb-8">
        <GlassCard className={`flex flex-col md:flex-row items-start md:items-center gap-6 p-0 group overflow-hidden border ${featuredProject.accent} hover:border-sky-400/70 transition-all duration-300`}>
          <div className={`hidden md:block self-stretch w-2 shrink-0 bg-gradient-to-b ${featuredProject.gradient} opacity-80`} />
          <div className="flex flex-col flex-1 p-6 md:py-7">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 backdrop-blur-sm">
                {featuredProject.badge}
              </span>
              <span className="text-xs text-white/30 uppercase tracking-widest">Featured</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 leading-snug">{featuredProject.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-3xl">{featuredProject.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {featuredProject.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-white/60">{tag}</span>
              ))}
            </div>
            <a
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-white transition-colors group/link w-fit"
            >
              <span>{featuredProject.label}</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </GlassCard>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={project.title} variants={fadeInUp} custom={index} className="h-full">
            <GlassCard className={`h-full flex flex-col p-0 group overflow-hidden border ${project.accent} hover:border-primary/50 transition-all duration-300`}>
              <div className="flex flex-col flex-1 p-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm mb-3 w-fit">
                  {project.badge}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{project.title}</h3>
                <p className="text-text-muted text-sm mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  target={project.url === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white transition-colors group/link"
                >
                  <span>{project.label}</span>
                  {project.url !== '#' && (
                    <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};


