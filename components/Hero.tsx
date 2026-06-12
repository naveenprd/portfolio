import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onExplore: () => void;
}

/* The first viewport carries evidence, not just the name: positioning eyebrow,
 * a concrete track-record line, and a spec strip echoing the case-study heroes. */
const HERO_FACTS = [
  { label: 'Currently', value: "Product designer across Streamoid's agentic retail platform" },
  { label: 'Focus', value: 'Design systems · Enterprise workflows · AI products' },
  { label: 'Scale', value: '4 AI apps, one system · 30+ brands · 5M+ SKUs a year' },
];

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark">

      <div className="relative z-10 text-center flex flex-col items-center w-full max-w-6xl mx-auto px-6 pt-28 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-accent font-mono text-xs md:text-sm tracking-[0.3em] uppercase"
        >
          Product Designer — Platforms &amp; Design Systems
        </motion.div>

        <div className="overflow-hidden py-4 -my-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
              className="font-display font-bold text-[12vw] lg:text-[9.5rem] leading-[0.95] tracking-tighter text-light"
            >
              NAVEEN
            </motion.h1>
        </div>

        <div className="overflow-hidden py-4 -my-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
              className="font-display font-bold text-[12vw] lg:text-[9.5rem] leading-[0.95] tracking-tighter text-light hover:text-accent transition-colors duration-500 cursor-hover"
            >
              MANICKAM
            </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 max-w-3xl text-base md:text-lg text-gray-400 font-light leading-relaxed text-center"
        >
          8+ years designing enterprise AI platforms — most recently the design system and OS shell
          behind four AI apps, on a platform serving 30+ brands and 5M+ SKUs a year.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-12 w-full max-w-4xl rounded-xl border border-white/10 bg-white/5 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 overflow-hidden text-left"
        >
          {HERO_FACTS.map(f => (
            <div key={f.label} className="px-6 py-5">
              <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2">{f.label}</div>
              <div className="text-sm text-gray-200 leading-relaxed">{f.value}</div>
            </div>
          ))}
        </motion.div>

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