import { profile, stack } from "@/data/profile";
import { shippedAppCount } from "@/data/projects";
import { experience } from "@/data/experience";
import { HeroDevices } from "./HeroDevices";
import { Marquee } from "./Marquee";
import { asset } from "@/lib/asset";
import styles from "./Hero.module.css";

const facts = [
  { value: profile.years, label: "Years building" },
  { value: String(shippedAppCount), label: "Apps in stores" },
  { value: String(experience.length), label: "Teams" },
  { value: "2", label: "Disciplines" },
];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <div className={`shell ${styles.grid}`}>
        <div className={styles.intro}>
          <p className={`mono ${styles.status}`}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.available}
          </p>

          <h1 id="hero-name" className={styles.name}>
            <span className={styles.line}>
              <span className={styles.word} style={{ animationDelay: "80ms" }}>
                Mohammed
              </span>
            </span>
            <span className={styles.line}>
              <span className={styles.word} style={{ animationDelay: "180ms" }}>
                Rageh
                <span className={styles.stop} aria-hidden="true">
                  .
                </span>
              </span>
            </span>
          </h1>

          <p className={`mono ${styles.role}`}>
            Software Engineer <span aria-hidden="true">/</span> Flutter <span aria-hidden="true">×</span> Python{" "}
            <span aria-hidden="true">/</span> End-to-end
          </p>

          <p className={styles.lede}>{profile.intro}</p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#work">
              <span>See selected work</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className={styles.ghost} href={asset(profile.cv)} download>
              Download CV
            </a>
          </div>

          <dl className={styles.facts}>
            {facts.map((f) => (
              <div key={f.label}>
                <dt className={styles.factValue}>{f.value}</dt>
                <dd className={`mono ${styles.factLabel}`}>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroDevices />
      </div>

      <div className={styles.ticker}>
        <Marquee items={stack} />
      </div>
    </section>
  );
}
