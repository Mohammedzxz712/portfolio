"use client";

import Image from "next/image";
import { AppLink } from "./AppLink";
import { asset } from "@/lib/asset";
import { useEffect, useRef, useState } from "react";
import { projectsByChapter } from "@/data/projects";
import type { ChapterId, Project } from "@/data/types";
import { Reveal } from "./Reveal";
import styles from "./ChapterIndex.module.css";

const keyVisual = (p: Project) => p.cover ?? p.shots[0];

/** Compact platform badge — the full store links live on the project page. */
const storeLabel = (p: Project) => {
  const platforms = [
    p.links.some((l) => l.kind === "appstore") && "iOS",
    p.links.some((l) => l.kind === "playstore") && "Android",
  ].filter(Boolean);
  if (platforms.length) return platforms.join(" · ");
  if (p.links.some((l) => l.kind === "site")) return "Web";
  if (p.status === "private") return "Private";
  if (p.status === "in-development") return "In progress";
  return "Case study";
};

export function ChapterIndex({ chapterId }: { chapterId: ChapterId }) {
  const items = projectsByChapter(chapterId);
  const [hovered, setHovered] = useState<Project | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current =
      window.matchMedia("(pointer: fine)").matches && window.matchMedia("(min-width: 900px)").matches;
    if (!enabled.current) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = previewRef.current;
        if (!el) return;
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const preview = hovered ? keyVisual(hovered) : undefined;

  return (
    <>
      {/* One wrapper so the chapter grid sees a single column of content. */}
      <div className={styles.table}>
        {/* Column headers — the index reads as a product table on wide screens. */}
        <div className={`mono ${styles.headRow}`} aria-hidden="true">
          <span className={styles.index}>#</span>
          <span>Project</span>
          <span className={styles.tech}>Stack</span>
          <span className={styles.store}>Platform</span>
          <span className={styles.headArrow} />
        </div>

        <ol className={styles.list}>
          {items.map((project, i) => {
            const visual = keyVisual(project);
            return (
              <Reveal as="li" key={project.slug} className={styles.item} delay={i * 60}>
                <AppLink
                  href={`/work/${project.slug}`}
                  className={styles.row}
                  onPointerEnter={() => enabled.current && setHovered(project)}
                  onPointerLeave={() => setHovered(null)}
                  onFocus={() => setHovered(null)}
                >
                  <span className={`mono ${styles.index}`}>{String(i + 1).padStart(2, "0")}</span>

                  <span className={styles.thumb} aria-hidden="true">
                    {visual ? (
                      <Image
                        src={asset(visual.src)}
                        alt=""
                        width={visual.width}
                        height={visual.height}
                        sizes="72px"
                        className={visual.format === "phone" ? styles.thumbPhone : styles.thumbWide}
                      />
                    ) : (
                      <span className={styles.thumbEmpty}>NDA</span>
                    )}
                  </span>

                  <span className={styles.body}>
                    <span className={styles.name}>
                      {project.name}
                      {project.altName ? <i lang="ar"> {project.altName}</i> : null}
                    </span>
                    <span className={styles.tagline}>{project.tagline}</span>
                  </span>

                  <span className={`mono ${styles.tech}`}>{project.tech.slice(0, 2).join(" · ")}</span>

                  <span className={`mono ${styles.store}`}>{storeLabel(project)}</span>

                  <span className={styles.arrow} aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </AppLink>
              </Reveal>
            );
          })}
        </ol>
      </div>

      <div className={styles.preview} ref={previewRef} data-visible={Boolean(preview)} aria-hidden="true">
        {preview ? (
          <Image
            key={preview.src}
            src={asset(preview.src)}
            alt=""
            width={preview.width}
            height={preview.height}
            sizes="320px"
            className={preview.format === "phone" ? styles.previewPhone : styles.previewWide}
          />
        ) : null}
      </div>
    </>
  );
}
