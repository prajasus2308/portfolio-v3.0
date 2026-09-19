import React, { useRef, useEffect } from 'react';
import { motion, useTransform, useInView, useMotionValue } from 'motion/react';

export const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Manual scroll progress — avoids useScroll container-position warning.
  const scrollYProgress = useMotionValue(0);
  useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (winH - top) / (winH + height)));
      scrollYProgress.set(progress);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} id="about" className="py-32 relative bg-neutral-950 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background Grid - Technical Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6">
        
        {/* Section Header - Consistent Style */}
        <div className="flex items-center gap-6 mb-24">
           <div className="flex items-baseline gap-3">
              <span className="font-serif italic text-lg text-white">02</span>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">The Developer</span>
           </div>
           <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
          
          {/* Text Content */}
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-medium tracking-tighter mb-12 leading-[0.9]"
            >
              I build <br />
              <span className="italic font-serif text-neutral-500">things</span> for the web.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 text-lg font-light text-neutral-400 leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6"
              >
                <p>
                  I'm Pratyush Raj — a software developer with a passion for crafting interactive, visually driven web experiences that push what browsers can do.
                </p>
                <p>
                  From browser-based games to automotive showcases and AI interfaces, every project is a challenge to blend engineering with design intent.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                <p>
                  TypeScript is my primary language. I gravitate toward projects that feel alive — things that move, respond, and surprise.
                </p>
                <p className="text-white/80">
                  Open-source contributor and constant learner. Find me on GitHub where I ship something new every few weeks.
                </p>
              </motion.div>
            </div>

            {/* Stats & Trust */}
            <div className="mt-16 pt-16 border-t border-white/5">
               <div className="grid grid-cols-3 gap-8 mb-16">
                 <div className="space-y-2 border-r border-white/5">
                   <h4 className="text-4xl font-light text-white">3<span className="text-neutral-600 text-lg">+</span></h4>
                   <p className="text-xs uppercase tracking-widest text-neutral-500">Years Coding</p>
                 </div>
                 <div className="space-y-2 border-r border-white/5">
                   <h4 className="text-4xl font-light text-white">30<span className="text-neutral-600 text-lg">+</span></h4>
                   <p className="text-xs uppercase tracking-widest text-neutral-500">Repos on GitHub</p>
                 </div>
                 <div className="space-y-2">
                   <h4 className="text-4xl font-light text-white">∞</h4>
                   <p className="text-xs uppercase tracking-widest text-neutral-500">Ideas in Queue</p>
                 </div>
               </div>

               <div>
                 <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-6">Stack &amp; tools</span>
                 <div className="flex flex-wrap gap-x-12 gap-y-4 text-neutral-400 font-light text-lg">
                   {['TypeScript', 'React', 'Python', 'HTML / CSS', 'Node.js', 'Canvas API', 'WebGL'].map((skill, i) => (
                     <motion.span
                       key={skill}
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.5 + (i * 0.1) }}
                       className="hover:text-white transition-colors cursor-default"
                     >
                       {skill}
                     </motion.span>
                   ))}
                 </div>
               </div>
            </div>
          </div>

          {/* Image Area */}
          <motion.div 
            style={{ opacity }}
            className="relative lg:mt-24"
          >
            <div className="relative z-10">
               <motion.div 
                 whileHover={{ scale: 0.98 }}
                 transition={{ duration: 0.5 }}
                 className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out bg-neutral-900"
               >
                 <img
                   src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBsYXB0b3AlMjBkYXJrJTIwc2V0dXB8ZW58MXx8fHwxNzg5MDIxNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Pratyush Raj — coding"
                   className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
               </motion.div>
               
               {/* Decorative Ring */}
               <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hidden md:flex" style={{ animation: 'spin 15s linear infinite' }}>
                 <style dangerouslySetInnerHTML={{__html: `
                   @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                 `}} />
                 <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                   <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text className="fill-neutral-500 text-[10px] uppercase tracking-widest font-mono">
                     <textPath href="#circlePath">
                       • Full-Stack Dev • Open Source • Builder
                     </textPath>
                   </text>
                 </svg>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
