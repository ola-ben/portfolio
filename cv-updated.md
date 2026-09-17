# OLADIMEJI BENJAMIN OLAOLUWA

No 23 Rose Wale, Iwo Road, Ibadan, Oyo State, Nigeria
+234 706 302 6374 Â· olaben09@gmail.com
[github.com/ola-ben](https://github.com/ola-ben)

---

## CAREER PROFILE

Junior Full-Stack Developer & Designer who designs and builds web products end-to-end. Currently leading **Ajani** ([ajani.ai](https://ajani.ai)) â€” a React + Express 5 + MongoDB booking marketplace for hotels, shortlets, and event halls in Oyo State â€” and built **EatOrder**, a deployed food delivery + reservations platform on Vercel/Render with Supabase Postgres and Row Level Security. Comfortable with React 18/19, Tailwind v4, Framer Motion, TanStack React Query, REST API design, JWT-based RBAC, and modern deploy pipelines. Cares about clean architecture, premium design aesthetics, accessible UX, performance, and shipping real features fast.

---

## WORK EXPERIENCE

### Junior Full-Stack Developer

**Ajani Digital Smart Services** â€” Ibadan, Oyo State, Nigeria Â· [ajani.ai](https://ajani.ai)
_October 2025 â€“ Present_

- Primary developer on the Ajani platform â€” own frontend, backend, database, and deploy pipeline end-to-end, reporting directly to the founder.
- Translate product direction into shipped features on a weekly cadence: scope tickets, build, test, deploy, and iterate from daily reviews.
- Architect and ship the React + Vite frontend, Express 5 / MongoDB REST API, JWT-based RBAC, and Cloudinary asset pipeline.
- Build and maintain the three audience surfaces â€” buyer search & booking flow, vendor portal (listings, availability, payouts, accept/reject), and admin moderation panel.
- Run DevOps for the project: Vercel + Render deploys, env-var management, Resend transactional email, PDFKit receipts, and analytics instrumentation.

### Front-End Engineer | MIS Specialist (Intern)

**State Operations Coordinating Unit (SOCU)** â€” Oyo State Government Secretariat, Ibadan
_January 2025 â€“ December 2025_

- Supported the National Social Safety Nets Project (NASSP) by managing data systems that tracked poor and vulnerable households across rural communities in Oyo State.
- Designed and developed front-end web interfaces using HTML, CSS, JavaScript, and React.js to visualize data collected from field operations.
- Maintained and updated the Social Register Database, ensuring data integrity, security, and timely reporting.
- Created dashboards and tools for internal stakeholders to access program data and monitor poverty-alleviation interventions.
- Collaborated with data enumerators, M&E teams, and program officers to streamline data collection, validation, and reporting processes.
- Provided technical support for MIS infrastructure and helped automate report generation for improved decision-making.

---

## PROJECTS

### Ajani â€” Full-stack hotels, shortlets & event-halls booking platform for Oyo State

**[ajani.ai](https://ajani.ai)**
_React 18 Â· Vite Â· Tailwind v4 Â· Framer Motion Â· React Query Â· React Router 7 Â· Express 5 Â· MongoDB / Mongoose Â· Supabase Auth Â· Cloudinary Â· Resend Â· JWT_

- Architected an end-to-end booking marketplace covering customer search, vendor onboarding, admin moderation, payments, reviews, and AI-assisted price intelligence â€” **three audiences (buyers, vendors, admins) on one codebase**.
- Designed a layered **Express 5 REST API** (`routes â†’ middlewares â†’ controllers â†’ services â†’ models`) with JWT auth, RBAC, helmet, CORS allow-listing, express-rate-limit, hpp, mongo-sanitize, and centralized error handling.
- Modeled domain entities (`User`, `Listing`, `Booking`, `Review`, `Payment`, corporate accounts) in MongoDB via Mongoose; integrated **Cloudinary** image uploads (multer), **Resend / nodemailer** transactional email, and PDF receipts via `pdfkit`.
- Built a **Vite + React 18** frontend with route-level code splitting, **TanStack React Query** caching, **Framer Motion** shared-element transitions (Airbnb-style search popovers via `layoutId`), and SEO-friendly slugs + sitemap.
- Shipped an **Airbnb-inspired hero search** (portal-rendered Where/When/Who popovers, two-month range calendar, location autocomplete) plus a **vendor portal** (AI listing description generator, touch-drag availability calendar, payouts, accept/reject by email-link) and **admin panel** (AI Price Intelligence, automation, field-agent management).
- Instrumented **multi-step analytics** (search â†’ view â†’ booking funnel, IntersectionObserver impression batching) feeding downstream BI; built a one-click `/booking-action` page so vendors approve/reject from an email link.

### EatOrder â€” Full-stack food delivery + reservations platform

**[eatorder-green.vercel.app](https://eatorder-green.vercel.app)** Â· [github.com/ola-ben/eatorder](https://github.com/ola-ben/eatorder)
_React Â· Express Â· Supabase Â· PostgreSQL Â· Vercel Â· Render_

- Built and deployed an end-to-end food delivery platform with real-time customer ordering, table reservations, role-gated admin panel, and a query-based AI assistant â€” covering 15+ restaurants in Ibadan.
- Designed Postgres schema (`orders`, `order_items`, `reservations`) with **Row Level Security** policies and an auth-aware `SECURITY DEFINER` function â€” customers query Supabase directly while admin actions route through an Express service-role API on Render.
- Engineered a **Vite + React 19** frontend with route-level code splitting, **persisted React Query cache** (localStorage, 5-min staleTime), and skeleton loaders â€” eliminating perceived cold-start latency on Render's free tier.
- Implemented **Framer Motion** micro-interactions, mobile-first responsive design (5-tab bottom nav / desktop top nav), JWT-based RBAC via `app_metadata.role`, and a custom animated toast system using `useToaster()`.
- Wrote a layered Express backend (`routes â†’ middleware â†’ controllers â†’ db`) with helmet, CORS allow-listing, and centralized error handling â€” deployed via GitHub auto-deploys.

### Speedtouch — Full-stack Next.js e-commerce, service booking & admin platform

**[speedtouch.com.ng](https://speedtouch.com.ng)** · [github.com/ola-ben/speedtouch](https://github.com/ola-ben/speedtouch)
_Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Framer Motion · Supabase (Auth, Postgres RLS, Storage) · Paystack · Google Schema.org · PWA · Apache cPanel_

- Shipped a complete commercial cleaning & eco-supplies platform end-to-end: marketing showcase, service booking, dynamic catalog with category filtering & search, spring-animated cart drawer with `localStorage` persistence, flexible checkout (delivery vs station pickup), and 1-click WhatsApp order confirmation with formatted receipts.
- Built a **hardened admin portal** (/admin) with Supabase RBAC, custom admin email whitelisting, protected routing eliminating redirect loops, revenue & order stat cards, low-stock notifications, image uploads to Supabase Storage, and live order status toggling.
- Architected for **Google Mobile Sitelinks & SEO using Next.js App Router**: configured dynamic sitemaps (`sitemap.js`), robots rules (`robots.js`), and Schema.org structured data (`LocalBusiness`, `Product`, `Service`, and `WebSite` navigation elements).
- Implemented modern **Framer Motion** micro-interactions: spring-slide cart drawer, staggered FAQ accordions with rotating glyphs, animated hamburger navigation, and card hover elevations.
- Designed database schema in **PostgreSQL with Row Level Security (RLS)**: public anonymous reads for products/services, anonymous order inserts, and authenticated-only admin operations with atomic stock decrements via `SECURITY DEFINER` triggers.
- Optimized deployment for **cPanel Apache**: engineered automatic cache-busting via content hashing, `max-age=0, must-revalidate` headers on HTML pages in `.htaccess`, and dual packaging for both Next.js and Vite PWA pipelines for zero-server-latency sub-second response times.

---

## EDUCATION

**B.Sci Economics** â€” Ladoke Akintola University of Technology, Ogbomoso, Oyo State, Nigeria
_Dec 2020 â€“ Mar 2024_

**Diploma, Front-End Web Development** â€” Udemy _(2023)_
**Diploma, Facebook Front-End Web Development** â€” Coursera _(2024)_

---

## TECHNICAL SKILLS

**Frontend** Â· React 18 / 19, Vite, Tailwind CSS v4, Framer Motion, React Router 7, TanStack React Query, React Hook Form, Lucide / React Icons, Leaflet, JavaScript (ES6+), HTML5, CSS3
**Backend** Â· Node.js, Express 4 / 5, REST API design, Mongoose, Multer, Helmet, express-rate-limit, express-validator, hpp, mongo-sanitize
**Database & Auth** Â· MongoDB, PostgreSQL, Supabase (Auth, Database, Row Level Security), JWT, bcrypt
**Design & Creative** Â· Figma, Adobe Photoshop, Adobe Illustrator, Visual Branding, Typography, Layout Design
**Email & PDF** Â· Resend, Nodemailer, PDFKit
**Cloud & Tooling** Â· Cloudinary, Vercel, Render, cPanel, Git, GitHub, npm
**AI / Productivity** Â· Claude (Sonnet, Opus) for pair-programming and code review, Claude Code CLI, DeepSeek, ChatGPT, Cursor â€” comfortable scoping and shipping features alongside an AI agent
**Practices** Â· Role-based access control (RBAC), JWT authentication, route-level code splitting, persisted client caching, responsive mobile-first design, accessibility, analytics instrumentation, SEO-friendly slugs

---

## SOFT SKILLS

Communication Â· Problem Solving Â· Creativity Â· Teamwork Â· Time Management Â· Attention to Detail Â· Continuous Learning

---

## PORTFOLIO

GitHub Â· [github.com/ola-ben](https://github.com/ola-ben)
Ajani (live) Â· [ajani.ai](https://ajani.ai)
EatOrder (live) Â· [eatorder-green.vercel.app](https://eatorder-green.vercel.app)
Omnifood (live) Â· [omini-food-iota.vercel.app](https://omini-food-iota.vercel.app)

---

## REFERENCES

Available upon request.

---

_Open to junior / mid full-stack and front-end opportunities â€” remote or Ibadan-based._
