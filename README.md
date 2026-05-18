# 613 HVAC — MAComfortSolutions

Marketing site for an Ottawa residential HVAC company. Built with **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**.

## Run it

```bash
npm install
npm run dev   # → http://localhost:3000
```

## Build & deploy

```bash
npm run build
npm start
```

Recommended host: **Vercel** (zero-config Next.js deploys).

## File map

```
app/                Routes (App Router)
  page.tsx          Homepage
  services/         Services overview + 4 detail pages
  about/, contact/, quote/
  layout.tsx        Header, footer, sticky mobile CTA, JSON-LD
  sitemap.ts, robots.ts
components/         All UI building blocks
lib/
  site.ts           ALL business content lives here — edit this file to swap in real values
  seo.ts            Per-page metadata helper
public/             logo.svg, favicon, future job photos
```

## What to swap before launch

Everything below is centralized — searching the codebase isn't needed.

| Edit this | To change |
| --- | --- |
| `lib/site.ts` | Phone, SMS, email, address, hours, license numbers, services, areas served, offers, testimonials |
| `public/logo.svg`, `public/favicon.svg`, `app/icon.svg` | Real logo + favicon |
| `public/images/jobs/*` | Drop in real job photos; reference paths from `lib/site.ts` and replace `<PhotoSlot />` usages |
| `components/QuoteForm.tsx` | Swap the `mailto:` submit for a Formspree / Resend / Web3Forms endpoint when you're ready |

### Switching the form to a real backend

Open `components/QuoteForm.tsx` and replace the `onSubmit` body. Two easy options:

- **Formspree / Web3Forms**: change the `<form>` to `action="https://formspree.io/f/XXX" method="POST"` and remove the custom `onSubmit`.
- **Resend (Next.js API route)**: create `app/api/quote/route.ts`, post the form data with `fetch`, and email via the Resend SDK.

## Brand tokens

Defined in `tailwind.config.ts`:

- `brand` — deep blue `#0B3D91`
- `accent` — warm orange `#F26A1F`
- `emergency` — red `#DC2626` (reserved for the 24/7 emergency callouts only)
- `ink` — `#0F172A`
- `surface` — `#F8FAFC`

## Conversion features baked in

- Sticky mobile CTA bar (Call · Text · Quote) on every page
- `tel:` and `sms:` links throughout — native handoff on mobile
- Header phone button visible on every page on desktop
- 24/7 emergency callout in hero + dedicated `/services/emergency` page
- Quote form on home, /quote, /contact, and every service page
- LocalBusiness JSON-LD in `app/layout.tsx` for SEO

## SEO

- Per-page metadata via `lib/seo.ts`
- LocalBusiness JSON-LD in root layout
- `sitemap.xml` and `robots.txt` auto-generated
- Static generation for every page (`npm run build` then check `.next/`)
