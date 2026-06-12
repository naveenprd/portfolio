import React from 'react';
import { SKILLS_DATA } from '../data';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-dark relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-16 md:gap-24">
           <div className="max-w-3xl">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <h2 className="text-accent font-mono text-xs uppercase tracking-[0.2em] mb-4">Capabilities</h2>
               <p className="text-4xl md:text-5xl font-display font-bold text-light leading-tight">
                  Designed for scale. Built for speed.
               </p>
             </motion.div>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              {SKILLS_DATA.map((category, idx) => (
                <motion.div 
                  key={idx} 
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.1,
                        duration: 0.5,
                        staggerChildren: 0.05
                      }
                    })
                  }}
                  className="space-y-6"
                >
                  <h3 className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-gray-500 border-b border-white/10 pb-4">{category.category}</h3>
                  <ul className="space-y-4">
                    {category.items.map((skill, sIdx) => (
                      <motion.li 
                        key={sIdx}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        className="text-light text-base leading-relaxed hover:text-accent transition-colors cursor-hover block"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;