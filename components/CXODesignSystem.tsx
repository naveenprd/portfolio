import React, { useState } from 'react';

/*
 * CXO design-system showcase.
 * The token sections (color, type, spacing/radius) render LIVE from the variable
 * values in CXO-Main-v2.1 (Figma) — every hex, size and radius below is a file
 * variable. Component imagery elsewhere in the case study is exported straight
 * from the file's component sheets.
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

/* The CXO product is set in Inter (a file variable like everything else here).
 * Showcase roots pin it so the site's Roboto/Schibsted chrome can't leak into
 * the rendered tokens; explicit font-sans/font-mono classes opt back out. */
const INTER = "'Inter', sans-serif";

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
    <div className="flex items-baseline justify-between mb-4">
      <h3 className="text-sm font-sans font-semibold text-gray-200">{title}</h3>
      {spec && <SpecLabel>{spec}</SpecLabel>}
    </div>
    {children}
  </div>
);

/* ————— CXO switch (built from file variables — drives the mode toggle) ————— */

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

/* ————— Sections ————— */

export const DSColor: React.FC = () => {
  const [mode, setMode] = useState<Mode>('dark');
  const a = ALIAS[mode];
  const swatchBorder = mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
  return (
    <div
      className="rounded-xl overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: a.surface.canvas, border: `1px solid ${swatchBorder}`, fontFamily: INTER }}
    >
      {/* Mode switch — a CXO toggle, live */}
      <div
        className="flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-300"
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

      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-10">
        {/* text & icons */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-widest mb-3 transition-colors duration-300" style={{ color: a.text.muted }}>
            alias/text &amp; icons
          </div>
          <div className="space-y-2">
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
          <div className="space-y-2">
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
            className="mt-6 rounded-lg p-5 transition-colors duration-300"
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
  <div className="space-y-9" style={{ fontFamily: INTER }}>
    <ShowcaseGroup title="Display" spec="Inter · regular 400 · 40→80px">
      <div className="rounded-xl p-6 md:p-7 space-y-4 overflow-hidden" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
        {TYPE_DISPLAY.slice(2, 6).map(t => (
          <div key={t.name} className="flex items-baseline gap-4 border-b last:border-b-0 pb-4 last:pb-0" style={{ borderColor: B.divider }}>
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
      <div className="rounded-xl p-6 md:p-7 space-y-3.5" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
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
      <div className="rounded-xl p-6 md:p-7 space-y-4" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
        {TYPE_TEXT.map(t => (
          <div key={t.name} className="flex items-baseline justify-between gap-6 border-b last:border-b-0 pb-4 last:pb-0" style={{ borderColor: B.divider }}>
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
  <div className="grid md:grid-cols-2 gap-8" style={{ fontFamily: INTER }}>
    <ShowcaseGroup title="Spacing" spec="2 → 56px">
      <div className="rounded-xl p-6 space-y-2.5" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
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
      <div className="rounded-xl p-6 grid grid-cols-2 gap-5" style={{ backgroundColor: S.canvas, border: `1px solid ${B.divider}` }}>
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

/* ————— Sample component composition — the sidebar sheets, exported from the file ————— */

const FRAME_BG = '#050505';

const FigmaFrame: React.FC<{ label: string; children: React.ReactNode; className?: string }> = ({ label, children, className = '' }) => (
  <div className={`flex flex-col ${className}`}>
    <div className="text-[11px] font-mono font-medium text-gray-500 mb-2.5">{label}</div>
    <div
      className="flex-1 rounded-xl p-4 md:p-6"
      style={{ backgroundColor: FRAME_BG, border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {children}
    </div>
  </div>
);

export const DSComposition: React.FC = () => (
  <div className="space-y-10" style={{ fontFamily: INTER }}>
    {/* The parts sheet */}
    <FigmaFrame label="Sidebar — Components · exported from CXO-Main-v2.1">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <img
          src="/images/cxo/composition/logo-units.webp"
          alt="SC-Logo unit sheet: CXO, Catalogix, Photogenix and Artifax wordmarks in expanded, dimmed and collapsed states"
          loading="lazy"
          className="w-full rounded-lg"
        />
        <div className="space-y-6">
          <img
            src="/images/cxo/composition/sidebar-menu.webp"
            alt="SC-Sidebar menu sheet: Pairtext rows in default, dimmed, active, hover and overflow states plus collapsed dots"
            loading="lazy"
            className="w-full rounded-lg"
          />
          <img
            src="/images/cxo/composition/low-credit-card.webp"
            alt="SC-lowCreditcard sheet: the Low Credits alert expanded and as an icon-only tile"
            loading="lazy"
            className="w-full rounded-lg"
          />
          <img
            src="/images/cxo/composition/sidebar-profile.webp"
            alt="SC-Sidebar profile sheet: profile row and avatar variants"
            loading="lazy"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </FigmaFrame>

    {/* Assembled shell + its API */}
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <FigmaFrame label="Sidebar — assembled from the parts above">
        <img
          src="/images/cxo/composition/artifax-sidebar.webp"
          alt="SC-Artifax-Sidebar: the collapsed icon rail beside the expanded Artifax sidebar with Research & Plan, Design and Brand groups, Low Credits alert, Ask CXO button and profile"
          loading="lazy"
          className="w-full max-w-[440px] mx-auto rounded-lg"
        />
      </FigmaFrame>
      <div className="flex flex-col gap-6">
        <FigmaFrame label="Props — the component's API in Figma">
          <img
            src="/images/cxo/composition/props-panel.webp"
            alt="Figma properties panel for SC-Artifax-Sidebar: State, eleven SC-Sidebar menu instances, SC-Profile with Collapsed boolean, Name and SubText, and SC-sidebar icons"
            loading="lazy"
            className="w-full max-w-[380px] mx-auto rounded-lg"
          />
        </FigmaFrame>
        <div className="rounded-xl p-5 md:p-6" style={{ backgroundColor: '#121212', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs font-sans leading-relaxed text-gray-500">
            <span className="text-gray-300 font-medium">Instances all the way down.</span> That props
            panel is the real one: eleven menu instances take text and icon props, the logo unit swaps
            per app, the profile collapses by flipping one boolean. Designers configure against this
            contract; nobody detaches.
          </p>
        </div>
      </div>
    </div>
  </div>
);
