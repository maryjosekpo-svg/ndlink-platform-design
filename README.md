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

## Static build

This project uses `output: 'export'`, so `pnpm build` produces a fully static site in `out/`.
There is no Node server to run in production.

```bash
pnpm build        # writes out/
npx serve out     # optional: preview locally
```

The export is plain HTML/CSS/JS and can be hosted on GitHub Pages, Netlify, Cloudflare Pages, S3,
or any static file server.

### Local preview with a base path

GitHub Pages *project* sites are served from `/<repo-name>`, so the build needs to know that
prefix. `next.config.mjs` reads it from `NEXT_PUBLIC_BASE_PATH`:

```bash
NEXT_PUBLIC_BASE_PATH=/my-repo pnpm build
```

To preview that build locally, serve `out/` from a directory whose name matches the base path:

```bash
mkdir -p /tmp/preview/my-repo && cp -R out/. /tmp/preview/my-repo/
npx serve /tmp/preview -l 3000   # open http://localhost:3000/my-repo/
```

## Deploying to GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`. It builds the site and publishes `out/`
on every push to `main`, automatically setting the base path to `/<repo-name>` (and leaving it
empty for `<user>.github.io` repos).

1. Push the repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The site is published at
   `https://<user>.github.io/<repo>/`.

`public/.nojekyll` is included so GitHub Pages serves the `_next/` assets directory, and
`trailingSlash: true` produces directory-style URLs (`/about/index.html`) that Pages resolves
reliably.

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

- `@vercel/analytics` was removed since it only reports data on Vercel and would request a
  missing script on GitHub Pages.
- `next.config.mjs` currently sets `typescript.ignoreBuildErrors: true` (a v0 default). Type
  checking passes (`npx tsc --noEmit`), so you can remove it to catch type errors during builds.
