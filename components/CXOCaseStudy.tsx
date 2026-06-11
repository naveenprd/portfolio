import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { CONTACT_INFO } from '../data';
import { Unlock, X, Mail, ArrowRight, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { DSColor, DSTypography, DSSpacingRadius, DSAtoms, DSMolecules, DSOrganisms, DSComposition } from './CXODesignSystem';

interface CXOCaseStudyProps {
  project: ProjectItem;
  onClose: () => void;
}

/* Same blueprint system as the gate: canvas #070707, panel #121212,
 * dashed hairline grid, indigo #5B67F2, Inter only. */
const CXO = {
  canvas: '#070707',
  panel: '#121212',
  row: '#181818',
  tile: '#1F1F1F',
  accent: '#5B67F2',
};

const COL = 470; // half-width of the content column

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' as const },
};

const Crosshair: React.FC<{ side: 'left' | 'right' }> = ({ side }) => (
  <div
    className="absolute top-0 w-2 h-2 border border-white/30 -translate-y-1/2 hidden md:block"
    style={{
      [side]: -4.5,
      backgroundColor: CXO.canvas,
    } as React.CSSProperties}
  />
);

interface SectionProps {
  index: string;
  title: string;
  annotation: string;
  children: React.ReactNode;
}

/* A blueprint band: dashed top rule with crosshairs at the column edges,
 * gutter annotations (Cloudflare-style), content inside the column. */
const Section: React.FC<SectionProps> = ({ index, title, annotation, children }) => (
  <section className="relative border-t border-dashed border-white/10">
    <Crosshair side="left" />
    <Crosshair side="right" />
    {/* Left gutter: section index + title */}
    <div
      className="hidden xl:block absolute text-right z-10"
      style={{ right: '100%', marginRight: 32, top: 96, width: 200 }}
    >
      <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-600 mb-1">{index}</div>
      <div className="text-base font-medium text-gray-200">{title}</div>
    </div>
    {/* Right gutter: annotation */}
    <div
      className="hidden xl:flex absolute items-center gap-2 z-10"
      style={{ left: '100%', marginLeft: 32, top: 100, width: 220 }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: CXO.accent }} />
      <span className="text-sm text-gray-400">{annotation}</span>
    </div>
    <motion.div {...fadeUp} className="px-6 md:px-12 py-16 md:py-24 space-y-10 md:space-y-12">
      {/* In-column heading (visible when gutters are hidden, kept for scanability) */}
      <div className="xl:hidden">
        <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-600 mb-1.5">{index}</div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

const Panel: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-xl border border-white/10 p-6 md:p-8 ${className}`} style={{ backgroundColor: CXO.panel }}>
    {children}
  </div>
);

const FigureCard: React.FC<{ src: string; alt: string; caption: string }> = ({ src, alt, caption }) => (
  <figure className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: CXO.panel }}>
    <img src={src} alt={alt} loading="lazy" className="w-full block" />
    <figcaption className="px-6 py-4 text-xs leading-relaxed text-gray-500 border-t border-white/10">{caption}</figcaption>
  </figure>
);

const FactRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div
    className="flex items-center gap-3 rounded-lg border border-white/10 px-4 h-12"
    style={{ backgroundColor: CXO.row }}
  >
    <span className="text-xs uppercase tracking-widest text-gray-500 w-32 shrink-0">{label}</span>
    <span className="text-sm text-gray-200">{value}</span>
  </div>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
    <span className="mt-[7px] w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: CXO.accent }} />
    <span>{children}</span>
  </li>
);

const CXOCaseStudy: React.FC<CXOCaseStudyProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const noise = document.querySelector<HTMLElement>('.noise-bg');
    if (noise) noise.style.display = 'none';
    return () => {
      document.body.style.overflow = 'unset';
      if (noise) noise.style.display = '';
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const mailto = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `${project.title} case study — let's talk`
  )}`;

  return (
    <div className="fixed inset-0 z-[110] cursor-auto font-sans flex flex-col" style={{ backgroundColor: CXO.canvas }}>
      {/* Top bar */}
      <header className="h-14 shrink-0 border-b border-white/10 px-4 md:px-6 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center"
            style={{ backgroundColor: CXO.tile }}
          >
            <Unlock size={14} className="text-emerald-400" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white">{project.title}</span>
          <span className="text-sm text-gray-500 hidden sm:inline">Closed Case Study · Unlocked</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-1.5 py-0.5 rounded border border-white/15 text-[10px] text-gray-400">esc</kbd>
            close &amp; re-lock
          </span>
          <button
            onClick={onClose}
            aria-label="Close and re-lock case study"
            className="p-2 rounded-md hover:bg-white/10 transition-colors text-gray-300"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Scroll canvas */}
      <div className="relative flex-1 overflow-y-auto">
        <div className="relative mx-auto" style={{ maxWidth: COL * 2 }}>
          {/* Continuous column frame */}
          <div className="absolute inset-y-0 left-0 border-l border-dashed border-white/10 hidden md:block" />
          <div className="absolute inset-y-0 right-0 border-r border-dashed border-white/10 hidden md:block" />

          {/* ─ Hero ─ */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="px-6 md:px-12 pt-24 md:pt-32 pb-20 md:pb-28"
          >
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-gray-500 mb-8">
              <ShieldAlert size={13} style={{ color: CXO.accent }} />
              Shared under NDA — please don't redistribute
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              CXO<span style={{ color: CXO.accent }}>.</span> Streamoid OS
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12">
              One design system, four AI apps, and a single rule that shaped every screen:
              an agent can do the work, but a human stays in command.
            </p>
            <div className="grid sm:grid-cols-2 gap-3.5">
              <FactRow label="Role" value="Senior Product Designer — founding platform designer" />
              <FactRow label="Timeline" value="2023 – Present · v2.1 in production" />
              <FactRow label="Scope" value="Design system · Navigation · InChat · Onboarding" />
              <FactRow label="Platform" value="CXO + Artifax · Photogenix · Catalogix" />
            </div>
          </motion.section>

          {/* ─ 01 Mandate ─ */}
          <Section index="01" title="The mandate" annotation="Four AI products, one OS">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              Streamoid spent a decade automating fashion catalog operations, then rebuilt itself
              around AI agents. By 2023 it had three AI products — Artifax for design, Photogenix
              for imagery, Catalogix for catalog data — each with its own screens, navigation, and
              habits. CXO is the operating system that unifies them: one workspace where teams brief
              agents, watch them work, and approve what ships.
            </p>
            <Panel>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-gray-200 font-medium">The design brief I set for myself:</span>{' '}
                make four fast-moving AI products feel like one calm system — for buyers who are
                enterprise fashion brands, not AI enthusiasts. The answer wasn't a redesign of four
                apps. It was a platform design system and three shared surfaces: navigation,
                conversation, and onboarding.
              </p>
            </Panel>
          </Section>

          {/* ─ 02 Variables ─ */}
          <Section index="02" title="Variables before screens" annotation="Live — rendered from the file's tokens">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              Everything started as variables, not screens. Raw scales (color, type, spacing, radius)
              sit under alias tokens — <em className="not-italic text-gray-200">surface/canvas</em>,{' '}
              <em className="not-italic text-gray-200">text/primary</em>,{' '}
              <em className="not-italic text-gray-200">border/divider</em> — so every component reads
              meaning, not hex. What follows isn't a screenshot of the system:{' '}
              <span className="text-gray-100">it's the system itself, rebuilt in code from the exact
              variable values in the Figma file.</span> Toggle, hover, focus — it all works.
            </p>
            <DSColor />
            <DSTypography />
            <DSSpacingRadius />
            <div className="grid md:grid-cols-3 gap-4">
              <Panel className="!p-6">
                <div className="text-2xl font-semibold text-white mb-1">2 themes, 0 forks</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  One alias set resolved twice — the mode switch above is the entire theming strategy.
                </p>
              </Panel>
              <Panel className="!p-6">
                <div className="text-2xl font-semibold text-white mb-1">19 type styles</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Display, headings, lead and body — one family (Inter), strict line heights, four weights.
                </p>
              </Panel>
              <Panel className="!p-6">
                <div className="text-2xl font-semibold text-white mb-1">12 + 4</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Twelve spacing steps (2→56) and four radii (8/12/16/full) cover every layout in four apps.
                </p>
              </Panel>
            </div>
          </Section>

          {/* ─ 03 Atoms ─ */}
          <Section index="03" title="Atoms" annotation="Interactive — switch, check, select">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              The smallest pieces carry the strictest rules: selection states resolve to{' '}
              <em className="not-italic text-gray-200">text/link</em>, never a one-off blue; status
              always speaks through the four semantic aliases; and every control answers focus,
              hover, and disabled from the same token logic.
            </p>
            <DSAtoms />
          </Section>

          {/* ─ 04 Molecules ─ */}
          <Section index="04" title="Molecules" annotation="SC-Button: 180 variants, one component">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              SC-Button alone resolves five variants, three sizes, four icon styles, and three states
              from a single component — the Figma set holds 180 combinations so that no surface in
              any of the four apps ever draws its own button. Fields, tabs, and prompt cards follow
              the same discipline.
            </p>
            <DSMolecules />
          </Section>

          {/* ─ 05 Organisms ─ */}
          <Section index="05" title="Organisms" annotation="Collapse the sidebar — it's real">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              Organisms are where the system pays rent. The sidebar below is the real composition —
              logo unit, item groups, app rail, the low-credits alert, profile, and version stamp —
              and it collapses from 288px to an icon rail exactly like production. The brief composer
              is the front door of the whole OS, built from the same molecules.
            </p>
            <DSOrganisms />
          </Section>

          {/* ─ 06 Sample component composition ─ */}
          <Section index="06" title="Sample component composition" annotation="Instances all the way down">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              Composition is where the system proves itself. This is the sidebar sheet from the file,
              rebuilt live: every part is a component with an API — logo unit, menu row, alert,
              profile — and the Artifax shell is assembled purely from instances of them. The props
              panel is the contract designers work against: flip{' '}
              <em className="not-italic text-gray-200">State</em> to collapsed and the whole shell
              follows. Configure, never detach.
            </p>
            <DSComposition />
          </Section>

          {/* ─ 07 Navigation ─ */}
          <Section index="07" title="Navigation that scales" annotation="Sidebar v1 → v3">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              The sidebar is where "four apps, one OS" lives or dies. Three generations of it — from
              a per-app sidebar, to a shared shell with app switcher, to the v3 rail that collapses
              from 288px to a 72px icon rail without losing the workspace, credits, or profile
              anchors. Every app — CXO, Artifax, Photogenix, Catalogix — runs the same component with
              its own logo unit and menu slots.
            </p>
            <FigureCard
              src="/images/cxo/cxo-sidebar-landing.png"
              alt="Four sidebar density explorations beside the agent landing surface"
              caption="Density explorations for the v3 sidebar — grouping briefs, canvases, and chat history while keeping credits and workspace state pinned."
            />
            <ul className="space-y-4 pt-2">
              <Bullet>
                The app switcher treats sibling apps as places, not links — switching apps keeps your
                workspace, profile, and credit state pinned in the same physical positions.
              </Bullet>
              <Bullet>
                System states live in the rail: the low-credits warning is a sidebar citizen, not a
                toast — persistent, dismissible, and impossible to lose.
              </Bullet>
              <Bullet>
                The version stamp (v2.1.2) ships in the sidebar by design: enterprise admins file
                better bugs when the build is one glance away.
              </Bullet>
            </ul>
          </Section>

          {/* ─ 08 InChat ─ */}
          <Section index="08" title="Briefing agents like teammates" annotation="InChat, R1 → R3">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              CXO's core promise is <span className="text-gray-100">"Brief it once. They handle the
              rest."</span> InChat is where that happens — and it took three full revisions to get the
              conversation surface right. The hard problem wasn't chat UI; it was making delegated
              work feel supervised: what is the agent doing right now, what will it cost, and how do
              I stop it?
            </p>
            <FigureCard
              src="/images/cxo/cxo-inchat.png"
              alt="InChat conversation surface with a running agent task"
              caption="InChat R2: a brief in flight — the working state stays visible, the Stop control stays reachable, and sibling apps stay one click away."
            />
            <FigureCard
              src="/images/cxo/cxo-agents-landing.png"
              alt="CXO landing surface with brief composer and quick prompts"
              caption="The landing surface: a single composer plus quick-prompt cards seeded by role — the empty state teaches the product."
            />
            <ul className="space-y-4 pt-2">
              <Bullet>
                R1 → R3 arc: from a chat transcript, to task cards inside conversation, to briefs as
                first-class objects with persistent working states and an always-visible Stop.
              </Bullet>
              <Bullet>
                Quick prompts aren't decoration — they encode the highest-value jobs ("List my
                products on Amazon") so the first brief succeeds without learning prompt-craft.
              </Bullet>
              <Bullet>
                Conversations double as project history: named briefs in the rail replace a separate
                task manager nobody asked for.
              </Bullet>
            </ul>
          </Section>

          {/* ─ 09 Onboarding ─ */}
          <Section index="09" title="Onboarding without the maze" annotation="Three steps, one skip">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              Enterprise onboarding usually means a form gauntlet. CXO's is three steps — who you
              are, what you do, where you work — and every step is skippable. The role step
              personalizes the OS: pick Design, Merchandising, Studio, Marketing &amp; brand, or
              Founder &amp; operator, and your landing page, quick prompts, and default app change to
              match.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <FigureCard
                src="/images/cxo/cxo-onboarding.png"
                alt="Welcome to Streamoid OS onboarding step"
                caption="Step one: identity — three fields, one action, on the brand ember."
              />
              <FigureCard
                src="/images/cxo/cxo-personalization.png"
                alt="Role selection cards in onboarding"
                caption="Step two: role cards tune the OS — with 'Skip, show me everything' as a first-class path."
              />
            </div>
            <Panel>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-gray-200 font-medium">The principle:</span> personalization must
                never be a wall. Every answer makes the product better; no answer makes it unusable.
                "Skip, show me everything" is the same size as the happy path — measured against the
                JD's bar of simplifying multi-step flows without losing power.
              </p>
            </Panel>
          </Section>

          {/* ─ 10 Enterprise surface ─ */}
          <Section index="10" title="The enterprise surface" annotation="Workspaces, teams, credits">
            <p className="text-base md:text-[17px] text-gray-300 leading-relaxed md:leading-8 max-w-2xl">
              Underneath the agents is an admin product: workspaces with isolated data, team
              management and invites, billing built around a shared credit pool, and settings that
              survive an enterprise procurement review. The same system components carry all of it —
              the tables, fields, and cards admins see are the molecules the consumer surfaces use.
            </p>
            <ul className="space-y-4 pt-2">
              <Bullet>
                Credits make agent cost legible: one currency across all four apps, with low-balance
                states designed into the navigation rather than bolted on as emails.
              </Bullet>
              <Bullet>
                Workspace switching is modeled on the app switcher — same gesture, same anchors — so
                consultants managing multiple brands never relearn the pattern.
              </Bullet>
              <Bullet>
                Teams, invites, and billing reuse the field/table organisms from the design system —
                the admin area cost weeks, not quarters, because the system existed first.
              </Bullet>
            </ul>
          </Section>

          {/* ─ 11 Outcomes ─ */}
          <Section index="11" title="Where it landed" annotation="Outcomes & learnings">
            <div className="grid sm:grid-cols-3 gap-4">
              <Panel className="!p-6">
                <div className="text-3xl font-semibold mb-1" style={{ color: CXO.accent }}>4 apps</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  run on one design system — CXO, Artifax, Photogenix, Catalogix share tokens,
                  components, and navigation.
                </p>
              </Panel>
              <Panel className="!p-6">
                <div className="text-3xl font-semibold mb-1" style={{ color: CXO.accent }}>v2.1</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  shipping in production — the platform sells today with a free tier and credit-based
                  plans.
                </p>
              </Panel>
              <Panel className="!p-6">
                <div className="text-3xl font-semibold mb-1" style={{ color: CXO.accent }}>3 → 1</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  navigation generations consolidated into a single sidebar component every app
                  inherits.
                </p>
              </Panel>
            </div>
            <ul className="space-y-4 pt-2">
              <Bullet>
                Agentic UI is a trust problem before it is an interaction problem — visible working
                states, visible cost, and a reachable Stop did more for adoption than any layout.
              </Bullet>
              <Bullet>
                Alias tokens are leverage: four apps and two themes from one sheet is how a single
                designer keeps a platform coherent.
              </Bullet>
              <Bullet>
                The empty state is the onboarding: quick prompts taught the product better than the
                tour we never built.
              </Bullet>
            </ul>
          </Section>

          {/* ─ Footer ─ */}
          <div className="relative border-t border-dashed border-white/10">
            <Crosshair side="left" />
            <Crosshair side="right" />
            <div className="px-6 md:px-12 py-16 md:py-20 space-y-7">
              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                This case study is shared under NDA for interview purposes. Happy to walk through any
                decision, file, or iteration live.
              </p>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <a
                  href={mailto}
                  className="group flex items-center gap-3 rounded-lg border border-white/10 px-4 h-14 transition-colors hover:border-white/25"
                  style={{ backgroundColor: CXO.row }}
                >
                  <div
                    className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: CXO.tile }}
                  >
                    <Mail size={16} className="text-gray-300" />
                  </div>
                  <span className="flex-1 text-sm text-gray-200">Talk to me about this work</span>
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all" />
                </a>
                <button
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-lg border border-white/10 px-4 h-14 transition-colors hover:border-white/25 text-left"
                  style={{ backgroundColor: CXO.row }}
                >
                  <div
                    className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: CXO.tile }}
                  >
                    <X size={16} className="text-gray-300" />
                  </div>
                  <span className="flex-1 text-sm text-gray-200">Close &amp; re-lock the case study</span>
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CXOCaseStudy;
