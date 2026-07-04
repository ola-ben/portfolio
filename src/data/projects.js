import ajaniImage from '../assets/ajaniai.jpeg'
import vendorhqImage from '../assets/vendorhq.jpeg'
import storelinkImage from '../assets/storelink.png'
import menulinkImage from '../assets/menulink.png'
import benleaseImage from '../assets/benlease.jpeg'
import eatorderImage from '../assets/eatorder.jpeg'
import speedtouchImage from '../assets/speedtouch.jpeg'
import omnifoodImage from '../assets/omnifood.jpeg'

export const projects = [
  {
    name: 'Ajani',
    tagline: 'Booking marketplace for hotels, shortlets & event halls in Oyo State',
    description:
      "End-to-end booking marketplace serving three audiences (buyers, vendors, admins). Airbnb-inspired hero search, vendor portal with AI listing generator, and admin moderation panel with AI Price Intelligence.",
    stack: ['React 18', 'Vite', 'Tailwind v4', 'Framer Motion', 'React Query', 'Express 5', 'MongoDB', 'Cloudinary', 'JWT'],
    live: 'https://ajani.ai',
    github: null,
    image: ajaniImage,
    spec: {
      flow: 'Client ──► Express 5 ──► MongoDB (Cluster Index)\n                 └─► Price Intelligence API',
      schema: 'booking {\n  _id: ObjectId\n  buyer_id: ObjectId\n  vendor_id: ObjectId\n  price: Decimal128\n  status: string\n}',
      challenge: 'Designed an asynchronous moderation pipeline evaluating pricing clusters to detect and alert admin on outlier rates.'
    }
  },
  {
    name: 'StoreLink',
    tagline: 'Turn WhatsApp into a real storefront for Nigerian sellers',
    description:
      'A full-stack, mobile-first SaaS storefront builder for WhatsApp & Instagram vendors. Features passwordless Email OTP onboarding, Google OAuth, a 4-step wizard creator, offline-first local storage caching with automatic cloud database sync, downloadable QR codes, and direct WhatsApp checkout cart formatting.',
    stack: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Passwordless Email OTP',
      'Resend SMTP',
      'Google OAuth',
      'QR Code Generation'
    ],
    live: 'https://naija-storefront.vercel.app',
    github: null,
    image: storelinkImage,
    planned: 'Paystack payments integration, automated custom domain mapping for merchants.',
    spec: {
      flow: 'Client (Vite/React) ──► Supabase (Auth & DB) ──► Resend SMTP (OTP)\n                                └─► WhatsApp Checkout Link Generator',
      schema: 'stores {\n  id: uuid\n  owner_id: uuid (references auth.users)\n  name: text\n  slug: text (unique)\n  trial_ends_at: timestamp\n}',
      challenge: 'Engineered a seamless client-side migration path syncing local-only offline store states to Supabase database upon user registration, and resolved multi-tab synchronization race conditions.'
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
      flow: 'Diner ──► Scan Table QR ──► Select Items ──► WhatsApp Checkout\n                                └─► Web Audio API & Groq Assistant',
      schema: 'menu_orders {\n  id: uuid\n  menu_id: uuid (references menus)\n  items: jsonb (name, qty, price)\n  table_number: integer\n}',
      challenge: 'Implemented a zero-dependency programmatic audio message notification chime using the Web Audio API, and designed a custom vertical flexbox layout for the simulated diner interface to guarantee a perfect scroll-free display across diverse viewports.'
    }
  },
  {
    name: 'Speedtouch',
    tagline: 'Full-stack e-commerce for a Nigerian cleaning service',
    description:
      'Complete storefront with Paystack payments, slide-out cart, delivery-vs-pickup checkout, and admin dashboard. Postgres triggers atomically decrement stock on order. Installable PWA with platform-aware install prompt.',
    stack: ['React 19', 'Vite', 'Tailwind v4', 'Supabase', 'Paystack', 'vite-plugin-pwa'],
    live: 'https://speedtouch-virid.vercel.app',
    github: null,
    image: speedtouchImage,
    spec: {
      flow: 'PWA Client (Offline Cache) ──► Supabase ──► Paystack API\n                                 └─► Postgres Trigger (Stock Sync)',
      schema: 'orders {\n  id: uuid\n  items: jsonb\n  total_amount: numeric\n  payment_verified: boolean\n}',
      challenge: 'Implemented atomic transactional slot decrementing using Postgres triggers to eliminate double-bookings.'
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
      flow: 'Customer ──► React Query ──► Supabase Postgres (RLS Claims)\n                                └─► Groq Agent Parser (Chat)',
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
      flow: 'WhatsApp DM ──► n8n Webhook ──► Groq AI Parser ──► Serverless DB\n                                                     └─► Paystack Webhook',
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
  },
]
