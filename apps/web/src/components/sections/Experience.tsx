import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';
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
        role: 'Senior Frontend Engineer',
        client: 'Complyia',
        project: 'C-Cloud – Enterprise Compliance & Tax-Provision Platform',
        projectUrl: 'https://www.google.com/search?q=Complyia+compliance+management+platform',
        period: 'Oct 2024 – Present',
        summary: 'Sole frontend architect for C-Cloud, an enterprise compliance and tax-provision platform. Own the frontend end to end: architecture, build system, CI/CD, testing strategy, design system, and delivery across 7 independently deployable applications.',
        bullets: [
          'Architected the platform as an Nx monorepo with Micro-Frontend architecture (Module Federation), chosen over a single-build monolith so 7 applications deploy independently, removing cross-team release coordination.',
          'Integrated v1 of the platform\'s RAG application on the frontend — streaming chat UI, citation rendering, response handling, and LLM function-calling integration — and built AI-integrated workflows in the Data Manager module, embedding LLM-driven features directly into user-facing data operations.',
          'Developed a shared design-system library of 55+ reusable components (47 core UI primitives and composites plus 10 domain modules including org chart, data grid, PDF viewer, and virtual select) using React 18, TypeScript, Tailwind CSS, ShadCN UI, and Radix UI, documented in Storybook and consumed across all 7 apps.',
          'Built data-dense dashboards and visualizations with D3.js, Recharts, and AG Grid Enterprise; implemented layered state management with Zustand for global/UI state and TanStack Query for server state with caching and synchronization.',
          'Set up and own CI/CD pipelines in Azure DevOps with Nx affected-only builds, automated lint/test gates, and per-PR preview deployments; established the testing strategy with Vitest/Jest unit tests and Playwright E2E suites in CI, using AI-assisted test generation (Claude, Copilot) to cut unit-test writing time by 60%.',
          'Enforced coding standards (ESLint + Prettier + Husky pre-commit hooks, PR review checklist); integrated Azure MSAL authentication with role-based access control; reduced bundle size by 30% via code splitting, lazy loading, and caching.',
          'Led and mentored a frontend team of ~6 engineers on React patterns, state management, and monorepo workflows, driving architectural decisions and code reviews in Agile/Scrum ceremonies with product and backend teams.',
        ],
        tags: ['Nx Workspace', 'Micro-Frontends', 'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'ShadCN UI', 'Radix UI', 'AG Grid Enterprise', 'D3.js', 'Recharts', 'Zustand', 'TanStack Query', 'Azure MSAL', 'RAG/LLM Integration', 'Claude', 'GitHub Copilot', 'Playwright', 'Vitest', 'Jest', 'Storybook', 'Zod', 'React Hook Form', 'Azure DevOps', 'Docusaurus'],
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
        project: 'Cloud for Tax – Enterprise Tax Compliance Platform',
        projectUrl: 'https://www.google.com/search?q=PwC+Cloud+for+Tax+platform',
        period: 'July 2023 – Jan 2024',
        summary: 'Enterprise tax-compliance platform delivered as part of a continuous 12-month PwC engagement. Led frontend development using React.js, Next.js, and TypeScript, applying SSR, SSG, ISR, and API routes for high-performance tax workflows.',
        bullets: [
          'Led frontend development of the platform with React.js, Next.js, and TypeScript, applying SSR, SSG, ISR, and API routes for high-performance tax workflows.',
          'Built custom PCF (Power Apps Component Framework) controls, Power Pages portals with Liquid templates, and reusable form and data-grid components integrated with Dataverse.',
          'Built yFiles graph visualizations to render complex entity-relationship structures for tax modeling, handling hierarchical, data-heavy views with optimized rendering.',
          'Developed interactive dashboards with Power BI embedding and Redux state management, applying Next.js code splitting and image optimization for responsive, enterprise-grade UX.',
          'Collaborated with tax SMEs, business analysts, and backend teams in Agile sprints to translate compliance requirements into working features.',
        ],
        tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Power Pages', 'Power Apps (PCF)', 'Power BI', 'Dataverse', 'yFiles'],
      },
      {
        role: 'Senior Frontend Developer',
        client: 'PwC',
        project: 'Entity Operations – Legal Entity Management',
        projectUrl: 'https://www.google.com/search?q=PwC+entity+operations+legal+entity+management',
        period: 'Feb 2023 – July 2023',
        summary: 'Production legal entity management application shipped full stack: React.js + Redux frontend with REST and GraphQL APIs designed and implemented using Node.js, Express, and Prisma.',
        bullets: [
          'Built and shipped the application full stack: React.js + Redux frontend with REST and GraphQL APIs implemented in Node.js, Express, and Prisma.',
          'Designed the API layer with structured architecture, validation, and standardized error handling; managed database schema evolution in the live production database using Prisma migrations, safely introducing and retiring columns without disrupting existing workflows.',
          'Ensured reliability with Cypress unit and E2E test coverage; deployed via Docker and Azure with environment consistency across releases in an Agile team.',
        ],
        tags: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Prisma', 'GraphQL', 'REST APIs', 'Docker', 'Azure', 'Cypress', 'Agile'],
      },
      {
        role: 'Senior Frontend Developer',
        client: 'HFMA',
        project: 'MapApp – Healthcare Finance Member Platform',
        projectUrl: 'https://www.google.com/search?q=HFMA+MapApp+healthcare+finance',
        period: 'Jan 2020 – Feb 2023',
        summary: 'Healthcare-finance enterprise application designed and delivered across a 3-year engagement, owning frontend architecture end to end for healthcare finance professionals.',
        bullets: [
          'Architected a modular Angular 12 + TypeScript application with role-based authentication and authorization (Guards, Interceptors), structuring the app into 10 lazy-loaded feature modules so major sections could be developed and shipped independently.',
          'Implemented NgRx for predictable state management and RxJS for reactive data streams across dashboards, reporting, and real-time data rendering.',
          'Solved complex UI problems including hierarchical data structures and conditional role-based views, delivering WCAG-compliant, pixel-perfect, mobile-first interfaces with HTML5, SCSS, and Bootstrap.',
          'Reduced application load time by 40% through lazy loading, change-detection tuning, and bundle optimization; ensured reliability with Cypress unit and E2E testing in Agile/Scrum teams.',
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
    period: 'Jan 2015 – Mar 2018',
    location: 'Hyderabad, Telangana, India · On-site',
    engagements: [
      {
        role: 'UI/UX Developer',
        client: 'Deloitte',
        project: 'Section 987 – Tax Compliance Portal',
        projectUrl: 'https://www.google.com/search?q=Deloitte+Section+987+tax+compliance+portal',
        period: 'Mar 2017 – Mar 2018',
        summary: 'Centralized, data-driven application helping multinational corporations calculate, track, and visualize complex foreign currency gains/losses and IRC Section 987 transition computations.',
        bullets: [
          'Designed responsive, intuitive dashboards to visualize complex tax models with dynamic, reusable UI components, interactive Highcharts graphs, and data-heavy grids.',
          'Collaborated with tax SMEs, business analysts, and backend developers to translate Section 987 requirements into accessible web applications.',
          'Ensured WCAG compliance, cross-browser compatibility, and high-performance rendering for large financial datasets.',
        ],
        tags: ['Angular', 'JavaScript', 'Highcharts', 'HTML5', 'CSS3', 'Bootstrap', 'WCAG', 'Jira', 'Visual Studio Code'],
      },
      {
        role: 'UI/UX Developer',
        client: 'WTP Advisors',
        project: 'Modernized Processing System (MPS) – Financial Platform',
        projectUrl: 'https://www.google.com/search?q=WTP+Advisors+modernized+processing+system+transfer+pricing',
        period: 'Mar 2016 – Mar 2017',
        summary: 'Financial application for WTP Advisors, a leader in international tax and transfer pricing technology — a high-performance web app processing transactional invoice data for tax optimization workflows.',
        bullets: [
          'Designed and developed responsive, pixel-perfect, SEO-optimized interfaces using HTML5, CSS3, and AngularJS for high-traffic financial workflows.',
          'Built reusable components and interactive UI elements to enhance user experience across the platform.',
          'Collaborated with business analysts, project managers, and developers to deliver user-centric web applications ensuring performance, accessibility, and browser compatibility.',
        ],
        tags: ['Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'SEO', 'WCAG', 'Jira', 'Visual Studio Code'],
      },
      {
        role: 'UI/UX Developer',
        client: 'PCC Technology Inc',
        project: 'Business Services – Government Services Platform',
        projectUrl: 'https://www.google.com/search?q=PCC+Technology+business+services+government+platform',
        period: 'Jan 2015 – Mar 2016',
        summary: 'Government business services platform. Translated wireframes into responsive web interfaces using HTML, CSS, JavaScript, and jQuery, building reusable, high-fidelity UI components integrated with backend systems across enterprise workflows.',
        bullets: [
          'Designed high-fidelity UI mockups, wireframes, and interactive prototypes using Photoshop, collaborating directly with clients and business stakeholders to translate requirements into intuitive, user-centric designs.',
          'Converted approved designs into pixel-perfect, responsive web interfaces using HTML, CSS, Bootstrap, and JavaScript, ensuring cross-browser compatibility.',
          'Diagnosed and resolved UI defects, layout inconsistencies, and usability issues while building interactive UI components and reusable frontend modules, improving usability and visual consistency.',
        ],
        tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Photoshop', 'Adobe Dreamweaver'],
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
                    <CaretDown
                      size={16}
                      weight="bold"
                      className={`text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
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
