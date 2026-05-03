import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';
import { NeonButton } from '../ui/NeonButton';
import { SectionWrapper } from '../ui/SectionWrapper';

const SKILLS = ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Node.js', 'GraphQL'];

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

          <p className="text-lg text-text-muted max-w-lg leading-relaxed">
            Crafting premium digital experiences through elegant code, thoughtful design, and a touch of AI.
          </p>

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
