import React, { useEffect, useRef, useState } from 'react';
import { ProjectItem } from '../types';
import { CONTACT_INFO } from '../data';
import { X, Lock, KeyRound, Eye, EyeOff, Mail, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ClosedCaseStudyProps {
  project: ProjectItem;
  onUnlock: () => void;
  onClose: () => void;
}

export const unlockStorageKey = (projectId: string) => `cs-unlocked:${projectId}`;

export const isProjectUnlocked = (projectId: string): boolean => {
  try {
    return sessionStorage.getItem(unlockStorageKey(projectId)) === '1';
  } catch {
    return false;
  }
};

export const clearProjectUnlock = (projectId: string): void => {
  try {
    sessionStorage.removeItem(unlockStorageKey(projectId));
  } catch {
    // Storage unavailable; nothing to clear.
  }
};

const sha256Hex = async (text: string): Promise<string> => {
  if (!window.crypto?.subtle) {
    throw new Error('unsupported');
  }
  const data = new TextEncoder().encode(text);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

/*
 * CXO gate visual system (scoped to the closed case study experience):
 * blueprint canvas #070707, panel #121212, hairline dashed grid white/8,
 * single accent indigo #5B67F2, Inter only — intentionally distinct from
 * the portfolio's lime / Space Grotesk language.
 */
const CXO = {
  canvas: '#070707',
  panel: '#121212',
  row: '#181818',
  tile: '#1F1F1F',
  accent: '#5B67F2',
  accentHover: '#6B76FF',
};

// Half-width of the center column the dashed verticals frame.
const COL = 380;
const BAND_TOP = '14%';
const BAND_BOTTOM = '14%';

const lineTransition = { duration: 0.45, ease: 'easeInOut' as const };

const Crosshair: React.FC<{ style: React.CSSProperties; delay: number }> = ({ style, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.25 }}
    className="absolute w-2 h-2 border border-white/30"
    style={{ ...style, backgroundColor: CXO.canvas, transform: 'translate(-50%, -50%)' }}
  />
);

const ClosedCaseStudy: React.FC<ClosedCaseStudyProps> = ({ project, onUnlock, onClose }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // The portfolio's global grain overlay doesn't belong in the CXO visual system.
    const noise = document.querySelector<HTMLElement>('.noise-bg');
    if (noise) noise.style.display = 'none';
    // Auto-focus on desktop only; on mobile this would pop the keyboard immediately.
    const focusTimer = setTimeout(() => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        inputRef.current?.focus();
      }
    }, 1100); // after the entrance flow settles
    return () => {
      document.body.style.overflow = 'unset';
      if (noise) noise.style.display = '';
      clearTimeout(focusTimer);
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || checking || unlocking) return;
    if (!project.passwordHash) {
      setError('This case study is misconfigured (no password set). Please contact me for access.');
      return;
    }
    setChecking(true);
    setError(null);
    try {
      const hash = await sha256Hex(password);
      if (hash === project.passwordHash) {
        try {
          sessionStorage.setItem(unlockStorageKey(project.id), '1');
        } catch {
          // Session persistence unavailable; unlock still works for this view.
        }
        setUnlocking(true);
        // Let the exit flow play before swapping to the case study.
        unlockTimer.current = setTimeout(onUnlock, 900);
      } else {
        setError('Incorrect password. Check for typos and try again.');
        setPassword('');
        inputRef.current?.focus();
      }
    } catch {
      setError('Password check is unavailable in this browser. Please contact me for access.');
    } finally {
      setChecking(false);
    }
  };

  const mailto = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `Access request — ${project.title} case study`
  )}&body=${encodeURIComponent(
    `Hi Naveen,\n\nI'd like to request access to the ${project.title} closed case study.\n\nName:\nCompany:\nReason:\n\nThanks!`
  )}`;

  const statusDot = unlocking ? 'bg-emerald-500' : error ? 'bg-red-500' : 'bg-gray-600';

  return (
    <div
      className="fixed inset-0 z-[110] cursor-auto font-sans flex flex-col"
      style={{ backgroundColor: CXO.canvas }}
    >
      {/* Top bar */}
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
        className="h-14 shrink-0 border-b border-white/10 px-4 md:px-6 flex items-center justify-between relative z-20"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center"
            style={{ backgroundColor: CXO.tile }}
          >
            <Lock size={14} style={{ color: CXO.accent }} />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white">{project.title}</span>
          <span className="text-sm text-gray-500 hidden sm:inline">Closed Case Study</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-1.5 py-0.5 rounded border border-white/15 text-[10px] text-gray-400">esc</kbd>
            to exit
          </span>
          <button
            onClick={onClose}
            aria-label="Back to portfolio"
            className="p-2 rounded-md hover:bg-white/10 transition-colors text-gray-300"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* Blueprint canvas */}
      <motion.div
        animate={{ opacity: unlocking ? 0 : 1 }}
        transition={{ duration: 0.4, delay: unlocking ? 0.35 : 0 }}
        className="relative flex-1 overflow-y-auto"
      >
        {/* Grid lines + crosshairs (desktop only) */}
        <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ ...lineTransition, delay: 0.15 }}
            className="absolute top-0 bottom-0 border-l border-dashed border-white/10 origin-top"
            style={{ left: `calc(50% - ${COL}px)` }}
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ ...lineTransition, delay: 0.15 }}
            className="absolute top-0 bottom-0 border-l border-dashed border-white/10 origin-bottom"
            style={{ left: `calc(50% + ${COL}px)` }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ...lineTransition, delay: 0.3 }}
            className="absolute left-0 right-0 border-t border-dashed border-white/10 origin-left"
            style={{ top: BAND_TOP }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ...lineTransition, delay: 0.3 }}
            className="absolute left-0 right-0 border-t border-dashed border-white/10 origin-right"
            style={{ bottom: BAND_BOTTOM }}
          />
          <Crosshair style={{ left: `calc(50% - ${COL}px)`, top: BAND_TOP }} delay={0.65} />
          <Crosshair style={{ left: `calc(50% + ${COL}px)`, top: BAND_TOP }} delay={0.7} />
          <Crosshair style={{ left: `calc(50% - ${COL}px)`, bottom: BAND_BOTTOM, top: 'auto' }} delay={0.75} />
          <Crosshair style={{ left: `calc(50% + ${COL}px)`, bottom: BAND_BOTTOM, top: 'auto' }} delay={0.8} />
        </div>

        {/* Gutter annotations */}
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="hidden lg:block absolute text-base font-medium text-gray-200 text-right z-10"
          style={{ right: `calc(50% + ${COL + 32}px)`, top: `calc(${BAND_TOP} + 48px)` }}
        >
          Unlock {project.title}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.85, duration: 0.4 }}
          className="hidden lg:flex absolute items-center gap-2 text-sm text-gray-400 z-10"
          style={{ left: `calc(50% + ${COL + 32}px)`, top: `calc(${BAND_TOP} + 52px)` }}
        >
          <span className={`w-1.5 h-1.5 rounded-full transition-colors ${statusDot}`} />
          Enter the password
        </motion.span>

        {/* Center column */}
        <div className="relative z-10 min-h-full flex flex-col items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.45, ease: 'easeOut' }}
            className="w-full max-w-[640px] rounded-xl border border-white/10 p-6 md:p-8"
            style={{ backgroundColor: CXO.panel }}
          >
            <h1 className="text-xl md:text-2xl font-semibold text-white mb-2">
              {unlocking ? 'Access granted' : 'Open the case study'}
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed mb-7">
              This work is protected under NDA. Enter the password you were given, or request
              access and I'll get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              {/* Password row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.35 }}
                className={`flex items-center gap-3 rounded-lg border px-3 h-14 transition-colors focus-within:border-[#5B67F2] ${
                  error ? 'border-red-500/60' : 'border-white/10'
                }`}
                style={{ backgroundColor: CXO.row }}
              >
                <div
                  className="relative w-9 h-9 rounded-md border border-white/10 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: CXO.tile }}
                >
                  {unlocking ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <KeyRound size={16} className="text-gray-300" />
                  )}
                  <span
                    className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 transition-colors ${statusDot}`}
                    style={{ borderColor: CXO.row }}
                  />
                </div>
                <input
                  ref={inputRef}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Case study password"
                  autoComplete="off"
                  disabled={unlocking}
                  aria-label="Case study password"
                  className="flex-1 bg-transparent outline-none text-base text-gray-100 placeholder-gray-500 min-w-0"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-white/5 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#5B67F2]"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </motion.div>

              {error && (
                <p className="text-red-400 text-xs px-1" role="alert">
                  {error}
                </p>
              )}

              {/* Primary action */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.08, duration: 0.35 }}
                type="submit"
                disabled={!password || checking || unlocking}
                className="w-full h-12 rounded-lg font-medium text-sm text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: unlocking ? '#059669' : CXO.accent }}
                onMouseEnter={e => {
                  if (!unlocking) (e.currentTarget as HTMLButtonElement).style.backgroundColor = CXO.accentHover;
                }}
                onMouseLeave={e => {
                  if (!unlocking) (e.currentTarget as HTMLButtonElement).style.backgroundColor = CXO.accent;
                }}
              >
                {unlocking ? (
                  <>
                    <Check size={16} /> Unlocked — opening
                  </>
                ) : checking ? (
                  'Checking…'
                ) : (
                  <>
                    Unlock case study <ArrowRight size={16} />
                  </>
                )}
              </motion.button>

              {/* Request access row */}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.16, duration: 0.35 }}
                href={mailto}
                className="group flex items-center gap-3 rounded-lg border border-white/10 px-3 h-14 transition-colors hover:border-white/25"
                style={{ backgroundColor: CXO.row }}
              >
                <div
                  className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: CXO.tile }}
                >
                  <Mail size={16} className="text-gray-300" />
                </div>
                <span className="flex-1 text-sm text-gray-200">Request access by email</span>
                <ArrowRight
                  size={16}
                  className="text-gray-500 group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all"
                />
              </motion.a>
            </form>
          </motion.div>

          {/* Footer hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
            className="mt-8 text-sm text-gray-500"
          >
            Looking for the open work?{' '}
            <button
              onClick={onClose}
              className="text-gray-300 underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all"
            >
              Back to the portfolio
            </button>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default ClosedCaseStudy;
