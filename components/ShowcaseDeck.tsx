import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Presentation, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CXO } from './CXOCaseStudy';

/*
 * Interview showcase deck — the spoken intro as slides, on the blueprint system.
 * Arrow keys / space navigate; Esc closes and re-locks. The last slide hands
 * off to the CXO case study (pre-unlocked when the deck was unlocked).
 */

interface ShowcaseDeckProps {
  onClose: () => void;
}

interface Slide {
  kicker: string;
  title: string;
  body?: string;
  aside?: string;
}

const SLIDES: Slide[] = [
  {
    kicker: 'Portfolio Showcase',
    title: 'Naveen Manickam',
    body: 'Product Designer — platforms & design systems. Pondicherry-born, Chennai-trained, Bangalore-based.',
    aside: 'Use ← → to move through the story.',
  },
  {
    kicker: '01 · Where it started',
    title: 'My uncle owned the only computer in the family.',
    body: 'He was a photographer, and the computer was strictly for work. The deal was simple: I could use it — if I did some of the work for him.',
  },
  {
    kicker: '02 · The spark',
    title: 'Photoshop 7 — the one with the eye.',
    body: "Cutting people out of photographs, placing them into new backgrounds, blending with the brush tool. All with the lasso — nobody had told me the pen tool existed. I was hooked.",
  },
  {
    kicker: '03 · Learning the craft',
    title: 'So I went and sat in photo studios.',
    body: "Retouchers flying through Photoshop keyboard-first, barely touching the mouse. One of them taught me the pen tool. That's when design stopped being play and became the plan.",
  },
  {
    kicker: '04 · Making it formal',
    title: 'B.Sc. Media Technology — UX Design.',
    body: 'ICAT Design & Media College, Chennai (2014–2017). Later, an MBA in Information Systems alongside full-time work (2019–2021).',
  },
  {
    kicker: '05 · Agency years',
    title: 'Fast hands, broad surface.',
    body: 'Visual Designer at Williams Lea Tag — campaign assets and Google Ads for global markets. Then Creative Designer at Kaalya — dashboards, websites, and landing pages across healthcare, real estate, and education.',
  },
  {
    kicker: '06 · The product turn',
    title: 'Habitate taught me product.',
    body: 'Two and a half years at a pure SaaS company. We built multiple products — Habitate.io, Scrollme, and Orcaso, which was acquired. Research, A/B testing, designing for outcomes instead of deliverables.',
  },
  {
    kicker: '07 · Today',
    title: 'Streamoid — an AI fashion operating system.',
    body: 'Since 2020: Piqit, Catalogix, Photogenix, Artifax. And now CXO — not another product, but the OS that unifies the three apps into one agentic platform.',
  },
  {
    kicker: '08 · What that adds up to',
    title: 'One designer, platform scope.',
    body: 'A design system that lets four AI apps ship as one · enterprise workflows kept calm · 30+ brands and 5M+ SKUs a year on the platform.',
  },
];

const ShowcaseDeck: React.FC<ShowcaseDeckProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = SLIDES.length + 1; // + handoff slide
  const isHandoff = index === total - 1;

  const go = (next: number) => {
    if (next < 0 || next > total - 1) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setIndex(i => {
          setDirection(1);
          return Math.min(i + 1, total - 1);
        });
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setIndex(i => {
          setDirection(-1);
          return Math.max(i - 1, 0);
        });
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, total]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 28 : -28 }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -28 : 28 }),
  };

  return (
    <div className="fixed inset-0 z-[110] cursor-auto font-sans flex flex-col" style={{ backgroundColor: CXO.canvas }}>
      {/* Top bar */}
      <header className="h-14 shrink-0 border-b border-white/10 px-4 md:px-6 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center"
            style={{ backgroundColor: CXO.tile }}
          >
            <Presentation size={14} style={{ color: CXO.accent }} />
          </div>
          <span className="text-sm font-display font-semibold tracking-wide text-white">Showcase</span>
          <span className="text-sm text-gray-500 hidden sm:inline">Private Presentation</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-1.5 py-0.5 rounded border border-white/15 text-[10px] font-mono text-gray-400">esc</kbd>
            close &amp; re-lock
          </span>
          <button
            onClick={onClose}
            aria-label="Close and re-lock showcase"
            className="p-2 rounded-md hover:bg-white/10 transition-colors text-gray-300"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Slide canvas */}
      <div className="relative flex-1 overflow-hidden">
        {/* Blueprint frame */}
        <div className="absolute inset-y-0 hidden md:block border-l border-dashed border-white/10" style={{ left: 'max(2rem, calc(50% - 560px))' }} />
        <div className="absolute inset-y-0 hidden md:block border-r border-dashed border-white/10" style={{ right: 'max(2rem, calc(50% - 560px))' }} />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 flex items-center justify-center px-6"
          >
            <div className="w-full max-w-4xl mx-auto">
              {isHandoff ? (
                <div>
                  <div className="text-[11px] font-mono font-medium tracking-[0.18em] uppercase mb-8" style={{ color: '#8B95FF' }}>
                    Next
                  </div>
                  <h2 className="font-display font-semibold text-white tracking-tight text-4xl md:text-6xl mb-8">
                    I'll be presenting CXO now.
                  </h2>
                  <p className="text-lg md:text-2xl text-gray-400 leading-relaxed md:leading-9 max-w-2xl mb-12">
                    The OS shell and its design system first — then Catalogix, the catalog engine
                    underneath it.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => navigate('/cxo')}
                      className="inline-flex items-center gap-2.5 h-12 px-6 rounded-lg text-sm font-medium text-white transition-colors"
                      style={{ backgroundColor: CXO.accent }}
                      onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = '#6B76FF')}
                      onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = CXO.accent)}
                    >
                      Open the CXO case study <ArrowRight size={16} />
                    </button>
                    <button
                      onClick={() => navigate('/catalogix')}
                      className="inline-flex items-center gap-2 h-12 px-5 rounded-lg text-sm text-gray-300 border border-white/15 hover:border-white/30 transition-colors"
                    >
                      Catalogix, for later <ArrowRight size={15} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-[11px] font-mono font-medium tracking-[0.18em] uppercase mb-8" style={{ color: '#8B95FF' }}>
                    {SLIDES[index].kicker}
                  </div>
                  <h2 className="font-display font-semibold text-white tracking-tight text-4xl md:text-6xl mb-8 max-w-3xl">
                    {SLIDES[index].title}
                  </h2>
                  {SLIDES[index].body && (
                    <p className="text-lg md:text-2xl text-gray-400 leading-relaxed md:leading-9 max-w-2xl">
                      {SLIDES[index].body}
                    </p>
                  )}
                  {SLIDES[index].aside && (
                    <p className="mt-10 text-xs font-mono uppercase tracking-widest text-gray-600">
                      {SLIDES[index].aside}
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar: hints, progress, counter */}
      <footer className="h-16 shrink-0 border-t border-white/10 px-4 md:px-6 flex items-center justify-between gap-6 relative z-20">
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="p-2 rounded-md border border-white/10 text-gray-300 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={15} />
          </button>
          <button
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            aria-label="Next slide"
            className="p-2 rounded-md border border-white/10 text-gray-300 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight size={15} />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-1.5 flex-1 max-w-md">
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1 flex-1 rounded-full transition-colors"
              style={{ backgroundColor: i <= index ? CXO.accent : 'rgba(255,255,255,0.12)' }}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-gray-500 tabular-nums">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </footer>
    </div>
  );
};

export default ShowcaseDeck;
