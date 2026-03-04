# Blushing Beauty Studio 💅✨

**Premium beauty experiences tailored to your lifestyle.**

🌐 **Live Site**: [www.blushingbeauty.studio](https://www.blushingbeauty.studio)

---

## About

Blushing Beauty Studio is a premium salon founded in January 2022, located at **48 Agboyi Rd, Orioke, Lagos 100242**. We specialize in:

- ✂️ **Hair & Wigs** — Luxurious transformations
- 💅 **Nails & Pedicure** — Flawless mani-pedi care
- 💄 **Makeup & Gele** — Stunning looks for every occasion
- 🧖 **Facials & Skincare** — Revitalizing treatments

## Tech Stack

| Tool | Purpose |
|---|---|
| **Vite** | Build tool & dev server |
| **React 18** | UI framework |
| **Vanilla CSS** | Custom design system |
| **Vitest** | Unit testing |
| **React Testing Library** | Component testing |
| **Vercel** | Hosting & deployment |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm run test:run

# Build for production
npm run build
```

## Testing

**47 unit tests** across 6 test suites protect against regressions:

| Test Suite | Tests | Coverage |
|---|---|---|
| `Hero.test.jsx` | 6 | Brand tagline, WhatsApp CTA, link safety |
| `AboutUs.test.jsx` | 7 | Founding year, service features, local images |
| `PortfolioGallery.test.jsx` | 8 | Tab filtering, image counts, lazy loading |
| `Header.test.jsx` | 6 | Nav links, Book Now CTA, hamburger menu |
| `Footer.test.jsx` | 14 | Socials, address, hours, SVG icons, copyright |
| `App.test.jsx` | 6 | Section rendering, scroll-reveal initialization |

Run all tests before deploying:

```bash
npm run test:run
```

## Deployment

The site is deployed on **Vercel** with a custom domain.

```bash
# Deploy to production
vercel --prod
```

---

© 2026 Blushing Beauty Studio. All rights reserved.
