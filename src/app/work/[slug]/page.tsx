import type { Metadata } from "next";
import Image from "next/image";
import { AppLink } from "@/components/AppLink";
import { asset } from "@/lib/asset";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { DeviceFrame } from "@/components/DeviceFrame";
import { Reveal } from "@/components/Reveal";
import styles from "./project.module.css";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} — ${project.org}`,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${project.org}`,
      description: project.summary,
      type: "article",
      url: `/work/${project.slug}`,
    },
  };
}

const statusCopy = {
  live: "Live in production",
  private: "Private client work",
  "in-development": "In development",
} as const;

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const phones = project.shots.filter((s) => s.format === "phone");
  const plates = project.shots.filter((s) => s.format === "wide");

  return (
    <main id="main" className={styles.page}>
      <div className="shell">
        <AppLink href="/#work" className={`mono ${styles.back}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          All work
        </AppLink>

        <header className={styles.header}>
          <p className={`mono ${styles.meta}`}>
            <span>{project.org}</span>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <span>{project.period}</span>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <span className={styles.status} data-status={project.status}>
              {statusCopy[project.status]}
            </span>
          </p>

          <h1 className={styles.title}>
            {project.name}
            {project.altName ? (
              <span className={styles.alt} lang="ar">
                {project.altName}
              </span>
            ) : null}
          </h1>

          <p className={styles.tagline}>{project.tagline}</p>
        </header>

        {project.cover ? (
          <Reveal className={styles.cover}>
            <Image
              src={asset(project.cover.src)}
              alt={project.cover.alt}
              width={project.cover.width}
              height={project.cover.height}
              sizes="(max-width: 900px) 100vw, 1200px"
              priority
              className={styles.coverImage}
            />
          </Reveal>
        ) : null}

        {phones.length ? (
          <Reveal className={styles.rail} aria-label={`${project.name} screens`}>
            <ul className={styles.railTrack}>
              {phones.map((shot, i) => (
                <li key={shot.src}>
                  <DeviceFrame shot={shot} width={218} priority={i === 0 && !project.cover} />
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <div className={styles.body}>
          <div className={styles.narrative}>
            <Reveal>
              <h2 className={styles.h2}>What it is</h2>
              <p className={styles.summary}>{project.summary}</p>
            </Reveal>

            <Reveal delay={60}>
              <h2 className={styles.h2}>What I did</h2>
              <ul className={styles.points}>
                {project.contribution.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>

            {plates.length ? (
              <Reveal delay={80} className={styles.plates}>
                {plates.map((plate) => (
                  <figure key={plate.src}>
                    <Image
                      src={asset(plate.src)}
                      alt={plate.alt}
                      width={plate.width}
                      height={plate.height}
                      sizes="(max-width: 900px) 100vw, 820px"
                      className={styles.plateImage}
                    />
                    <figcaption className={`mono ${styles.caption}`}>{plate.alt}</figcaption>
                  </figure>
                ))}
              </Reveal>
            ) : null}
          </div>

          <Reveal as="aside" className={styles.facts} delay={100}>
            <div className={styles.factBlock}>
              <p className={`mono ${styles.factLabel}`}>Role</p>
              <p>{project.role}</p>
            </div>
            <div className={styles.factBlock}>
              <p className={`mono ${styles.factLabel}`}>Stack</p>
              <ul className={styles.tech}>
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            {project.links.length ? (
              <div className={styles.factBlock}>
                <p className={`mono ${styles.factLabel}`}>Live</p>
                <ul className={styles.links}>
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer noopener">
                        {link.label}
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className={styles.factBlock}>
                <p className={`mono ${styles.factLabel}`}>Availability</p>
                <p className={styles.muted}>
                  Built under a client agreement — happy to walk through the work on a call.
                </p>
              </div>
            )}
          </Reveal>
        </div>

        <nav className={styles.pager} aria-label="More projects">
          <AppLink href={`/work/${previous.slug}`} className={styles.pagerLink}>
            <span className={`mono ${styles.pagerLabel}`}>Previous</span>
            <span className={styles.pagerName}>{previous.name}</span>
          </AppLink>
          <AppLink href={`/work/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
            <span className={`mono ${styles.pagerLabel}`}>Next</span>
            <span className={styles.pagerName}>{next.name}</span>
          </AppLink>
        </nav>
      </div>
    </main>
  );
}
