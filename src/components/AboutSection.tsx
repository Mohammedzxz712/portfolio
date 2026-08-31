import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className="shell">
        <SectionHeading
          index="04 / Profile"
          title="Engineer on both sides of the API."
          id="about-title"
          note="Cairo-based, working with teams in Egypt, Saudi Arabia and Canada."
        />

        <div className={styles.layout}>
          <div className={styles.story}>
            <Reveal as="blockquote" className={styles.quote}>
              “A feature is not finished when it compiles. It is finished when it is in the store, on someone&apos;s
              phone, and still fast on the third week.”
            </Reveal>

            <Reveal className={styles.prose} delay={80}>
              <p>{profile.summary}</p>
              <p>
                Most of my work looks like this: a Flutter app with a real architecture behind it — Clean Architecture,
                clear layers, offline-first storage — talking to a Python service I usually helped build. That
                combination is why I get handed products end to end rather than tickets.
              </p>
              <p>
                I studied Computer and Information Science at {profile.education.school} and graduated in{" "}
                {profile.education.graduated}, but most of what I know came from shipping: school platforms in daily
                use by parents and staff, computer-vision apps for security teams, and field tools that have to keep
                working with no signal at all.
              </p>
            </Reveal>

          </div>

          <Reveal as="aside" className={styles.facts} delay={120}>
            <div className={styles.card}>
              <p className={`mono ${styles.cardLabel}`}>Certifications</p>
              <ul className={styles.list}>
                {profile.certifications.map((c) => (
                  <li key={c.name}>
                    <span>{c.name}</span>
                    <span className={`mono ${styles.meta}`}>
                      {c.issuer} · {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <p className={`mono ${styles.cardLabel}`}>Languages</p>
              <ul className={styles.list}>
                {profile.languages.map((l) => (
                  <li key={l.name}>
                    <span>{l.name}</span>
                    <span className={`mono ${styles.meta}`}>{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <p className={`mono ${styles.cardLabel}`}>Working with me</p>
              <ul className={styles.tags}>
                {profile.softSkills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
