import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';

const education = [
  {
    kind: 'Degree',
    title: "Bachelor's Degree – BA (Applied Maths & Stats)",
    institution: 'Osmania University',
    year: '2015',
    detail: 'Bachelor of Arts with a focus on Applied Mathematics and Statistics.',
  },
  {
    kind: 'Certification',
    title: 'Certification in Multimedia – Graphic & Web Design',
    institution: 'Arena Animations',
    year: '2012',
    detail: 'Two-year professional certification covering graphic design and web design fundamentals — the foundation for a design-driven approach to frontend engineering.',
  },
];

export const Education: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <motion.div variants={fadeInUp} className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Education & Certification</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Formal education and design training behind the engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.map((item, index) => (
          <motion.div key={item.title} variants={fadeInUp} custom={index} className="h-full">
            <GlassCard className="h-full flex flex-col p-6 border border-white/10 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 backdrop-blur-sm">
                  {item.kind}
                </span>
                <span className="text-xs font-medium text-text-muted bg-white/5 px-3 py-1 rounded-full">{item.year}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1 leading-snug">{item.title}</h3>
              <span className="text-sm font-semibold text-primary mb-3">{item.institution}</span>
              <p className="text-text-muted text-sm leading-relaxed">{item.detail}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
