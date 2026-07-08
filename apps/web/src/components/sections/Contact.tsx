import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { fadeInUp } from '../../lib/animations';
import { fetcher } from '../../lib/api';

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

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setStatus('loading');
    try {
      await fetcher('/contact', { method: 'POST', body: JSON.stringify(formData) });
      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto">

        {/* Thin accent rule */}
        <div className="w-12 h-px bg-gradient-to-r from-primary to-secondary mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: editorial block ── */}
          <motion.div variants={fadeInUp} className="lg:sticky lg:top-32 flex flex-col gap-6">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              Get in touch
            </span>

            <h2 className="text-5xl md:text-6xl font-bold leading-[0.92] tracking-tight">
              Let's<br />
              <span className="text-gradient italic">Connect.</span>
            </h2>

            <p className="text-text-muted text-lg leading-relaxed max-w-sm">
              Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
            </p>

            {/* Availability badge, editorial minimal style */}
            <div className="flex items-center gap-2.5 w-fit">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-text-main opacity-70"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-sm text-text-muted tracking-wide">Available for new opportunities</span>
            </div>

            {/* Contact details */}
            <div className="space-y-3 pt-2">
              <a href="mailto:iammounikamurugonda@gmail.com" className="flex items-center gap-3 text-text-muted hover:text-text-main transition-colors group text-sm">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                iammounikamurugonda@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                  {social.name}
                </a>
              ))}
            </div>

            {/* Decorative quote */}
            <blockquote className="mt-4 pl-4 border-l-2 border-primary/30 text-text-muted text-sm italic leading-relaxed max-w-xs">
              "Good design is as little design as possible, but great engineering makes it invisible."
            </blockquote>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div variants={fadeInUp}>
            {status === 'success' ? (
              <div className="text-center py-20 px-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="w-14 h-14 bg-green-500/15 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-text-muted mb-6">Thanks for reaching out! I'll get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="text-sm text-primary hover:text-primary-hover transition-colors underline underline-offset-4">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="honeypot" value={formData.honeypot} onChange={e => setFormData(prev => ({ ...prev, honeypot: e.target.value }))} className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold tracking-widest uppercase text-text-muted">Name</label>
                    <input
                      id="name" type="text" required
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="contact-input w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-text-muted">Email</label>
                    <input
                      id="email" type="email" required
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="contact-input w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold tracking-widest uppercase text-text-muted">Message</label>
                  <textarea
                    id="message" required rows={6}
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="contact-input w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none transition-all resize-none text-sm"
                    placeholder="Hello Mounika, I'd like to discuss..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <span>⚠</span> Failed to send. Please try again or email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:opacity-95 transition-all disabled:opacity-60 force-white"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : 'Send Message →'}
                </button>

                <p className="text-xs text-text-muted text-center pt-1">
                  I typically respond within 24–48 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
