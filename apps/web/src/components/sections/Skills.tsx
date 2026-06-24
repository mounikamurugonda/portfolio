import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';

const skillCategories = [
  {
    title: 'UX & Product Design',
    icon: '✏️',
    color: 'rgba(251, 191, 36, 0.15)',
    skills: [
      'UX Research', 'User Flows', 'Interaction Design', 'Wireframing', 'Prototyping',
      'Usability Testing', 'Design Systems', 'Design-to-Code', 'Visual QA', 'Figma', 'FigJam AI', 'Adobe XD', 'Photoshop',
    ],
  },
  {
    title: 'Frontend',
    icon: '🌐',
    color: 'rgba(234, 179, 8, 0.15)',
    skills: [
      'HTML5', 'CSS3', 'SCSS/SASS', 'JavaScript (ES6+)', 'TypeScript', 'RxJS',
      'Responsive Design', 'Pixel-Perfect UI', 'Cross-Browser Compatibility', 'WCAG', 'SEO',
    ],
  },
  {
    title: 'Frameworks & Architecture',
    icon: '🏗️',
    color: 'rgba(16, 185, 129, 0.15)',
    skills: [
      'React', 'React.js', 'Next.js (SSR/SSG/ISR)', 'Angular', 'AngularJS',
      'Micro-Frontends (Module Federation)', 'Nx Monorepo', 'TurboRepo',
    ],
  },
  {
    title: 'AI & LLM',
    icon: '🤖',
    color: 'rgba(139, 92, 246, 0.2)',
    skills: [
      'Multimodal RAG Applications', 'LLM Integration', 'LLM Function Calling',
      'Claude Code & Design', 'Cursor', 'GitHub Copilot', 'Figma Make', 'v0', 'AI-Assisted Development',
    ],
  },
  {
    title: 'UI & Styling',
    icon: '🎨',
    color: 'rgba(236, 72, 153, 0.15)',
    skills: [
      'Tailwind CSS', 'ShadCN UI', 'Radix UI', 'MUI', 'Angular Material', 'Bootstrap', 'Design Systems',
    ],
  },
  {
    title: 'State Management',
    icon: '🗂️',
    color: 'rgba(251, 146, 60, 0.15)',
    skills: [
      'Redux (RTK)', 'NgRx', 'Zustand', 'TanStack Query (React Query)',
      'Context API (Client/Global/Server State)',
    ],
  },
  {
    title: 'APIs & Auth',
    icon: '🔑',
    color: 'rgba(99, 102, 241, 0.15)',
    skills: [
      'REST', 'GraphQL', 'OAuth2', 'JWT', 'NextAuth', 'Azure MSAL',
    ],
  },
  {
    title: 'Backend & Database',
    icon: '🔧',
    color: 'rgba(139, 92, 246, 0.15)',
    skills: [
      'Node.js', 'Express.js', 'Prisma', 'MongoDB', 'Supabase', 'Dataverse',
    ],
  },
  {
    title: 'CMS & E-commerce',
    icon: '🛒',
    color: 'rgba(217, 70, 239, 0.15)',
    skills: [
      'WordPress', 'Shopify', 'AEM',
    ],
  },
  {
    title: 'Testing',
    icon: '🧪',
    color: 'rgba(34, 197, 94, 0.15)',
    skills: [
      'Jest', 'Playwright', 'Vitest', 'Cypress', 'React Testing Library',
      'Debugging', 'Chrome DevTools', 'Performance Optimization',
    ],
  },
  {
    title: 'Tools & Build',
    icon: '🛠️',
    color: 'rgba(6, 182, 212, 0.15)',
    skills: [
      'VS Code', 'Nx', 'Vite', 'Webpack', 'Babel', 'Storybook',
      'Git', 'GitHub', 'Git Extensions', 'Jira', 'CI/CD', 'Docker',
    ],
  },
  {
    title: 'Cloud & Deployment',
    icon: '☁️',
    color: 'rgba(6, 182, 212, 0.12)',
    skills: [
      'Azure', 'AWS', 'Vercel', 'Netlify', 'Google Cloud Platform (GCP)',
    ],
  },
  {
    title: 'Data Visualization',
    icon: '📊',
    color: 'rgba(244, 63, 94, 0.15)',
    skills: [
      'D3.js', 'AG Grid', 'React Data Grid', 'yFiles',
    ],
  },
  {
    title: 'Methodologies',
    icon: '🔄',
    color: 'rgba(245, 158, 11, 0.15)',
    skills: [
      'Agile', 'Scrum', 'Component-Driven Development', 'TDD', 'WCAG 2.1 AA',
      'Architecture Decision Records (ADRs)', 'Code Reviews', 'Mentorship',
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-lg">
          13+ years of hands-on expertise across the full frontend spectrum — from React internals to cloud deployments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeInUp}
          >
            <GlassCard
              glowColor={category.color}
              className="h-full p-6 transition-all duration-200 hover:ring-1 hover:ring-primary/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-base font-bold text-white leading-tight">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-text-muted hover:text-white hover:border-white/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
