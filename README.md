# Orbit web

The marketing website for Orbit, a personal workspace for everything that matters. Built with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide React.

## Requirements

- Node.js 20.9 or newer
- npm

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The site has five routes: `/`, `/features`, `/experience`, `/philosophy`, and `/faq`.

## Checks and production build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

The build is statically prerendered. Deploy to a hosting provider that supports Next.js 16, or configure a static export if the target host requires one.

## Content and assets

The original app captures are retained in `Images/`. Copies under `public/Images/` are served by Next.js. Image dimensions and feature copy are defined in `src/lib/content.ts`. The primary `Explore Orbit` calls to action currently lead to the internal Experience page because an app download destination has not been announced.

Set `NEXT_PUBLIC_SITE_URL` to the full production origin when deploying so social image links resolve correctly. The site uses `VERCEL_URL` when available and localhost during development. Add canonical URLs and a sitemap when the production domain is known. Do not add app store, pricing, privacy, or platform claims without verified product information.
