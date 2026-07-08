import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Sun, Moon, Sparkle } from '../ui/Icons';

export const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatPulse, setChatPulse] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setChatPulse(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
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

  // Theme-aware colors
  const iconColor = theme === 'light' ? '#3f3f46' : 'rgba(255,255,255,0.75)';
  const btnClass = theme === 'light'
    ? 'w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-sm border bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-md'
    : 'w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-lg glass border border-white/15 hover:border-white/30';

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
            whileHover={{ scale: 1.1, y: -1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={btnClass}
            title="Scroll to Top"
          >
            <ArrowUp weight="duotone" size={18} color={iconColor} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Theme toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={btnClass}
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <AnimatePresence mode="wait">
          {theme === 'dark' ? (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun weight="duotone" size={18} color={iconColor} />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon weight="duotone" size={18} color={iconColor} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Ask AI branded FAB */}
      <div className="relative">
        {chatPulse && (
          <span className={`absolute inset-0 rounded-full animate-ping ${theme === 'light' ? 'bg-zinc-400/30' : 'bg-white/20'}`} />
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openChat}
          className={`relative flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full text-sm font-semibold border transition-all ${
            theme === 'light'
              ? 'bg-zinc-900 text-white border-zinc-900 shadow-md hover:bg-zinc-700'
              : 'bg-white/10 text-white border-white/20 shadow-lg hover:bg-white/15 backdrop-blur-sm'
          }`}
          title="Ask AI"
        >
          <motion.span
            animate={{ rotate: [0, 15, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
          >
            <Sparkle weight="duotone" size={16} color={theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.9)'} />
          </motion.span>
          <span>Ask AI</span>
        </motion.button>
      </div>
    </div>
  );
};
