"use client";

import { AppLink } from "./AppLink";
import { asset } from "@/lib/asset";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./SiteHeader.module.css";

const SECTIONS = [
  { id: "work", index: "01", label: "Work" },
  { id: "path", index: "02", label: "Experience" },
  { id: "craft", index: "03", label: "Stack" },
  { id: "about", index: "04", label: "Profile" },
  { id: "contact", index: "05", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  // The open state remembers which route it belongs to, so a navigation closes
  // the sheet without an effect that fights React.
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const menuOpen = menu.open && menu.path === pathname;
  const setMenuOpen = useCallback(
    (open: boolean) => setMenu({ open, path: pathname }),
    [pathname],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlights the section currently crossing the upper third.
  useEffect(() => {
    if (!isHome) return;
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!targets.length) return;

    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.01, 0.25, 0.6] },
    );
    targets.forEach((t) => spy.observe(t));
    return () => spy.disconnect();
  }, [isHome]);

  // Lock the page while the mobile menu is open, and close it on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, setMenuOpen]);

  const href = useCallback((id: string) => (isHome ? `#${id}` : `/#${id}`), [isHome]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <AppLink href="/" className={styles.brand} aria-label={`${profile.name} — home`}>
          <span className={styles.mark} aria-hidden="true">
            {profile.initials}
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{profile.name}</span>
            <span className={styles.brandRole}>{profile.title}</span>
          </span>
        </AppLink>

        <nav className={styles.nav} aria-label="Sections">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={href(s.id)}
                  className={active === s.id && isHome ? styles.active : undefined}
                  aria-current={active === s.id && isHome ? "true" : undefined}
                >
                  <span className={styles.navIndex}>{s.index}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a className={styles.cta} href={href("contact")}>
            Get in touch
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.menuLines} data-open={menuOpen} aria-hidden="true">
              <i />
              <i />
            </span>
            <span className={styles.srOnly}>{menuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {/* Kept in the DOM so it can animate; `visibility` + `inert` take it out of
          the tab order and the accessibility tree while it is closed. */}
      <div id="mobile-menu" className={styles.sheet} data-open={menuOpen} inert={!menuOpen}>
        <nav aria-label="Mobile">
          <ul>
            {SECTIONS.map((s, i) => (
              <li key={s.id} style={{ transitionDelay: `${60 + i * 45}ms` }}>
                <a href={href(s.id)} onClick={() => setMenuOpen(false)}>
                  <span className={styles.navIndex}>{s.index}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.sheetFoot}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={asset(profile.cv)} download>
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
