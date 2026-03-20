import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 z-10 bg-[#050505] w-full px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-md">Touch</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start w-full">
          
          {/* Contact Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full w-full"
          >
            <div className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-colors h-full flex flex-col justify-center w-full">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none" />
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white text-glow">Contact Information</h3>
              <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg max-w-md">
                Ready to start your next project or just want to say hello? Send a message and I'll get back to you as soon as possible.
              </p>
              
              <div className="flex flex-col gap-5 sm:gap-6">
                <a href="mailto:hello@example.dev" className="flex items-center gap-4 sm:gap-6 text-gray-300 hover:text-blue-400 transition-colors group/link w-fit max-w-full overflow-hidden">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center shrink-0 group-hover/link:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow bg-white/5 pointer-events-none">
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-base md:text-lg lg:text-xl font-medium truncate">hello@example.dev</span>
                </a>
                
                {/* Social Links cluster */}
                <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-8">
                  {[
                    { icon: <Github size={20} className="sm:w-[22px] sm:h-[22px]" />, link: '#' },
                    { icon: <Linkedin size={20} className="sm:w-[22px] sm:h-[22px]" />, link: '#' },
                    { icon: <Twitter size={20} className="sm:w-[22px] sm:h-[22px]" />, link: '#' },
                  ].map((social, i) => (
                    <a key={i} href={social.link} className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 bg-white/5 shrink-0">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <form className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl flex flex-col gap-5 sm:gap-6 border border-white/5 relative overflow-hidden group w-full">
              <div className="absolute -bottom-10 -left-10 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
              
              <div className="flex flex-col gap-2 z-10 w-full">
                <label className="text-xs sm:text-sm font-bold text-gray-400 tracking-widest uppercase ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all placeholder:text-gray-600 backdrop-blur-sm shadow-inner"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2 z-10 w-full">
                <label className="text-xs sm:text-sm font-bold text-gray-400 tracking-widest uppercase ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all placeholder:text-gray-600 backdrop-blur-sm shadow-inner"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2 z-10 border-b border-transparent w-full">
                <label className="text-xs sm:text-sm font-bold text-gray-400 tracking-widest uppercase ml-1">Message</label>
                <textarea 
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all resize-none placeholder:text-gray-600 backdrop-blur-sm shadow-inner"
                  placeholder="Your message details here..."
                ></textarea>
              </div>

              <button type="submit" className="z-10 mt-4 sm:mt-6 relative px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold uppercase tracking-widest text-sm sm:text-base shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full group overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
                  Send Message <Send size={18} className="sm:w-[20px] sm:h-[20px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
