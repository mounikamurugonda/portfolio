import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';
import { NeonButton } from '../ui/NeonButton';
import { SectionWrapper } from '../ui/SectionWrapper';

const SKILLS = ['React', 'Angular', 'Next.js', 'TypeScript', 'Design Systems', 'AI-Powered UIs'];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/murugondamounika',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/mounikamurugonda',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
];

export const Hero: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % SKILLS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="home" className="pt-32 pb-16 relative overflow-hidden">
      {/* Dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeInUp} className="flex flex-col items-start gap-6">

          {/* Editorial index label */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-muted">01 / Portfolio · 2026</span>
            <div className="h-px w-8 bg-primary/40" />
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
              Hi, I'm<br />
              <span className="text-gradient">Mounika</span>
            </h1>
            <div className="flex items-center gap-2 text-xl md:text-2xl text-text-muted font-medium h-9 overflow-hidden">
              <span>I build with</span>
              <span className="text-text-main font-bold inline-block min-w-[140px]">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentSkill === index ? 1 : 0,
                      y: currentSkill === index ? 0 : -20,
                    }}
                    transition={{ duration: 0.3 }}
                    className={currentSkill === index ? 'inline-block' : 'hidden'}
                  >
                    {skill}
                  </motion.span>
                ))}
              </span>
            </div>
          </div>

          {/* Role chips */}
          <div className="flex flex-wrap gap-2">
            {['Senior Frontend UI Engineer', 'UX Designer', 'AI-Native', '13+ Years'].map(tag => (
              <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-text-muted max-w-lg leading-relaxed">
            Crafting premium digital experiences through elegant code, thoughtful UX design, and a touch of AI.
          </p>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <NeonButton variant="primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </NeonButton>
            <NeonButton variant="outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </NeonButton>
          </div>
        </motion.div>

        {/* Right: editorial card stack */}
        <motion.div
          variants={fadeInUp}
          className="relative hidden lg:flex justify-center items-center h-[480px]"
        >
          {/* Glow blob */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-secondary/15 rounded-[3rem] blur-3xl opacity-60" />

          {/* Card stack */}
          <div className="relative flex flex-col gap-4 w-72">
            {/* Stats card */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[['13+', 'Years'], ['20+', 'Projects'], ['5+', 'Domains']].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-gradient">{num}</div>
                    <div className="text-xs text-text-muted mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current role card */}
            <div className="glass-card rounded-2xl p-5 border border-primary/20 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-green-500 uppercase tracking-widest">Currently</span>
              </div>
              <p className="text-sm font-semibold text-text-main mb-0.5">Senior Frontend UI Engineer</p>
              <p className="text-xs text-text-muted">Complyia · XIT Solutions · Oct 2024–Present</p>
            </div>

            {/* Tech stack card */}
            <div className="glass-card rounded-2xl p-5 border border-white/10 shadow-xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'Figma', 'Nx', 'Claude Code', 'RAG'].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
