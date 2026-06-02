import ajaniImage from '../assets/ajaniai.jpeg'
import vendorhqImage from '../assets/vendorhq.jpeg'
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
  },
]
