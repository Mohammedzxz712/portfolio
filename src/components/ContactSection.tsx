import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { CopyEmail } from "./CopyEmail";
import { asset } from "@/lib/asset";
import styles from "./ContactSection.module.css";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}`, external: false },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { label: "GitHub", value: profile.githubLabel, href: profile.github, external: true },
];

export function ContactSection() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className="shell">
        <Reveal className={styles.top}>
          <p className={`mono ${styles.index}`}>
            <span aria-hidden="true">05 / Contact</span>
            <span className={styles.rule} aria-hidden="true" />
          </p>
          <h2 id="contact-title" className={styles.headline}>
            Available for your <em>next release</em>.
          </h2>
          <p className={styles.lede}>
            {profile.available}. Based in {profile.location} ({profile.timezone}) and used to working across time
            zones — Cairo, Riyadh, Toronto.
          </p>
        </Reveal>

        <Reveal className={styles.mailWrap} delay={80}>
          <a className={styles.mail} href={`mailto:${profile.email}`}>
            <span>{profile.email}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <CopyEmail email={profile.email} />
        </Reveal>

        <Reveal as="ul" className={styles.channels} delay={140}>
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer noopener" : undefined}
              >
                <span className={`mono ${styles.channelLabel}`}>{c.label}</span>
                <span className={styles.channelValue}>{c.value}</span>
              </a>
            </li>
          ))}
          <li>
            <a href={asset(profile.cv)} download>
              <span className={`mono ${styles.channelLabel}`}>Résumé</span>
              <span className={styles.channelValue}>Download PDF</span>
            </a>
          </li>
        </Reveal>
      </div>
    </section>
  );
}
