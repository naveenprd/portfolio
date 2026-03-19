import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark">

      <div className="relative z-10 text-center flex flex-col items-center w-full px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-accent font-mono text-sm md:text-base tracking-[0.3em] uppercase"
        >
          Product Designer
        </motion.div>

        <div className="overflow-hidden py-4 -my-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
              className="font-display font-bold text-[12vw] leading-[0.8] tracking-tighter text-light mix-blend-difference"
            >
              NAVEEN
            </motion.h1>
        </div>
        
        <div className="overflow-hidden py-4 -my-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
              className="font-display font-bold text-[12vw] leading-[0.8] tracking-tighter text-transparent stroke-text hover:text-accent transition-colors duration-500 cursor-hover"
              style={{ WebkitTextStroke: "1px #f4f4f5" }}
            >
              MANICKAM
            </motion.h1>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-light font-mono text-sm md:text-base tracking-widest uppercase"
        >
          UX Strategy • SaaS Platforms • AI-Driven Products
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 w-full text-sm md:text-base text-gray-400 font-light leading-relaxed text-center"
        >
          Crafting scalable AI, SaaS, and Ecom-Tech products with 8+ years of UX strategy.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onExplore}
          className="mt-12 px-8 py-3 border border-light/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-black hover:border-accent transition-all cursor-hover"
        >
          Explore Work
        </motion.button>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
         <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default Hero;