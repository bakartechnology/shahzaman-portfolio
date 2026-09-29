export interface Project {
  id: string;
  title: string;
  category: "WordPress" | "Shopify" | "Web Apps" | "UI/UX" | "Creative";
  type: "CMS" | "Code";
  description: string;
  tagline: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  status?: string;
  metrics?: { label: string; value: string }[];
  caseStudy?: {
    overview: string;
    challenge: string;
    approach: string;
    keyDeliverables: string[];
  };
  accentColor: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  environment: string;
  period: string;
  duration: string;
  featured: boolean;
  responsibilities: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Muhammad Shahzaman",
  initials: "MS",
  primaryTitle: "Web Developer & Full Stack Developer",
  secondaryTitle: "CMS Developer | WordPress & Shopify Specialist | UI/UX-Focused Developer | AI & Prompt Engineering",
  heroHeadline: "Building Digital Experiences That Perform, Convert & Stand Out.",
  heroSubheadline: "Architecting high-converting web applications, bespoke WordPress & Shopify storefronts, and precision UI/UX interfaces engineered for international startups, agencies, and businesses.",
  email: "codebyshazzy@gmail.com",
  linkedIn: "https://www.linkedin.com/in/muhammed-shahzaman-developer",
  github: "https://github.com/developwithshazzy",
  experienceYears: {
    frontendFullstack: "20 Years",
    promptEngineering: "Specialist",
    uiuxDesign: "10 Years",
  },
  availability: "Available for International Remote & Contract Projects",
  targetCountries: [
    "Pakistan",
    "United States",
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Switzerland",
    "Belgium",
    "Ireland",
    "Austria",
    "Italy",
    "Spain",
    "Poland",
    "India",
    "Portugal"
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "CMS Developer",
    company: "Dawley Institute of Technology",
    environment: "Professional Software Development Environment",
    period: "2+ Years",
    duration: "2+ Years — WordPress & Shopify Development",
    featured: true,
    responsibilities: [
      "Architected and deployed production-ready WordPress and Shopify websites for institutional and enterprise clients.",
      "Engineered comprehensive theme and layout customization matching strict brand specifications and high conversion criteria.",
      "Developed high-performance responsive interfaces, dynamic navigation trees, custom interactive forms, and e-commerce checkout flows.",
      "Conducted thorough CMS troubleshooting, core plugin optimizations, and custom PHP/Liquid template enhancements.",
      "Implemented client-specific bespoke features and delivered seamless live deployments with zero-downtime procedures.",
      "Crafted modern UI/UX workflows with strict mobile responsiveness, cross-browser compatibility, and Core Web Vitals optimization."
    ],
    skills: ["WordPress", "Shopify", "PHP", "Liquid", "JavaScript", "Responsive Design", "UI/UX", "WooCommerce", "REST APIs"]
  },
  {
    role: "Software Developer",
    company: "Dawley Institute of Technology",
    environment: "Institutional Software Division",
    period: "Core Software Engineering",
    duration: "Software Development",
    featured: true,
    responsibilities: [
      "Collaborated on modern web applications and frontend interfaces using React, Next.js, and TypeScript.",
      "Structured reusable component libraries, state management workflows, and integrated RESTful APIs.",
      "Enforced code quality, semantic accessibility, technical search optimization, and responsive design systems."
    ],
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "REST APIs", "Git", "Clean Architecture"]
  }
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    shortDesc: "Modern, ultra-fast, and responsive websites engineered for optimal engagement and device versatility.",
    fullDesc: "Crafting bespoke web solutions tailored to modern business requirements with uncompromising structural integrity, fast page load speeds, and fluid interactivity across all screen sizes.",
    deliverables: ["Modern responsive design", "Clean semantic HTML5/CSS3", "Interactive dynamic components", "Cross-browser consistency"],
    icon: "Globe"
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    shortDesc: "End-to-end application engineering with React, Next.js, TypeScript, and robust API architectures.",
    fullDesc: "Developing complete web applications from initial frontend design to server actions and external integrations, prioritizing type safety, scalability, and maintainability.",
    deliverables: ["Next.js App Router architecture", "Strict TypeScript typing", "REST API integration", "State management & caching"],
    icon: "Layers"
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    shortDesc: "Production-grade WordPress builds, bespoke theme styling, custom layouts, and live deployments.",
    fullDesc: "Specializing in commercial and institutional WordPress implementations. From custom layouts and plugins to complex page builders and WooCommerce optimizations.",
    deliverables: ["Custom theme & layout customization", "Speed & security hardening", "Client requirements engineering", "Live server migrations & deployments"],
    icon: "FileCode"
  },
  {
    id: "shopify",
    title: "Shopify Storefronts",
    shortDesc: "High-converting Shopify e-commerce platforms, customized Liquid templates, and checkout experiences.",
    fullDesc: "Building commercial storefronts that captivate shoppers and streamline purchasing. Deep customization of product templates, cart drawers, collections, and marketing integrations.",
    deliverables: ["Custom Liquid storefront design", "High-converting checkout flows", "Inventory & catalog setup", "Payment gateway configurations"],
    icon: "ShoppingBag"
  },
  {
    id: "ui-ux",
    title: "UI/UX Development",
    shortDesc: "Design-led frontend execution with strong visual hierarchy, micro-interactions, and accessibility.",
    fullDesc: "Bridging the gap between conceptual product design and pixel-perfect frontend code. Designing interfaces that feel natural, intuitive, and elevated.",
    deliverables: ["Design system implementation", "WCAG accessibility adherence", "Smooth micro-animations", "Responsive layout composition"],
    icon: "Palette"
  },
  {
    id: "technical-seo",
    title: "Technical & On-Page SEO",
    shortDesc: "Comprehensive SEO architecture, structured metadata, schema protocols, and crawlability optimization.",
    fullDesc: "Ensuring your digital platform achieves organic visibility across international search engines through semantic HTML, JSON-LD structured data, and Core Web Vitals excellence.",
    deliverables: ["Rich JSON-LD schemas (Person, WebSite, Org)", "Open Graph & Twitter Cards", "Canonical indexing & sitemap generation", "Core Web Vitals tuning"],
    icon: "Search"
  },
  {
    id: "ai-seo",
    title: "AI SEO & Search Visibility (GEO / AEO)",
    shortDesc: "Structuring content and data architecture for AI answer engines (ChatGPT, Perplexity, Google SGE).",
    fullDesc: "Optimizing content hierarchy, entity relationships, and machine-readable data to ensure accurate representation in modern AI search and discovery ecosystems.",
    deliverables: ["Entity-consistent markup", "Answer Engine Optimization (AEO)", "Machine-readable fact architecture", "Semantic data linking"],
    icon: "Sparkles"
  },
  {
    id: "prompt-eng",
    title: "Prompt Engineering & AI Workflows",
    shortDesc: "Harnessing prompt engineering and AI workflow acceleration to build smarter digital products.",
    fullDesc: "Applying modern prompt design, LLM integration techniques, and intelligent automation pipelines to accelerate development cycles and empower smart user experiences.",
    deliverables: ["Structured LLM prompt architecture", "AI workflow automation", "Context engineering & guardrails", "Rapid feature prototyping"],
    icon: "Bot"
  },
  {
    id: "performance",
    title: "Website Performance Engineering",
    shortDesc: "Rigorous Core Web Vitals optimization, asset compression, code splitting, and zero-jank rendering.",
    fullDesc: "Eliminating layout shifts, minimizing render-blocking assets, and streamlining bundle delivery to secure top-tier Lighthouse scores and delightful speed.",
    deliverables: ["Core Web Vitals (LCP, CLS, INP)", "Image optimization & next/image", "Modern code splitting", "Asset minification & caching"],
    icon: "Zap"
  }
];

export const PROJECTS: Project[] = [
  // --- REAL CMS PROJECTS (WordPress) ---
  {
    id: "dawley-institute",
    title: "Dawley Institute of Technology",
    category: "WordPress",
    type: "CMS",
    tagline: "Flagship institutional web portal with academic program architecture and student gateway.",
    description: "Production institutional WordPress platform featuring multi-tier academic program presentation, responsive layouts, admissions inquiry funnels, and high-performance server deployment.",
    techStack: ["WordPress", "Custom CSS", "Responsive UI", "CMS Security", "Production Deployment"],
    liveUrl: "https://dawley.io/",
    featured: true,
    accentColor: "#E76F51",
    caseStudy: {
      overview: "Institutional web portal for Dawley Institute of Technology providing prospective students and faculty with unified access to course offerings, certifications, and campus resources.",
      challenge: "Organizing deep hierarchical academic content into an intuitive, lightweight mobile experience with fast loading times across varied network conditions.",
      approach: "Built modular content sections, streamlined navigational pathways, implemented cached asset delivery, and customized layout templates to reflect academic prestige.",
      keyDeliverables: ["Complete academic directory architecture", "Mobile-optimized responsive navigation", "Integrated dynamic inquiry forms", "Server-level caching & speed tuning"]
    }
  },
  {
    id: "dawley-biz",
    title: "Dawley Business & Certification Platform",
    category: "WordPress",
    type: "CMS",
    tagline: "Enterprise certification and professional accreditation digital ecosystem.",
    description: "Custom WordPress certification platform delivering structured business syllabi, credential verification information, and clean corporate visual hierarchy.",
    techStack: ["WordPress", "Theme Customization", "Course Catalog", "Forms", "REST APIs"],
    liveUrl: "https://dawleybiz.com/",
    featured: true,
    accentColor: "#C9A66B",
    caseStudy: {
      overview: "Digital ecosystem dedicated to professional certifications and corporate learning tracks.",
      challenge: "Presenting multiple certification tiers with distinct prerequisites, learning outcomes, and corporate enrollment options without visual clutter.",
      approach: "Engineered customized page layouts with scannable pricing/syllabus tables, high-contrast typography, and accessible inquiry workflows.",
      keyDeliverables: ["Tiered certification catalog", "Corporate consultation scheduling integration", "Responsive program detail modules"]
    }
  },
  {
    id: "jazak-builders",
    title: "Jazak Builders",
    category: "WordPress",
    type: "CMS",
    tagline: "Commercial architectural & construction development showcase based in Canada.",
    description: "Bespoke Canadian construction and real estate portfolio site engineered with high-impact project galleries, service breakdown modules, and bilingual/regional accessibility.",
    techStack: ["WordPress", "Custom Layouts", "Gallery Architecture", "SEO", "Responsive Design"],
    liveUrl: "https://jazakbuilders.ca/",
    featured: true,
    accentColor: "#56754b",
    caseStudy: {
      overview: "Online portfolio and lead generation engine for Jazak Builders, a premier construction and architectural contracting firm in Canada.",
      challenge: "Showcasing high-resolution architectural imagery without compromising mobile loading speed and Core Web Vitals.",
      approach: "Optimized modern WebP asset delivery, designed an elegant grid gallery with responsive lightboxes, and implemented clear contact/estimate touchpoints.",
      keyDeliverables: ["High-resolution project gallery", "Detailed commercial contracting service pages", "Canadian regional technical SEO integration"]
    }
  },
  {
    id: "dawley-tech",
    title: "Dawley Technology",
    category: "WordPress",
    type: "CMS",
    tagline: "Corporate technology & digital solutions arm of the Dawley enterprise.",
    description: "Advanced technology solutions portal currently under active development, emphasizing modern cloud engineering, digital consulting, and enterprise software capability.",
    techStack: ["WordPress", "Modern Frontend Customization", "Enterprise Architecture"],
    liveUrl: "https://tech.dawley.io/",
    featured: false,
    status: "Currently In Progress",
    accentColor: "#E76F51",
    caseStudy: {
      overview: "Enterprise technology division portal showcasing software development capabilities, systems integration, and tech consulting.",
      challenge: "Developing an ongoing agile platform that adapts as new enterprise service offerings expand.",
      approach: "Constructed modular components and flexible layout schemas permitting seamless service updates without code redeployment.",
      keyDeliverables: ["Scalable enterprise design framework", "Interactive service matrix", "Active iterative deployment pipeline"]
    }
  },
  {
    id: "jewelsor-jewellery",
    title: "Jewelsor Jewellery",
    category: "WordPress",
    type: "CMS",
    tagline: "Luxury jewellery brand showcase & e-commerce presentation.",
    description: "High-end luxury jewelry portal highlighting bespoke artisanal collections, diamond grades, craftsmanship storytelling, and secure customer inquiries.",
    techStack: ["WordPress", "WooCommerce", "Luxury UI/UX", "High-Resolution Galleries", "SEO"],
    liveUrl: "https://jewelsorjewellery.com/",
    featured: true,
    accentColor: "#C9A66B",
    caseStudy: {
      overview: "Bespoke digital brand experience for luxury jewellery artisans, emphasizing fine craftsmanship and bespoke commissions.",
      challenge: "Conveying the tactile elegance and sparkle of luxury jewelry items through high-definition visual layouts while keeping user interactions silky smooth.",
      approach: "Implemented a champagne-gold accented luxury color scheme, bespoke typography, zoomable collection galleries, and friction-free inquiry funnels.",
      keyDeliverables: ["Artisanal jewelry collection showcases", "Bespoke appointment & commission forms", "Mobile-optimized luxury browsing interface"]
    }
  },

  // --- REAL CMS PROJECTS (Shopify) ---
  {
    id: "dawley-cafe",
    title: "Dawley Cafe & Tea House",
    category: "Shopify",
    type: "CMS",
    tagline: "Artisanal specialty coffee & organic tea e-commerce storefront.",
    description: "Customized Shopify storefront featuring product variations, bean roast selections, online ordering workflow, and a cozy editorial lifestyle aesthetic.",
    techStack: ["Shopify", "Liquid", "E-Commerce", "Checkout Customization", "Mobile Responsive"],
    liveUrl: "https://dawleycafe.com/",
    featured: true,
    accentColor: "#E76F51",
    caseStudy: {
      overview: "Direct-to-consumer e-commerce storefront for specialty coffee beans, organic teas, and cafe merchandise.",
      challenge: "Creating a warm, sensory-rich browsing experience that converts casual visitors into recurring coffee subscribers.",
      approach: "Engineered customized Liquid templates, structured product variant selectors (grind size, roast level, quantity), and streamlined the Shopify one-page checkout.",
      keyDeliverables: ["Customized Shopify Liquid sections", "Variant-based product matrix", "Optimized mobile cart drawer", "Local delivery & shipping integrations"]
    }
  },
  {
    id: "teaser-tackle",
    title: "Teaser Tackle",
    category: "Shopify",
    type: "CMS",
    tagline: "Specialized performance angling & fishing equipment digital storefront.",
    description: "High-conversion Shopify e-commerce store with deep category filtering, equipment specifications, multi-item cart upsells, and responsive shopping UI.",
    techStack: ["Shopify", "Liquid", "Storefront Optimization", "Inventory UI", "E-Commerce"],
    liveUrl: "https://teasertackle.com/",
    featured: true,
    accentColor: "#56754b",
    caseStudy: {
      overview: "Commercial online equipment destination for passionate anglers and marine fishing enthusiasts.",
      challenge: "Managing extensive technical tackle catalogs with multiple weight, color, and hook sizes while maintaining fast search and filter speeds.",
      approach: "Implemented instant collection filters, detailed spec tabs, related tackle bundles, and high-contrast outdoor-friendly UI elements.",
      keyDeliverables: ["Advanced multi-attribute collection filtering", "Fast-loading product detail pages", "Cross-sell tackle accessories module"]
    }
  },

  // --- REAL CODING BUILDS (Web Apps & Full Stack) ---
  {
    id: "cloth-pos",
    title: "Cloth POS System",
    category: "Web Apps",
    type: "Code",
    tagline: "Comprehensive retail Point of Sale & real-time inventory management application.",
    description: "Full-featured retail POS application designed for apparel stores. Features barcode simulation, order billing, stock calculation, receipt printing, and cashier session tracking.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "State Architecture", "Vercel"],
    liveUrl: "https://cloth-pos-system.vercel.app/",
    featured: true,
    accentColor: "#E76F51",
    caseStudy: {
      overview: "Modern web-based point-of-sale and inventory control software engineered for fast-paced clothing retail environments.",
      challenge: "Handling rapid item scanning, size/color variant stock deductions, discount applications, and tax calculations with zero UI lag.",
      approach: "Built with optimistic local state updates, modular cart calculation reducers, responsive touch-screen keyboard shortcuts, and instant receipt layout rendering.",
      keyDeliverables: ["Real-time inventory deduction engine", "Thermal receipt formatting & printable layouts", "Rapid barcode/SKU search and add", "Shift reconciliation reporting"]
    }
  },
  {
    id: "spotify-music-player",
    title: "Spotify Music Player",
    category: "Web Apps",
    type: "Code",
    tagline: "Fluid, high-fidelity music streaming application interface with dynamic audio controls.",
    description: "Interactive audio streaming web player mimicking Spotify's signature dark aesthetic, featuring track seeking, volume regulation, playlist queues, and reactive playback animations.",
    techStack: ["JavaScript", "HTML5 Audio API", "CSS3 / Modern UI", "Responsive Design", "Vercel"],
    liveUrl: "https://spotify-music-player-xi.vercel.app/",
    featured: true,
    accentColor: "#56754b",
    caseStudy: {
      overview: "High-precision streaming audio player web application inspired by contemporary digital audio workstations and modern music streaming leaders.",
      challenge: "Coordinating continuous audio playback with asynchronous scrubbing, time tracking, dynamic album art transitions, and smooth volume attenuation.",
      approach: "Architected around the native Web Audio and HTML5 Media API, wrapped in responsive custom slider components with zero audio stutter.",
      keyDeliverables: ["Continuous seekable playback engine", "Dynamic queue and playlist management", "Interactive scrubber with time indicators", "Responsive mobile media controls"]
    }
  },
  {
    id: "cine-star",
    title: "Cine Star — Streaming Platform",
    category: "Web Apps",
    type: "Code",
    tagline: "Cinematic entertainment streaming UI with dynamic movie catalogs and media previews.",
    description: "Production-styled streaming platform interface showcasing trending films, genre categorizations, dynamic modal previews, and responsive video player embedding.",
    techStack: ["React", "Modern CSS", "REST API Architecture", "Media Players", "Vercel"],
    liveUrl: "https://cine-star-streaming.vercel.app/",
    featured: true,
    accentColor: "#C9A66B",
    caseStudy: {
      overview: "Immersive entertainment discovery and video streaming portal engineered with rich visual carousels and detailed metadata.",
      challenge: "Rendering large media catalogs with high-density poster art and trailers without causing memory bottlenecks or scroll stutter.",
      approach: "Used lazy image loading, virtualization for movie rails, dynamic backdrop crossfades, and lightweight trailer preview modals.",
      keyDeliverables: ["Interactive movie carousels with hover trailers", "Genre and release year filtering", "Detailed synopsis & cast breakdown modals", "Fluid dark-mode visual hierarchy"]
    }
  },
  {
    id: "invoice-builder",
    title: "Invoice Builder",
    category: "Web Apps",
    type: "Code",
    tagline: "Client billing, automatic calculations, and PDF-ready invoice generator.",
    description: "Productivity application enabling freelancers and small businesses to generate professional invoices with live tax, discount, itemized lines, and print/export readiness.",
    techStack: ["React", "TypeScript", "CSS Grid", "Export Utilities", "Vercel"],
    liveUrl: "https://invoice-builder-website.vercel.app/",
    featured: true,
    accentColor: "#E76F51",
    caseStudy: {
      overview: "Streamlined financial tool for drafting, calculating, and exporting professional commercial invoices on the fly.",
      challenge: "Providing instant recalculation of subtotal, tiered taxes, discounts, and currency formatting while maintaining an accurate print stylesheet.",
      approach: "Implemented reactive state management with dedicated CSS `@media print` rules ensuring exact pixel matching between web preview and printed PDF.",
      keyDeliverables: ["Dynamic item rows with automatic math", "Multi-currency & tax rate configurations", "Instant browser print & PDF generation", "Local storage invoice persistence"]
    }
  },
  {
    id: "marvel-universe",
    title: "Marvel Universe Guide",
    category: "UI/UX",
    type: "Code",
    tagline: "Interactive superhero encyclopedia with character lore and power rankings.",
    description: "Rich character discovery interface showcasing superheroes, villains, comic origins, and dynamic power attribute cards with high-energy visuals.",
    techStack: ["JavaScript", "Modern CSS", "Character API", "Animations", "Vercel"],
    liveUrl: "https://marvel-universe-guide.vercel.app/",
    featured: false,
    accentColor: "#E76F51"
  },
  {
    id: "hccda-reg",
    title: "HCCDA Registration",
    category: "Web Apps",
    type: "Code",
    tagline: "Community development and institutional student onboarding application.",
    description: "Structured multi-step registration portal featuring real-time form validation, document upload simulation, applicant verification, and automated confirmation states.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Form Validation", "Vercel"],
    liveUrl: "https://hccda-registration.vercel.app/",
    featured: false,
    accentColor: "#56754b"
  },
  {
    id: "entry-test",
    title: "Entry Test Portal",
    category: "Web Apps",
    type: "Code",
    tagline: "Timed examination engine with automated scoring and instant feedback.",
    description: "Online assessment system supporting randomized question banks, countdown examination timers, instant score tabulation, and detailed answer reviews.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Test Engine Logic", "Vercel"],
    liveUrl: "https://entry-test-alpha.vercel.app/",
    featured: false,
    accentColor: "#C9A66B"
  },
  {
    id: "twin-blessings",
    title: "Twin Blessings",
    category: "Creative",
    type: "Code",
    tagline: "Bespoke commemorative website experience celebrating twin milestones.",
    description: "Thoughtfully designed celebratory web portal featuring interactive memory timelines, photo albums, and heartwarming micro-interactions.",
    techStack: ["HTML5", "CSS3 Animations", "Responsive Design", "Vercel"],
    liveUrl: "https://twin-blessings.vercel.app/",
    featured: false,
    accentColor: "#E76F51"
  },
  {
    id: "wedding-invitation",
    title: "Wedding Invitation",
    category: "Creative",
    type: "Code",
    tagline: "Luxury interactive wedding invitation with RSVP and venue navigation.",
    description: "Elegant digital invitation engineered with bespoke typography, countdown timer to the ceremony, interactive venue maps, and digital RSVP confirmation.",
    techStack: ["Modern CSS", "JavaScript", "Luxury UI/UX", "Responsive", "Vercel"],
    liveUrl: "https://wedding-invitation-eight-steel.vercel.app/",
    featured: false,
    accentColor: "#C9A66B"
  },
  {
    id: "happy-birthday-ahad",
    title: "Happy Birthday Ahad",
    category: "Creative",
    type: "Code",
    tagline: "Interactive celebratory web experience featuring confetti animations and personal notes.",
    description: "Playful, interactive celebratory greeting experience with custom animation triggers, sound effects, and digital gift unwrapping mechanics.",
    techStack: ["JavaScript", "CSS3 Keyframes", "Canvas Effects", "Vercel"],
    liveUrl: "https://happy-birthday-ahad.vercel.app/",
    featured: false,
    accentColor: "#56754b"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio (Foundation Edition)",
    category: "Web Apps",
    type: "Code",
    tagline: "Foundation developer showcase demonstrating foundational web capabilities.",
    description: "Early live web portfolio highlighting Muhammad Shahzaman's developmental journey and project milestones.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    liveUrl: "https://abubakar-portfolio-plum.vercel.app/",
    featured: false,
    accentColor: "#E76F51"
  }
];

export const TECH_CATEGORIES = [
  {
    name: "Frontend Engineering",
    description: "Pixel-accurate, accessible, and reactive user interfaces built with modern web standards.",
    skills: [
      { name: "TypeScript", level: "Expert", desc: "Type safety, generics, interfaces, scalable codebases" },
      { name: "React", level: "Expert", desc: "Hooks, component architecture, state management" },
      { name: "Next.js", level: "Expert", desc: "App Router, SSR, SSG, Server Actions, SEO" },
      { name: "JavaScript (ES6+)", level: "Master", desc: "Async/await, closures, modern APIs, DOM optimization" },
      { name: "HTML5", level: "Master", desc: "Semantic markup, accessibility, modern standards" },
      { name: "CSS3", level: "Master", desc: "Custom properties, Flexbox, Grid, keyframe animations" },
      { name: "Tailwind CSS", level: "Expert", desc: "Design tokens, responsive utilities, clean styles" },
      { name: "shadcn/ui", level: "Advanced", desc: "Accessible UI components, primitives, theming" }
    ]
  },
  {
    name: "Animation & Interactions",
    description: "Delightful motion choreography engineered with natural physics and smooth frame rates.",
    skills: [
      { name: "Framer Motion", level: "Advanced", desc: "Layout animations, gestures, exit transitions" },
      { name: "GSAP", level: "Advanced", desc: "ScrollTrigger, timeline sequencing, complex choreography" },
      { name: "CSS Micro-Animations", level: "Master", desc: "Performant GPU-accelerated hover & transition states" }
    ]
  },
  {
    name: "CMS & E-Commerce",
    description: "Deep enterprise content management, custom theme design, and commercial storefronts.",
    skills: [
      { name: "WordPress", level: "Expert (2+ Yrs)", desc: "Production sites, theme customization, layout architecture" },
      { name: "Shopify", level: "Expert (2+ Yrs)", desc: "Liquid template customization, storefront optimization, checkout" },
      { name: "WooCommerce", level: "Advanced", desc: "Custom product catalogs, payment gateways, checkout flows" },
      { name: "CMS Troubleshooting", level: "Expert", desc: "Plugin conflicts, server migrations, speed tuning" }
    ]
  },
  {
    name: "Tools, DevOps & Workflow",
    description: "Version control, modern toolchains, and continuous deployment workflows.",
    skills: [
      { name: "Git", level: "Expert", desc: "Branching strategies, clean commits, conflict resolution" },
      { name: "GitHub", level: "Expert", desc: "Pull requests, code review, workflow automation" },
      { name: "REST APIs", level: "Advanced", desc: "API design, asynchronous data fetching, error handling" },
      { name: "Vercel", level: "Advanced", desc: "Continuous deployment, preview environments, edge runtime" },
      { name: "Lucide Icons", level: "Advanced", desc: "SVG icon integration, responsive visual accents" }
    ]
  },
  {
    name: "Search, AI & Quality Engineering",
    description: "Holistic modern discoverability, artificial intelligence workflows, and Core Web Vitals.",
    skills: [
      { name: "Responsive UI/UX", level: "10 Years Craft", desc: "Fluid layouts from 320px to 4K ultra-wide monitors" },
      { name: "Technical & On-Page SEO", level: "Advanced", desc: "Semantic HTML, JSON-LD schemas, metadata architecture" },
      { name: "AI SEO / GEO / AEO", level: "Specialist", desc: "Answer Engine Optimization, machine-readable facts" },
      { name: "Prompt Engineering", level: "Specialist", desc: "AI workflows, context engineering, development acceleration" },
      { name: "Website Performance", level: "Specialist", desc: "Core Web Vitals, code splitting, lazy loading, zero shift" }
    ]
  }
];
