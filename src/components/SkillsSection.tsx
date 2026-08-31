"use client";

import { useState } from "react";
import { principles, skillGroups } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import styles from "./SkillsSection.module.css";

export function SkillsSection() {
  // Every layer is expanded by default; the state tracks what the visitor closed.
  const [collapsed, setCollapsed] = useState<string[]>([]);
  const toggle = (index: string) =>
    setCollapsed((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index],
    );

  return (
    <section id="craft" className={styles.section} aria-labelledby="craft-title">
      <div className="shell">
        <SectionHeading
          index="03 / Capabilities"
          title="The stack behind the products."
          id="craft-title"
          note="Grouped the way the work actually splits — mobile client, backend service, data, delivery. Collapse any layer you do not need."
        />

        <div className={styles.layout}>
          <ul className={styles.groups}>
            {skillGroups.map((group, i) => {
              const isOpen = !collapsed.includes(group.index);
              return (
                <Reveal as="li" key={group.index} className={styles.group} delay={i * 50}>
                  <h3 className={styles.groupHead}>
                    <button
                      type="button"
                      className={styles.trigger}
                      aria-expanded={isOpen}
                      aria-controls={`craft-panel-${group.index}`}
                      onClick={() => toggle(group.index)}
                    >
                      <span className={`mono ${styles.groupIndex}`}>{group.index}</span>
                      <span className={styles.groupTitle}>{group.title}</span>
                      <span className={`mono ${styles.count}`}>{group.items.length}</span>
                      <span className={styles.plus} data-open={isOpen} aria-hidden="true">
                        <i />
                        <i />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`craft-panel-${group.index}`}
                    className={styles.panel}
                    data-open={isOpen}
                    role="region"
                    aria-label={group.title}
                  >
                    <div className={styles.panelInner}>
                      <p className={styles.note}>{group.note}</p>
                      <ul className={styles.items}>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className={styles.aside}>
            <p className={`mono ${styles.asideLabel}`}>How I work</p>
            <ul className={styles.principles}>
              {principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className={styles.asideNote}>
              Architecture first, then performance, then polish — and the app is not done until it is in the store and
              the backend is running in production.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
