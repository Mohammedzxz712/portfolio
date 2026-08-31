# Mohammed Rageh — Portfolio

A Next.js (App Router) portfolio for Mohammed Rageh, Software Engineer — Flutter & Python.

Design direction: **Precision** — an enterprise product system: clean neutral surfaces, cool
graphite text, hairline structure and a single corporate blue used for state and emphasis. Light
is the primary theme, dark is a separately tuned palette. Headings are Inter Tight, body text is
Inter, and labels are IBM Plex Mono.

## Stack

- Next.js 16 (App Router, TypeScript, React 19)
- CSS Modules + a token-based design system in `src/app/globals.css` (no UI framework)
- `next/font` for self-hosted Google fonts, `next/image` for image optimisation
- Motion is CSS + a shared IntersectionObserver — no animation library

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata, JSON-LD, header/footer shell
    page.tsx              home: hero → work → path → craft → about → contact
    work/[slug]/          statically generated project pages
    opengraph-image.tsx   social card, generated at build time
    sitemap.ts robots.ts  SEO endpoints
  components/             UI components, one CSS Module each
  data/                   the content: profile, projects, experience, skills
  lib/                    theme store, reveal observer, asset/base-path helper
public/
  work/<slug>/            app screenshots used by the project pages
  Mohammed-Rageh-CV.pdf   downloadable CV
```

**All content lives in `src/data`.** Adding a project means adding one object to
`src/data/projects.ts` and dropping its screenshots in `public/work/<slug>/` — no markup changes.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npx eslint .       # lint
npx tsc --noEmit   # typecheck
```

## Deploy

**Vercel / any Node host:** `npm run build` and `npm start`. Nothing else to configure.

**GitHub Pages** (e.g. `mohammedzxz712.github.io/portfolio`):

```bash
NEXT_STATIC_EXPORT=true NEXT_BASE_PATH=/portfolio npm run build   # writes ./out
```

Publish the `out/` folder. `NEXT_BASE_PATH` is only needed when the site is served from a
subpath; drop it for a user site served at the domain root. The export mode turns off the image
optimiser, disables route prefetching, and `public/.nojekyll` keeps GitHub from swallowing
`_next/`. A ready-made workflow is in `.github/workflows/deploy.yml` — enable Pages with
"GitHub Actions" as the source and push to `main`.

## Notes

- Theme: `light` is the primary design; the toggle stores a choice in `localStorage` and falls
  back to the OS setting. `ThemeScript` applies it before first paint, so there is no flash.
- Live at https://mohammedzxz712.github.io/portfolio — deployed by `.github/workflows/deploy.yml`.
  The previous static HTML site is preserved on the `legacy-static` branch.
- Accessibility: skip link, semantic landmarks, visible focus rings, `inert` mobile menu,
  reduced-motion support throughout.
