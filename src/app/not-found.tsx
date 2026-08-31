import { AppLink } from "@/components/AppLink";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className="nf">
      <div className="shell">
        <p className="mono">Error 404</p>
        <h1 className="nf-title">
          This page never <em>shipped</em>.
        </h1>
        <p className="nf-copy">
          The link is broken or the page has moved. The work, the path and the contact details are all still on the
          home page.
        </p>
        <div className="nf-actions">
          <AppLink className="nf-primary" href="/">
            Back to the portfolio
          </AppLink>
          <AppLink className="nf-ghost" href="/#work">
            See the work
          </AppLink>
        </div>
      </div>
    </main>
  );
}
