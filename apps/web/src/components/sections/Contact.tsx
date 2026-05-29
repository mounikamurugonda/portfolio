import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';
import { NeonButton } from '../ui/NeonButton';
import { fetcher } from '../../lib/api';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam prevention
    
    setStatus('loading');
    try {
      await fetcher('/contact', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-text-muted text-lg">
            Have a project in mind or just want to chat? Drop me a message below.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard className="p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-text-muted">Thanks for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-primary hover:text-primary-hover transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="text" 
                  name="honeypot" 
                  value={formData.honeypot}
                  onChange={e => setFormData(prev => ({...prev, honeypot: e.target.value}))}
                  className="hidden" 
                  tabIndex={-1} 
                  autoComplete="off" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(prev => ({...prev, name: e.target.value}))}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/60 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/60 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData(prev => ({...prev, message: e.target.value}))}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    placeholder="Hello Mounika, I'd like to discuss..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">Failed to send message. Please try again later.</p>
                )}

                <NeonButton 
                  type="submit" 
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </NeonButton>
              </form>
            )}
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mt-8">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-muted hover:text-white hover:border-primary/50 hover:bg-white/10 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.path} />
              </svg>
              {social.name}
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

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
