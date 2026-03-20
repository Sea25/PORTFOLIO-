import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-blue-500/30 selection:text-white max-w-[100vw] overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <footer className="relative py-8 md:py-10 border-t border-white/10 text-center text-sm md:text-base text-gray-400 z-10 bg-[#0a0a0a]/80 backdrop-blur-xl w-full">
        <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} Abraham. All rights reserved.</p>
        <p className="mt-2 md:mt-3 flex items-center justify-center gap-2 font-medium">
          Built with <span className="text-blue-400 drop-shadow-md">React</span> & <span className="text-purple-400 drop-shadow-md">Tailwind CSS</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
