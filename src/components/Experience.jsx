import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description: 'Lead the frontend architecture for our core product, utilizing React and Next.js to deliver unparalleled performance and user experience.',
    type: 'work'
  },
  {
    title: 'Full Stack Developer',
    company: 'Innovate Digital',
    period: '2021 - 2023',
    description: 'Developed scalable microservices using Node.js and maintained complex UI state paradigms for enterprise clients.',
    type: 'work'
  },
  {
    title: 'Computer Science, B.S.',
    company: 'University of Technology',
    period: '2017 - 2021',
    description: 'Graduated with Honors. Specialized in Data Structures, Algorithms, and Human-Computer Interaction.',
    type: 'education'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 z-10 w-full px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl w-full">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative mt-10 md:mt-20">
          {/* Timeline Center Line: Left on mobile, center on desktop */}
          <div className="absolute top-0 left-6 sm:left-8 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30" />

          <div className="flex flex-col gap-10 md:gap-16 lg:gap-24 w-full">
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 justify-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot & Icon */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-[calc(50%-1px)] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0a0a0a] border border-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] z-10 mt-1 md:mt-0 group hover:scale-110 transition-transform cursor-default shrink-0">
                  {item.type === 'work' ? <Briefcase size={18} className="text-blue-400 group-hover:text-white transition-colors" /> : <GraduationCap size={18} className="text-purple-400 group-hover:text-white transition-colors" />}
                </div>

                {/* Content Card */}
                <div className="ml-16 sm:ml-20 md:ml-0 w-[calc(100%-4rem)] sm:w-[calc(100%-5rem)] md:w-[45%] glass-card p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-colors border border-white/5 relative group bg-white/[0.02]">
                  {/* Subtle connection line to center, hidden on mobile */}
                  <div className={`hidden md:block absolute top-[30px] w-[5%] lg:w-[11.11%] h-[2px] bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${index % 2 === 0 ? '-left-[11.11%]' : '-right-[11.11%]'}`} />
                  
                  <span className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase block mb-1 sm:mb-2 md:mb-3 drop-shadow-md">{item.period}</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-white leading-tight">{item.title}</h3>
                  <h4 className="text-purple-400 text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4">{item.company}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
                
                {/* Empty Spacer */}
                <div className="hidden md:block md:w-[45%] shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
