import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 z-10 w-full px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          
          {/* Abstract Glass Shape Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center relative scale-75 sm:scale-90 md:scale-100 mb-10 lg:mb-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full animate-[blob_7s_infinite] blur-2xl flex" />
              
              {/* Glass Cubes */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl transform rotate-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] flex items-center justify-center group hover:rotate-0 transition-all duration-700 ease-out z-10 pointer-events-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-3xl pointer-events-none" />
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-[0_0_40px_rgba(139,92,246,0.6)] animate-pulse pointer-events-none" />
              </div>
              
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-28 h-28 sm:w-32 sm:h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transform -rotate-12 group-hover:rotate-12 transition-all duration-500 z-0 pointer-events-none" />
              <div className="absolute top-2 right-[-10px] sm:top-4 sm:right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full transform rotate-45 z-20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8"
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden group w-full">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
              <User className="text-blue-400 mb-4 sm:mb-6" size={32} />
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">The Engineer</h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
                I am a dedicated software engineer focused on building robust, scalable, and beautifully designed web applications. With a deep understanding of full-stack architecture, I bridge the gap between elegant user interfaces and powerful backend systems.
              </p>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                My passion lies in writing clean code, optimizing performance, and staying at the forefront of modern web technologies to deliver exceptional digital products.
              </p>
            </div>
            
            <div className="flex w-full">
               <div className="flex-1 glass-card p-5 sm:p-6 rounded-2xl border-white/5 flex items-center gap-4">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 flex shrink-0 items-center justify-center">
                    <ShieldCheck className="text-purple-400" size={20} />
                 </div>
                 <div className="flex flex-col">
                    <h4 className="text-white font-bold text-base sm:text-lg leading-tight">Clean Code</h4>
                    <span className="text-xs sm:text-sm text-gray-400 mt-1">Maintainable & Scalable</span>
                 </div>
               </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
