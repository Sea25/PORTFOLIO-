import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution featuring real-time inventory management, secure payments, and an administrative dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Analytics Dashboard',
    description: 'An interactive data visualization tool that processes comprehensive metrics to provide actionable insights in real-time.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tech: ['Next.js', 'Tailwind', 'Recharts', 'Postgre'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Social Media App',
    description: 'A modern social networking application supporting real-time messaging, post interactions, and rich media sharing.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tech: ['React Native', 'Firebase', 'GraphQL', 'Express'],
    demo: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 z-10 bg-[#080808]/50 w-full px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl w-full">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* 3 Column Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 w-full"
            >
              {/* Image Header */}
              <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-20 -mt-8 sm:-mt-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors drop-shadow-lg">{project.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 sm:gap-4 mt-auto pt-4 border-t border-white/5">
                  <a href={project.demo} className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-500 rounded-xl transition-all font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg shadow-black/20 text-center">
                    <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" /> <span className="hidden sm:inline">Live</span> Demo
                  </a>
                  <a href={project.github} className="p-2.5 sm:p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors text-white hover:text-blue-400 shadow-lg shadow-black/20 shrink-0">
                    <Github size={18} className="sm:w-[22px] sm:h-[22px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
