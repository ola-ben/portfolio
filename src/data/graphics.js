import brandIdentityImage from '../assets/brand_identity.webp'
import socialMediaImage from '../assets/social_media.webp'
import benDesignImage from '../assets/ben_design_01.webp'
import inspecImage from '../assets/inspec.webp'
import bookastay01 from '../assets/bookastay_01.webp'
import bookastay02 from '../assets/bookastay_02.webp'
import bookastay03 from '../assets/bookastay_03.webp'
import bookastay04 from '../assets/bookastay_04.webp'

// Amiloaded Series
import amiloaded17Image from '../assets/amiloaded 17.webp'
import amiloaded16Image from '../assets/amiloaded 16.webp'
import amiloaded15Image from '../assets/amiloaded 15.webp'
import amiloaded13Image from '../assets/amiloaded 13.webp'
import amiloaded11Image from '../assets/amiloaded 11.webp'
import amiloaded07Image from '../assets/amiloaded 07.webp'

// New Creative & Transit Assets
import newTgif02Image from '../assets/new tgif 02.webp'
import bus001Image from '../assets/bus 001.webp'
import editedImage from '../assets/edited.webp'

// Ajani Campaign Graphics
import tgifAjaniImage from '../assets/tgif for ajani.webp'
import tgifffImage from '../assets/tgifff.webp'
import ajaniiGraphsImage from '../assets/ajanii graphs.webp'
import ajaniWeek9_1Image from '../assets/ajani week 9 (1).webp'
import ajaniWeek9_2Image from '../assets/ajani week 9(ii).webp'
import ajaniWeek9_3Image from '../assets/ajani week 9(iii).webp'

// Loyola College
import loyola01Image from '../assets/loyola 01.webp'
import loyola02Image from '../assets/loyola 02.webp'

// Motion Graphics (videos)
import motionVideo01 from '../assets/video/202611051159 (1).mp4'
import ajaniMotion02Video from '../assets/video/AJN MYN GRH 02 (1).mp4'
import tourVideo from '../assets/video/TOUR.mp4'

export const graphics = [
  {
    title: 'Motion Graphics - Animated Promo Reel',
    category: 'Motion Graphics',
    year: '2026',
    tagline: 'Animated social promo with kinetic typography & motion transitions',
    description:
      'Short-form animated promotional video built for social feeds. Combines kinetic typography, smooth motion transitions and brand colour accents to grab attention in the first few seconds.',
    tools: ['Motion Design', 'Video Editing', 'Kinetic Typography', 'Social Media'],
    video: motionVideo01,
    details: {
      challenge: "Holding viewer attention in fast-scrolling feeds where most people decide within the first two seconds.",
      solution: "Front-loaded the key message with bold animated type and paced the transitions to keep the story moving to the final call-to-action."
    }
  },
  {
    title: 'Ajani - Motion Graphics Campaign 02',
    category: 'Motion Graphics',
    year: '2026',
    tagline: 'Animated campaign creative for the Ajani booking marketplace',
    description:
      'Animated campaign video for the Ajani brand, bringing the static campaign graphics to life with motion, layered photo reveals and branded typography for Instagram, WhatsApp Status and X.',
    tools: ['Motion Design', 'Video Editing', 'Brand Animation', 'Social Media Ads'],
    video: ajaniMotion02Video,
    details: {
      challenge: "Translating the Ajani visual identity into motion while keeping it short enough for stories and status updates.",
      solution: "Animated the existing brand elements (badges, type and green accents) with clean reveals so the video feels consistent with the static campaign."
    }
  },
  {
    title: 'Tour - Property & Venue Video Walkthrough',
    category: 'Motion Graphics',
    year: '2026',
    tagline: 'Edited video tour with branded titles & smooth scene transitions',
    description:
      'Edited walkthrough video giving viewers a guided tour of the space. Combines smooth cuts, branded title overlays and paced transitions so viewers get a real feel for the location before booking or visiting.',
    tools: ['Video Editing', 'Motion Design', 'Color Grading', 'Social Media'],
    video: tourVideo,
    details: {
      challenge: "Showing a whole space in a short clip without the tour feeling rushed or losing the viewer halfway through.",
      solution: "Structured the footage as a clear room-by-room journey with consistent colour grading and short branded captions guiding each scene."
    }
  },
  {
    title: 'Ben Design - Creative Brand Identity & Visual Layouts',
    category: 'Brand Identity',
    year: '2026',
    tagline: 'High-impact creative direction, visual layout & typography system',
    description:
      'Comprehensive creative direction and brand visual design suite showcasing structured layout grids, precision typography hierarchy, and modern brand aesthetic elements crafted for modern digital presence.',
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Brand Identity', 'Typography'],
    image: benDesignImage,
    details: {
      challenge: "Establishing a distinctive, high-end visual language with cohesive styling across diverse digital touchpoints and brand formats.",
      solution: "Developed a balanced composition system using geometric brand marks, disciplined typographic scales, and high-contrast color theory."
    }
  },
  {
    title: 'Studio Aeterna Instagram Kit',
    category: 'Social Media',
    year: '2025',
    tagline: 'Bold dark mode graphics suite with energetic highlights',
    description:
      'Crafted a comprehensive, high-converting social media template kit including feed squares and story templates. Employs a modern dark theme with strict typography grids and punchy yellow accent highlights to maximize engagement.',
    tools: ['Adobe Photoshop', 'Figma', 'Color Theory', 'Layout Design'],
    image: socialMediaImage,
    details: {
      challenge: "Building a highly versatile template system that feels cohesive across diverse post types (announcements, tips, sales) while retaining structural layout variations.",
      solution: "Designed a modular 12-column grid system utilizing high-contrast typography, custom sunburst stickers, and a structured dark mode background template."
    }
  },
  {
    title: 'Ajani - Property Inspection & Field Verification Suite',
    category: 'UI/UX Design',
    year: '2026',
    tagline: 'Physical property inspection booking, report generation & verification workflow',
    description:
      'Designed a high-trust property inspection booking workflow for the Ajani marketplace. Covers physical site visit scheduling, certified agent inspection reports, payment escrow, and verified status badges for buyers and hosts.',
    tools: ['Figma', 'UI/UX Design', 'Workflow Architecture', 'Design System'],
    image: inspecImage,
    details: {
      challenge: "Designing an end-to-end verification flow that reassures remote buyers about physical property conditions before committing to booking fees.",
      solution: "Created a step-by-step inspection scheduler with time-slot allocations, sample report previews, and instant Paystack escrow integration."
    }
  },
  {
    title: 'Amiloaded Media - Editorial Breaking News & Headline Suite',
    category: 'Social Media',
    year: '2026',
    tagline: 'High-visibility digital news broadcasting & editorial headline cards',
    description:
      'Dynamic social broadcasting graphics for Amiloaded Media. Engineered high-impact typographical layouts, urgent news banners, and branded portrait photo compositing optimized for rapid content dispatch across X and Facebook.',
    tools: ['Adobe Photoshop', 'Figma', 'Editorial Layout', 'Typography', 'News Branding'],
    image: amiloaded17Image,
    details: {
      challenge: "Delivering instantaneous visual credibility and legibility on mobile feeds during fast-paced news cycles without sacrificing brand elegance.",
      solution: "Designed strict contrast bars, crisp accent badges, and a reusable portrait framing grid enabling sub-5-minute editorial asset turnaround."
    }
  },
  {
    title: 'Amiloaded Media - Entertainment & Personality Spotlight',
    category: 'Social Media',
    year: '2026',
    tagline: 'Celebrity spotlight, feature interviews & public engagement layouts',
    description:
      'Vibrant feature design suite spotlighting cultural figures, entertainment leaders, and special bulletins. Utilizes bold typography pairings, subtle grain textures, and high-contrast color grading.',
    tools: ['Adobe Photoshop', 'Figma', 'Color Grading', 'Photo Compositing', 'Social Media'],
    image: amiloaded16Image,
    details: {
      challenge: "Highlighting diverse photographic subjects while maintaining a distinct, instantly recognizable digital publishing identity.",
      solution: "Implemented signature gradient lighting filters, unified typography scales, and subtle gold accent dividers."
    }
  },
  {
    title: 'Amiloaded Media - Digital Publication & Editorial Cover',
    category: 'Brand Identity',
    year: '2026',
    tagline: 'Editorial publication magazine layouts and formal announcements',
    description:
      'High-resolution digital publication design crafted for in-depth editorial reports, commemorative editions, and executive announcements across digital channels.',
    tools: ['Figma', 'Adobe InDesign', 'Editorial Layout', 'Brand Identity'],
    image: amiloaded15Image,
    details: {
      challenge: "Structuring high-density headline text and multi-source imagery into a clean, modern publication format.",
      solution: "Crafted an asymmetric multi-column layout with generous breathing margins and refined serif display type."
    }
  },
  {
    title: 'Amiloaded Media - Current Affairs & News Graphic Layout',
    category: 'Social Media',
    year: '2026',
    tagline: 'Visual journalism cards and public interest report layouts',
    description:
      'Information-dense social media news cards combining statistical infographics, verified quotes, and photographic highlights for civic and national reporting.',
    tools: ['Figma', 'Photoshop', 'Infographics', 'Visual Journalism'],
    image: amiloaded13Image,
    details: {
      challenge: "Balancing multiple data points and legal disclaimers in a clean square format.",
      solution: "Employed card-within-card partitioning and clear visual hierarchy tokens."
    }
  },
  {
    title: 'Amiloaded Media - Public Notice & Informational Broadcast',
    category: 'Social Media',
    year: '2026',
    tagline: 'Official press releases and public service announcement templates',
    description:
      'Official public announcement templates designed for clarity and authority. Features clean royal blue and white color balancing, formal seal placements, and structured callouts.',
    tools: ['Adobe Photoshop', 'Figma', 'Typography', 'Corporate Layouts'],
    image: amiloaded11Image,
    details: {
      challenge: "Ensuring formal announcements remain highly readable even when screenshotted or compressed across WhatsApp groups.",
      solution: "Utilized heavy sans-serif headings with high accessibility contrast ratios and crisp hairline borders."
    }
  },
  {
    title: 'Amiloaded Media - High-Engagement Social Feed Creative',
    category: 'Social Media',
    year: '2026',
    tagline: 'Interactive social graphics for trending topics and polls',
    description:
      'Engagement-driven feed cards featuring interactive question prompts, trending poll layouts, and community highlights designed to maximize shares and commentary.',
    tools: ['Figma', 'Photoshop', 'Social Engagement', 'Visual Hierarchy'],
    image: amiloaded07Image,
    details: {
      challenge: "Driving instant audience participation in overcrowded social feeds.",
      solution: "Combined dynamic geometric background elements with clear, focused central typography."
    }
  },
  {
    title: 'Ajani Transit - Fleet Branding & Transportation Visuals',
    category: 'Brand Identity',
    year: '2026',
    tagline: 'Commercial vehicle wraps, transit logistics & fleet livery design',
    description:
      'Comprehensive livery and fleet branding package for the Ajani transit logistics and guest transfer fleet. Features aerodynamic geometric lines, high-visibility reflective green patterns, and crisp contact typography.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Vehicle Mockup', 'Fleet Branding'],
    image: bus001Image,
    details: {
      challenge: "Designing vehicle wrap graphics that remain clean, identifiable, and legible from long distances at highway speeds.",
      solution: "Developed high-contrast bold directional speed lines and large-scale vector brand marks tailored to vehicle panel geometry."
    }
  },
  {
    title: 'Ajani TGIF - Weekend Getaway Promo Creative v2',
    category: 'Social Media',
    year: '2026',
    tagline: 'Vibrant weekend hospitality and shortlet campaign banner',
    description:
      'Fresh promotional artwork promoting weekend shortlet discounts across Ibadan and Oyo State. Employs warm ambient lighting, modern badges, and direct WhatsApp reservation triggers.',
    tools: ['Adobe Photoshop', 'Figma', 'Creative Direction', 'Social Media Ads'],
    image: newTgif02Image,
    details: {
      challenge: "Re-invigorating the weekly TGIF campaign with fresh visual interest while maintaining brand recognition.",
      solution: "Introduced dynamic diagonal card overlays and playful lifestyle photography accents."
    }
  },
  {
    title: 'Creative Studio - Digital Art Direction & Retouching',
    category: 'Brand Identity',
    year: '2026',
    tagline: 'High-end photographic retouching, color grading & digital compositing',
    description:
      'Masterclass in advanced photo manipulation, commercial color grading, and skin retouching for fashion, lifestyle, and corporate marketing assets.',
    tools: ['Adobe Photoshop', 'Lightroom', 'Color Grading', 'Photo Retouching'],
    image: editedImage,
    details: {
      challenge: "Achieving flawless, high-end editorial skin tones and atmospheric lighting without artificial softness.",
      solution: "Applied frequency separation, customized luminance curves, and disciplined dodge & burn techniques."
    }
  },
  {
    title: 'Ajani TGIF - Weekend Getaway Promo Creative',
    category: 'Social Media',
    year: '2026',
    tagline: 'Vibrant weekend hospitality and shortlet campaign banner',
    description:
      'Created an energetic weekend discount campaign creative for the Ajani booking marketplace. Uses warm golden-hour photography, playful typography, and a prominent WhatsApp/Web booking badge to drive Friday-to-Sunday reservations.',
    tools: ['Adobe Photoshop', 'Figma', 'Creative Direction', 'Social Media Ads'],
    image: tgifAjaniImage,
    details: {
      challenge: "Creating a sense of spontaneous relaxation and urgency to boost weekend shortlet bookings before Friday afternoon.",
      solution: "Combined an evocative resort background visual with bold gradient typography and clear pricing callouts for instant mobile recognition."
    }
  },
  {
    title: 'Ajani TGIF - Weekend Escape Series',
    category: 'Social Media',
    year: '2026',
    tagline: 'High-contrast lifestyle promo layout for weekend shortlets',
    description:
      'Social media advertising artwork tailored for Instagram and X engagement. Combines modern editorial typographic blocks, dynamic drop shadows, and vibrant lifestyle photography.',
    tools: ['Adobe Photoshop', 'Figma', 'Social Media Graphics', 'Visual Composition'],
    image: tgifffImage,
    details: {
      challenge: "Designing a campaign layout that cuts through crowded social feeds and immediately highlights key weekend accommodation perks.",
      solution: "Utilized high-contrast typography cards against rich ambient photography with localized Ibadan and Oyo State geo-tags."
    }
  },
  {
    title: 'Ajani - Hospitality Ecosystem Visual Assets',
    category: 'Social Media',
    year: '2026',
    tagline: 'Multi-channel promotional design suite for hotels and venues',
    description:
      'Integrated graphic design package for the Ajani hospitality network. Showcases hotel suites, curated shortlets, and conference centers with unified brand badges and promotional offer tags.',
    tools: ['Figma', 'Adobe Illustrator', 'Photo Retouching', 'Social Media Branding'],
    image: ajaniiGraphsImage,
    details: {
      challenge: "Unifying disparate vendor photography styles under a cohesive, high-end brand presentation.",
      solution: "Implemented uniform color grading lookup tables (LUTs), consistent card rounding, and standardized verified venue seals."
    }
  },
  {
    title: 'Ajani Campaign Week 9 - Verified Shortlets Showcase',
    category: 'Social Media',
    year: '2026',
    tagline: 'Curated shortlet and luxury stay social media flyer',
    description:
      'Week 9 marketing release spotlighting verified luxury shortlets. Features layered photo frames, clear rate indicators, and instant WhatsApp booking links.',
    tools: ['Figma', 'Photoshop', 'Visual Hierarchy', 'Marketing Creative'],
    image: ajaniWeek9_1Image,
    details: {
      challenge: "Displaying key property features (Wi-Fi, 24/7 Power, Security) without overwhelming the primary photo hero.",
      solution: "Positioned minimalist icon pills along the lower third with high contrast against the subtle dark gradient overlay."
    }
  },
  {
    title: 'Ajani Campaign Week 9 - Hotel & Suite Spotlight',
    category: 'Social Media',
    year: '2026',
    tagline: 'High-engagement hotel discovery and reservation promo',
    description:
      'Visual ad design highlighting premium hotel suites and discount packages across Ibadan. Engineered for maximum click-through rates across Instagram feeds and WhatsApp stories.',
    tools: ['Adobe Photoshop', 'Figma', 'Ad Design', 'Color Grading'],
    image: ajaniWeek9_2Image,
    details: {
      challenge: "Maximizing visual clarity on small mobile screens while incorporating multi-room pricing tiers.",
      solution: "Adopted a card-in-card composition with bold price badges and high-contrast call-to-action buttons."
    }
  },
  {
    title: 'Ajani Campaign Week 9 - Event Halls & Workspaces',
    category: 'Social Media',
    year: '2026',
    tagline: 'Corporate venue and event space promotional banner',
    description:
      'Promotional layout showcasing event halls, conference rooms, and co-working spaces available for immediate reservation on the Ajani marketplace.',
    tools: ['Figma', 'Photoshop', 'Typography', 'Commercial Branding'],
    image: ajaniWeek9_3Image,
    details: {
      challenge: "Differentiating corporate event spaces from leisure stays while preserving overall brand consistency.",
      solution: "Used structured architectural photography, corporate grid alignments, and custom capacity badge icons."
    }
  },
  {
    title: 'Arcana Architects Brand Identity',
    category: 'Brand Identity',
    year: '2025',
    tagline: 'Minimalist corporate branding & typography guidelines',
    description:
      'Designed a premium corporate visual identity for an architectural firm. Created a custom monogram logo, cohesive business cards, layout hierarchy for official proposals, and a balanced warm-grey/emerald brand color system.',
    tools: ['Figma', 'Adobe Illustrator', 'Vector Illustration', 'Typography'],
    image: brandIdentityImage,
    details: {
      challenge: "Developing a brand mark that communicates structure, professionalism, and high-end design sensibilities without feeling overly industrial.",
      solution: "Crafted a geometric monogram logo combining 'A' and clean columns, backed by deep forest emerald green and slate grey tones for elegance and dependability."
    }
  },
  {
    title: 'Ajani Platform Logo Design',
    category: 'Brand Identity',
    year: '2025',
    tagline: 'Clean vector brand mark for booking marketplace',
    description:
      'Designed the official logo for the Ajani booking marketplace. Developed the concept to feel professional, welcoming, and easily scalable across diverse mobile and desktop formats.',
    tools: ['Adobe Illustrator', 'Figma', 'Vector Design', 'Logo Design'],
    image: '/ajani/logo.webp',
    details: {
      challenge: "Creating a memorable identity representing Oyo State hospitality that stands out clearly at small favicon sizes and large signage formats.",
      solution: "Designed a clean, corporate vector mark combining geometric elements with custom typography and warm green brand colors."
    }
  },
  {
    title: 'Ajani Mobile Layout Design',
    category: 'Social Media',
    year: '2025',
    tagline: 'Promotional layout design for mobile check-in flow',
    description:
      'Designed a visually engaging marketing graphic representing the booking flow of the Ajani mobile web app. Crafted to present checkout components clearly for digital promotions.',
    tools: ['Figma', 'Visual Layout', 'Branding', 'Social Media Graphics'],
    image: '/ajani/new aj4 (1).webp',
    details: {
      challenge: "Presenting multiple checkout details in a single, high-fidelity promo template without cluttering the screen.",
      solution: "Organized check-in summaries and payment cards in a structured layout grid over a neutral background to maintain visual breathing room."
    }
  },
  {
    title: 'Ajani Campaign Flyer v6',
    category: 'Social Media',
    year: '2025',
    tagline: 'Minimalist brand promotion flyer design',
    description:
      'Designed a sleek social media promotional flyer for the Ajani platform. Employs asymmetric grids, elegant typography pairings, and clean product-photo integration to showcase booking vendors.',
    tools: ['Figma', 'Adobe Photoshop', 'Asymmetric Layouts', 'Visual Hierarchy'],
    image: '/ajani/ajani graphics week 6 (a).webp',
    details: {
      challenge: "Ensuring text elements maintain high readability over background photo layers without feeling clustered or requiring excessive solid overlays.",
      solution: "Utilized carefully positioned shadow filters, ample white space, and a high-contrast serif font for titles to draw natural focus."
    }
  },
  {
    title: 'Ajani Promo Campaign v5',
    category: 'Social Media',
    year: '2025',
    tagline: 'High-engagement social media promotional layouts',
    description:
      'Crafted promotional flyers and visual templates for the Ajani campaign. Features premium image borders, elegant layout hierarchies, and clear call-to-actions designed to drive user conversions.',
    tools: ['Adobe Photoshop', 'Figma', 'Marketing Design', 'Ad Creative'],
    image: '/ajani/ajani graphics week 5 (f).webp',
    details: {
      challenge: "Developing promotional graphics that look clean and premium while packing necessary offer text, location data, and pricing parameters.",
      solution: "Structured a solid color-blocked typography sidebar alongside high-resolution imagery to separate data sections cleanly."
    }
  },
  {
    title: 'Ajani Marketing Campaigns',
    category: 'Social Media',
    year: '2025',
    tagline: 'Vibrant high-contrast marketing banners',
    description:
      'Designed a collection of promotional social media designs for the Ajani brand. Employs advanced photo compositing, layout hierarchy, and custom graphic accents to optimize client click-through rates.',
    tools: ['Adobe Photoshop', 'Figma', 'Visual Composition', 'Social Media Branding'],
    image: '/ajani/ajani graphics happy new month.webp',
    details: {
      challenge: "Integrating hotel and event-hall photography with complex typography blocks without sacrificing visual breathing room or accessibility contrast ratios.",
      solution: "Employed custom drop-shadow cards, layered color grading gradients, and premium modern typography alignment configurations."
    }
  },
  {
    title: 'Enggemos BookAStay - Exploration & Stay Booking Experience',
    category: 'UI/UX Design',
    year: '2026',
    tagline: 'High-converting mobile & web booking ecosystem for stays and shortlets',
    description:
      'End-to-end UI/UX product design for the Enggemos BookAStay booking platform. Features seamless location discovery, date and guest selection drawers, high-density listing cards with amenity badges, and a frictionless 2-step checkout flow.',
    tools: ['Figma', 'UI/UX Design', 'Design System', 'Prototyping', 'User Research'],
    image: bookastay01,
    details: {
      challenge: "Structuring comprehensive property metadata (nightly rates, reviews, amenity badges, and host profiles) in a clean mobile interface without overwhelming user focus.",
      solution: "Engineered a modular visual hierarchy utilizing floating booking action bars, structured filter pills, and clean spacing tokens matching modern travel app conventions."
    }
  },
  {
    title: 'Enggemos BookAStay - Property Detail & Pricing Breakdown',
    category: 'UI/UX Design',
    year: '2026',
    tagline: 'Immersive property showcase with dynamic pricing and room selection',
    description:
      'Designed comprehensive room selection screens, interactive photo galleries, amenity filter tags, and transparent fee calculators to build buyer confidence and accelerate reservation completions.',
    tools: ['Figma', 'Wireframing', 'Design Tokens', 'Information Architecture'],
    image: bookastay02,
    details: {
      challenge: "Communicating dynamic pricing, cleaning fees, and multi-night discounts clearly before payment submission.",
      solution: "Architected a sticky reservation widget with instant price computation, expandable breakdown drawers, and verified badge indicators."
    }
  },
  {
    title: 'Enggemos BookAStay - Map Discovery & Search Filter Engine',
    category: 'UI/UX Design',
    year: '2026',
    tagline: 'Interactive map-driven property search & location exploration',
    description:
      'Crafted a dynamic map-first search interface with price markers, neighborhood tags, and synchronized list-to-map hover highlights for effortless location-based property discovery.',
    tools: ['Figma', 'Micro-Interactions', 'Map UI', 'Layout Design'],
    image: bookastay03,
    details: {
      challenge: "Balancing split-screen map navigation with listing density on diverse tablet and desktop resolutions.",
      solution: "Designed a responsive split-view canvas with collapsible filter pills, synchronized map clustering, and instant card previews."
    }
  },
  {
    title: 'Enggemos BookAStay - Host Dashboard & Reservation Management',
    category: 'UI/UX Design',
    year: '2026',
    tagline: 'Vendor management portal for listings, availability & revenue',
    description:
      'Designed an intuitive host portal featuring calendar availability management, payout ledger tracking, automated booking approval controls, and real-time listing analytics.',
    tools: ['Figma', 'Dashboard UI', 'Data Visualization', 'Design Systems'],
    image: bookastay04,
    details: {
      challenge: "Simplifying multi-room availability management and blackout date controls for busy property owners.",
      solution: "Built an interactive calendar interface with visual color status tags, quick-toggle pricing overrides, and payout metrics."
    }
  },
  {
    title: 'Loyola College - Visual Identity & Brand Crest',
    category: 'Brand Identity',
    year: '2026',
    tagline: 'Institutional brand identity, emblem system & visual guidelines',
    description:
      'Comprehensive visual branding and identity system for Loyola College. Developed a distinguished crest emblem system, formal typography hierarchy, and a royal navy and gold color scheme tailored for academic stationery and official communications.',
    tools: ['Figma', 'Adobe Illustrator', 'Vector Crest Design', 'Typography', 'Brand Identity'],
    image: loyola01Image,
    details: {
      challenge: "Modernizing a heritage academic brand while preserving historical insignia recognition, authority, and ceremonial prestige.",
      solution: "Refined vector curves for clean scalability, paired a classic serif display font with clean humanist body typography, and codified gold/navy foil specifications."
    }
  },
  {
    title: 'Loyola College - Prospectus & Institutional Layouts',
    category: 'Brand Identity',
    year: '2026',
    tagline: 'High-density institutional prospectus and event marketing layouts',
    description:
      'Designed high-impact promotional collateral and publication layouts for Loyola College. Features structured editorial grid arrangements, refined photographic borders, and clear academic program data callouts.',
    tools: ['Figma', 'Adobe InDesign', 'Editorial Layout', 'Print Production', 'Typography'],
    image: loyola02Image,
    details: {
      challenge: "Organizing extensive academic milestones, alumni information, and program schedules into an easily readable and visually compelling layout.",
      solution: "Constructed a modular 6-column baseline grid with balanced negative margins, gold section dividers, and high-legibility typographic scales."
    }
  }
]
