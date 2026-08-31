import type { NextConfig } from "next";

/**
 * Two deployment shapes are supported:
 *
 *  - default (Vercel / any Node host): server rendering + the image optimiser.
 *  - `NEXT_STATIC_EXPORT=true npm run build`: a fully static `out/` folder for
 *    GitHub Pages. Set `NEXT_BASE_PATH=/portfolio` when the site is served from
 *    a project subpath, e.g. mohammedzxz712.github.io/portfolio.
 */
const isExport = process.env.NEXT_STATIC_EXPORT === "true";
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" as const, trailingSlash: true } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // Exposed to the client so raw asset URLs and internal links can be prefixed too.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_STATIC_EXPORT: isExport ? "true" : "",
  },
  images: {
    // The optimiser is unavailable on a static host.
    unoptimized: isExport,
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  // Don't regenerate AGENTS.md / CLAUDE.md in the project root.
  agentRules: false,
};

export default nextConfig;
