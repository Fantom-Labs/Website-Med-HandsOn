# Med HandsOn — Institutional Website

> Website institucional desenvolvido para a **Med HandsOn**, escola médica brasileira especializada em ensino prático com pacientes reais.

🌐 **Live:** [medhandson.com.br](https://medhandson.com.br)

---

## Overview

This is a production website built for a medical education company in Brazil. The project required a performance-focused, content-driven frontend with smooth UX, clear information hierarchy, and fast load times — since the primary audience is medical professionals researching high-ticket courses.

The site covers the full institutional presence: homepage, course listings, course detail pages, news/blog, about, and legal pages.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Image Optimization | Next.js `<Image>` with responsive srcsets |
| Hosting/Deploy | Vercel |
| Icons/Assets | Custom SVGs |

---

## Key Features

- **App Router architecture** — file-based routing with layout composition and server components where applicable
- **Responsive design** — fully adapted for mobile, tablet, and desktop; hero section switches between dedicated mobile and desktop image assets
- **Performance-optimized images** — Next.js automatic WebP conversion and lazy loading throughout
- **SEO-ready** — semantic HTML structure, descriptive `alt` attributes, and proper heading hierarchy
- **Component-based structure** — reusable UI blocks (cards, feature icons, FAQ accordion) built to scale with new course pages
- **Accessibility considerations** — keyboard-navigable nav, contrast-compliant color choices

---

## Project Structure

```
/
├── app/
│   ├── page.tsx              # Homepage
│   ├── cursos/               # Course listing + dynamic [slug] pages
│   ├── noticias/             # News section
│   ├── quem-somos/           # About + contact
│   ├── termos/               # Terms of use
│   └── privacidade/          # Privacy policy
├── components/               # Shared UI components
├── public/
│   ├── images/               # Static assets
│   └── *.svg                 # Icon set
└── styles/
```

---

## Design Decisions

**Content-first layout** — The homepage was structured around conversion: hero with urgency signal ("últimas vagas"), methodology breakdown, course cards, and FAQ — following a natural decision funnel for a high-consideration purchase.

**Custom SVG icon system** — All feature icons are custom SVGs matching the brand identity, keeping the bundle lean without a third-party icon library.

**Mobile-specific assets** — The hero section uses separate image variants for mobile and desktop to ensure proper framing and loading performance on smaller screens.

---

## About the Project

Built by [Fantom](https://fantomweb.com.br) — a design and technology agency focused on custom websites and SaaS products. Partnership with KOMMU Marketing

---

## License

Proprietary. All rights reserved — Med HandsOn © 2026.
