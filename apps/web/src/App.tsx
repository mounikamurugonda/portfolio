import React from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Chatbot } from './components/sections/Chatbot';
import { Hobbies } from './components/sections/Hobbies';
import { Contact } from './components/sections/Contact';
import { FloatingActions } from './components/layout/FloatingActions';

function App() {
  useLenis();

  return (
    <main className="paper-grain-overlay bg-background min-h-screen text-text-main overflow-x-hidden selection:bg-primary/30">
      <ScrollProgress />
      <Navbar />
      <FloatingActions />
      
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Chatbot />
      <Hobbies />
      <Contact />

      <footer className="py-8 text-center text-text-muted border-t border-white/10 mt-20 transition-colors">
        <p>© {new Date().getFullYear()} Mounika. Crafted with ❤️ using React, TypeScript, Tailwind CSS, Framer Motion, and Sarvam AI.</p>
      </footer>
    </main>
  );
}

export default App;
