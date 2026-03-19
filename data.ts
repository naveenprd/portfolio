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
    subtitle: 'Enterprise AI for Fashion Operations',
    tags: ['SaaS', 'AI', 'B2B', 'Design System'],
    description: 'An AI-powered tool using Computer Vision to automate product tagging and publishing for global retailers.',
    imageUrl: '/images/Catalogix banner.webp',
    detailedContent: {
      role: 'Lead Product Designer & Frontend Architect',
      timeline: '2021 - Present',
      tools: ['Figma', 'React', 'TypeScript', 'Ag-Grid', 'Python (AI)'],
      targetAudience: {
        primary: 'Enterprise Fashion Merchandisers and Catalog Operations Managers.',
        secondary: 'Data Entry Specialists and E-commerce SEO Teams.'
      },
      problem: 'Retailers faced a "Content Bottleneck" processing thousands of daily SKUs manually via spreadsheets. Inconsistent data led to poor search relevance, high returns, and delayed time-to-market.',
      goals: [
        'Accelerate "Time-to-Market" for new seasonal inventory by 50%.',
        'Reduce manual data entry errors and marketplace rejections by 90%.',
        'Architect a high-performance "Human-in-the-Loop" workflow for AI validation.',
        'Standardize complex fashion taxonomies across diverse global marketplaces.'
      ],
      research: {
        stats: [
          { value: '40%', label: 'Reduction in Cataloging Time' },
          { value: '98%', label: 'Attribute Accuracy Achieved' },
          { value: '10k+', label: 'SKUs Processed Daily' }
        ],
        insights: [
            'Merchandisers trust AI but require strict verification; the UI must instantly highlight low-confidence predictions.',
            'Power users demand keyboard-first navigation for speed, avoiding mouse interaction whenever possible.',
            'A split-screen view (Product Image vs. Data Grid) is non-negotiable for accurate visual validation.',
            'Bulk action capabilities are critical for managing massive seasonal inventory uploads.'
        ]
      },
      
      personas: [
        {
          name: 'Maya, Senior Merchandiser',
          role: 'Catalog Quality Lead',
          bio: 'Responsible for publishing 500+ items weekly. She creates the "Gold Standard" for product data but is constantly bogged down by managing complex Excel sheets and marketplace rules.',
          goals: ['Validate AI-generated tags rapidly', 'Execute bulk edits across seasonal collections', 'Export compliant data to Amazon/Myntra seamlessly'],
          painPoints: ['Repetitive, manual data entry', 'Constant context-switching between image folders and spreadsheets', 'System lag when handling large datasets']
        },
        {
          name: 'Raj, Operations Manager',
          role: 'Head of Catalog Operations',
          bio: 'Oversees a team of 20+ data operators. Needs high-level visibility into throughput, AI accuracy, and team error rates to optimize operational costs.',
          goals: ['Monitor real-time team productivity', 'Ensure strict data consistency across brands', 'Drastically reduce operational costs and marketplace rejections'],
          painPoints: ['Lack of real-time reporting dashboards', 'High training overhead for new staff on complex taxonomies', 'Inability to track AI model performance over time']
        }
      ],
      
      eisenMatrix: {
        urgentImportant: [
          'High-Performance Data Grid (Ag-Grid)',
          'AI Confidence Score Visualization',
          'Keyboard-First Navigation Support',
          'Split-Screen Image/Data Validation View'
        ],
        notUrgentImportant: [
          'Historical Data Analytics Dashboard',
          'Dynamic Custom Taxonomy Builder',
          'Granular Role-Based Access Control (RBAC)'
        ],
        urgentNotImportant: [
          'Dark Mode (Requested by engineering)',
          'Custom Profile Avatars',
          'Mobile view for approvals (Low actual usage)'
        ],
        notUrgentNotImportant: [
          'Social sharing features',
          'Task gamification',
          'In-app chat (Teams/Slack preferred)'
        ]
      },
      
      sitemap: [
        { title: 'Dashboard', items: ['Queue Overview', 'Team Throughput', 'AI Accuracy Metrics'] },
        { title: 'Import', items: ['Bulk Image Upload', 'CSV Schema Mapping', 'AI Pre-processing Status'] },
        { title: 'Workstation', items: ['Smart Validation Grid', 'Bulk Editor', 'Audit History Log'] },
        { title: 'Inventory Master', items: ['Global Catalog', 'Advanced SKU Search', 'Dynamic Filters'] },
        { title: 'Export', items: ['Marketplace Channel Config', 'Validation Rules Engine', 'Publishing Status'] }
      ],
      
      designSystem: {
        summary: 'A utility-first design system optimized for data density. Uses a 4pt grid, monospaced typography, and semantic color-coding for AI confidence levels.',
        typography: {
          fontFamily: 'Roboto & JetBrains Mono',
          usage: 'Roboto for UI elements; JetBrains Mono for tabular data to ensure vertical alignment and scannability.',
          scale: [
            { label: 'H1 Page Title', size: '24px', lineHeight: '1.2', weight: '500' },
            { label: 'H2 Section', size: '18px', lineHeight: '1.3', weight: '500' },
            { label: 'Body Data', size: '13px', lineHeight: '1.4', weight: '400' },
            { label: 'Table Header', size: '11px', lineHeight: '1.4', weight: '600' },
            { label: 'Code/ID', size: '12px', lineHeight: '1.5', weight: '400' }
          ]
        },
        colors: [
          { name: 'Data Black', hex: '#1F2937', usage: 'Primary Text, Active Data', textColor: '#FFFFFF' },
          { name: 'Table Gray', hex: '#F9FAFB', usage: 'Zebra Striping, Inactive Cells', textColor: '#1F2937' },
          { name: 'AI Purple', hex: '#7C3AED', usage: 'AI-Generated Suggestions', textColor: '#FFFFFF' },
          { name: 'Alert Red', hex: '#EF4444', usage: 'Validation Errors, Low Confidence', textColor: '#FFFFFF' }
        ]
      },

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
      challenges: [
        'Architecting a UI capable of handling 50+ attributes per product without forcing the user into endless horizontal scrolling.',
        'Designing an intuitive method to visualize AI "Confidence Scores" without cluttering the dense data grid.',
        'Engineering frontend performance to maintain 60fps while rendering thousands of complex DOM elements in the validation grid.'
      ],
      solution: 'Architected a "Smart Grid" using React and Ag-Grid where AI pre-fills 90% of product data. Engineered a split-pane layout for visual validation, highlighting low-confidence predictions to streamline human-in-the-loop workflows.',
      outcome: 'Redesigned catalog operations, reducing turnaround time by 40% and improving accuracy to 98%. Catalogix.ai now processes 10,000+ SKUs daily for global brands.',
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