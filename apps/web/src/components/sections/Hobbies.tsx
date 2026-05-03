import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';

const hobbies = [
  {
    title: 'Digital Art',
    icon: '🎨',
    description: 'Sketching, pencil shading, and digital painting – check out my TopCartoonCharacters YouTube channel.',
    link: 'https://www.youtube.com/@TopCartoonCharacters'
  },
  {
    title: 'Content Creation',
    icon: '📺',
    description: 'Creating technical tutorials and UI design content on my TechEscaper YouTube channel.',
    link: 'https://www.youtube.com/@TechEscaper'
  },
  {
    title: 'AI & Product Building',
    icon: '🤖',
    description: 'Exploring AI tools and coding-powered automation to build and launch innovative products.'
  },
  {
    title: 'Diary Writing',
    icon: '📔',
    description: 'Keeping a personal journal to reflect on ideas, experiences, and creative thoughts.'
  },
  {
    title: 'Piano',
    icon: '🎹',
    description: 'Learning piano fundamentals and practicing pieces to unwind and stay disciplined.'
  },
  {
    title: 'Swimming',
    icon: '🏊‍♀️',
    description: 'Regular swim sessions for fitness and mental clarity.'
  }
];

export const Hobbies: React.FC = () => {
  return (
    <SectionWrapper id="hobbies">
      <motion.div variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Beyond Code</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          When I'm not pushing pixels or debugging components, you can find me enjoying these activities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div key={hobby.title} variants={fadeInUp} custom={index}>
            {hobby.link ? (
              <a href={hobby.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <GlassCard className="text-center h-full hover:border-primary/50 transition-colors group cursor-pointer p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{hobby.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{hobby.description}</p>
                  <div className="mt-6 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    VISIT CHANNEL ↗
                  </div>
                </GlassCard>
              </a>
            ) : (
              <GlassCard className="text-center h-full hover:border-primary/50 transition-colors group p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{hobby.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{hobby.description}</p>
              </GlassCard>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
