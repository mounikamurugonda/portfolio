import React from 'react';
import { motion } from 'framer-motion';
import { ArrowSquareOut } from '@phosphor-icons/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';

interface EnterpriseProject {
  title: string;
  domain: string;
  client: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  environment: string[];
  url: string;
  label: string;
  badge: string;
  accent: string;
  badgeClass: string;
}

const enterpriseProjects: EnterpriseProject[] = [
  {
    title: 'C-Cloud – Enterprise Compliance & Tax-Provision Platform',
    domain: 'Compliance & Regulatory SaaS',
    client: 'Complyia · Oakbrook Terrace, IL',
    role: 'Senior Frontend Engineer / Sole Frontend Architect',
    period: 'Oct 2024 – Present',
    description:
      'Enterprise compliance and tax-provision platform. Sole frontend architect owning the frontend end to end — architecture, build system, CI/CD, testing strategy, design system, and delivery — across an Nx monorepo with Micro-Frontend architecture (Module Federation) where 7 applications deploy independently.',
    responsibilities: [
      'Integrated v1 of the platform\'s RAG application on the frontend: streaming chat UI, citation rendering, response handling, and LLM function-calling integration; built AI-integrated workflows in the Data Manager module.',
      'Developed a shared design-system library of 55+ reusable components (47 core UI primitives plus 10 domain modules including org chart, data grid, PDF viewer, and virtual select), documented in Storybook and consumed across all 7 apps.',
      'Built data-dense dashboards with D3.js, Recharts, and AG Grid Enterprise; layered state management with Zustand and TanStack Query; Azure MSAL authentication with role-based access control.',
      'Own CI/CD in Azure DevOps with Nx affected-only builds and per-PR preview deployments; cut unit-test writing time by 60% with AI-assisted test generation; reduced bundle size by 30%; led and mentored a frontend team of ~6 engineers.',
    ],
    environment: ['Nx Workspace', 'Micro-Frontends', 'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'ShadCN UI', 'Radix UI', 'AG Grid Enterprise', 'D3.js', 'Recharts', 'Zustand', 'TanStack Query', 'Azure MSAL', 'Azure DevOps', 'Storybook', 'Playwright', 'Vitest', 'Jest', 'RAG/LLM Integration'],
    url: 'https://www.complyia.com',
    label: 'complyia.com',
    badge: 'Enterprise · Current',
    accent: 'border-violet-500/30 hover:border-violet-400/60',
    badgeClass: 'bg-violet-500/10 border-violet-400/30 text-violet-300',
  },
  {
    title: 'MapApp – Healthcare Finance Member Platform',
    domain: 'Healthcare Finance',
    client: 'HFMA (Healthcare Financial Management Association)',
    role: 'Senior Frontend Developer',
    period: 'Jan 2020 – Feb 2023',
    description:
      'Membership-based enterprise web platform serving healthcare finance professionals with financial insights, reporting, and member engagement tools across the healthcare industry.',
    responsibilities: [
      'Designed and developed scalable, secure Angular applications with role-based authentication and authorization (Guards, Interceptors), modular architecture, and client-side routing.',
      'Built pixel-perfect, mobile-first, WCAG-compliant UIs with HTML5, SCSS, and Bootstrap; integrated RESTful APIs for dynamic dashboards and real-time data rendering.',
      'Solved complex UI challenges including hierarchical data structures and conditional role-based views.',
      'Reduced load time by 40% through performance optimization; ensured reliability with Cypress unit and E2E testing in Agile/Scrum teams.',
    ],
    environment: ['Angular 12', 'TypeScript', 'NgRx', 'RxJS', 'HTML5', 'SCSS', 'CSS3', 'Bootstrap', 'REST APIs', 'Cypress', 'WCAG'],
    url: 'https://www.google.com/search?q=HFMA+MapApp+healthcare+finance',
    label: 'About HFMA MapApp',
    badge: 'Enterprise · Healthcare',
    accent: 'border-cyan-500/30 hover:border-cyan-400/60',
    badgeClass: 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300',
  },
  {
    title: 'AirStack – Enterprise SaaS Management Platform',
    domain: 'Enterprise SaaS / IT Asset Management',
    client: 'Lenovo',
    role: 'Senior UI Developer',
    period: 'May 2018 – Jan 2020',
    description:
      'Scalable SaaS visibility platform giving enterprises insight into organizational software usage — managing licenses, reducing shadow IT, and optimizing SaaS spend.',
    responsibilities: [
      'Developed enterprise-scale Angular applications with reusable, modular UI components using Angular Material and custom theming for a consistent, responsive experience.',
      'Integrated RESTful APIs and backend services powering dynamic, data-driven interfaces.',
      'Improved quality through unit and E2E testing; optimized rendering efficiency and resolved UI defects for production readiness.',
      'Collaborated in Agile workflows with Git, Jira, Docker, and CI/CD pipelines on AWS.',
    ],
    environment: ['Angular 6', 'TypeScript', 'HTML5', 'CSS3', 'Angular Material', 'REST APIs', 'Docker', 'Git', 'Jira', 'AWS', 'CI/CD'],
    url: 'https://www.google.com/search?q=Lenovo+AirStack+SaaS+management',
    label: 'About Lenovo AirStack',
    badge: 'Enterprise · SaaS',
    accent: 'border-rose-500/30 hover:border-rose-400/60',
    badgeClass: 'bg-rose-500/10 border-rose-400/30 text-rose-300',
  },
];

const personalProjects = [
  {
    title: 'UtilToolkits – Free Developer Toolbox',
    description: '95+ free browser-based developer utilities (JSON to TypeScript, Code to Image, SQL Formatter, Cron Generator, and more). 100% client-side — no data leaves the browser.',
    url: 'https://utiltoolkits.com',
    label: 'utiltoolkits.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'SEO'],
  },
  {
    title: 'AI Portfolio – RAG Chatbot Experience',
    description: 'This site — an interactive portfolio with a RAG-powered AI chatbot (Sarvam AI + Supabase vector search), orbital skill visualization, and a dark glassmorphism design system.',
    url: '#',
    label: "You're looking at it!",
    tags: ['React', 'Vite', 'Framer Motion', 'LangChain', 'Supabase', 'pgvector'],
  },
];

const MetaItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">{label}</span>
    <span className="text-sm text-white/80 font-medium">{value}</span>
  </div>
);

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <motion.div variants={fadeInUp} className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
        <p className="text-text-muted text-lg max-w-2xl">
          Enterprise-scale platforms delivered for global clients across compliance, healthcare finance, and SaaS domains.
        </p>
      </motion.div>

      {/* Enterprise projects: full-width detailed cards */}
      <div className="space-y-8 mb-20">
        {enterpriseProjects.map((project) => (
          <motion.div key={project.title} variants={fadeInUp}>
            <GlassCard className={`p-6 md:p-8 border transition-all duration-300 ${project.accent}`}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${project.badgeClass}`}>
                  {project.badge}
                </span>
                <span className="text-xs font-medium text-text-muted bg-white/5 px-3 py-1 rounded-full">{project.period}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">{project.title}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 pb-5 border-b border-white/10">
                <MetaItem label="Domain" value={project.domain} />
                <MetaItem label="Client" value={project.client} />
                <MetaItem label="Role" value={project.role} />
              </div>

              <p className="text-text-muted text-sm leading-relaxed mb-5 max-w-4xl">{project.description}</p>

              <span className="block text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Responsibilities</span>
              <ul className="space-y-2 mb-6 max-w-4xl">
                {project.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <span className="block text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Tech Environment</span>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.environment.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-white/60">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white transition-colors group/link"
              >
                <span>{project.label}</span>
                <ArrowSquareOut size={14} weight="bold" className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Personal works: compact secondary grid */}
      <motion.div variants={fadeInUp} className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Personal Works</h3>
        <p className="text-text-muted max-w-2xl">
          Side projects and experiments built and shipped outside of client work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalProjects.map((project, index) => (
          <motion.div key={project.title} variants={fadeInUp} custom={index} className="h-full">
            <GlassCard className="h-full flex flex-col p-6 border border-white/10 hover:border-primary/40 transition-all duration-300">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 backdrop-blur-sm mb-3 w-fit">
                Personal Project
              </span>
              <h4 className="text-base font-bold text-white mb-2 leading-snug">{project.title}</h4>
              <p className="text-text-muted text-sm mb-4 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target={project.url === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white transition-colors group/link"
              >
                <span>{project.label}</span>
                {project.url !== '#' && (
                  <ArrowSquareOut size={14} weight="bold" className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                )}
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
