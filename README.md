# Blue Sky Painter — Homepage

A single-page, conversion-focused homepage for Blue Sky Painter (Totara
Vale, Auckland), built with Next.js (App Router), React, Tailwind CSS v4
and GSAP.

Logo, business copy (about/services/testimonials), phone, email and
address are the client's real content. **Gallery project photos are still
placeholders** — see "Still to replace" below.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (design tokens live in `app/globals.css` under `:root`
  and `@theme inline` — Tailwind v4 doesn't use `tailwind.config.ts` for
  this)
- GSAP (+ ScrollTrigger, via the official `@gsap/react` `useGSAP` hook)
  for hero entrance and scroll reveals only

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  layout.tsx      — fonts, <head> metadata (title/description/OG)
  page.tsx         — the entire homepage, section by section
  globals.css      — color tokens, base styles, reduced-motion handling

components/
  Navigation.tsx   — sticky nav + mobile menu, real logo
  CTAButton.tsx    — shared call-to-action button (primary/secondary/ghost/inverse)
  ServiceCard.tsx  — service grid card, optional "Get a Quote" link
  GalleryItem.tsx  — gallery tile (real photo or styled placeholder)

lib/
  animations.ts    — GSAP hero entrance + scroll-reveal helpers
  icons.tsx         — small inline SVG icons used throughout the page

public/
  images/hero/      — hero photo (paintbrush.png)
  images/gallery/    — reserved for real project photos
  logo/              — real logo (blue-sky-painter-logo.png)
```

## Still to replace

- **Gallery photos** — `GALLERY_ITEMS` in `app/page.tsx` currently render
  as styled color-swatch placeholders via `GalleryItem`. Add real project
  photos to `public/images/gallery/` and pass a `src` prop to switch a
  tile over to an actual `next/image`.
- **Facebook link** — the Contact section has a Facebook tile but no real
  URL was supplied yet; it's currently a non-functional `#` link
  (`aria-label` notes it's a placeholder).
- **"More reviews on Google"** — currently plain text under the
  testimonials grid; link it to the business's real Google review page
  once available.
- **Hero image** — `public/images/hero/paintbrush.png` is stock/placeholder
  photography (paint rollers), not a real project or team photo. Swap for
  one when available; update the `alt` text in `app/page.tsx` to match.

## Notes

- No backend, database, auth, CMS, or contact-form submission — this is a
  static marketing page only, per the project brief.
- Brand name appears as "Blue Sky Painter" (singular) throughout, matching
  the real email domain (`blueskypainter.co.nz`) and copyright line
  supplied by the client. Flag if "Blue Sky Painters" (plural) is actually
  correct.
- Animations are GSAP-driven scroll reveals + a hero entrance; they
  respect `prefers-reduced-motion` and the page is fully readable with JS
  disabled.

# Blueskypainters
