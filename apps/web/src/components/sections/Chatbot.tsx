import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';

export const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user'|'ai', content: string}[]>([
    { role: 'ai', content: "Hi! I'm Mounika's AI twin. Ask me anything about her skills, experience, or what it's like working with her." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Use a more controlled scroll that doesn't trigger the whole page to move
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.reply || "Sorry, I couldn't process that right now." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "Mounika's neural sync is currently down for maintenance. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="chatbot">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Talk to my AI Twin</h2>
          <p className="text-text-muted text-lg max-w-md mb-8">
            Curious about a specific project? Want to know my thoughts on state management? My RAG-powered AI uses LangChain to answer as me, rooted in my actual experiences.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard className="h-[500px] flex flex-col p-4 border border-primary/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative overflow-hidden">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4 px-2 bg-black/5 -mx-4 px-6 pt-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <svg className="w-6 h-6 force-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.09 6.41L21 10l-6.91 1.59L12 18l-2.09-6.41L3 10l6.91-1.59z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-surface" />
              </div>
              <div>
                <h3 className="font-bold text-white tracking-tight force-white">AI Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-secondary force-white-muted">Active Knowledge Base</p>
                </div>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4 pb-2 scrollbar-thin scrollbar-thumb-white/10 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-sm shadow-lg shadow-primary/20' 
                        : 'chat-ai-bubble rounded-tl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="chat-ai-bubble px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5">
                    <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} />
                  </div>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="relative mt-auto pt-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything..." 
                className="w-full chat-input rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="absolute right-1 top-[9px] bottom-1 w-10 h-10 flex items-center justify-center text-primary hover:text-white transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
