import ajaniImage from '../assets/ajaniai.jpeg'
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
