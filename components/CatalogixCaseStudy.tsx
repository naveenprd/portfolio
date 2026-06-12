import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { CONTACT_INFO } from '../data';
import { Boxes, X, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CXO, Crosshair, Section, Panel, FigureCard, Bullet, FactStrip } from './CXOCaseStudy';

/*
 * Catalogix product case study, on the same blueprint chrome as CXO.
 * This one is a PRODUCT story — problem, decisions, screens, outcomes —
 * not a design-system showcase; the system gets one section, not six.
 */

interface CatalogixCaseStudyProps {
  project: ProjectItem;
  onClose: () => void;
}

const COL = 470;

const CATALOGIX_FACTS = [
  { label: 'Role', value: 'Senior Product Designer — sole designer across the platform' },
  { label: 'Scope', value: 'Console · Catalog · Product record · Import · Taxonomy · AI training · Repair' },
  { label: 'Reach', value: '30+ brands · 5M+ SKUs a year · Amazon to no-API channels' },
];

const IMG = (n: number) => `/images/catalogix images/Catalogix ${n}.webp`;

interface DecisionData {
  context: string;
  decision: string;
  tradeOff: string;
  outcome: string;
}

const DecisionRow: React.FC<{ label: string; muted?: boolean; children: React.ReactNode }> = ({ label, muted, children }) => (
  <div>
    <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2">{label}</div>
    <p className={`text-sm leading-relaxed ${muted ? 'text-gray-400' : 'text-gray-200'}`}>{children}</p>
  </div>
);

const DecisionPanel: React.FC<{ d: DecisionData }> = ({ d }) => (
  <Panel className="space-y-6">
    <DecisionRow label="Context" muted>{d.context}</DecisionRow>
    <DecisionRow label="Decision">{d.decision}</DecisionRow>
    <DecisionRow label="Trade-off" muted>{d.tradeOff}</DecisionRow>
    <div
      className="rounded-r-xl rounded-l-md p-4 md:p-5"
      style={{ backgroundColor: 'rgba(91,103,242,0.08)', borderLeft: `2px solid ${CXO.accent}` }}
    >
      <div className="text-[11px] font-mono uppercase tracking-widest mb-2" style={{ color: '#8B95FF' }}>Outcome</div>
      <p className="text-sm leading-relaxed text-gray-100">{d.outcome}</p>
    </div>
  </Panel>
);

const DECISIONS: DecisionData[] = [
  {
    context:
      'Each marketplace needs different attributes, media rules, and vocabularies for the same product. The obvious design was a separate listing copy per channel — it is also how most competitors worked.',
    decision:
      'One canonical product record with per-channel overlays: a Core Attribute set plus channel tabs (Amazon, Flipkart, Myntra, MANGO…) that inherit, override, or extend it — with linked attributes marked explicitly.',
    tradeOff:
      'A heavier mental model upfront — users had to learn inheritance instead of editing flat copies. We paid that cost once in onboarding rather than forever in divergent data.',
    outcome:
      '"Fix once, sync everywhere" became the product\'s core promise. Channel data cannot silently drift, and adding a channel is additive work, not multiplicative.',
  },
  {
    context:
      'Bulk CSV import was the riskiest moment in the funnel: one wrong column mapping poisoned thousands of products, and users blamed the AI for it.',
    decision:
      'A guided four-step wizard — Select Header → Map Attributes → Map Values → Repair — where AI proposes each mapping and the user confirms it, with per-column validity shown before commit ("50% of rows in this column have valid data — 200 of 400").',
    tradeOff:
      'More steps than one-shot auto-import; power users initially pushed back on confirming what the AI had already gotten right.',
    outcome:
      'Errors became visible before they entered the catalog instead of after. Confirmation turned the AI from a black box into a colleague whose work you check.',
  },
  {
    context:
      'Brands needed their own taxonomy — but defining attributes per category meant re-declaring "Color" hundreds of times, while global attributes meant nothing fit anyone.',
    decision:
      'Schema inheritance: attributes declared at any node cascade to children, with explicit provenance labels ("Inherited: All Products"), per-node overrides and disables, and a "Hide Inherited" toggle to manage the noise.',
    tradeOff:
      'Inheritance is genuinely harder to design and explain than flat lists — we accepted real UI complexity (provenance, override states) to avoid unscalable duplication.',
    outcome:
      '"Build your own taxonomy" became a headline platform capability; enterprise schemas with dozens of categories stay maintainable by a single catalog admin.',
  },
];

const SITEMAP = [
  { title: 'Workspace Console', items: 'Stores · Team & Roles · Insights · AI Training · Developer · Billing' },
  { title: 'Store Catalog', items: 'Products Grid & Views · Collections · Asset Library · Apps · Store Settings' },
  { title: 'Product Record', items: 'Channels · Information (Core + Per-Channel) · Multimedia · Variants · Related Products' },
  { title: 'Import Pipeline', items: 'Select Header · Map Attributes · Map Values · Review & Repair' },
  { title: 'Taxonomy Studio', items: 'Create Hierarchy · Define Attributes · Inheritance & Overrides' },
];

const DS_COLORS = [
  { name: 'Console Navy', hex: '#111330' },
  { name: 'Surface Gray', hex: '#F8F8F8' },
  { name: 'Action Indigo', hex: '#6672F9' },
  { name: 'Confirm Green', hex: '#06A917' },
  { name: 'Flag Red', hex: '#FF5453' },
];

const PROSE = 'text-lg md:text-2xl text-gray-300 leading-relaxed md:leading-9 max-w-2xl';

const CatalogixCaseStudy: React.FC<CatalogixCaseStudyProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
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
            <Boxes size={14} style={{ color: CXO.accent }} />
          </div>
          <span className="text-sm font-display font-semibold tracking-wide text-white">{project.title}</span>
          <span className="text-sm text-gray-500 hidden sm:inline">Product Case Study</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-1.5 py-0.5 rounded border border-white/15 text-[10px] font-mono text-gray-400">esc</kbd>
            close
          </span>
          <button
            onClick={onClose}
            aria-label="Close case study"
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
            className="px-6 md:px-12 pt-28 md:pt-40 pb-24 md:pb-36"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.18em] uppercase text-gray-500 mb-12">
              <Boxes size={13} style={{ color: CXO.accent }} />
              B2B SaaS · AI · Enterprise · Streamoid
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-white tracking-tight mb-8">
              Catalogix<span style={{ color: CXO.accent }}>.</span>ai
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-16">
              The catalog engine of an agentic retail platform — AI structures product data and
              publishes it to every marketplace, with humans approving what ships.
            </p>
            <FactStrip facts={CATALOGIX_FACTS} />
          </motion.section>

          {/* ─ 01 The problem ─ */}
          <Section index="01" title="The problem" annotation="Weeks per listing, rejections after">
            <p className={PROSE}>
              Every marketplace speaks its own language — its own templates, taxonomies, attribute
              rules, and rejection logic. Fashion brands were stitching together spreadsheets,
              supplier feeds, and PIM exports, then manually re-mapping the same product for Amazon,
              Myntra, Flipkart, Zalando, and a dozen more channels. Listings took weeks, rejections
              were discovered only after upload, and every new channel multiplied the work instead
              of adding to it.
            </p>
            <div
              className="rounded-xl border border-white/10 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 overflow-hidden"
              style={{ backgroundColor: CXO.row }}
            >
              <div className="px-6 py-5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2.5">Before</div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Brand teams manually re-mapped every product per channel from spreadsheets and PIM
                  exports. New listings took weeks, rejections surfaced after upload, and each new
                  channel needed vendor support or dedicated headcount.
                </p>
              </div>
              <div className="px-6 py-5">
                <div className="text-[11px] font-mono uppercase tracking-widest mb-2.5" style={{ color: '#8B95FF' }}>After</div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  One canonical product record, AI-prefilled and human-verified, publishing to every
                  channel — including ones with no API. The platform takes brands from brief to live
                  listing in under 48 hours.
                </p>
              </div>
            </div>
            <ul className="space-y-4 pt-2">
              <Bullet>
                Seven channel schemas plus the core record on one product page — without turning it
                into a tab maze.
              </Bullet>
              <Bullet>
                Showing AI confidence honestly at every altitude (cell, column, model) without
                drowning the grid in chrome.
              </Bullet>
              <Bullet>
                Enterprise governance — approvals, roles, audit — that stays out of the way of teams
                pushing thousands of SKUs through a seasonal drop.
              </Bullet>
            </ul>
          </Section>

          {/* ─ 02 Who it's for ─ */}
          <Section index="02" title="Who it's for" annotation="Catalog teams, mid-season">
            <p className={PROSE}>
              Catalogix is built for catalog, content, and ecommerce teams at fashion brands and
              marketplaces — the people who get thousands of styles live each season — and for the
              operations and merchandising leaders trying to scale SKU counts and channels without
              scaling headcount.
            </p>
            <Panel>
              <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-5">
                What the research kept saying
              </div>
              <ul className="space-y-4">
                <Bullet>
                  Catalog teams think in "styles," not SKUs — five size variants are one product in
                  their head. The data model said otherwise; the UI had to take the team's side.
                </Bullet>
                <Bullet>
                  Trust in AI dies the first time it is wrong silently. Teams happily accept partial
                  automation if the remainder is clearly flagged and easy to repair.
                </Bullet>
                <Bullet>
                  Rejection debugging was the single most hated task — hours lost per upload. "Fix it
                  before it ships" beat "report it after" in every conversation.
                </Bullet>
                <Bullet>
                  Every channel adds a schema, not just a destination: required fields, controlled
                  vocabularies, image rules, and templates that change without notice.
                </Bullet>
              </ul>
            </Panel>
          </Section>

          {/* ─ 03 The mandate ─ */}
          <Section index="03" title="The mandate" annotation="Map once, publish everywhere">
            <ul className="space-y-4">
              <Bullet>
                Design one workflow that takes messy source data to channel-ready listings — map
                once, publish everywhere.
              </Bullet>
              <Bullet>
                Make AI output verifiable at a glance: a human should always know what the model
                filled in, how confident it is, and how to fix it.
              </Bullet>
              <Bullet>
                Carry enterprise governance — multi-stage approvals, roles, audit trails — without
                slowing down teams pushing thousands of SKUs through each seasonal drop.
              </Bullet>
              <Bullet>
                Build a design system that lets one designer cover an entire platform: seven product
                surfaces, one language.
              </Bullet>
            </ul>
            <Panel>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2.5">Operating range</div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Sole designer for the entire product: workspace console, store catalog, product
                    record, import pipeline, taxonomy builder, AI training console, and review/repair
                    flows — plus the design system underneath all of them.
                  </p>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2.5">Through three pivots</div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Joined when this was internal cataloging tooling; designed through the 2023 pivot
                    from services to software and the repositioning as an agentic platform. The
                    object model and IA had to survive each shift.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
                {['CV/ML team', 'Marketplace integrations', 'Customer ops & onboarding', 'Founders / GTM'].map(d => (
                  <span
                    key={d}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-gray-400"
                    style={{ backgroundColor: CXO.tile }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Panel>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { n: '1', t: 'Sit with the work', d: 'Shadowed catalog operators processing real seasonal drops to map where the hours actually went — mapping, fixing, re-uploading.' },
                { n: '2', t: 'Model the objects first', d: 'Styles, SKUs, channels, attributes, vocabularies: agreed the object model with engineering before drawing screens.' },
                { n: '3', t: 'System before surfaces', d: 'Tokens, density rules, status semantics, and the load-bearing patterns came first; every flow assembled from them.' },
                { n: '4', t: 'Ship flow by flow', d: 'Import, record, taxonomy, training, repair — each shipped against real enterprise catalogs with weekly feedback.' },
              ].map(s => (
                <Panel key={s.n} className="!p-6">
                  <div className="text-2xl font-display font-semibold mb-2" style={{ color: CXO.accent }}>{s.n}</div>
                  <div className="text-sm font-semibold text-white mb-2">{s.t}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.d}</p>
                </Panel>
              ))}
            </div>
          </Section>

          {/* ─ 04 The console ─ */}
          <Section index="04" title="The catalog console" annotation="1,500+ rows, kept calm">
            <p className={PROSE}>
              The store catalog is where teams live for eight hours a day: nearly two thousand
              products on screen with imagery, attributes, approval state, and live team presence.
              Density is a feature here — and the grid takes the team's side by grouping size SKUs
              into the styles people actually think in.
            </p>
            <FigureCard
              src={IMG(1)}
              alt="Catalogix store catalog: 1,856 products grouped by style with approval meter, attribute columns, statuses and live team presence"
              caption="The store catalog at working density — 1,856 products grouped by style, approval coverage pinned at the top, statuses and team presence on every row."
            />
            <ul className="space-y-4 pt-2">
              <Bullet>
                Size variants roll up into style rows — every count, quota, and bulk action resolves
                to the unit catalog teams think in.
              </Bullet>
              <Bullet>
                Governed publishing is visible, not buried: Draft → Under Review → Approved → Active
                statuses ride on the rows, with role-based assignment and a full audit trail.
              </Bullet>
              <Bullet>
                Grids render 1,500+ products with imagery and live presence — virtualization shaped
                the fixed row heights, column management, and image loading.
              </Bullet>
            </ul>
          </Section>

          {/* ─ 05 One record, every channel ─ */}
          <Section index="05" title="One record, every channel" annotation="Fix once, sync everywhere">
            <p className={PROSE}>
              The product record is the heart of the system: one canonical record, with channel
              overlays for Amazon, Flipkart, Myntra, MANGO and the rest. Core attributes cascade
              into each channel tab; linked fields are marked, completeness is measured per channel,
              and media rules are enforced where the images live.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <FigureCard
                src={IMG(4)}
                alt="Product record Information tab showing Core Attribute set with required and optional completeness meters and attribute filters"
                caption="Information, Core Attribute set — required/optional meters, linked-attribute filters, and LOV-controlled fields."
              />
              <FigureCard
                src={IMG(3)}
                alt="Product record Multimedia tab with per-channel rail, media cards carrying warnings and visibility states"
                caption="Multimedia with the channel rail — warnings ride each asset, visibility is explicit, and channel rules apply at the source."
              />
            </div>
            <DecisionPanel d={DECISIONS[0]} />
          </Section>

          {/* ─ 06 Import without fear ─ */}
          <Section index="06" title="Import without fear" annotation="AI proposes, humans confirm">
            <p className={PROSE}>
              Bulk import was the riskiest moment in the funnel — one wrong column mapping could
              poison thousands of products. The wizard turns it into a supervised conversation: the
              AI proposes, shows its evidence, and nothing touches the catalog until a human
              confirms it.
            </p>
            <FigureCard
              src={IMG(6)}
              alt="Import wizard Map Attributes step with confirmed STYLE ID to SKU mappings, a duplicate column case and per-column validity"
              caption="Map Attributes — confirmed mappings in green, a duplicate STYLE ID column held for disambiguation, and per-column validity ('200 of 400 rows valid') before anything commits."
            />
            <DecisionPanel d={DECISIONS[1]} />
            <ul className="space-y-4">
              <Bullet>
                Duplicate or ambiguous columns (two "STYLE ID" headers mapping to one SKU) get
                disambiguated by the user — the wizard never guesses silently.
              </Bullet>
              <Bullet>
                Partially valid columns are neither auto-accepted nor rejected — repair is a
                first-class path, not an error state.
              </Bullet>
            </ul>
          </Section>

          {/* ─ 07 Taxonomy that scales ─ */}
          <Section index="07" title="Taxonomy that scales" annotation="Inheritance with provenance">
            <p className={PROSE}>
              Brands model their own catalog structure — departments, categories, attributes — and
              the schema has to stay maintainable at enterprise size. Attributes declared at any
              node cascade down, and every inherited value says exactly where it came from.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <FigureCard
                src={IMG(2)}
                alt="Taxonomy onboarding showing a Department to Category node tree for Mens, Womens, Kids"
                caption="Onboarding builds the hierarchy visually — departments to categories, with node counts and grouping levels."
              />
              <FigureCard
                src={IMG(7)}
                alt="Taxonomy Studio Define Attributes step with product group tree and inherited attribute provenance labels"
                caption="Define Attributes — 'Inherited: All Products' provenance on every cascaded field, per-node overrides and disables, and a 'Hide Inherited' toggle."
              />
            </div>
            <DecisionPanel d={DECISIONS[2]} />
          </Section>

          {/* ─ 08 Verifiable AI ─ */}
          <Section index="08" title="Verifiable AI" annotation="Accuracy, shown honestly">
            <p className={PROSE}>
              The AI is a colleague whose work you check, not a black box. The training console
              shows per-attribute accuracy with deltas against the previous model — including the
              embarrassing numbers — and the repair surface turns rejection debugging into a
              five-minute pass.
            </p>
            <FigureCard
              src={IMG(5)}
              alt="AI model training console with per-attribute accuracy deltas and sample counts per value"
              caption="AI Training — per-attribute accuracy against the previous model (fabric composition +78%, neckline +34%) with sample coverage per value. Ops leads see exactly what to retrain."
            />
            <FigureCard
              src={IMG(8)}
              alt="Review and Repair spreadsheet surface with 14 errors and 136 warnings, flagged style code cells"
              caption="Review & Repair — errors block, warnings don't. Flagged cells inline in a spreadsheet-style surface: 14 errors to fix, 136 warnings that won't stop the drop."
            />
            <ul className="space-y-4">
              <Bullet>
                Model accuracy varies wildly per attribute (fabric composition vs. sleeve length) —
                the UI never implies uniform confidence.
              </Bullet>
              <Bullet>
                One percentage language carries import validity, completeness, and model accuracy
                through the wizard, the record, and the training console.
              </Bullet>
            </ul>
          </Section>

          {/* ─ 09 Built with engineering ─ */}
          <Section index="09" title="Built with engineering" annotation="Edge cases as design inputs">
            <p className={PROSE}>
              The hardest constraints came from reality, not from the backlog — and most of the
              product's shape is an answer to one of them.
            </p>
            <ul className="space-y-4">
              <Bullet>
                Channels with no API at all — listings go out via email, FTP, or seller dashboards,
                yet still need status tracking and daily checks in the same queue.
              </Bullet>
              <Bullet>
                Marketplace templates change without notice — channel forms are generated from
                schemas with controlled vocabularies rather than hand-crafted, so onboarding a new
                channel needs no new design work.
              </Bullet>
              <Bullet>
                Staged statuses add friction to small edits, but enterprise audit made review state
                non-negotiable — so the system makes state visible everywhere instead of hiding the
                workflow.
              </Bullet>
              <Bullet>
                Five size SKUs are one style; two "STYLE ID" columns can map to one SKU; 200 of 400
                rows can be valid — the unglamorous cases got first-class UI, because that is where
                trust is won.
              </Bullet>
            </ul>
          </Section>

          {/* ─ 10 The system underneath ─ */}
          <Section index="10" title="The system underneath" annotation="One designer, seven surfaces">
            <p className={PROSE}>
              The design system was the survival strategy: one designer, seven surfaces, enterprise
              customers. Tokens, density rules, and a small set of load-bearing patterns let every
              new flow start at 80% done.
            </p>
            <Panel>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2.5">How it evolved</div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    It began as conventions inside the catalog grid, was extracted into tokens and
                    components as the wizard count grew, and absorbed the agentic pivot — the same
                    meters, queues, and repair tables that served manual workflows now report what
                    agents did overnight.
                  </p>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2.5">Load-bearing patterns</div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    The stepper shell is shared by the import and taxonomy wizards; the channel rail
                    is one component across Multimedia and Information; a single completeness-meter
                    pattern carries approval coverage, required-field progress, import validity, and
                    model accuracy.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-6 pt-5 border-t border-white/10">
                {DS_COLORS.map(c => (
                  <span key={c.name} className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 rounded border border-white/20" style={{ backgroundColor: c.hex }} />
                    <span className="text-[11px] font-mono text-gray-400">{c.name}</span>
                  </span>
                ))}
                <span className="text-[11px] font-mono text-gray-600">· Inter, tuned for grid density</span>
              </div>
            </Panel>
            <div
              className="rounded-xl border border-white/10 divide-y divide-white/10 overflow-hidden"
              style={{ backgroundColor: CXO.row }}
            >
              {SITEMAP.map(s => (
                <div key={s.title} className="px-6 py-4 grid md:grid-cols-[200px_1fr] gap-1 md:gap-6 items-baseline">
                  <span className="text-sm font-medium text-gray-200">{s.title}</span>
                  <span className="text-xs font-mono text-gray-500 leading-relaxed">{s.items}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ─ 11 Where it landed ─ */}
          <Section index="11" title="Where it landed" annotation="Outcomes & learnings">
            <p className={PROSE}>
              Catalogix became the catalog engine of an agentic retail platform: AI agents source,
              structure, and publish product data across every channel, while the UI gives humans
              the levers that matter — confirm the mapping, approve the listing, repair the flagged
              rows, retrain the weak attribute.
            </p>
            <div className="border-l-2 pl-6 md:pl-8 py-1" style={{ borderColor: CXO.accent }}>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                30+ brands including Ajio, ABFRL, and NewMe. 5M+ SKUs a year, published everywhere
                from Amazon and Myntra to channels with no API at all.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { v: '<48 hrs', l: 'brief to live listing' },
                { v: '80%', l: 'lower cost per SKU (up to)' },
                { v: '10x', l: 'seasonal output increase (up to)' },
              ].map(m => (
                <Panel key={m.v} className="!p-6">
                  <div className="text-3xl font-display font-semibold mb-1" style={{ color: CXO.accent }}>{m.v}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.l}</p>
                </Panel>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { v: '90%+', l: 'data quality reported by Ajio' },
                { v: '<2 days', l: 'catalog turnaround at ABFRL' },
                { v: '70%', l: 'cataloging time saved at NewMe' },
              ].map(m => (
                <Panel key={m.l} className="!p-6">
                  <div className="text-3xl font-display font-semibold text-white mb-1">{m.v}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.l}</p>
                </Panel>
              ))}
            </div>
            <p className="text-xs text-gray-600 italic">
              Platform figures and customer results as published by Streamoid and its customers.
            </p>
            <ul className="space-y-4 pt-2">
              <Bullet>
                Density is earned, not defaulted: a completeness meter in context beats a dashboard
                nobody opens.
              </Bullet>
              <Bullet>
                AI trust is a UI property. Exposing per-attribute accuracy — including the
                embarrassing numbers — made teams use the AI more, not less.
              </Bullet>
              <Bullet>
                Inheritance without provenance is gaslighting: every inherited value needs to say
                where it came from and how to override it.
              </Bullet>
              <Bullet>
                A design system is how a sole designer ships an enterprise platform. The system was
                never a side project; it was the job.
              </Bullet>
            </ul>
            <Panel>
              <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-4">What's next</div>
              <ul className="space-y-4">
                <Bullet>
                  Deepen agent-supervision patterns: overnight runs need morning-after reviews, not
                  real-time monitoring.
                </Bullet>
                <Bullet>
                  Design the surface for salability scoring — every product scored before commit,
                  with reasons and fix paths, still needs its home in the console.
                </Bullet>
              </ul>
            </Panel>
          </Section>

          {/* ─ Footer ─ */}
          <div className="relative border-t border-dashed border-white/10">
            <Crosshair side="left" />
            <Crosshair side="right" />
            <div className="px-6 md:px-12 py-16 md:py-20 space-y-7">
              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                Designed end-to-end as the sole product designer. Happy to walk through any decision,
                file, or iteration live.
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
                  <span className="flex-1 text-sm text-gray-200">Back to all work</span>
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

export default CatalogixCaseStudy;
