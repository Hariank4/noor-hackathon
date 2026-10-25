# Noor Hackathon 2K26

Official single-page website for **Noor Hackathon 2K26** — *Be the Noor — Illuminate the Way*.
2–3 November 2026, Manav Rachna University, Faridabad (offline).

Registration is a Google Form for now (the client dropped Unstop). This site informs,
builds trust and links out (button + QR code). There is no backend, database, login or participant data.

## Stack

Next.js (App Router) · React 19 · TypeScript (strict) · plain CSS (`src/app/globals.css`)

- Galaxy intro: three.js, `@react-three/fiber`, `drei`, `postprocessing` (lazy-loaded)
- Registration QR generated at build time with `qrcode`
- Fonts via `next/font`: Cormorant Garamond, Manrope

## Run locally

Requires Node 20+.

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run typecheck
npm run lint
npm test
```

## Environment variables

Copy `.env.example` to `.env.local`, then restart the dev server.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_REGISTER_URL` | Registration link. Defaults to the Google Form in `next.config.ts`. Powers `/go/register` and the QR code. |
| `NEXT_PUBLIC_BROCHURE_URL` | Brochure file or URL. Without it the button reads "Brochure coming soon". |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO and social cards. |
| `NEXT_PUBLIC_WHATSAPP_URL` | WhatsApp group invite. Hidden until the client approves it (`flags.showWhatsApp`). |
| `NEXT_PUBLIC_PREVIEW` | Set to `1` on preview deployments only. Shows fees, which await client approval. |

## Changing content

- Copy, dates, prizes, rules, FAQ, team, partners: `src/content/content.ts` (`null` means "not supplied yet").
- Links, email, phone, socials and feature flags: `src/content/links.ts`.
- Partner logos: `public/partners/` (interim crops from the poster).

## How registration links work

Every Register button goes to `/go/register`, a redirect defined in `next.config.ts` that adds
`utm_source`, `utm_medium` and `utm_campaign` and keeps `utm_content`. The QR code encodes the direct
registration URL with `utm_content=qr`, so it keeps working even if this site is down.

## Intro

`src/components/Loader.tsx` plays a galaxy intro once per browser session. It is skipped for
`prefers-reduced-motion`, has a Skip button, and gives up after 6 seconds if WebGL stalls.

## Deploy

The site is static. Deploy to Vercel or Cloudflare Pages, set the environment variables above,
and use `npm run build` as the build command.
