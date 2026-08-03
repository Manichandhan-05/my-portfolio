# Malyala Mani Chandhan — Enterprise AI & Backend Developer Portfolio

A world-class, production-ready developer portfolio for **Malyala Mani Chandhan** built with Next.js 15/16 App Router, TypeScript, Tailwind CSS v4, Framer Motion, and shadcn/ui principles. Inspired by design systems from Vercel, OpenAI, Linear, and Stripe.

---

## 🚀 Tech Stack

- **Core Framework**: Next.js 15/16 (App Router, Server Components, Route Handlers)
- **Language**: TypeScript (Strict type safety)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Variables + Custom Glassmorphism System
- **Animations**: Framer Motion (Fade, Slide, Stagger, Magnetic Buttons, Cursor Glow, Canvas Particles)
- **Icons**: Lucide React
- **Command Palette**: CMDK
- **Form Management**: React Hook Form + EmailJS (`@emailjs/browser`)
- **Theme Engine**: `next-themes` (Dark Mode default `#050816`)
- **Analytics**: Vercel Analytics (`@vercel/analytics`)

---

## 🛠️ Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx               # Root layout with next-themes, analytics, fonts & metadata
│   ├── page.tsx                 # Main single-page portfolio view
│   ├── globals.css              # Glassmorphism & custom utility classes
│   ├── robots.ts                # SEO robots.txt
│   └── sitemap.ts               # XML Sitemap
├── components/
│   ├── animations/              # ParticleBackground, CursorGlow, TypingAnimation, SpotlightCard, MagnetButton
│   ├── modals/                  # ProjectDetailModal, ResumeModal, CommandPalette
│   └── sections/                # Navbar, Hero, About, Education, Experience, Skills, Projects, Achievements, Timeline, CurrentLearning, Extras, Contact, Footer
├── constants/
│   ├── portfolioData.ts         # Strictly typed content source for all portfolio sections
│   └── siteConfig.ts            # Site metadata and social configuration
├── hooks/
│   ├── useMousePosition.ts      # Mouse coordinate tracker for spotlight cursor glow
│   └── useScrollProgress.ts     # Scroll completion percentage for top progress bar
├── lib/
│   └── utils.ts                 # Classname merger (clsx + tailwind-merge)
├── public/
│   └── assets/                  # High-resolution generated preview artwork & avatar
└── types/
    └── index.ts                 # Strict TypeScript interfaces
```

---

## 💻 Local Development Setup

1. **Clone & Install Dependencies**:
   ```bash
   git clone https://github.com/manichandhan/my-portfolio.git
   cd my-portfolio
   npm install
   ```

2. **Environment Variables Configuration (Optional)**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   *(Note: The contact form automatically falls back gracefully if EmailJS credentials are omitted.)*

3. **Run Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build & Verification

To verify production build readiness:
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

1. Push your code to your GitHub repository.
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Vercel will automatically detect Next.js App Router and set up the build command (`npm run build`).
4. Add environment variables if using EmailJS.
5. Deploy!

---

## 📄 License & Attribution

Designed and engineered for **Malyala Mani Chandhan**. All rights reserved.
