import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkle, PaperPlaneRight } from '@phosphor-icons/react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { fadeInUp } from '../../lib/animations';
import { fetcher } from '../../lib/api';

const renderInline = (text: string): React.ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

const FormattedMessage: React.FC<{ content: string }> = ({ content }) => {
  const blocks: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (key: string) => {
    if (listItems.length) {
      blocks.push(
        <ul key={key} className="list-disc pl-4 space-y-1">
          {listItems.map((item, i) => <li key={i}>{renderInline(item)}</li>)}
        </ul>
      );
      listItems = [];
    }
  };

  content.split('\n').forEach((line, idx) => {
    const trimmed = line.trim();
    const bullet = trimmed.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      listItems.push(bullet[1]);
    } else {
      flushList(`ul-${idx}`);
      if (trimmed) blocks.push(<p key={`p-${idx}`}>{renderInline(trimmed)}</p>);
    }
  });
  flushList('ul-end');

  return <div className="space-y-2">{blocks}</div>;
};

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
      const data = await fetcher<{ reply?: string }>('/chat', {
        method: 'POST',
        body: JSON.stringify({ message: userMsg })
      });
      setMessages(prev => [...prev, { role: 'ai', content: data.reply || "Sorry, I couldn't process that right now." }]);
    } catch {
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
                  <Sparkle size={24} weight="fill" className="force-white" />
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
              className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-4 mb-4 pb-2 scrollbar-thin scrollbar-thumb-white/10 scroll-smooth"
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
                    {msg.role === 'ai' ? <FormattedMessage content={msg.content} /> : msg.content}
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
                <PaperPlaneRight size={20} weight="fill" />
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
