import React, { useState } from 'react';
import { Home, Paperclip, Send, Zap, SquarePen, MessageSquare, Sparkles, Image as ImageIcon, BookOpen, Users, CreditCard, PanelLeftClose, PanelLeftOpen, TriangleAlert, X as XIcon } from 'lucide-react';

/*
 * Living CXO design system showcase, rendered from the variable values in
 * CXO-Main-v2.1 (Figma). Every color, size, spacing and radius below is a
 * variable from the file — not approximations from screenshots.
 */

export type Mode = 'dark' | 'light';

export const ALIAS = {
  dark: {
    text: {
      primary: '#F5F5F5', secondary: '#DADADA', tertiary: '#9E9E9E', muted: '#7A7A7A',
      disabled: '#5C5C5C', inverse: '#101010', link: '#155CD6', success: '#00B96B',
      warning: '#DB8B00', error: '#D11A1A',
    },
    surface: { canvas: '#0B0B0B', base: '#101010', subtle: '#1A1A1A', raised: '#242424', overlay: '#3E3E3E' },
    border: { divider: '#242424', default: '#3E3E3E' },
  },
  light: {
    text: {
      primary: '#101010', secondary: '#2A2A2A', tertiary: '#5C5C5C', muted: '#7A7A7A',
      disabled: '#9E9E9E', inverse: '#F0F1F3', link: '#155CD6', success: '#009B59',
      warning: '#B57200', error: '#D11A1A',
    },
    surface: { canvas: '#EAECEF', base: '#F4F5F7', subtle: '#F8F9FA', raised: '#FFFFFF', overlay: '#FFFFFF' },
    border: { divider: '#E2E4E8', default: '#D0D3D9' },
  },
} as const;

const T = ALIAS.dark.text;
const S = ALIAS.dark.surface;
const B = ALIAS.dark.border;

const TYPE_DISPLAY = [
  { name: 'display-xxl', size: 80, lh: 100 },
  { name: 'display-xl', size: 72, lh: 90 },
  { name: 'display-lg', size: 64, lh: 80 },
  { name: 'display-md', size: 56, lh: 70 },
  { name: 'display-sm', size: 48, lh: 60 },
  { name: 'display-xs', size: 40, lh: 50 },
];
const TYPE_HEADINGS = [
  { name: 'h1', size: 40, lh: 50 },
  { name: 'h2', size: 32, lh: 40 },
  { name: 'h3', size: 24, lh: 32 },
  { name: 'h4', size: 20, lh: 28 },
  { name: 'h5', size: 18, lh: 26 },
  { name: 'h6', size: 16, lh: 24 },
];
const TYPE_TEXT = [
  { name: 'lead-text-md', size: 24, lh: 32, weights: ['regular', 'medium', 'semibold'] },
  { name: 'lead-text-sm', size: 20, lh: 28, weights: ['regular', 'semibold', 'bold'] },
  { name: 'lead-text-xs', size: 18, lh: 26, weights: ['regular', 'medium'] },
  { name: 'text-md', size: 16, lh: 24, weights: ['regular', 'medium', 'semibold', 'bold'] },
  { name: 'text-sm', size: 14, lh: 20, weights: ['regular', 'semibold'] },
  { name: 'text-xs', size: 12, lh: 18, weights: ['regular', 'semibold'] },
];
const WEIGHT: Record<string, number> = { regular: 400, medium: 500, semibold: 600, bold: 700 };

const SPACING = [
  { name: 'spacing-none', v: 0 }, { name: 'spacing-xxs', v: 2 }, { name: 'spacing-xs', v: 4 },
  { name: 'spacing-sm', v: 6 }, { name: 'spacing-md', v: 8 }, { name: 'spacing-lg', v: 10 },
  { name: 'spacing-xl', v: 12 }, { name: 'spacing-3xl', v: 16 }, { name: 'spacing-5xl', v: 20 },
  { name: 'spacing-6xl', v: 24 }, { name: 'spacing-8xl', v: 32 }, { name: 'spacing-12xl', v: 56 },
];
const RADIUS = [
  { name: 'radius-md', v: 8 }, { name: 'radius-xl', v: 12 }, { name: 'radius-3xl', v: 16 }, { name: 'radius-full', v: 999 },
];

/* ————— shared chrome ————— */

const SpecLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-mono text-[11px] text-gray-500">{children}</span>
);

const ShowcaseGroup: React.FC<{ title: string; spec?: string; children: React.ReactNode }> = ({ title, spec, children }) => (
  <div>
    <div className="flex items-baseline justify-between mb-3">
      <h3 className="text-sm font-semibold text-gray-200">{title}</h3>
      {spec && <SpecLabel>{spec}</SpecLabel>}
    </div>
    {children}
  </div>
);

/* ————— CXO primitives (built from file variables) ————— */

export const CXOSwitch: React.FC<{ on: boolean; onToggle: () => void; ariaLabel?: string }> = ({ on, onToggle, ariaLabel }) => (
  <button
    role="switch"
    aria-checked={on}
    aria-label={ariaLabel || 'Toggle'}
    onClick={onToggle}
    className="relative shrink-0 transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#155CD6]/60"
    style={{ width: 40, height: 24, borderRadius: 999, backgroundColor: on ? S.raised : S.subtle, border: `1px solid ${B.default}` }}
  >
    <span
      className="absolute top-1/2 -translate-y-1/2 transition-all duration-200 rounded-full"
      style={{
        width: 18, height: 18,
        left: on ? 19 : 3,
        backgroundColor: on ? '#FFFFFF' : S.overlay,
      }}
    />
  </button>
);

const CXOCheckbox: React.FC<{ label: string }> = ({ label }) => {
  const [checked, setChecked] = useState(true);
  return (
    <button
      onClick={() => setChecked(c => !c)}
      className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[#155CD6]/60 rounded"
      role="checkbox"
      aria-checked={checked}
    >
      <span
        className="w-[18px] h-[18px] rounded-[5px] flex items-center justify-center transition-colors"
        style={{
          backgroundColor: checked ? T.link : 'transparent',
          border: checked ? `1px solid ${T.link}` : `1px solid ${B.default}`,
        }}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.8 6.8L9 1.2" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="text-sm" style={{ color: T.secondary }}>{label}</span>
    </button>
  );
};

const CXORadioGroup: React.FC = () => {
  const [sel, setSel] = useState('Design');
  return (
    <div className="flex flex-wrap gap-4">
      {['Design', 'Merchandising', 'Studio'].map(opt => (
        <button
          key={opt}
          role="radio"
          aria-checked={sel === opt}
          onClick={() => setSel(opt)}
          className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[#155CD6]/60 rounded"
        >
          <span
            className="w-[18px] h-[18px] rounded-full flex items-center justify-center transition-colors"
            style={{ border: sel === opt ? `5.5px solid ${T.link}` : `1px solid ${B.default}` }}
          />
          <span className="text-sm" style={{ color: sel === opt ? T.primary : T.tertiary }}>{opt}</span>
        </button>
      ))}
    </div>
  );
};

const CXOBadge: React.FC<{ kind: 'neutral' | 'success' | 'warning' | 'error'; children: React.ReactNode }> = ({ kind, children }) => {
  const color = kind === 'neutral' ? T.secondary : T[kind];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 h-6 rounded-full"
      style={{ color, backgroundColor: `${color}1A`, border: `1px solid ${color}33` }}
    >
      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
      {children}
    </span>
  );
};

const CXOAvatar: React.FC<{ initials: string }> = ({ initials }) => (
  <span
    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
    style={{ backgroundColor: S.overlay, color: T.primary }}
  >
    {initials}
  </span>
);

type BtnVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'error';
type BtnSize = 'lg' | 'md' | 'sm';

const BTN_STYLE: Record<BtnVariant, { bg: string; color: string; border?: string; hoverBg: string }> = {
  primary: { bg: T.link, color: '#FFFFFF', hoverBg: '#1A6BEA' },
  secondary: { bg: '#FFFFFF', color: T.inverse, hoverBg: '#E8E8E8' },
  tertiary: { bg: S.raised, color: T.primary, hoverBg: S.overlay },
  outline: { bg: 'transparent', color: T.primary, border: B.default, hoverBg: S.subtle },
  error: { bg: T.error, color: '#FFFFFF', hoverBg: '#E5302F' },
};
const BTN_SIZE: Record<BtnSize, { h: number; px: number; fs: number }> = {
  lg: { h: 48, px: 20, fs: 16 },
  md: { h: 40, px: 16, fs: 14 },
  sm: { h: 32, px: 12, fs: 13 },
};

export const CXOButton: React.FC<{
  variant?: BtnVariant; size?: BtnSize; disabled?: boolean; iconLeft?: boolean; children: React.ReactNode;
}> = ({ variant = 'primary', size = 'md', disabled, iconLeft, children }) => {
  const [hover, setHover] = useState(false);
  const v = BTN_STYLE[variant];
  const s = BTN_SIZE[size];
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-[#155CD6]/60"
      style={{
        height: s.h, paddingLeft: s.px, paddingRight: s.px, fontSize: s.fs, borderRadius: 8,
        backgroundColor: hover && !disabled ? v.hoverBg : v.bg,
        color: v.color,
        border: v.border ? `1px solid ${v.border}` : 'none',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {iconLeft && <Home size={s.fs + 2} />}
      {children}
    </button>
  );
};

const CXOTextField: React.FC<{ label: string; placeholder: string; state?: 'default' | 'error' | 'disabled'; hint?: string }> = ({ label, placeholder, state = 'default', hint }) => {
  const [focus, setFocus] = useState(false);
  const borderColor = state === 'error' ? T.error : focus ? T.link : B.default;
  return (
    <div className="flex-1 min-w-[200px]">
      <label className="block text-xs font-medium mb-1.5" style={{ color: T.tertiary }}>{label}</label>
      <input
        placeholder={placeholder}
        disabled={state === 'disabled'}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full h-10 px-3 text-sm outline-none transition-colors disabled:cursor-not-allowed"
        style={{
          backgroundColor: state === 'disabled' ? S.base : S.subtle,
          color: state === 'disabled' ? T.disabled : T.primary,
          border: `1px solid ${borderColor}`,
          borderRadius: 8,
          opacity: state === 'disabled' ? 0.6 : 1,
        }}
      />
      {hint && <p className="text-xs mt-1.5" style={{ color: state === 'error' ? T.error : T.muted }}>{hint}</p>}
    </div>
  );
};

const CXOTabs: React.FC = () => {
  const [active, setActive] = useState('Briefs');
  return (
    <div className="inline-flex p-1 rounded-[10px]" style={{ backgroundColor: S.base, border: `1px solid ${B.divider}` }}>
      {['Briefs', 'Canvases', 'History'].map(tab => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="px-4 h-8 text-sm font-medium rounded-lg transition-colors"
          style={{
            backgroundColor: active === tab ? S.raised : 'transparent',
            color: active === tab ? T.primary : T.tertiary,
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

/* ————— Sections ————— */

export const DSColor: React.FC = () => {
  const [mode, setMode] = useState<Mode>('dark');
  const a = ALIAS[mode];
  const swatchBorder = mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: a.surface.canvas, border: `1px solid ${swatchBorder}` }}
    >
      {/* Mode switch — a CXO toggle, live */}
      <div
        className="flex items-center justify-between px-5 py-4 transition-colors duration-300"
        style={{ borderBottom: `1px solid ${a.border.divider}` }}
      >
        <div>
          <div className="text-sm font-semibold transition-colors duration-300" style={{ color: a.text.primary }}>
            alias/* — one alias set, two resolutions
          </div>
          <div className="text-xs transition-colors duration-300" style={{ color: a.text.muted }}>
            Components reference roles, never hex. Flip the mode — every value below re-resolves.
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-medium transition-colors duration-300" style={{ color: a.text.tertiary }}>
            {mode === 'dark' ? 'Dark' : 'Light'}
          </span>
          <CXOSwitch on={mode === 'light'} onToggle={() => setMode(m => (m === 'dark' ? 'light' : 'dark'))} ariaLabel="Toggle color mode" />
        </div>
      </div>

      <div className="p-5 grid md:grid-cols-2 gap-8">
        {/* text & icons */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-widest mb-3 transition-colors duration-300" style={{ color: a.text.muted }}>
            alias/text &amp; icons
          </div>
          <div className="space-y-1.5">
            {(Object.entries(a.text) as [string, string][]).map(([name, hex]) => (
              <div key={name} className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-md shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: hex, border: `1px solid ${swatchBorder}` }}
                />
                <span className="text-sm flex-1 transition-colors duration-300" style={{ color: a.text.secondary }}>{name}</span>
                <span className="font-mono text-[11px] uppercase transition-colors duration-300" style={{ color: a.text.muted }}>{hex}</span>
              </div>
            ))}
          </div>
        </div>
        {/* surfaces */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-widest mb-3 transition-colors duration-300" style={{ color: a.text.muted }}>
            alias/surface
          </div>
          <div className="space-y-1.5">
            {(Object.entries(a.surface) as [string, string][]).map(([name, hex]) => (
              <div key={name} className="flex items-center gap-3">
                <span
                  className="w-7 h-7 rounded-md shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: hex, border: `1px solid ${swatchBorder}` }}
                />
                <span className="text-sm flex-1 transition-colors duration-300" style={{ color: a.text.secondary }}>{name}</span>
                <span className="font-mono text-[11px] uppercase transition-colors duration-300" style={{ color: a.text.muted }}>{hex}</span>
              </div>
            ))}
          </div>
          {/* live sample card proving the aliases */}
          <div
            className="mt-5 rounded-lg p-4 transition-colors duration-300"
            style={{ backgroundColor: a.surface.raised, border: `1px solid ${a.border.divider}` }}
          >
            <div className="text-sm font-semibold mb-0.5 transition-colors duration-300" style={{ color: a.text.primary }}>
              Surface sample
            </div>
            <p className="text-xs mb-2.5 transition-colors duration-300" style={{ color: a.text.tertiary }}>
              raised on {mode} canvas — same component, re-resolved.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {(['link', 'success', 'warning', 'error'] as const).map(k => (
                <span
                  key={k}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-full transition-colors duration-300"
                  style={{ color: a.text[k], backgroundColor: `${a.text[k]}1A` }}
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DSTypography: React.FC = () => (
  <div className="space-y-6">
    <ShowcaseGroup title="Display" spec="Inter · regular 400 · 40→80px">
      <div className="rounded-xl p-5 space-y-3 overflow-hidden" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
        {TYPE_DISPLAY.slice(2, 6).map(t => (
          <div key={t.name} className="flex items-baseline gap-4 border-b last:border-b-0 pb-3 last:pb-0" style={{ borderColor: B.divider }}>
            <span className="whitespace-nowrap" style={{ color: T.primary, fontSize: t.size, lineHeight: `${t.lh}px`, fontWeight: 400 }}>
              Aa
            </span>
            <div className="pb-1">
              <SpecLabel>{t.name}</SpecLabel>
              <div className="font-mono text-[11px]" style={{ color: T.disabled }}>{t.size}/{t.lh}</div>
            </div>
          </div>
        ))}
      </div>
    </ShowcaseGroup>
    <ShowcaseGroup title="Headings" spec="Inter · bold 700 · h1–h6">
      <div className="rounded-xl p-5 space-y-2.5" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
        {TYPE_HEADINGS.map(t => (
          <div key={t.name} className="flex items-baseline justify-between gap-6">
            <span className="truncate" style={{ color: T.primary, fontSize: t.size, lineHeight: `${t.lh}px`, fontWeight: 700 }}>
              Brief it once. They handle the rest.
            </span>
            <SpecLabel>{t.name} · {t.size}/{t.lh}</SpecLabel>
          </div>
        ))}
      </div>
    </ShowcaseGroup>
    <ShowcaseGroup title="Lead & body text" spec="Inter · 400/500/600/700 · 12→24px">
      <div className="rounded-xl p-5 space-y-3" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
        {TYPE_TEXT.map(t => (
          <div key={t.name} className="flex items-baseline justify-between gap-6 border-b last:border-b-0 pb-3 last:pb-0" style={{ borderColor: B.divider }}>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 min-w-0">
              {t.weights.map(w => (
                <span key={w} style={{ color: T.secondary, fontSize: t.size, lineHeight: `${t.lh}px`, fontWeight: WEIGHT[w] }}>
                  Agents are ready
                </span>
              ))}
            </div>
            <SpecLabel>{t.name} · {t.size}/{t.lh}</SpecLabel>
          </div>
        ))}
      </div>
    </ShowcaseGroup>
  </div>
);

export const DSSpacingRadius: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <ShowcaseGroup title="Spacing" spec="2 → 56px">
      <div className="rounded-xl p-5 space-y-2" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
        {SPACING.filter(s => s.v > 0).map(s => (
          <div key={s.name} className="flex items-center gap-3">
            <span className="font-mono text-[11px] w-24 shrink-0" style={{ color: T.muted }}>{s.name}</span>
            <span className="h-4 rounded-sm" style={{ width: s.v * 4, backgroundColor: T.link, opacity: 0.85 }} />
            <span className="font-mono text-[11px]" style={{ color: T.disabled }}>{s.v}</span>
          </div>
        ))}
      </div>
    </ShowcaseGroup>
    <ShowcaseGroup title="Radius" spec="8 / 12 / 16 / full">
      <div className="rounded-xl p-5 grid grid-cols-2 gap-4" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
        {RADIUS.map(r => (
          <div key={r.name} className="flex flex-col items-center gap-2">
            <div
              className="w-full h-20"
              style={{ backgroundColor: S.raised, border: `1px solid ${B.default}`, borderRadius: r.v === 999 ? 999 : r.v }}
            />
            <SpecLabel>{r.name} · {r.v === 999 ? '999' : `${r.v}px`}</SpecLabel>
          </div>
        ))}
      </div>
    </ShowcaseGroup>
  </div>
);

export const DSAtoms: React.FC = () => {
  const [switchOn, setSwitchOn] = useState(true);
  return (
    <div className="rounded-xl p-6 space-y-7" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
      <div className="grid sm:grid-cols-2 gap-7">
        <ShowcaseGroup title="Switch" spec="SC-toggleSwitch · active true/false">
          <div className="flex items-center gap-4">
            <CXOSwitch on={switchOn} onToggle={() => setSwitchOn(o => !o)} />
            <span className="text-sm" style={{ color: T.tertiary }}>{switchOn ? 'active=true' : 'active=false'} — try it</span>
          </div>
        </ShowcaseGroup>
        <ShowcaseGroup title="Checkbox" spec="checked / unchecked">
          <div className="flex flex-col gap-2.5">
            <CXOCheckbox label="Notify me when a brief completes" />
            <CXOCheckbox label="Auto-retry failed renders" />
          </div>
        </ShowcaseGroup>
        <ShowcaseGroup title="Radio" spec="role selection">
          <CXORadioGroup />
        </ShowcaseGroup>
        <ShowcaseGroup title="Badge" spec="status semantics from alias colors">
          <div className="flex flex-wrap gap-2">
            <CXOBadge kind="neutral">Draft</CXOBadge>
            <CXOBadge kind="success">Live</CXOBadge>
            <CXOBadge kind="warning">Low credits</CXOBadge>
            <CXOBadge kind="error">Failed</CXOBadge>
          </div>
        </ShowcaseGroup>
      </div>
      <ShowcaseGroup title="Profile initials & divider" spec="initialProfile · SC-HDivider">
        <div className="flex items-center gap-3">
          <CXOAvatar initials="NM" />
          <CXOAvatar initials="CH" />
          <div className="flex-1 h-px" style={{ backgroundColor: B.divider }} />
          <span className="font-mono text-[11px]" style={{ color: T.disabled }}>divider #242424</span>
        </div>
      </ShowcaseGroup>
    </div>
  );
};

export const DSMolecules: React.FC = () => (
  <div className="space-y-6">
    <ShowcaseGroup title="SC-Button" spec="5 variants × 3 sizes × default/hover/disabled — hover them">
      <div className="rounded-xl p-6 space-y-5" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
        {(['primary', 'secondary', 'tertiary', 'outline', 'error'] as BtnVariant[]).map(v => (
          <div key={v} className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] w-20 shrink-0" style={{ color: T.muted }}>{v}</span>
            <CXOButton variant={v} size="lg">Button</CXOButton>
            <CXOButton variant={v} size="md">Button</CXOButton>
            <CXOButton variant={v} size="sm">Button</CXOButton>
            <CXOButton variant={v} size="md" iconLeft>Icon left</CXOButton>
            <CXOButton variant={v} size="md" disabled>Disabled</CXOButton>
          </div>
        ))}
      </div>
    </ShowcaseGroup>
    <div className="grid md:grid-cols-2 gap-6">
      <ShowcaseGroup title="SC-textField" spec="default / focus / error / disabled — focus them">
        <div className="rounded-xl p-6 space-y-4" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
          <CXOTextField label="Workspace name" placeholder="Kepler workspace" />
          <CXOTextField label="Company email" placeholder="naveen@streamoid.com" state="error" hint="That email domain isn't allowed." />
          <CXOTextField label="Plan" placeholder="Enterprise" state="disabled" hint="Managed by your admin." />
        </div>
      </ShowcaseGroup>
      <ShowcaseGroup title="SC-tabs & app card" spec="segmented control · quick prompt">
        <div className="rounded-xl p-6 space-y-5" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
          <CXOTabs />
          <button
            className="w-full text-left rounded-xl p-4 transition-colors hover:border-white/25"
            style={{ backgroundColor: S.subtle, border: `1px solid ${B.divider}` }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles size={14} style={{ color: T.link }} />
              <span className="text-sm font-semibold" style={{ color: T.primary }}>Launch My Products on Amazon</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: T.tertiary }}>
              List and publish my products, ready to sell.
            </p>
          </button>
        </div>
      </ShowcaseGroup>
    </div>
  </div>
);

const SIDEBAR_ITEMS = [
  { icon: Zap, label: 'New Brief', active: true },
  { icon: SquarePen, label: 'New Canvas' },
  { icon: MessageSquare, label: 'Project Genesis', chat: true },
  { icon: MessageSquare, label: 'Chat 2', chat: true },
];
const SIDEBAR_APPS = [
  { icon: Sparkles, label: 'Artifax' },
  { icon: ImageIcon, label: 'Photogenix' },
  { icon: BookOpen, label: 'Catalogix' },
];

export const DSOrganisms: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [alertOpen, setAlertOpen] = useState(true);
  return (
    <div className="grid lg:grid-cols-5 gap-6">
      {/* Mini sidebar — collapse it */}
      <div className="lg:col-span-2">
        <ShowcaseGroup title="SC-Sidebar" spec="288 ↔ 72px — collapse it">
          <div className="rounded-xl p-4 flex" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}`, minHeight: 460 }}>
            <div
              className="flex flex-col rounded-xl transition-all duration-300 overflow-hidden"
              style={{ width: expanded ? 232 : 64, backgroundColor: S.base, border: `1px solid ${B.divider}` }}
            >
              {/* logo unit */}
              <div className="flex items-center gap-2 px-3 h-12 shrink-0" style={{ borderBottom: `1px solid ${B.divider}` }}>
                <span className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0" style={{ backgroundColor: S.raised, color: T.primary }}>
                  CXO
                </span>
                {expanded && <span className="text-xs font-medium truncate" style={{ color: T.tertiary }}>Streamoid</span>}
              </div>
              {/* items */}
              <div className="flex-1 p-2 space-y-1 overflow-hidden">
                {SIDEBAR_ITEMS.map(item => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 h-9 rounded-lg px-2.5"
                    style={{ backgroundColor: item.active ? S.raised : 'transparent', color: item.active ? T.primary : T.tertiary }}
                  >
                    <item.icon size={15} className="shrink-0" />
                    {expanded && <span className="text-[13px] truncate">{item.label}</span>}
                  </div>
                ))}
                {expanded && (
                  <div className="text-[10px] uppercase tracking-widest px-2.5 pt-3 pb-1" style={{ color: T.disabled }}>Apps</div>
                )}
                {SIDEBAR_APPS.map(app => (
                  <div key={app.label} className="flex items-center gap-2.5 h-9 rounded-lg px-2.5" style={{ color: T.tertiary }}>
                    <app.icon size={15} className="shrink-0" />
                    {expanded && <span className="text-[13px] truncate">{app.label}</span>}
                  </div>
                ))}
              </div>
              {/* low credits alert */}
              {expanded && alertOpen && (
                <div className="mx-2 mb-2 rounded-lg p-2.5" style={{ backgroundColor: `${T.error}14`, border: `1px solid ${T.error}40` }}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: T.error }}>
                      <TriangleAlert size={11} /> Low Credits
                    </span>
                    <button onClick={() => setAlertOpen(false)} aria-label="Dismiss" style={{ color: T.error }}>
                      <XIcon size={11} />
                    </button>
                  </div>
                  <p className="text-[10px] leading-snug" style={{ color: T.muted }}>
                    Only 733 credits (5%) remaining. <span style={{ color: T.error, textDecoration: 'underline' }}>Buy credits</span>
                  </p>
                </div>
              )}
              {/* profile + version */}
              <div className="px-3 py-2.5 flex items-center gap-2.5" style={{ borderTop: `1px solid ${B.divider}` }}>
                <CXOAvatar initials="CH" />
                {expanded && (
                  <div className="min-w-0">
                    <div className="text-xs font-medium truncate" style={{ color: T.primary }}>Chris Hemsworth</div>
                    <div className="text-[10px] truncate" style={{ color: T.muted }}>Kepler workspace</div>
                  </div>
                )}
              </div>
              <div className="px-3 pb-2.5 flex items-center justify-between">
                {expanded && <span className="font-mono text-[10px]" style={{ color: T.disabled }}>v2.1.2</span>}
                <button
                  onClick={() => setExpanded(e => !e)}
                  aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
                  className="p-1 rounded hover:bg-white/10 transition-colors"
                  style={{ color: T.tertiary }}
                >
                  {expanded ? <PanelLeftClose size={14} /> : <PanelLeftOpen size={14} />}
                </button>
              </div>
            </div>
          </div>
        </ShowcaseGroup>
      </div>
      {/* Brief composer + workspace card */}
      <div className="lg:col-span-3 space-y-6">
        <ShowcaseGroup title="Brief composer" spec="the front door of the OS">
          <div className="rounded-xl p-6" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
            <div className="text-center mb-5">
              <div className="text-xl font-semibold mb-1" style={{ color: T.primary }}>Your agents are ready.</div>
              <div className="text-sm" style={{ color: T.tertiary }}>Brief it once. They handle the rest.</div>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: S.subtle, border: `1px solid ${B.divider}` }}>
              <input
                placeholder="What needs to get done?"
                className="w-full bg-transparent outline-none text-sm mb-6"
                style={{ color: T.primary }}
              />
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-1.5 text-xs" style={{ color: T.tertiary }}>
                  <Paperclip size={13} /> Attach
                </button>
                <CXOButton variant="primary" size="sm"><Send size={12} /> Send</CXOButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mt-3">
              {['Prepare My Images for Amazon', 'Create a High-Converting Product Video'].map(q => (
                <button
                  key={q}
                  className="text-left rounded-lg p-3 text-xs leading-relaxed transition-colors hover:border-white/25"
                  style={{ backgroundColor: S.subtle, border: `1px solid ${B.divider}`, color: T.secondary }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </ShowcaseGroup>
        <ShowcaseGroup title="Workspace card" spec="WorkspaceCard organism">
          <div className="rounded-xl p-5 flex items-center gap-4" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
            <span className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0" style={{ backgroundColor: S.raised, color: T.primary }}>
              K
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold" style={{ color: T.primary }}>Kepler workspace</div>
              <div className="flex items-center gap-3 text-xs" style={{ color: T.muted }}>
                <span className="inline-flex items-center gap-1"><Users size={11} /> 12 members</span>
                <span className="inline-flex items-center gap-1"><CreditCard size={11} /> 733 credits</span>
              </div>
            </div>
            <CXOBadge kind="success">Active</CXOBadge>
          </div>
        </ShowcaseGroup>
      </div>
    </div>
  );
};
