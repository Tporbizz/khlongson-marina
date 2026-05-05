# KhlongSon Marina

Production-ready marketing site for **Khlong Son Marina Trang** — a protected river marina on the Khlong Sikao estuary in Trang, Thailand.

> **Tagline:** Your Natural Safe Haven in the Andaman Sea.

## Tech stack

- **Next.js 15** (App Router, Server Components, Server Actions)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme` configuration)
- **Framer Motion** for scroll-revealed and parallax animation
- **React Leaflet** for the interactive marina map (dynamic import, SSR-disabled)
- **Lucide React** for line icons
- Inter + Playfair Display via `next/font`

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Build for production
npm run build && npm start
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx            Root layout, fonts, JSON-LD LocalBusiness
  page.tsx              Home — Hero + all marketing sections
  globals.css           Tailwind v4 + brand tokens
  sitemap.ts            Dynamic sitemap.xml
  robots.ts             robots.txt
  not-found.tsx         404
  loading.tsx           Default loading UI
  actions/booking.ts    Server Action — getBerthingQuote()
  berthing/page.tsx     Berthing rates, amenities, approach guide, map
  services/page.tsx     Full service catalogue
  tours/page.tsx        Dugong, Emerald Cave, 4 Islands, Sunset
  transfers/page.tsx    Airport & hotel transfers
  gallery/page.tsx      Filterable gallery
  contact/page.tsx      Contact details + enquiry form
  about/page.tsx        Story & values

components/
  Navbar.tsx · Footer.tsx · WhatsAppButton.tsx
  Hero.tsx · IntroSection.tsx · StatsSection.tsx
  ServicesSection.tsx · ToursSection.tsx · BookingTeaser.tsx
  Reviews.tsx · Gallery.tsx · ApproachGuide.tsx
  MarinaMap.tsx · MarinaMapWrapper.tsx (Leaflet, dynamic)
  PageHero.tsx · CtaSection.tsx · ScrollReveal.tsx

lib/
  constants.ts          Marina data, services, tours, reviews, gallery
  utils.ts              cn() + formatTHB()
```

## Notable features

- **Hero parallax** — Framer Motion `useScroll` driven background.
- **Server Action booking estimate** — `app/actions/booking.ts` returns an indicative THB total based on LOA, draft, vessel type, and dates.
- **Interactive Leaflet map** — POIs for the marina, beaches, the 4 islands, and both airports. River-channel polyline. Custom navy/gold pin. SSR-safe via `dynamic(... { ssr: false })`.
- **Filterable gallery** — Layout-animated grid with lightbox.
- **JSON-LD LocalBusiness** — `LocalBusiness` schema embedded in the root layout for SEO.
- **Floating CTAs** — WhatsApp + Navily buttons (bottom-right).
- **Mobile-first responsive** with reduced-motion friendly animations.

## Editing content

All copy lives in `lib/constants.ts`. Update:

- `MARINA` — name, address, contact, specs, distances
- `SERVICES`, `TOURS`, `REVIEWS`, `GALLERY` — list arrays
- `APPROACH_TIPS`, `STATS`, `AMENITIES`

Imagery currently uses Unsplash placeholders. Swap to a Vercel Blob, S3, or local `public/` folder for production. The single Unsplash hostname is whitelisted in `next.config.mjs` under `images.remotePatterns`.

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import the project at https://vercel.com/new.
3. Vercel auto-detects Next.js — no build flags required.
4. Set `NEXT_PUBLIC_SITE_URL` in Project → Settings → Environment Variables (optional; only used if you derive URLs from the env).
5. Deploy.

> **Tip:** Install the Vercel CLI with `npm i -g vercel` to enable `vercel deploy`, `vercel env pull`, and `vercel logs` from the terminal.

## Pricing logic

The `getBerthingQuote` Server Action uses:

```
dailyRate    = LOA × ฿220 × draftFactor
draftFactor  = 1.10 if draft ≥ 1.8 m, else 1.00
catamaran    = 1.50 × monohull rate
```

Update the constants at the top of `app/actions/booking.ts` to tune.

## Brand tokens

| Token            | Hex       | Usage                           |
|------------------|-----------|---------------------------------|
| Atlantic Navy    | `#0C3550` | Primary, dark backgrounds       |
| Brushed Silver   | `#A5B4C0` | Borders, secondary surfaces     |
| Champagne Gold   | `#D4AF87` | Accents, CTAs, hover            |
| Moss Green       | `#4A7043` | Tertiary accent, nature cues    |
| Cream            | `#FAF7F2` | Page background                 |

Defined as CSS variables under `@theme` in `app/globals.css`.

## License

Proprietary — © Khlong Son Marina Trang.
