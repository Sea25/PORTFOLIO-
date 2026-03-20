import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            setActive(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'glass-card border-b border-white/10 py-3 md:py-4 lg:top-4 w-[95%] sm:w-[90%] lg:max-w-6xl left-1/2 -translate-x-1/2 rounded-2xl lg:rounded-full px-4 lg:px-8 shadow-2xl bg-[#0a0a0a]/80 top-2' : 'py-4 md:py-6 px-4 md:px-6 lg:px-10 bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center justify-between w-full">
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-1 group truncate">
          <span className="text-blue-500 group-hover:scale-110 transition-transform">&lt;</span>
          Sona Elizabeth Abraham <span className="text-purple-500 group-hover:scale-110 transition-transform">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 border border-white/5 bg-white/5 rounded-full px-6 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-white ${active === link.id ? 'text-blue-400 text-glow-blue' : 'text-gray-400'}`}
              onClick={() => setActive(link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] font-semibold uppercase text-xs tracking-wider">
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-[110%] left-0 right-0 glass-card p-6 flex flex-col items-center gap-6 rounded-2xl lg:hidden border border-white/10 mx-auto w-full shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm sm:text-base tracking-widest uppercase font-semibold ${active === link.id ? 'text-blue-400' : 'text-gray-300'}`}
              onClick={() => { setActive(link.id); setIsOpen(false); }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold uppercase tracking-wider text-sm mt-2" onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
