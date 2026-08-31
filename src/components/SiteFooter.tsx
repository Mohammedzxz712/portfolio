import { profile } from "@/data/profile";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <p className={`mono ${styles.colophon}`}>
          © {year} {profile.name} · Built with Next.js · Inter Tight &amp; IBM Plex Mono
        </p>
        <div className={styles.links}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#main" className={styles.top}>
            Back to top
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
