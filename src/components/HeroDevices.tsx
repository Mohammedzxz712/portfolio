"use client";

import { useEffect, useRef } from "react";
import { DeviceFrame } from "./DeviceFrame";
import { projectBySlug } from "@/data/projects";
import styles from "./HeroDevices.module.css";

/** Three real app screens from three different products. */
const picks = [
  { slug: "cogens-parent", shot: 0 },
  { slug: "3i-vision", shot: 0 },
  { slug: "datamind-agent", shot: 0 },
];

export function HeroDevices() {
  const ref = useRef<HTMLDivElement>(null);

  // Pointer parallax — desktop only, and never when reduced motion is requested.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const devices = picks
    .map(({ slug, shot }) => projectBySlug(slug)?.shots[shot])
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className={styles.stage} ref={ref} aria-hidden={false}>
      <div className={styles.cluster}>
        {devices.map((shot, i) => (
          <div key={shot.src} className={styles.slot} data-slot={i}>
            <DeviceFrame shot={shot} width={i === 1 ? 232 : 196} priority={i === 1} />
          </div>
        ))}
      </div>
      <span className={styles.glow} aria-hidden="true" />
    </div>
  );
}
