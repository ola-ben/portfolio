import ajaniImage from '../assets/ajaniai.jpeg'
import vendorhqImage from '../assets/vendorhq.jpeg'
import storelinkImage from '../assets/storelink.png'
import menulinkImage from '../assets/menulink.jpeg'
import benleaseImage from '../assets/benlease.jpeg'
import eatorderImage from '../assets/eatorder.jpeg'
import speedtouchImage from '../assets/speedtouch.jpeg'
import omnifoodImage from '../assets/omnifood.jpeg'

export const projects = [
  {
    name: 'Ajani',
    tagline: 'Booking marketplace for hotels, shortlets & event halls in Oyo State',
    description:
      'A multi-tier hospitality and event booking ecosystem serving guests, property hosts, field agents, corporate teams, and administrators across Oyo State. Features category-specific booking workflows (Hotels, Shortlets, Event Halls & Workspaces), guided room/space photo tours with automated Cloudinary responsive delivery, a standalone physical property inspection booking engine with Paystack payment verification, a dedicated Corporate B2B portal with invoice management, automated gift card purchasing and redemption, and vendor price intelligence analytics.',
    stack: [
      'React 19',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'TanStack Query',
      'PWA & Service Workers',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'Cloudinary API',
      'Paystack Payments',
      'Google OAuth',
      'Leaflet Maps'
    ],
    live: 'https://staging.ajani.ai',
    github: 'https://github.com/LadeleAjao/Ajani-frontend',
    image: ajaniImage,
    spec: {
      flow: 'Guest / Host / Corporate ─── React 19 (PWA / SSR) ─── Express 5 API ─── MongoDB Atlas\n                                                          ├─── Paystack (Checkout & Invoicing)\n                                                          ├─── Cloudinary (Responsive Media Engine)\n                                                          └─── AI Price Intelligence & Moderation',
      schema: 'listings {\n  _id: ObjectId\n  vendorId: ObjectId\n  category: "hotel" | "shortlet" | "event"\n  pricing: { baseRate: number, discounts: array, priceIntel: object }\n  inspection: { enabled: boolean, fee: number, packages: array }\n  availability: { blackoutDates: array, allocations: object }\n}',
      challenge: 'Architected a multi-tenant marketplace unifying 4 distinct booking models (room inventory, shortlet daily leases, event hall slots, and inspection requests) with atomic availability checks, webhook-verified Paystack payments, and automated Cloudinary CDN delivery.'
    }
  },
  {
    name: 'Speedtouch',
    tagline: 'Full-stack e-commerce and booking platform for an auto detailing & commercial cleaning service in Nigeria',
    description:
      'A full-stack, production-ready web application and PWA featuring product purchasing, service reservations, direct Moniepoint bank transfer checkout with automated receipt generation, 1-click WhatsApp order confirmation, Google SSO (OAuth/GSI), and a full admin dashboard for order and catalog management.',
    stack: [
      'React 19',
      'Vite',
      'Tailwind CSS v4',
      'Supabase',
      'PostgreSQL',
      'Google GSI Auth',
      'PWA',
      'WhatsApp API'
    ],
    live: 'https://speedtouch.com.ng',
    github: 'https://github.com/ola-ben/speedtouch',
    image: speedtouchImage,
    spec: {
      flow: 'PWA Client (Offline Cache) ──► Supabase (RLS Auth & DB) ──► Moniepoint Transfer\n                                                          └──► WhatsApp API & Receipt Dispatch',
      schema: 'orders {\n  id: uuid\n  customer_id: uuid (Google GSI / Supabase Auth)\n  items: jsonb (services & products)\n  total_amount: numeric\n  payment_method: "moniepoint_transfer"\n  status: "pending" | "confirmed" | "completed"\n}',
      challenge: 'Engineered a seamless direct bank-transfer checkout with automated receipt rendering, WhatsApp confirmation dispatch, and Google GSI SSO with whitelist RBAC for /admin.'
    }
  },
  {
    name: 'StoreLink',
    tagline: 'Turn WhatsApp into a real storefront for Nigerian sellers',
    description:
      'Live in production with 20+ active Nigerian merchants. A full-stack, mobile-first SaaS storefront builder for WhatsApp & Instagram vendors. Features Google OAuth onboarding, automated EmailJS welcome emails, an installable PWA with silent auto-updates, integrated Paystack subscription billing (₦1,200/mo) backed by strict PostgreSQL RLS paywalls, and structured WhatsApp cart checkout.',
    stack: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL RLS',
      'Paystack Payments',
      'EmailJS Automation',
      'Progressive Web App (PWA)',
      'Google OAuth',
      'QR Code Generation'
    ],
    live: 'https://naija-storefront.vercel.app',
    github: null,
    image: storelinkImage,
    planned: 'Custom domain mapping and automated inventory sync with WhatsApp Business Catalog.',
    spec: {
      flow: '20+ Active Stores ───► PWA Client ───► Supabase (RLS Auth & DB) ───► Paystack (₦1,200/mo)\n                                        ├───► EmailJS (Welcome Triggers)\n                                        └───► WhatsApp Cart Link Generator',
      schema: 'store_billing {\n  store_id: text (references stores)\n  active: boolean\n  expires_at: timestamptz\n  trial_ends_at: timestamptz\n}',
      challenge: 'Architected an un-bypassable subscription paywall using PostgreSQL Row Level Security (RLS) & SECURITY DEFINER RPCs for Paystack transactions, and built a seamless offline-first PWA caching layer supporting 20+ active stores.'
    }
  },
  {
    name: 'MenuLink',
    tagline: 'Turn restaurant menus into interactive table QR codes',
    description:
      'A minimalist, mobile-first digital menu builder and table QR code generator for bukas, restaurants, and food vendors. Features real-time table placard preview, structured WhatsApp order checkout formatting, automated commission-free savings calculator, and a Groq-powered AI chatbot assistant with pleasant audio notification chime and custom mobile hamburger navigation.',
    stack: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'HTML5 Web Audio API',
      'Supabase',
      'PostgreSQL',
      'Groq AI',
      'QR Code Generation'
    ],
    live: 'https://menulinkapp.vercel.app',
    github: 'https://github.com/ola-ben/menu-builder',
    image: menulinkImage,
    spec: {
      flow: 'Diner ──► Scan Table QR ──► Select Items ──► WhatsApp Checkout\n                                └──► Web Audio API & Groq Assistant',
      schema: 'menu_orders {\n  id: uuid\n  menu_id: uuid (references menus)\n  items: jsonb (name, qty, price)\n  table_number: integer\n}',
      challenge: 'Implemented a zero-dependency programmatic audio message notification chime using the Web Audio API, and designed a custom vertical flexbox layout for the simulated diner interface to guarantee a perfect scroll-free display across diverse viewports.'
    }
  },
  {
    name: 'EatOrder',
    tagline: 'Food delivery + reservations for 15+ Ibadan restaurants',
    description:
      'Real-time customer ordering, table reservations, role-gated admin panel, and a query-based AI assistant. Postgres with Row Level Security, persisted React Query cache, and JWT-based RBAC via app_metadata.',
    stack: ['React 19', 'Vite', 'Express', 'Supabase', 'PostgreSQL', 'Vercel', 'Render'],
    live: 'https://eatorder-green.vercel.app',
    github: 'https://github.com/ola-ben/eatorder',
    image: eatorderImage,
    spec: {
      flow: 'Customer ──► React Query ──► Supabase Postgres (RLS Claims)\n                                └──► Groq Agent Parser (Chat)',
      schema: 'profiles {\n  id: uuid (references auth.users)\n  app_metadata: jsonb (RBAC: "admin" | "customer")\n}',
      challenge: 'Enforced bulletproof multi-tenant separation using custom Supabase PostgreSQL Row Level Security checks based on JWT claims.'
    }
  },
  {
    name: 'VendorHQ',
    tagline: 'AI-powered automation OS for Nigerian vendors who run their business on WhatsApp',
    description:
      'Consolidates WhatsApp, Instagram, and Facebook DMs into one dashboard with auto-parsed orders, Paystack payment matching, low-stock alerts, and a customer ledger derived from chat history. n8n-powered automations fire real webhooks via a Vercel serverless function, and the in-app assistant runs on Groq with a keyword-matcher fallback.',
    stack: ['React 19', 'Vite 7', 'Tailwind v4', 'Framer Motion', 'React Router 7', 'Radix UI', 'Sonner', 'Vercel Serverless', 'Groq AI', 'n8n'],
    live: 'https://vendorhq.vercel.app',
    github: null,
    image: vendorhqImage,
    spec: {
      flow: 'WhatsApp DM ──► n8n Webhook ──► Groq AI Parser ──► Serverless DB\n                                                     └──► Paystack Webhook',
      schema: 'ledger {\n  id: uuid\n  phone: varchar\n  orders: jsonb (items, totals)\n  ledger_balance: numeric\n}',
      challenge: 'Developed a prompt-chaining state machine that reliably maps unstructured chat transcripts into relational order objects.'
    }
  },
  {
    name: 'Ben Lease',
    tagline: 'Verified long-term rentals for Lagos, Abuja & Ibadan tenants',
    description:
      'Mobile-first long-term rental platform with video tours, interactive map search, side-by-side compare, in-app inspection booking, an affordability calculator, and editorial neighborhood guides. Every home is physically verified — direct landlord pay, no agency fees, lease drafted by lawyers.',
    stack: ['React 18', 'TypeScript', 'Vite', 'Tailwind v3', 'Framer Motion', 'React Router 6', 'Leaflet', 'Vercel'],
    live: 'https://benlease.vercel.app',
    github: 'https://github.com/ola-ben/ben-lease',
    image: benleaseImage,
    spec: {
      flow: 'User ──► Map Bounds (Leaflet) ──► Lat/Lng Query ──► Vercel API',
      schema: 'properties {\n  id: uuid\n  coordinates: point\n  verified_by: fk legal_agents\n  direct_pay_link: string\n}',
      challenge: 'Optimized real-time map bounds indexing to query large rental datasets under 50ms using spatial indexing on coordinates.'
    }
  },
  {
    name: 'Omnifood',
    tagline: 'Modern landing page for a healthy meal delivery service',
    description:
      'Responsive marketing site with smooth scroll, sticky navigation, and pricing tiers. Originally built from scratch in vanilla CSS, then refactored to Tailwind for a cleaner, utility-first styling system.',
    stack: ['HTML', 'JavaScript', 'Tailwind CSS', 'Originally vanilla CSS'],
    live: 'https://omini-food-iota.vercel.app',
    github: null,
    image: omnifoodImage,
    spec: {
      flow: 'User ──► Modern Landing Page ──► Sticky Header ──► Lead Form',
      schema: 'pricing_tier {\n  id: string\n  price: number\n  features: string[]\n}',
      challenge: 'Successfully refactored a legacy, unmaintainable vanilla CSS sheet into clean, responsive utility-first Tailwind classes.'
    }
  }
]
