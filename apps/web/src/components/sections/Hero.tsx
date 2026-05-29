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
    <SectionWrapper id="home" className="pt-32 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeInUp} className="flex flex-col items-start gap-6">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary">
            Available for new opportunities
          </span>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Mounika</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-text-muted font-medium flex items-center gap-2 h-10">
              I build with 
              <span className="text-white font-bold inline-block min-w-[120px]">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: currentSkill === index ? 1 : 0,
                      y: currentSkill === index ? 0 : -20,
                      position: currentSkill === index ? 'relative' : 'absolute' 
                    }}
                    transition={{ duration: 0.3 }}
                    className={currentSkill === index ? 'inline-block' : 'hidden'}
                  >
                    {skill}
                  </motion.span>
                ))}
              </span>
            </h2>
          </div>

          <p className="text-base md:text-lg font-medium text-white/90">
            Senior Frontend Developer · Frontend Architect · React, Angular · Design Systems · 13+ Years
          </p>

          <p className="text-lg text-text-muted max-w-lg leading-relaxed">
            Crafting premium digital experiences through elegant code, thoughtful design, and a touch of AI.
          </p>

          <div className="flex items-center gap-3 pt-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-white hover:border-primary/50 hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <NeonButton variant="primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </NeonButton>
            <NeonButton variant="outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </NeonButton>
            <button 
              onClick={() => document.querySelector('#chatbot')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/90 to-secondary/90 text-white font-medium hover:from-primary hover:to-secondary transition-all group shadow-lg shadow-primary/10 force-white"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.09 6.41L21 10l-6.91 1.59L12 18l-2.09-6.41L3 10l6.91-1.59z" />
              </svg>
              <span className="force-white">Ask AI</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 animate-glow" />
          <div className="relative w-80 h-80 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-white/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-10 h-10 bg-primary/80 rounded-full absolute -top-5 blur-sm" />
            </div>
            <div className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.5)]">
              <span className="text-4xl text-white font-bold force-white">M</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
