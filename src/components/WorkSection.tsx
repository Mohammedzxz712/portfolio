import { chapters, projects, shippedAppCount } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ChapterIndex } from "./ChapterIndex";
import styles from "./WorkSection.module.css";

export function WorkSection() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className="shell">
        <SectionHeading
          index="01 / Selected work"
          title="Production systems, shipped and maintained."
          id="work-title"
          note={
            <>
              {projects.length} products across three chapters — {shippedAppCount} of them live on the App Store and
              Google Play. Education platforms, computer vision, and independent client work.
            </>
          }
        />

        <div className={styles.chapters}>
          {chapters.map((chapter) => (
            <article key={chapter.id} className={styles.chapter}>
              <Reveal as="header" className={styles.chapterHead}>
                <p className={`mono ${styles.chapterMeta}`}>
                  <span className={styles.numeral}>{chapter.index}</span>
                  <span>{chapter.org}</span>
                  <span className={styles.dim}>{chapter.period}</span>
                </p>
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                <p className={styles.chapterBlurb}>{chapter.blurb}</p>
                {chapter.site ? (
                  <a className={styles.chapterLink} href={chapter.site} target="_blank" rel="noreferrer noopener">
                    {chapter.org} website
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                ) : null}
              </Reveal>

              <ChapterIndex chapterId={chapter.id} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
