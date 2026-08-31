import { AppLink } from "./AppLink";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projectBySlug } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
  return (
    <section id="path" className={styles.section} aria-labelledby="path-title">
      <div className="shell">
        <SectionHeading
          index="02 / Experience"
          title="Five teams. Two disciplines. One delivery standard."
          id="path-title"
          note="Roles run in parallel more often than in sequence: a product company, a remote platform team, and an independent practice that never fully closed."
        />

        <ol className={styles.ledger}>
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.start}`} className={styles.entry} delay={i * 70}>
              <div className={styles.when}>
                <p className={`mono ${styles.period}`}>{job.period}</p>
                <p className={`mono ${styles.place}`}>{job.location}</p>
                {job.current ? <span className={`mono ${styles.badge}`}>Current</span> : null}
              </div>

              <div className={styles.what}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>
                  {job.site ? (
                    <a href={job.site} target="_blank" rel="noreferrer noopener">
                      {job.company}
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <p className={styles.summary}>{job.summary}</p>
                <ul className={styles.points}>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {job.projects.length ? (
                  <p className={styles.related}>
                    {job.projects.map((slug) => {
                      const project = projectBySlug(slug);
                      if (!project) return null;
                      return (
                        <AppLink key={slug} href={`/work/${slug}`} className={styles.chip}>
                          {project.name}
                        </AppLink>
                      );
                    })}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}

          <Reveal as="li" className={`${styles.entry} ${styles.education}`} delay={experience.length * 70}>
            <div className={styles.when}>
              <p className={`mono ${styles.period}`}>{profile.education.graduated}</p>
              <p className={`mono ${styles.place}`}>Assiut, Egypt</p>
            </div>
            <div className={styles.what}>
              <h3 className={styles.role}>{profile.education.degree}</h3>
              <p className={styles.company}>{profile.education.school}</p>
              <p className={styles.summary}>{profile.education.grade}</p>
            </div>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}
