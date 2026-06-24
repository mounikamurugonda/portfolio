import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp } from '../../lib/animations';

interface Engagement {
  role: string;
  client: string;
  project: string;
  projectUrl: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

interface ExperienceGroup {
  id: number;
  company: string;
  period: string;
  location: string;
  alwaysOpen?: boolean;
  engagements: Engagement[];
}

const experiences: ExperienceGroup[] = [
  {
    id: 1,
    company: 'XIT Solutions Inc.',
    period: 'Oct 2024 – Present',
    location: 'Oakbrook Terrace, IL (Remote)',
    alwaysOpen: true,
    engagements: [
      {
        role: 'Senior Frontend UI Engineer',
        client: 'Complyia',
        project: 'Complyia – Enterprise Compliance Platform',
        projectUrl: 'https://www.google.com/search?q=Complyia+compliance+management+platform',
        period: 'Oct 2024 – Present',
        summary: 'Enterprise compliance and tax-provision platform (C-Cloud) for regulatory tracking, reporting, and documentation. Served as sole UX designer and frontend architect — owning the full product surface from Figma wireframes and interactive prototypes through pixel-perfect React delivery within an Nx Monorepo and Micro-Frontend architecture.',
        bullets: [
          'Sole UX designer and frontend architect: owned the full design lifecycle from stakeholder wireframes and interactive Figma prototypes (using FigJam AI and Claude for rapid ideation) through pixel-perfect React delivery; published a Storybook component library documenting the ShadCN/Radix design system and standardized design-to-code handoff across micro-frontend teams.',
          'Built AI-powered interfaces including Multimodal RAG applications and LLM integrations (data ingestion, embedding, retrieval, prompt orchestration); leveraged Claude Code and GitHub Copilot to cut unit test generation time by 60% and accelerate feature prototyping by 25%.',
          'Architected Nx Monorepo + Micro-Frontend (Module Federation) platform with React 18, TypeScript, Tailwind CSS; built D3.js interactive graph visualizations, AG Grid Enterprise grids, and reduced bundle size by 30% via code splitting and lazy loading.',
        ],
        tags: ['React 18', 'TypeScript', 'Nx Monorepo', 'Micro-Frontend', 'Figma', 'FigJam AI', 'Claude Code', 'GitHub Copilot', 'Vite', 'Tailwind CSS', 'ShadCN UI', 'Radix UI', 'Zustand', 'TanStack Query', 'Azure MSAL', 'D3.js', 'AG Grid Enterprise', 'Storybook', 'Playwright', 'Vitest', 'Multimodal RAG'],
      },
    ],
  },
  {
    id: 2,
    company: 'XIT Solutions Pvt. Ltd.',
    period: 'Jan 2020 – Jan 2024',
    location: 'Hyderabad, Telangana, India · On-site',
    engagements: [
      {
        role: 'Senior Frontend Developer',
        client: 'PwC',
        project: 'Cloud for Tax & Entity Operations – Enterprise Tax Suite',
        projectUrl: 'https://www.google.com/search?q=PwC+Cloud+for+Tax+platform',
        period: 'Feb 2023 – Jan 2024',
        summary: 'PwC Cloud for Tax is a unified enterprise platform combining tax capabilities — Applications, Analytics, Data Management, Task Management, Entity Management, and Document Management. Entity Operations manages legal entity compliance, data tracking, and document workflows for multinational clients.',
        bullets: [
          'Led frontend development of Cloud for Tax using React, Next.js, TypeScript, and Power Apps Component Framework (PCF) — built scalable dashboards, Power Pages portals, Power BI analytics, and reusable components with SSR/SSG and Dataverse integration; executed Figma-to-code workflow within PwC\'s design system with pixel-perfect fidelity.',
          'Engineered Entity Operations full-stack REST APIs (Node.js, Express, Prisma) and responsive React UIs with Redux state management and yFiles interactive org-chart visualizations for legal entity lifecycle management.',
          'Deployed via Docker on Azure with Cypress E2E test coverage; applied Next.js performance optimizations (code splitting, ISR, image optimization) for real-time business insights across both platforms.',
        ],
        tags: ['React', 'Next.js', 'TypeScript', 'Figma', 'Power Pages', 'Power Apps', 'PCF', 'Power BI', 'Tailwind CSS', 'Redux', 'Dataverse', 'Node.js', 'Express.js', 'Prisma', 'yFiles', 'Docker', 'Azure', 'Cypress'],
      },
      {
        role: 'Senior Frontend Developer',
        client: 'HFMA',
        project: 'MapApp – Healthcare Finance Member Platform',
        projectUrl: 'https://www.google.com/search?q=HFMA+MapApp+healthcare+finance',
        period: 'Jan 2020 – Feb 2023',
        summary: 'Membership-based enterprise web platform serving healthcare finance professionals with tools for financial insights, reporting, and member engagement across the healthcare industry.',
        bullets: [
          'Designed scalable Angular applications with role-based authentication (Guards, Interceptors), modular architecture, and client-side routing for accessible, high-performance UIs.',
          'Built pixel-perfect, mobile-first interfaces with HTML5, SCSS, WCAG compliance, and Bootstrap; integrated RESTful APIs for dynamic dashboards and real-time data rendering.',
          'Reduced load time by 40% through performance optimization; ensured quality with Cypress unit and E2E testing in Agile/Scrum environments.',
        ],
        tags: ['Angular 12', 'TypeScript', 'RxJS', 'NgRx', 'HTML5', 'SCSS', 'CSS3', 'Bootstrap', 'REST APIs', 'Cypress', 'WCAG', 'Agile'],
      },
    ],
  },
  {
    id: 3,
    company: 'IT People Corporation',
    period: 'May 2018 – Jan 2020',
    location: 'Hyderabad, Telangana, India · On-site',
    engagements: [
      {
        role: 'Senior UI Developer',
        client: 'Lenovo',
        project: 'AirStack – Enterprise SaaS Management Platform',
        projectUrl: 'https://www.google.com/search?q=Lenovo+AirStack+SaaS+management',
        period: 'May 2018 – Jan 2020',
        summary: 'Enterprise SaaS visibility platform providing organizational software usage insights, helping enterprises manage licenses, reduce shadow IT, and optimize SaaS spend.',
        bullets: [
          'Built enterprise Angular 6 applications with reusable, modular UI components using Angular Material and custom theming for consistent, responsive user experiences.',
          'Integrated RESTful APIs and backend services for dynamic data-driven interfaces; improved quality through unit and E2E testing.',
          'Collaborated in Agile workflows using Git, Jira, Docker, and CI/CD pipelines; optimized rendering efficiency and resolved UI defects for production readiness.',
        ],
        tags: ['Angular 6', 'TypeScript', 'HTML5', 'CSS3', 'Angular Material', 'REST APIs', 'Docker', 'Git', 'Jira', 'AWS', 'CI/CD'],
      },
    ],
  },
  {
    id: 4,
    company: 'XIT Solutions Pvt. Ltd.',
    period: 'Mar 2016 – Mar 2018',
    location: 'Hyderabad, Telangana, India · On-site',
    engagements: [
      {
        role: 'UI Developer',
        client: 'Deloitte',
        project: 'Section 987 – Tax Compliance Portal',
        projectUrl: 'https://www.google.com/search?q=Deloitte+Section+987+tax+compliance+portal',
        period: 'Mar 2017 – Mar 2018',
        summary: 'Centralized, data-driven application helping multinational corporations calculate, track, and visualize complex foreign currency gains/losses and IRC Section 987 transition computations.',
        bullets: [
          'Designed responsive, intuitive dashboards to visualize complex tax models with dynamic UI components, interactive D3.js graphs, and data-heavy grids.',
          'Collaborated with tax SMEs, business analysts, and backend developers to translate Section 987 requirements into accessible web applications.',
          'Ensured WCAG compliance, cross-browser compatibility, and high-performance rendering for large financial datasets.',
        ],
        tags: ['Angular', 'JavaScript', 'D3.js', 'HTML5', 'CSS3', 'Bootstrap', 'WCAG', 'Jira'],
      },
      {
        role: 'UI Developer',
        client: 'WTP Advisors',
        project: 'TransPortal – IC-DISC & Transfer Pricing Platform',
        projectUrl: 'https://www.google.com/search?q=WTP+Advisors+TransPortal+IC-DISC+transfer+pricing',
        period: 'Mar 2016 – Mar 2017',
        summary: 'WTP Advisors is a leader in international tax, transfer pricing, and IC-DISC technology. TransPortal (internally MPS — Modernized Processing System) is their flagship high-performance web application modernizing the ingestion and processing of transactional invoice data for real-time tax optimization and automated report generation for multinational clients.',
        bullets: [
          'Designed and developed responsive, pixel-perfect web interfaces transforming design mockups into W3C-compliant, SEO-optimized, cross-browser compatible applications.',
          'Implemented interactive UI elements, animations, and reusable components to enhance user experience across the tax optimization platform.',
          'Collaborated with business analysts, project managers, and developers to deliver user-centric web applications ensuring performance, accessibility, and browser compatibility.',
        ],
        tags: ['Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'SEO', 'WCAG', 'Jira', 'Visual Studio Code'],
      },
    ],
  },
  {
    id: 5,
    company: 'vSplash Techlabs Private Limited',
    period: 'Sep 2012 – Oct 2014',
    location: 'Hyderabad, Telangana, India · On-site',
    engagements: [
      {
        role: 'Web Designer',
        client: 'AT&T Business Solutions',
        project: 'WP Sites – SMB Web Development Program',
        projectUrl: 'https://www.google.com/search?q=vSplash+Techlabs+AT%26T+business+solutions+websites',
        period: 'Sep 2012 – Oct 2014',
        summary: 'High-volume website development program delivering SEO-optimized, brand-consistent websites for small and medium businesses across the United States via AT&T Business Solutions.',
        bullets: [
          'Designed and developed responsive, SEO-optimized business websites from wireframes to pixel-perfect pages using HTML, CSS, JavaScript, Bootstrap, and WordPress.',
          'Built custom WordPress themes from scratch with dynamic content structures, reusable components, and modern responsive design for cross-browser and cross-device compatibility.',
          'Optimized sites for performance, page load speed, accessibility, and SEO rankings following modern frontend best practices.',
        ],
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WordPress', 'Photoshop', 'Dreamweaver', 'Duda Mobile', 'SEO'],
      },
    ],
  },
];

const EngagementDetail: React.FC<{ engagement: Engagement; showRolePeriod: boolean }> = ({ engagement, showRolePeriod }) => (
  <div>
    {showRolePeriod && (
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-white">{engagement.role}</span>
          <span className="text-[10px] md:text-xs font-medium text-secondary/90 bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded-full whitespace-nowrap">
            Client: {engagement.client}
          </span>
        </div>
        <span className="text-xs font-medium text-text-muted bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
          {engagement.period}
        </span>
      </div>
    )}

    {/* Project name + link */}
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xs font-bold uppercase tracking-widest text-white/30">Project</span>
      <a
        href={engagement.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
        className="text-sm font-semibold text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
      >
        {engagement.project} ↗
      </a>
    </div>

    {/* Project summary */}
    <p className="text-text-muted text-sm leading-relaxed mb-4">{engagement.summary}</p>

    {/* Bullet responsibilities */}
    <ul className="space-y-2 mb-5">
      {engagement.bullets.map((b, i) => (
        <li key={i} className="flex gap-2 text-sm text-text-muted leading-relaxed">
          <span className="text-primary mt-1 shrink-0">▸</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-2">
      {engagement.tags.map(tag => (
        <span key={tag} className="text-xs font-semibold px-2 py-1 bg-white/10 rounded text-white/80">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const GroupBody: React.FC<{ group: ExperienceGroup }> = ({ group }) => {
  const multiple = group.engagements.length > 1;
  return (
    <div className="px-8 pb-8 pt-2 border-t border-white/5">
      <div className={multiple ? 'space-y-8 mt-4' : 'mt-4'}>
        {group.engagements.map((eng, i) => (
          <div key={i} className={multiple && i > 0 ? 'pt-8 border-t border-white/10' : ''}>
            <EngagementDetail engagement={eng} showRolePeriod={multiple} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <SectionWrapper id="experience">
      <motion.div variants={fadeInUp} className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          13+ years building enterprise-grade frontends across compliance, tax, healthcare, and SaaS domains.
        </p>
      </motion.div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {experiences.map((group) => {
          const isOpen = group.alwaysOpen || expandedId === group.id;
          const multiple = group.engagements.length > 1;
          const headline = group.engagements[0].role;

          return (
            <motion.div
              key={group.id}
              variants={fadeInUp}
              className={`border rounded-2xl overflow-hidden transition-colors ${isOpen
                ? 'bg-white/5 border-primary/50'
                : 'bg-transparent border-white/10 hover:border-white/20'
                }`}
            >
              <button
                onClick={() => !group.alwaysOpen && setExpandedId(expandedId === group.id ? null : group.id)}
                className={`w-full px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between text-left group gap-4 ${group.alwaysOpen ? 'cursor-default' : ''}`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors whitespace-normal">
                    {group.company}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    {!multiple && (
                      <span className="text-primary font-semibold text-sm md:text-base">{headline}</span>
                    )}
                    {group.engagements.map((eng, i) => (
                      <span
                        key={i}
                        className="text-[10px] md:text-xs font-medium text-secondary/90 bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded-full whitespace-nowrap"
                      >
                        Client: {eng.client}
                      </span>
                    ))}
                  </div>
                  {group.location && (
                    <div className="text-[10px] md:text-xs text-white/40 mt-1">{group.location}</div>
                  )}
                </div>
                <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 mt-2 md:mt-0">
                  <div className="text-xs font-medium text-text-muted bg-white/5 px-3 py-1 md:px-4 md:py-1.5 rounded-full whitespace-nowrap">
                    {group.period}
                  </div>
                  {!group.alwaysOpen && (
                    <svg
                      className={`w-4 h-4 text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              </button>

              {group.alwaysOpen ? (
                <GroupBody group={group} />
              ) : (
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <GroupBody group={group} />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
