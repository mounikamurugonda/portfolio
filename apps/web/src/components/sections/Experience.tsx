import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp } from '../../lib/animations';

interface Experience {
  id: number;
  role: string;
  company: string;
  client: string;
  project: string;
  projectUrl: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'XIT Solutions Inc.',
    client: 'Complyia',
    project: 'Complyia – Enterprise Compliance Platform',
    projectUrl: 'https://www.google.com/search?q=Complyia+compliance+management+platform',
    period: 'Oct 2024 – Present',
    location: 'Oakbrook Terrace, IL (Remote)',
    summary: 'Enterprise-scale monorepo compliance platform for regulatory tracking, reporting, and documentation with secure role-based access and high-volume enterprise data workflows.',
    bullets: [
      'Led frontend system architecture using Nx monorepo and micro-frontend architecture; delivered Multimodal RAG-based AI applications and built AI-powered POCs using Cursor AI.',
      'Built scalable systems with React 18, Tailwind CSS, ShadCN UI including D3.js visualizations rendering 1,000+ nodes, list virtualization, and AG Grid Enterprise data grids.',
      'Reduced bundle size by 30% using Knip; implemented React Hook Form + Zod for form architecture; maintained Storybook component library and Docusaurus documentation.',
    ],
    tags: ['React 18', 'TypeScript', 'Nx Monorepo', 'Micro-Frontend', 'Vite', 'Tailwind CSS', 'ShadCN UI', 'Radix UI', 'Zustand', 'TanStack Query', 'Azure MSAL', 'D3.js', 'AG Grid Enterprise', 'React Hook Form', 'Zod', 'Storybook', 'Playwright', 'Vitest', 'Cursor AI', 'Multimodal RAG'],
  },
  {
    id: 2,
    role: 'Senior Frontend Developer',
    company: 'XIT Solutions Pvt. Ltd.',
    client: 'PwC',
    project: 'Cloud for Tax – Tax Management Suite',
    projectUrl: 'https://www.google.com/search?q=PwC+Cloud+for+Tax+platform',
    period: 'Jul 2023 – Jan 2024',
    location: 'Hyderabad, Telangana, India · On-site',
    summary: 'PwC Cloud for Tax combines tax capabilities — Applications, Analytics, Data Management, Task Management, Entity Management, and Document Management into a unified enterprise platform.',
    bullets: [
      'Led enterprise web apps and Power Pages portals using React, Next.js, TypeScript, and Power Apps Component Framework (PCF), building custom templates, reusable components, and dashboards.',
      'Designed custom PCF controls, React Data Grid integrations, and reusable form components with Dataverse data modeling and Liquid template integrations via Axios REST APIs.',
      'Delivered interactive Power BI dashboards with Tailwind CSS and Redux, providing real-time business insights and centralized state management.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Power Pages', 'Power Apps', 'PCF', 'Power BI', 'Tailwind CSS', 'Redux', 'Dataverse', 'Axios', 'Bootstrap', 'yFiles'],
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'XIT Solutions Pvt. Ltd.',
    client: 'PwC',
    project: 'Entity Operations – Entity Management Platform',
    projectUrl: 'https://www.google.com/search?q=PwC+entity+operations+management+platform',
    period: 'Feb 2023 – Jul 2023',
    location: 'Hyderabad, Telangana, India · On-site',
    summary: 'Platform managing legal entities, compliance, data tracking, and document workflows for efficient entity lifecycle management and reporting.',
    bullets: [
      'Developed and maintained CRUD APIs using Node.js, Express.js, and Prisma for efficient and scalable database operations.',
      'Built responsive UI components in React with Redux state management and integrated yFiles for interactive Org Chart visualization.',
      'Implemented Docker for containerization and wrote Cypress E2E tests within Agile development cycles.',
    ],
    tags: ['Node.js', 'Express.js', 'React', 'JavaScript', 'Prisma', 'Redux', 'Docker', 'Cypress', 'yFiles', 'Azure', 'Agile'],
  },
  {
    id: 4,
    role: 'Senior Frontend Developer',
    company: 'XIT Solutions Pvt. Ltd.',
    client: 'HFMA',
    project: 'MapApp – Healthcare Finance Member Platform',
    projectUrl: 'https://www.google.com/search?q=HFMA+MapApp+healthcare+finance',
    period: 'Jan 2020 – Feb 2023',
    location: 'Hyderabad, Telangana, India · On-site',
    summary: 'Membership-based enterprise web platform serving healthcare finance professionals with tools for financial insights, reporting, and member engagement across the healthcare industry.',
    bullets: [
      'Designed scalable Angular applications with role-based authentication (Guards, Interceptors), modular architecture, and client-side routing for accessible, high-performance UIs.',
      'Built pixel-perfect, mobile-first interfaces with HTML5, SCSS, WCAG compliance, and Bootstrap; integrated RESTful APIs for dynamic dashboards and real-time data rendering.',
      'Reduced load time by 40% through performance optimization; ensured quality with Cypress unit and E2E testing in Agile/Scrum environments.',
    ],
    tags: ['Angular 12', 'TypeScript', 'RxJS', 'NgRx', 'HTML5', 'SCSS', 'CSS3', 'Bootstrap', 'REST APIs', 'Cypress', 'WCAG', 'Agile'],
  },
  {
    id: 5,
    role: 'Senior UI Developer',
    company: 'IT People Corporation',
    client: 'Lenovo',
    project: 'AirStack – Enterprise SaaS Management Platform',
    projectUrl: 'https://www.google.com/search?q=Lenovo+AirStack+SaaS+management',
    period: 'May 2018 – Jan 2020',
    location: 'Hyderabad, Telangana, India · On-site',
    summary: "Enterprise SaaS visibility platform providing organizational software usage insights, helping enterprises manage licenses, reduce shadow IT, and optimize SaaS spend.",
    bullets: [
      "Built enterprise Angular 6 applications with reusable, modular UI components using Angular Material and custom theming for consistent, responsive user experiences.",
      'Integrated RESTful APIs and backend services for dynamic data-driven interfaces; improved quality through unit and E2E testing.',
      'Collaborated in Agile workflows using Git, Jira, Docker, and CI/CD pipelines; optimized rendering efficiency and resolved UI defects for production readiness.',
    ],
    tags: ['Angular 6', 'TypeScript', 'HTML5', 'CSS3', 'Angular Material', 'REST APIs', 'Docker', 'Git', 'Jira', 'AWS', 'CI/CD'],
  },
  {
    id: 6,
    role: 'Senior UI Developer',
    company: 'XIT Solutions Pvt. Ltd.',
    client: 'Deloitte',
    project: 'Section 987 – Tax Compliance Portal',
    projectUrl: 'https://www.google.com/search?q=Deloitte+Section+987+tax+compliance+portal',
    period: 'Mar 2017 – Mar 2018',
    location: 'Hyderabad, Telangana, India · On-site',
    summary: 'Centralized, data-driven application helping multinational corporations calculate, track, and visualize complex foreign currency gains/losses and IRC Section 987 transition computations.',
    bullets: [
      'Designed responsive, intuitive dashboards to visualize complex tax models with dynamic UI components, interactive D3.js graphs, and data-heavy grids.',
      'Collaborated with tax SMEs, business analysts, and backend developers to translate Section 987 requirements into accessible web applications.',
      'Ensured WCAG compliance, cross-browser compatibility, and high-performance rendering for large financial datasets.',
    ],
    tags: ['Angular', 'JavaScript', 'D3.js', 'HTML5', 'CSS3', 'Bootstrap', 'WCAG', 'Jira'],
  },
  {
    id: 7,
    role: 'UI Developer',
    company: 'JNET Technologies Pvt. Ltd.',
    client: 'WTP Advisors',
    project: 'TransPortal – IC-DISC & Transfer Pricing Platform',
    projectUrl: 'https://www.google.com/search?q=WTP+Advisors+TransPortal+IC-DISC+transfer+pricing',
    period: 'Mar 2016 – Mar 2017',
    location: 'Hyderabad, Telangana, India · On-site',
    summary: 'WTP Advisors is a leader in international tax, transfer pricing, and IC-DISC technology. TransPortal (internally MPS — Modernized Processing System) is their flagship high-performance web application modernizing the ingestion and processing of transactional invoice data for real-time tax optimization and automated report generation for multinational clients.',
    bullets: [
      'Designed and developed responsive, pixel-perfect web interfaces transforming design mockups into W3C-compliant, SEO-optimized, cross-browser compatible applications.',
      'Implemented interactive UI elements, animations, and reusable components to enhance user experience across the tax optimization platform.',
      'Collaborated with business analysts, project managers, and developers to deliver user-centric web applications ensuring performance, accessibility, and browser compatibility.',
    ],
    tags: ['Angular JS', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'SEO', 'WCAG', 'Jira', 'Visual Studio Code'],
  },
  {
    id: 8,
    role: 'Web Designer',
    company: 'vSplash Techlabs Private Limited',
    client: 'AT&T Business Solutions',
    project: 'WP Sites – SMB Web Development Program',
    projectUrl: 'https://www.google.com/search?q=vSplash+Techlabs+AT%26T+business+solutions+websites',
    period: 'Sep 2012 – Oct 2014',
    location: 'Hyderabad, Telangana, India · On-site',
    summary: 'High-volume website development program delivering SEO-optimized, brand-consistent websites for small and medium businesses across the United States via AT&T Business Solutions.',
    bullets: [
      'Designed and developed responsive, SEO-optimized business websites from wireframes to pixel-perfect pages using HTML, CSS, JavaScript, Bootstrap, and WordPress.',
      'Built custom WordPress themes from scratch with dynamic content structures, reusable components, and modern responsive design for cross-browser and cross-device compatibility.',
      'Optimized sites for performance, page load speed, accessibility, and SEO rankings following modern frontend best practices.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WordPress', 'Photoshop', 'Dreamweaver', 'Duda Mobile', 'SEO'],
  },
];

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(experiences[0].id);

  return (
    <SectionWrapper id="experience">
      <motion.div variants={fadeInUp} className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          13+ years building enterprise-grade frontends across compliance, tax, healthcare, and SaaS domains.
        </p>
      </motion.div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={fadeInUp}
            className={`border rounded-2xl overflow-hidden transition-colors ${expandedId === exp.id
              ? 'bg-white/5 border-primary/50'
              : 'bg-transparent border-white/10 hover:border-white/20'
              }`}
          >
            <button
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className="w-full px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between text-left group gap-4"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors whitespace-normal">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <span className="text-primary font-semibold text-sm md:text-base">{exp.company}</span>
                  {exp.client && (
                    <div className="flex items-center gap-2">
                      <span className="text-white/30 hidden md:inline">·</span>
                      <span className="text-[10px] md:text-xs font-medium text-secondary/90 bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                        Client: {exp.client}
                      </span>
                    </div>
                  )}
                </div>
                {exp.location && (
                  <div className="text-[10px] md:text-xs text-white/40 mt-1">{exp.location}</div>
                )}
              </div>
              <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 mt-2 md:mt-0">
                <div className="text-xs font-medium text-text-muted bg-white/5 px-3 py-1 md:px-4 md:py-1.5 rounded-full whitespace-nowrap">
                  {exp.period}
                </div>
                <svg
                  className={`w-4 h-4 text-white/40 transition-transform duration-300 ${expandedId === exp.id ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <AnimatePresence>
              {expandedId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-8 pb-8 pt-2 border-t border-white/5">
                    {/* Project name + link */}
                    <div className="flex items-center gap-2 mt-4 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/30">Project</span>
                      <a
                        href={exp.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="text-sm font-semibold text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
                      >
                        {exp.project} ↗
                      </a>
                    </div>

                    {/* Project summary */}
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{exp.summary}</p>

                    {/* Bullet responsibilities */}
                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold px-2 py-1 bg-white/10 rounded text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

