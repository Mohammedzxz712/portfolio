import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Internal link. Route prefetching is turned off for static-export builds,
 * where the prefetched RSC payloads do not exist on the host.
 */
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export function AppLink({ prefetch, ...props }: ComponentProps<typeof Link>) {
  return <Link prefetch={isStaticExport ? false : prefetch} {...props} />;
}
