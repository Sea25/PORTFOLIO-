import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 md:pt-20 z-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl flex flex-col items-center text-center w-full">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mb-6 md:mb-8 inline-block max-w-[90vw]"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-4 md:px-6 py-2 bg-[#0a0a0a] ring-1 ring-white/10 rounded-full flex items-center gap-2 max-w-full overflow-hidden">
            <Code2 className="text-blue-400 shrink-0" size={18} />
            <span className="text-gray-200 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest truncate">Full Stack Developer</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tight mb-4 md:mb-6 leading-[1.1] text-white w-full break-words px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building Modern <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-glow inline-block mt-2 sm:mt-0">Digital Experiences.</span>
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 font-normal leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I engineer scalable web applications and intuitive interfaces, blending cutting-edge
          technology with uncompromising aesthetics.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="w-full sm:w-auto relative px-6 md:px-8 py-3 md:py-4 bg-blue-500/10 border border-blue-500/50 rounded-full text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] uppercase tracking-widest font-bold flex items-center justify-center gap-3 text-sm md:text-base">
            View Projects
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 uppercase tracking-widest font-bold flex items-center justify-center backdrop-blur-md text-sm md:text-base">
            Get In Touch
          </a>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-semibold">Scroll to explore</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-purple-500 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
