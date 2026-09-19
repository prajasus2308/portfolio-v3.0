import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-neutral-950 py-32 px-6 overflow-hidden border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-20 mb-32">
            
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9] mb-16"
              >
                Let's <br />
                <span className="italic font-serif text-neutral-500">Talk</span>
              </motion.h2>
              
              <div className="flex flex-col gap-10">
                 <a
                   href="mailto:prajasus2308@gmail.com"
                   className="group flex items-center gap-6 text-left transition-all"
                 >
                   <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-200 transition-all duration-500">
                     <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
                   </div>
                   <div>
                     <span className="block text-4xl font-light tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">Start a Project</span>
                     <span className="block text-sm font-mono uppercase tracking-widest text-neutral-500 mt-1 group-hover:text-neutral-400 transition-colors">Currently available</span>
                   </div>
                 </a>

                 <a href="mailto:prajasus2308@gmail.com" className="group flex items-center gap-4 text-lg font-mono text-neutral-500 hover:text-white transition-colors pl-4">
                   <span className="w-2 h-2 rounded-full bg-green-500" />
                   prajasus2308@gmail.com
                 </a>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-12">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">Socials</h4>
                  <ul className="space-y-4">
                    <li>
                      <a href="https://github.com/prajasus2308" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-light text-neutral-400 hover:text-white transition-colors group">
                        GitHub
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">Sitemap</h4>
                  <ul className="space-y-4">
                    {['Home', 'Work', 'About', 'Contact'].map((link) => (
                      <li key={link}>
                        <a href={`#${link.toLowerCase()}`} className="text-lg font-light text-neutral-400 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="flex items-center pt-12 border-t border-white/5">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
              © 2026 Pratyush Raj.
            </p>
          </div>
        </div>
      </footer>

    </>
  );
};
