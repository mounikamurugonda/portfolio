import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatPulse, setChatPulse] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Stop pulse after 5s
  useEffect(() => {
    const t = setTimeout(() => setChatPulse(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const openChat = () => {
    document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' });
    setChatPulse(false);
  };

  return (
    <div className="fixed bottom-8 right-6 z-[100] flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 hover:bg-white/10 transition-all shadow-lg"
            title="Scroll to Top"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Theme toggle */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        onClick={toggleTheme}
        className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 hover:bg-white/10 transition-all shadow-lg"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.svg
              key="sun"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="5" strokeWidth={2} />
              <path strokeLinecap="round" strokeWidth={2} d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Ask AI — branded FAB */}
      <div className="relative">
        {chatPulse && (
          <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        )}
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          onClick={openChat}
          className="relative flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white force-white text-sm font-semibold shadow-[0_0_24px_rgba(139,92,246,0.55)] border border-white/20 hover:shadow-[0_0_36px_rgba(139,92,246,0.75)] transition-shadow"
          title="Ask AI"
        >
          {/* Sparkle / AI icon */}
          <svg className="w-5 h-5 shrink-0 force-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.09 6.41L21 10l-6.91 1.59L12 18l-2.09-6.41L3 10l6.91-1.59z" />
            <path d="M5 2l.93 2.84L8.5 6l-2.57.16L5 9l-.93-2.84L1.5 6l2.57-.16z" opacity=".6" />
            <path d="M19 15l.93 2.84L22.5 19l-2.57.16L19 22l-.93-2.84L15.5 19l2.57-.16z" opacity=".6" />
          </svg>
          <span>Ask AI</span>
        </motion.button>
      </div>
    </div>
  );
};
