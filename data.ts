import { ExperienceItem, ProjectItem, SkillItem, EducationItem } from './types';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Product Designer',
    company: 'Streamoid Technologies Pvt Ltd',
    location: 'Bangalore',
    period: 'Aug 2020 - Present',
    description: 'Lead UX/UI strategy for AI-driven fashion and SaaS platforms, impacting global clients like ABFRL, Levi’s, Pantaloons, and Farfetch.',
    achievements: [
      'Designed mobile-first AI styling apps and comprehensive design systems from scratch.',
      'Catalogix.ai: Improved team efficiency by 30% through streamlined AI platform design.',
      'Piqit.in: Designed a mobile-first AI styling app and comprehensive design system from scratch.',
      'Streamoid.com: Unified three major products into a single AI Chat experience.',
      'Vortex: Designed conversation flows for a fashion AI chatbot, increasing engagement.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Product Designer',
    company: 'Habitate Technologies Pvt Ltd',
    location: 'Chennai',
    period: 'Mar 2018 - Jul 2020',
    description: 'Led product design for community-building and productivity SaaS tools used by startups and enterprise clients.',
    achievements: [
      'Habitate.io: Designed a modular UI system supporting flexible community engagement features.',
      'Orcaso.io (Acquired): Delivered a streamlined task management experience with improved adoption and team collaboration.',
      'Scrollme.today: Crafted an integrated browsing experience aggregating diverse social media content.',
      'Twixor (Consultant): Enhanced the UX for a banking support platform, optimizing for complex workflows and usability.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Creative Designer',
    company: 'Kaalya Design Agency',
    location: 'Chennai',
    period: 'Nov 2017 - Mar 2018',
    description: 'Designed responsive dashboards and landing pages across healthcare, real estate, and education clients.',
    achievements: [
      'Applied user-centric design to increase engagement and conversions across B2B and B2C projects.',
      'Created reusable design templates that reduced delivery time by 25%.',
      'Partnered with developers for pixel-perfect handoff and improved cross-team workflow.'
    ]
  },
  {
    id: 'exp-4',
    role: 'Visual Designer',
    company: 'Williams Lea Tag',
    location: 'Chennai',
    period: 'Aug 2017 - Nov 2017',
    description: 'Created branded digital assets and microsites for global marketing campaigns.',
    achievements: [
      'Developed Google Ads creatives and landing pages optimized for CTR and mobile responsiveness.',
      'Collaborated with art directors to ensure design consistency across campaigns and global markets.'
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'cxo',
    title: 'CXO',
    subtitle: 'The Agentic Retail OS — Closed Case Study',
    tags: ['Platform Design', 'Design System', 'AI', 'Closed'],
    description: 'One design system, four AI apps. The platform OS unifying Streamoid\'s agentic products. Password required.',
    imageUrl: '/images/cxo-banner.svg',
    locked: true,
    // SHA-256 of the unlock password (see ClosedCaseStudy component)
    passwordHash: '340e6f1b523e6f53e332741db66b1f143f2bd17bbc6eca0273aeb074616526b2',
    detailedContent: {
      role: 'Senior Product Designer',
      timeline: '2024 - Present',
      tools: ['Figma', 'Design Systems', 'Prototyping Tools'],
      targetAudience: {
        primary: 'Confidential — detailed in the full case study.',
      },
      problem: 'This engagement is protected under a non-disclosure agreement. The full problem statement, research artifacts, and design process are available in the unlocked case study.',
      solution: 'Placeholder — replace with the shareable solution narrative once unlocked content is finalized.',
      outcome: 'Placeholder — replace with measurable outcomes once unlocked content is finalized.',
      images: [],
    }
  },
  {
    id: 'piqit',
    title: 'Piqit.in',
    subtitle: 'Mobile-First Fashion Styling Ecosystem',
    tags: ['Mobile App', 'B2C', 'Design System', 'UX Research'],
    description: 'A dedicated platform for fashion creators to monetize content, bridging the gap between inspiration and e-commerce.',
    imageUrl: '/images/Piqit Banner image.webp',
    detailedContent: {
      role: 'Lead Product Designer',
      timeline: '2022 - 2023',
      tools: ['Figma', 'Adobe Creative Suite', 'Prototyping Tools'],
      targetAudience: {
        primary: 'Fashion Stylists, Designers, and Creators seeking monetization.',
        secondary: 'Fashion-forward Shoppers looking for curated, shoppable inspiration.'
      },
      problem: 'Creators lacked a unified platform to monetize styling expertise, while shoppers faced friction purchasing looks discovered online. The gap between inspiration and e-commerce resulted in lost revenue and poor UX.',
      goals: [
        'Architect a robust digital identity and portfolio system for fashion creators.',
        'Design the user experience for an AI-powered product tagging engine to streamline content monetization.',
        'Design a scalable, mobile-first application bridging social discovery and e-commerce.'
      ],
      research: {
        stats: [
          { value: '83%', label: 'Creators rely on fragmented tools (IG/WhatsApp)' },
          { value: '68%', label: 'Desire a curated, branded portfolio space' },
          { value: '72%', label: 'Shoppers open to discovering indie creators' }
        ],
        insights: [
            'Creators experience high friction when manually tagging products; automation is essential for adoption.',
            'Shoppers require a seamless transition from inspiration to checkout without leaving the ecosystem.',
            'Visual richness must be balanced with UI performance and fast load times on mobile networks.',
            'A dual-sided marketplace requires distinct, optimized user journeys for both creators and consumers.'
        ]
      },
      
      personas: [
        {
          name: 'Sarah, Fashion Creator',
          role: 'Freelance Stylist & Influencer',
          bio: 'Uses Instagram to find clients but struggles with managing inquiries, organizing her portfolio, and tagging products efficiently to earn affiliate revenue.',
          goals: ['Build a professional, centralized portfolio', 'Monetize content effortlessly through automated affiliate links', 'Network with brands and photographers'],
          painPoints: ['Complex onboarding on new platforms', 'Manual product tagging is tedious and error-prone', 'Low visibility and algorithmic suppression on major social networks']
        },
        {
          name: 'Alex, Fashion Enthusiast',
          role: 'Gen-Z Shopper',
          bio: 'Loves discovering indie brands and unique styles but finds it frustrating to hunt down individual pieces seen in styled looks on social media.',
          goals: ['Discover unique indie creators and niche brands', 'Shop complete, curated looks with a single click', 'Save items to personalized moodboards'],
          painPoints: ['Overwhelmed by cluttered e-commerce interfaces', 'Inability to find exact product sources from inspiration images', 'Dislikes forced sign-ups before browsing']
        }
      ],
      
      eisenMatrix: {
        urgentImportant: [
          'AI-Assisted Product Tagging Engine',
          'Creator Portfolio Architecture',
          'Mobile-First Feed Optimization'
        ],
        notUrgentImportant: [
          'Creator Analytics & Earnings Dashboard',
          'Automated Affiliate Link Generation',
          'Scalable Design System Implementation'
        ],
        urgentNotImportant: [
          'Social Sharing Integrations',
          'In-App Notification Center',
          'Basic Profile Customization'
        ],
        notUrgentNotImportant: [
          'In-App Direct Messaging',
          'Complex Gamification/Badges',
          'Third-Party Shop Plugins'
        ]
      },
      
      sitemap: [
        { title: 'Discovery Feed', items: ['Global Stream', 'Following', 'Curated For You'] },
        { title: 'Creator Studio', items: ['Upload Media', 'AI Product Tagging', 'Publishing Flow'] },
        { title: 'Shop', items: ['Categories', 'Trending Looks', 'Indie Brands'] },
        { title: 'Profile', items: ['Portfolio Grid', 'Saved Collections', 'Earnings Dashboard'] },
        { title: 'Outfit Station', items: ['Wishlist', 'Interactive Moodboards', 'Purchase History'] }
      ],
      
      designSystem: {
        summary: 'A mobile-first design system built on Atomic Design. Features an 8pt grid, custom geometric sans-serif, and WCAG-compliant colors for accessibility.',
        typography: {
          fontFamily: 'Inter',
          usage: 'Primary typeface for all UI elements, ensuring optimal legibility across varying mobile screen sizes and resolutions.',
          scale: [
            { label: 'Display XL', size: '48px', lineHeight: '1.1', weight: '700' },
            { label: 'Heading L', size: '32px', lineHeight: '1.2', weight: '600' },
            { label: 'Heading M', size: '24px', lineHeight: '1.3', weight: '500' },
            { label: 'Body Base', size: '16px', lineHeight: '1.5', weight: '400' },
            { label: 'Caption', size: '12px', lineHeight: '1.5', weight: '500' }
          ]
        },
        colors: [
          { name: 'Primary 900', hex: '#111827', usage: 'Headings, Primary Actions', textColor: '#FFFFFF' },
          { name: 'Neutral 100', hex: '#F3F4F6', usage: 'Backgrounds, Inputs', textColor: '#111827' },
          { name: 'Accent Blue', hex: '#2563EB', usage: 'Links, Active States', textColor: '#FFFFFF' },
          { name: 'Success Green', hex: '#059669', usage: 'Validation, Badges', textColor: '#FFFFFF' }
        ]
      },

      userNeeds: [
        'Creators require a frictionless method to tag products in photos without disrupting their creative workflow.',
        'Stylists need a clean, distraction-free portfolio to professionally showcase their work to brands.',
        'Shoppers demand easy discovery of indie brands and a seamless path to purchase.',
        'The ecosystem requires a unified platform that effectively bridges the gap between visual inspiration and e-commerce.'
      ],
      
      processSteps: [
        { title: 'Discovery & Architecture', description: 'Conducted user interviews with 20+ creators and mapped out the dual-persona system architecture, defining user flows and information architecture.' },
        { title: 'AI Experience Design', description: 'Designed the interaction model for a Computer Vision engine to automatically detect and suggest product tags within uploaded images.' },
        { title: 'Design System & UI', description: 'Established a scalable, mobile-first design system in Figma, ensuring a cohesive visual language across all creator and shopper touchpoints.' },
        { title: 'Prototyping & Handoff', description: 'Created high-fidelity interactive prototypes and collaborated with engineers for pixel-perfect implementation.' },
        { title: 'Usability Testing', description: 'Conducted rigorous usability testing sessions to iterate on the core monetization and discovery flows.' }
      ],
      
      features: [
        { title: 'AI-Powered Product Tagging', description: 'Leverages Computer Vision to automatically detect clothing items in photos, suggesting relevant product links and drastically reducing creator effort.' },
        { title: 'Dual-Persona Architecture', description: 'Designed distinct, optimized interfaces and data flows for creators (portfolio management, analytics) and shoppers (discovery, purchasing).' },
        { title: 'Interactive Outfit Station', description: 'A dynamic, moodboard-inspired workspace where shoppers can mix, match, and save items to create complete, shoppable looks.' },
        { title: 'Creator Monetization Engine', description: 'Automated affiliate link generation and a comprehensive earnings dashboard to track conversions and revenue.' }
      ],

      challenges: [
        { title: 'AI Experience Design', description: 'Designing an AI tagging experience that was both accurate and intuitive enough to run seamlessly during the mobile upload flow.' },
        { title: 'Dual-Persona Navigation', description: 'Designing a UI that catered to two distinct user groups (creators vs. shoppers) without causing navigation confusion.' },
        { title: 'Visual Performance', description: 'Optimizing the visual hierarchy for a media-heavy application while maintaining high performance standards.' }
      ],
      solution: 'Designed a dual-persona mobile ecosystem focused on creator monetization. Crafted the user experience for AI-automated product tagging and the "Outfit Station" interactive moodboard to bridge inspiration and commerce.',
      outcome: 'Piqit successfully bridged the gap between creators and shoppers. AI tagging reduced upload time by 40%, while the "Outfit Station" significantly boosted engagement and conversion rates.',
      learnings: [
        'Integrating AI directly into the critical path of a user journey requires meticulous interaction design to prevent UX degradation.',
        'Balancing the needs of a dual-sided marketplace demands a highly modular design system and strict separation of user journeys.',
        'Close collaboration between design and engineering ensures the final product perfectly aligns with the initial user-centric vision.'
      ],
      nextSteps: [
        'Implement AR try-on capabilities for selected apparel and accessory categories.',
        'Develop a direct brand-sponsorship portal within the creator dashboard.',
        'Optimize the AI recommendation engine to provide more personalized feed curation.'
      ],
      accessibility: [
        'Engineered WCAG AA compliant color contrast ratios across all UI components.',
        'Implemented robust semantic markup and focus states for assistive technologies.',
        'Developed an automated system to generate descriptive alt-text for fashion imagery, supporting screen readers.'
      ],
      userJourney: [
        {
          stage: 'Discovery',
          actions: ['Browsing the global feed', 'Searching for specific styles', 'Following new creators'],
          painPoints: ['Overwhelmed by irrelevant content', 'Hard to find specific items seen in photos'],
          opportunities: ['Implement AI-driven personalized feeds', 'One-tap product discovery directly from images']
        },
        {
          stage: 'Engagement',
          actions: ['Saving looks to collections', 'Liking and commenting on posts', 'Sharing outfits with friends'],
          painPoints: ['Disjointed saving process', 'Lack of social validation'],
          opportunities: ['Create a seamless "Outfit Station" for moodboarding', 'Introduce community styling challenges']
        },
        {
          stage: 'Conversion',
          actions: ['Clicking on tagged products', 'Viewing product details', 'Proceeding to checkout'],
          painPoints: ['Broken affiliate links', 'Complex checkout flows on third-party sites'],
          opportunities: ['Streamline the transition from inspiration to purchase', 'Partner with brands for in-app checkout']
        }
      ],
      images: [
        '/images/Piqit prototype.webp',
        '/images/Piqit stages.webp',
        '/images/Piqit All screens.webp'
      ]
    }
  },
  {
    id: 'catalogix',
    title: 'Catalogix.ai',
    subtitle: 'AI Agents that List Products on Every Channel',
    tags: ['B2B SaaS', 'AI', 'Enterprise', 'Design System'],
    description: 'The catalog engine of an agentic retail platform — AI structures product data and publishes it to every marketplace, with humans approving what ships.',
    imageUrl: '/images/Catalogix banner.webp',
    detailedContent: {
      role: 'Senior Product Designer',
      timeline: '2021 - Present',
      tools: ['Figma', 'FigJam', 'Design Tokens', 'Usability Testing'],
      targetAudience: {
        primary: 'Catalog, content, and ecommerce teams at fashion brands and marketplaces — the people who get thousands of styles live each season.',
        secondary: 'Operations and merchandising leaders scaling SKU counts and channels without scaling headcount.'
      },
      problem: 'Every marketplace speaks its own language — its own templates, taxonomies, attribute rules, and rejection logic. Fashion brands were stitching together spreadsheets, supplier feeds, and PIM exports, then manually re-mapping the same product for Amazon, Myntra, Flipkart, Zalando, and a dozen more channels. Listings took weeks, rejections were discovered only after upload, and every new channel multiplied the work instead of adding to it.',
      goals: [
        'Design one workflow that takes messy source data to channel-ready listings — map once, publish everywhere.',
        'Make AI output verifiable at a glance: a human should always know what the model filled in, how confident it is, and how to fix it.',
        'Carry enterprise governance — multi-stage approvals, roles, audit trails — without slowing down teams pushing thousands of SKUs through each seasonal drop.',
        'Build a design system that lets one designer cover an entire platform: seven product surfaces, one language.'
      ],
      research: {
        insights: [
            'Catalog teams think in "styles," not SKUs — five size variants are one product in their head. The data model said otherwise; the UI had to take the team\'s side.',
            'Trust in AI dies the first time it is wrong silently. Teams happily accept partial automation if the remainder is clearly flagged and easy to repair.',
            'Rejection debugging was the single most hated task — hours lost per upload. "Fix it before it ships" beat "report it after" in every conversation.',
            'Every channel adds a schema, not just a destination: required fields, controlled vocabularies, image rules, and templates that change without notice.'
        ]
      },

      operatingRange: {
        scope: 'Sole designer for the entire product: workspace console, store catalog, product record, import pipeline, taxonomy builder, AI training console, and review/repair flows — plus the design system underneath all of them.',
        ambiguity: 'Joined when this was internal cataloging tooling; designed through the company\'s 2023 pivot from services to software and its repositioning as an agentic platform. The object model and information architecture had to survive each shift.',
        dependencies: [
          'CV/ML team (attribute-extraction models)',
          'Marketplace integration engineering',
          'Customer ops & onboarding teams',
          'Founders / GTM on positioning shifts'
        ]
      },

      measurableDelta: {
        before: 'Brand teams manually re-mapped every product per channel from spreadsheets and PIM exports. New listings took weeks, rejections surfaced after upload, and each new channel needed vendor support or dedicated headcount.',
        after: 'One canonical product record, AI-prefilled and human-verified, publishing to every channel — including ones with no API. The platform takes brands from brief to live listing in under 48 hours.',
        whyItMoved: 'These are platform-level outcomes as Streamoid publishes them. What the catalog design contributed: AI prefill with visible confidence removed the typing; map-once channel overlays removed the re-work; pre-publish validation moved rejection-fixing from after upload to before it; and repair loops kept products moving without escalations.',
        metrics: [
          { value: '<48 hrs', label: 'Brief to Live Listing' },
          { value: '80%', label: 'Lower Cost per SKU (up to)' },
          { value: '10x', label: 'Seasonal Output Increase (up to)' }
        ]
      },

      decisionPoints: [
        {
          context: 'Each marketplace needs different attributes, media rules, and vocabularies for the same product. The obvious design was a separate listing copy per channel — it is also how most competitors worked.',
          decision: 'One canonical product record with per-channel overlays: a Core Attribute set plus channel tabs (Amazon, Flipkart, Myntra, MANGO…) that inherit, override, or extend it — with linked attributes marked explicitly.',
          tradeOff: 'A heavier mental model upfront — users had to learn inheritance instead of editing flat copies. We paid that cost once in onboarding rather than forever in divergent data.',
          outcome: '"Fix once, sync everywhere" became the product\'s core promise. Channel data cannot silently drift, and adding a channel is additive work, not multiplicative.'
        },
        {
          context: 'Bulk CSV import was the riskiest moment in the funnel: one wrong column mapping poisoned thousands of products, and users blamed the AI for it.',
          decision: 'A guided four-step wizard — Select Header → Map Attributes → Map Values → Repair — where AI proposes each mapping and the user confirms it, with per-column validity shown before commit ("50% of rows in this column have valid data — 200 of 400").',
          tradeOff: 'More steps than one-shot auto-import; power users initially pushed back on confirming what the AI had already gotten right.',
          outcome: 'Errors became visible before they entered the catalog instead of after. Confirmation turned the AI from a black box into a colleague whose work you check.'
        },
        {
          context: 'Brands needed their own taxonomy — but defining attributes per category meant re-declaring "Color" hundreds of times, while global attributes meant nothing fit anyone.',
          decision: 'Schema inheritance: attributes declared at any node cascade to children, with explicit provenance labels ("Inherited: All Products"), per-node overrides and disables, and a "Hide Inherited" toggle to manage the noise.',
          tradeOff: 'Inheritance is genuinely harder to design and explain than flat lists — we accepted real UI complexity (provenance, override states) to avoid unscalable duplication.',
          outcome: '"Build your own taxonomy" became a headline platform capability; enterprise schemas with dozens of categories stay maintainable by a single catalog admin.'
        }
      ],

      engineeringCollab: {
        edgeCases: [
          'Channels with no API at all — listings go out via email, FTP, or seller dashboards, yet still need status tracking and daily checks in the same queue.',
          'Spreadsheets with duplicate or ambiguous columns (two "STYLE ID" columns mapping to one SKU) — the wizard had to disambiguate, not guess.',
          'Five size SKUs are one "style": every count, quota, and bulk action had to resolve to the unit teams actually think in.',
          'Partially valid columns (200 of 400 rows clean) — neither auto-accept nor reject; repair is a first-class path.'
        ],
        techConstraints: [
          'Catalog grids render 1,500+ products with imagery and live team presence — virtualization shaped row design, fixed heights, and column management.',
          'Model accuracy varies wildly per attribute (fabric composition vs. sleeve length) — the UI could never imply uniform confidence.',
          'Marketplace templates change without notice; layouts had to absorb schema churn without redesign.'
        ],
        tradeOffs: [
          'Channel forms are generated from schemas with controlled vocabularies (LOV lists) rather than hand-crafted per marketplace — losing pixel-level control per channel, gaining the ability to onboard any new channel schema, from Amazon to no-API marketplaces, without new design work.',
          'Staged statuses (Draft → Under Review → Approved → Active) add friction to small edits, but enterprise audit requirements made review state non-negotiable — so the system makes state visible everywhere instead of hiding the workflow.'
        ]
      },

      systemThinking: {
        summary: 'The design system was the survival strategy: one designer, seven surfaces, enterprise customers. Tokens, density rules, and a small set of load-bearing patterns let every new flow start at 80% done.',
        evolution: 'It began as conventions inside the catalog grid, was extracted into tokens and components as the wizard count grew, and absorbed the company\'s agentic pivot — the same meters, queues, and repair tables that served manual workflows now report what agents did overnight.',
        reuse: 'The stepper shell is shared by the import and taxonomy wizards; the channel rail is the same component in Multimedia and Information; one completeness-meter pattern expresses approval coverage and required-field progress, and the same percentage language carries import validity and model accuracy through the wizard and the training console; the tree-node card serves both the onboarding taxonomy builder and the admin hierarchy editor.'
      },

      sitemap: [
        { title: 'Workspace Console', items: ['Stores', 'Team & Roles', 'Insights', 'AI Training', 'Developer', 'Billing'] },
        { title: 'Store Catalog', items: ['Products Grid & Views', 'Collections', 'Asset Library', 'Apps', 'Store Settings'] },
        { title: 'Product Record', items: ['Channels', 'Information (Core + Per-Channel)', 'Multimedia', 'Variants', 'Related Products', 'Timeline'] },
        { title: 'Import Pipeline', items: ['Select Header', 'Map Attributes', 'Map Values', 'Review & Repair'] },
        { title: 'Taxonomy Studio', items: ['Create Hierarchy', 'Define Attributes', 'Inheritance & Overrides'] }
      ],

      designSystem: {
        summary: 'A light, data-dense system built for eight-hour days in front of product grids: a near-black console shell around a calm white canvas with a single surface gray doing the layering, one decisive indigo for actions and progress, and a strict semantic palette — green always means verified, red always means blocked. Density is a feature: type, spacing, and states are tuned so a thousand-row catalog reads as calm, not chaotic.',
        typography: {
          fontFamily: 'Inter',
          usage: 'A single sans family across console and store surfaces. Sizes stay small and unambiguous — page titles barely larger than body; weight and color carry hierarchy so the data keeps the space.',
          scale: [
            { label: 'Page Title', size: '20px', lineHeight: '1.3', weight: '600' },
            { label: 'Section / Card Title', size: '16px', lineHeight: '1.4', weight: '600' },
            { label: 'Body & Form Labels', size: '14px', lineHeight: '1.5', weight: '400' },
            { label: 'Table Data', size: '13px', lineHeight: '1.4', weight: '400' },
            { label: 'Meta & Column Headers', size: '12px', lineHeight: '1.3', weight: '500' }
          ]
        },
        colors: [
          { name: 'Console Navy', hex: '#111330', usage: 'Navigation shell & wizard frames', textColor: '#FFFFFF' },
          { name: 'Surface Gray', hex: '#F8F8F8', usage: 'Table headers, hover rows & card fills that lift data off the white canvas', textColor: '#111330' },
          { name: 'Action Indigo', hex: '#6672F9', usage: 'Primary actions, progress & completeness meters, active states', textColor: '#FFFFFF' },
          { name: 'Confirm Green', hex: '#06A917', usage: 'Verified mappings, confirmed columns, model gains', textColor: '#FFFFFF' },
          { name: 'Flag Red', hex: '#FF5453', usage: 'Errors, blocked cells, required gaps', textColor: '#FFFFFF' }
        ]
      },

      features: [
        { title: 'Smart Import', description: 'AI proposes column mappings with per-column validity scores; users confirm, ignore, or repair before anything touches the catalog.' },
        { title: 'Per-Channel Product Record', description: 'Core attributes with channel overlays for Amazon, Flipkart, Myntra and more — linked fields, controlled vocabularies, and completeness meters per channel.' },
        { title: 'Taxonomy Studio', description: 'Visual hierarchy builder with attribute inheritance, provenance labels, and per-node overrides — brands model their own catalog structure.' },
        { title: 'AI Training Console', description: 'Per-attribute accuracy with deltas against the previous model and sample coverage — ops leads see exactly what improved and what to retrain.' },
        { title: 'Review & Repair', description: 'Errors block, warnings don\'t. A spreadsheet-style repair surface with inline flagged cells turns rejection debugging into a five-minute pass.' },
        { title: 'Governed Publishing', description: 'Draft → Under Review → Approved → Active statuses with role-based assignment, team presence, and a full audit trail across every store.' }
      ],

      processSteps: [
        { title: 'Sit With the Work', description: 'Shadowed catalog operators processing real seasonal drops to map where the hours actually went — mapping, fixing, re-uploading.' },
        { title: 'Model the Objects First', description: 'Styles, SKUs, channels, attributes, vocabularies: agreed the object model with engineering before drawing screens, so the IA wouldn\'t crack when channels were added.' },
        { title: 'System Before Surfaces', description: 'Tokens, density rules, status semantics, and the core patterns — meters, steppers, rails, grids — came first; every subsequent flow assembled from them.' },
        { title: 'Ship Flow by Flow', description: 'Import, product record, taxonomy, training, repair — each shipped against real enterprise catalogs, with onboarding teams feeding back weekly.' }
      ],

      challenges: [
        'Seven channel schemas plus the core record on one product page — without turning it into a tab maze.',
        'Showing AI confidence honestly at every altitude (cell, column, model) without drowning the grid in chrome.',
        'Enterprise governance — approvals, roles, audit — that stays out of the way of teams pushing thousands of SKUs through a seasonal drop.'
      ],
      solution: 'Catalogix became the catalog engine of an agentic retail platform: AI agents source, structure, and publish product data across every channel, while the UI gives humans the levers that matter — confirm the mapping, approve the listing, repair the flagged rows, retrain the weak attribute. The agent pipeline (Source → Structure → List → Resolve) is mirrored directly in the product\'s information architecture.',
      outcome: 'Catalogix is the catalog engine of Streamoid\'s platform — 30+ brands including Ajio, ABFRL, and NewMe, 5M+ SKUs a year, published everywhere from Amazon and Myntra to channels with no API at all.',
      proofPoints: [
        { value: '90%+', label: 'Data Quality Reported by Ajio' },
        { value: '<2 days', label: 'Catalog Turnaround at ABFRL' },
        { value: '70%', label: 'Cataloging Time Saved at NewMe' }
      ],
      outcomeNote: 'Platform figures and customer results as published by Streamoid and its customers.',
      learnings: [
        'Density is earned, not defaulted: a completeness meter in context beats a dashboard nobody opens.',
        'AI trust is a UI property. Exposing per-attribute accuracy — including the embarrassing numbers — made teams use the AI more, not less.',
        'Inheritance without provenance is gaslighting: every inherited value needs to say where it came from and how to override it.',
        'A design system is how a sole designer ships an enterprise platform. The system was never a side project; it was the job.'
      ],
      nextSteps: [
        'Deepen agent-supervision patterns: overnight runs need morning-after reviews, not real-time monitoring.',
        'Design the surface for salability scoring — the platform promises every product scored before commit, with reasons and fixes; the score, its reasons, and its fix paths still need a home in the console.'
      ],

      solutionImages: [
        '/images/catalogix images/Catalogix 1.webp',
        '/images/catalogix images/Catalogix 2.webp',
        '/images/catalogix images/Catalogix 3.webp',
        '/images/catalogix images/Catalogix 4.webp',
        '/images/catalogix images/Catalogix 5.webp',
        '/images/catalogix images/Catalogix 6.webp',
        '/images/catalogix images/Catalogix 7.webp',
        '/images/catalogix images/Catalogix 8.webp',
      ],
      images: []
    }
  },
  {
    id: 'habitate',
    title: 'Habitate.io',
    subtitle: 'The comprehensive community platform',
    tags: ['SaaS', 'Community', 'Forum', 'Events'],
    description: 'A unified community platform for discussions, meet-ups, and file sharing.',
    imageUrl: '/images/habitate images/Habitate banner.webp',
    detailedContent: {
      role: 'Founding Product Designer',
      timeline: '2020 - 2022',
      tools: ['Figma', 'Adobe Creative Suite', 'Prototyping Tools'],
      targetAudience: {
        primary: 'B2B SaaS Founders and Community Managers seeking to turn customers into an engaged community.',
        secondary: 'End-users (customers) looking for a unified space to connect, learn, and share.'
      },
      problem: 'Communities were scattered across Slack, email, and Google Drive — leading to a 40% drop in engagement. Existing platforms lacked deep white-labeling, so brands had to compromise on identity.',
      goals: [
        'Design a unified Forum for asynchronous community discussions.',
        'Build a Calendar module for scheduling and managing meet-ups.',
        'Create cDrive — a simple, secure space for file sharing.',
        'Enable seamless enterprise integrations: SSO, custom domains, and SEO.'
      ],
      features: [
        { title: 'Dynamic Theming Engine', description: 'Built a token-based "Chameleon" design system so tenants could inject their brand colors and typography instantly — no code changes needed.' },
        { title: 'Unified Community Hub', description: 'Brought discussions, events, and file sharing into one interface instead of three separate tools.' },
        { title: 'Enterprise SSO & Custom Domains', description: 'Users logged in through their company\'s existing auth — the community lived at community.brand.com, not a third-party URL.' },
        { title: 'SEO-Optimized Forums', description: 'Public discussions were indexable by search engines, driving organic discovery for the host brand.' }
      ],
      solution: 'Designed a unified community platform with Forum, Calendar, and cDrive modules. The "Chameleon" design system enabled any brand to white-label the entire experience in under 2 days.',
      outcome: 'Scaled to 50+ enterprise communities. Reduced tenant onboarding by 60% and tripled daily active users.',
      learnings: [
        'White-labeling at scale demands strict design system discipline — hardcoded values break everything.',
        'Community managers want control and analytics; end-users want simplicity. Balancing both is a constant negotiation.',
        'Investing in accessibility early paid off when onboarding large enterprise clients with strict compliance requirements.'
      ],
      images: [],
      solutionImages: [
        '/images/habitate images/Habitate1.webp',
        '/images/habitate images/Habitate2.webp',
        '/images/habitate images/Habitate3.webp',
        '/images/habitate images/Habitate4.webp',
      ]
    }
  },
  {
    id: 'vortex',
    title: 'Vortex (Stylebot)',
    subtitle: 'Conversational AI for Fashion',
    tags: ['Chatbot', 'Interaction Design', 'AI', 'NLP'],
    description: 'Conversational AI for fashion that blends natural language with rich UI experiences.',
    imageUrl: '/images/Vortex images/Vortex Banner.webp',
    detailedContent: {
      role: 'Lead UX Designer',
      timeline: '2023 - 2024',
      tools: ['Figma', 'Node.js', 'LangChain', 'React'],
      targetAudience: {
        primary: 'Mobile-First E-commerce Shoppers seeking personalized styling advice.',
        secondary: 'Customer Support and Sales Teams aiming to automate routine inquiries.'
      },
      problem: 'Shoppers were stuck with rigid filter dropdowns that couldn\'t understand what they actually meant. Queries like "something casual for a beach wedding" returned zero results. Traditional search just wasn\'t built for how people think about fashion.',
      goals: [
        'Design a chat experience that understands multi-intent fashion queries — not just keywords.',
        'Blend conversation with rich UI (carousels, size pickers, product cards) so the bot could "show, not just tell."',
        'Kill the "Zero Results" dead-end. Every query should lead somewhere useful.'
      ],
      features: [
        { title: 'Hybrid Chat + GUI', description: 'The bot didn\'t just reply with text — it injected product carousels, quick-reply chips, and size selectors directly into the conversation stream.' },
        { title: 'Smart Fallbacks', description: 'When the AI couldn\'t find an exact match or hallucinated, it gracefully suggested alternatives instead of hitting a dead-end.' },
        { title: 'Intent Recognition', description: 'Mapped complex fashion queries (occasion + color + budget + size) into structured catalog filters behind the scenes.' },
        { title: 'Typing-Free Interaction', description: 'Predictive quick-reply chips let mobile users tap through entire shopping flows without touching the keyboard.' }
      ],
      solution: 'Built a "Hybrid Conversational AI" — part chatbot, part shopping assistant. Smart Chips and Mini-GUIs injected into the chat stream turned a text conversation into a visual shopping experience. Powered by LangChain for LLM orchestration with a React frontend.',
      outcome: '3x higher engagement vs. traditional search. Eliminated most "Zero Results" dead-ends and became the foundation for Streamoid\'s enterprise AI product line.',
      learnings: [
        'Designing for AI latency is a UX problem, not a tech problem — the loading state needs to feel intentional, not broken.',
        'Chat UI constraints are brutal on mobile. Every pixel matters when you\'re rendering carousels inside a 320px bubble.',
        'The best fallback isn\'t "Sorry, I didn\'t understand" — it\'s showing the closest thing you do have.'
      ],
      images: [],
      solutionImages: [
        '/images/Vortex images/Vortex1.webp',
        '/images/Vortex images/Vortex2.webp',
        '/images/Vortex images/Vortex3.webp',
        '/images/Vortex images/Vortex4.webp',
      ]
    }
  }
];

// Work-list display order: CXO, Catalogix, Piqit, then the rest as authored.
const PROJECT_DISPLAY_ORDER = ['cxo', 'catalogix', 'piqit'];
PROJECTS_DATA.sort((a, b) => {
  const rank = (p: ProjectItem) => {
    const i = PROJECT_DISPLAY_ORDER.indexOf(p.id);
    return i === -1 ? PROJECT_DISPLAY_ORDER.length : i;
  };
  return rank(a) - rank(b);
});

export const SKILLS_DATA: SkillItem[] = [
  { category: 'Design & Research', items: ['UX Strategy & User Research', 'Interaction & Visual Design', 'Wireframing & Prototyping', 'Design Systems & Component Libraries'] },
  { category: 'Collaboration & Testing', items: ['Cross-Functional Collaboration', 'Accessibility & Usability Testing', 'A/B Testing & Conversion Optimization'] },
  { category: 'Technical', items: ['Full-Stack AI Development', 'API Design & Integration', 'Cloud Hosting & Deployment'] },
  { category: 'Domain', items: ['SaaS Ecom-Tech'] }
];

export const EDUCATION_DATA: EducationItem[] = [
  { degree: 'B.Sc. - Media Technology (UX Design)', institution: 'ICAT Design & Media College', period: '2014 - 2017' },
  { degree: 'MBA - Information Systems', institution: 'Annamalai University', period: '2019 - 2021' }
];

export const CONTACT_INFO = {
  email: 'naveencollective@gmail.com',
  phone: '(+91) 9791904324',
  linkedin: 'www.linkedin.com/in/naveenmanickam',
  website: 'bit.ly/4c51HGg',
  location: 'Bangalore, India'
};