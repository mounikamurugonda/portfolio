import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Blueprint, Brain, Palette, StackSimple,
  Key, Wrench, Flask, Hammer, Cloud, ChartBar, ArrowsClockwise,
  type Icon,
} from '@phosphor-icons/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';

const skillCategories: {
  title: string;
  icon: Icon;
  accent: string;
  skills: string[];
}[] = [
  {
    title: 'Frontend',
    icon: Code,
    accent: '#eab308',
    skills: [
      'HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript (ES6+)', 'TypeScript', 'RxJS',
      'Responsive Design', 'Cross-Browser Compatibility', 'WCAG Accessibility', 'SEO',
    ],
  },
  {
    title: 'Frameworks & Architecture',
    icon: Blueprint,
    accent: '#10b981',
    skills: [
      'React', 'React 18', 'Next.js (SSR/SSG/ISR)', 'Angular', 'AngularJS',
      'Micro-Frontends (Module Federation)', 'Nx Monorepo', 'TurboRepo',
    ],
  },
  {
    title: 'AI & LLM',
    icon: Brain,
    accent: '#8b5cf6',
    skills: [
      'RAG Application Integration', 'LLM Function Calling', 'AI-Assisted Workflows',
      'Claude', 'GitHub Copilot', 'AI-Assisted Development',
    ],
  },
  {
    title: 'UI & Styling',
    icon: Palette,
    accent: '#ec4899',
    skills: [
      'Figma', 'Tailwind CSS', 'ShadCN UI', 'Radix UI', 'MUI', 'Angular Material', 'Bootstrap', 'Design Systems', 'Storybook',
    ],
  },
  {
    title: 'State Management',
    icon: StackSimple,
    accent: '#fb923c',
    skills: [
      'Redux (RTK)', 'NgRx', 'Zustand', 'TanStack Query (React Query)',
      'Context API (Client/Global/Server State)',
    ],
  },
  {
    title: 'APIs & Auth',
    icon: Key,
    accent: '#6366f1',
    skills: [
      'REST', 'GraphQL', 'OAuth2', 'JWT', 'NextAuth', 'Azure MSAL',
    ],
  },
  {
    title: 'Backend & Database',
    icon: Wrench,
    accent: '#a78bfa',
    skills: [
      'Node.js', 'Express.js', 'Prisma', 'MongoDB', 'Supabase', 'Dataverse',
    ],
  },
  {
    title: 'Testing & Quality',
    icon: Flask,
    accent: '#22c55e',
    skills: [
      'Jest', 'Vitest', 'Playwright', 'Cypress', 'React Testing Library',
      'ESLint', 'Prettier', 'Husky', 'Chrome DevTools',
    ],
  },
  {
    title: 'CI/CD & Build',
    icon: Hammer,
    accent: '#06b6d4',
    skills: [
      'Azure DevOps', 'Nx Affected Builds', 'Vite', 'Webpack',
      'Docker', 'Git', 'GitHub',
    ],
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    accent: '#0ea5e9',
    skills: [
      'Azure', 'AWS', 'Vercel', 'Netlify',
    ],
  },
  {
    title: 'Data Visualization',
    icon: ChartBar,
    accent: '#f43f5e',
    skills: [
      'D3.js', 'Recharts', 'AG Grid', 'yFiles', 'Power BI', 'Highcharts',
    ],
  },
  {
    title: 'Methodologies',
    icon: ArrowsClockwise,
    accent: '#f59e0b',
    skills: [
      'Agile/Scrum', 'Component-Driven Development',
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="w-12 h-px bg-gradient-to-r from-primary to-secondary mb-8" />
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-text-muted max-w-xl text-lg">
          13+ years of hands-on frontend expertise, from pixel-perfect UI and modern frameworks to micro-frontend architecture, AI-powered interfaces, and cloud deployments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <motion.div key={category.title} variants={fadeInUp}>
              <GlassCard
                className="h-full p-6 transition-all duration-200 group overflow-hidden relative"
              >
                {/* Left accent stripe: absolute div, bypasses border-color !important */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl skill-accent-stripe"
                  style={{ background: category.accent }}
                />

                {/* Icon + title */}
                <div className="relative flex items-center gap-3 mb-4">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 skill-icon-badge"
                    style={{ '--accent': category.accent, color: category.accent } as React.CSSProperties}
                  >
                    {/* No color prop → uses currentColor → overridden to ink by .light .skill-icon-badge in CSS */}
                    <IconComponent weight="duotone" size={18} />
                  </span>
                  <h3 className="text-sm font-semibold text-text-main leading-tight">{category.title}</h3>
                </div>

                {/* Skill tags */}
                <div className="relative flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
