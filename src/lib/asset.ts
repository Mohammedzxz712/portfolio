/**
 * Prefixes a public asset path with the deployment base path.
 *
 * `next/link` and the image optimiser add the base path themselves, but raw
 * `<a href>` targets and unoptimised images (static export) do not — those go
 * through here so the site also works from a subpath like /portfolio.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return path.startsWith("/") ? `${BASE}${path}` : path;
}
