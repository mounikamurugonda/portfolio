import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { fadeInUp } from '../../lib/animations';
import { NeonButton } from '../ui/NeonButton';
import { SectionWrapper } from '../ui/SectionWrapper';

const SKILLS = ['React', 'Angular', 'Next.js', 'TypeScript', 'Design Systems', 'AI-Powered UIs'];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/murugondamounika', icon: LinkedinLogo },
  { name: 'GitHub', href: 'https://github.com/mounikamurugonda', icon: GithubLogo },
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
            {['Senior Frontend Engineer', 'React · Angular', 'UI/UX', 'Micro-Frontends', '13+ Years'].map(tag => (
              <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-text-muted max-w-lg leading-relaxed">
            Senior Frontend Engineer with 13+ years delivering scalable, high-performance, user-centric enterprise applications across healthcare, finance, compliance, and enterprise SaaS domains — from pixel-perfect UI to micro-frontend architecture and AI-powered interfaces.
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
                <social.icon size={20} weight="fill" />
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
                {['React', 'Next.js', 'Angular', 'TypeScript', 'Micro-Frontends', 'Tailwind CSS', 'AI / RAG'].map(t => (
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
