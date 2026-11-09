# NDLink — Niger Delta Development Hub

A front-end design prototype of NDLink, a regional development platform for the Niger Delta
(an initiative of PIND Foundation). The site showcases development knowledge, opportunities,
projects, organizations, talent, learning resources, and community discussions.

This is a **static, client-rendered Next.js site** — there is no backend, API, or database.
All content on the directory pages is mock data defined in the page components.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript 5
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- [shadcn/ui](https://ui.shadcn.com) components built on Radix UI primitives
- lucide-react icons, Recharts, sonner, cmdk, vaul, embla-carousel, react-hook-form + zod
- pnpm (lockfile committed)

## Requirements

- Node.js **20.9 or newer** (required by Next.js 16)
- pnpm 10 (`corepack enable` or `npm i -g pnpm@10`)

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Production build

```bash
pnpm build
pnpm start
```

The app prerenders every route as static content, so it can be hosted anywhere that runs Node.js
(a VPS, Docker, Railway, Render, Fly.io, etc.).

### Fully static hosting (optional)

Because there are no server-side features, you can export plain HTML and host it on GitHub Pages,
Netlify, Cloudflare Pages, or any static file server. Add this to `next.config.mjs`:

```js
output: 'export',
```

Then run `pnpm build` and deploy the generated `out/` directory. For a GitHub Pages *project*
site (served from `/<repo-name>`), also set `basePath` and `assetPrefix` to `/<repo-name>`.

## Project structure

```
app/            Routes (one folder per page)
components/     Page sections + shadcn/ui primitives in components/ui
hooks/          React hooks
lib/            Shared utilities
styles/         Additional global styles
public/         Static assets (images, icons)
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Landing page (hero, project map preview, live feed, featured orgs/contributors) |
| `/about` | Mission and background |
| `/projects` | Project directory |
| `/organizations` | Organization directory |
| `/talent` | Talent directory |
| `/opportunities` | Jobs, grants, and scholarships |
| `/insights` | News, articles, and research |
| `/knowledge` | Knowledge hub collections |
| `/learning` | Courses and learning paths |
| `/community` | Community feed |
| `/forum` | Discussion topics |
| `/partner` | Partnership information |

## Notes

- `@vercel/analytics` is included but only reports data when deployed on Vercel. It is safe to
  leave in place on other hosts, or remove it (`app/layout.tsx` and `package.json`).
- `next.config.mjs` currently sets `typescript.ignoreBuildErrors: true` (a v0 default). Type
  checking passes (`npx tsc --noEmit`), so you can remove it to catch type errors during builds.
