import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90, color: '#3b82f6' }, // Blue
  { name: 'Node.js', level: 85, color: '#22c55e' }, // Green
  { name: 'MongoDB', level: 80, color: '#10b981' }, // Emerald
  { name: 'Tailwind CSS', level: 95, color: '#06b6d4' }, // Cyan
  { name: 'JavaScript', level: 90, color: '#eab308' }, // Yellow
  { name: 'TypeScript', level: 80, color: '#3b82f6' }, // Blue
  { name: 'Next.js', level: 85, color: '#f8fafc' }, // White
  { name: 'PostgreSQL', level: 75, color: '#6366f1' }, // Indigo
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 z-10 w-full px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl w-full">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* 4x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col gap-3 sm:gap-4 border border-white/5 hover:border-white/20 transition-all duration-300 group w-full"
            >
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                 <div className="flex items-center gap-2 sm:gap-3">
                   {/* Neon Indicator */}
                   <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0" style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }} />
                   <h3 className="font-bold text-base sm:text-lg text-white tracking-wide truncate">{skill.name}</h3>
                 </div>
                 <span className="text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">{skill.level}%</span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full h-1.5 sm:h-2 bg-[#1a1a1a] rounded-full overflow-hidden shrink-0 pointer-events-none">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: skill.color }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_infinite]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
