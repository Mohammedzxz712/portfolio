import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  index: string;
  title: string;
  note?: ReactNode;
  id?: string;
}

export function SectionHeading({ index, title, note, id }: SectionHeadingProps) {
  return (
    <Reveal as="header" className={styles.heading}>
      <p className={`mono ${styles.index}`}>
        <span aria-hidden="true">{index}</span>
        <span className={styles.rule} aria-hidden="true" />
      </p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {note ? <div className={styles.note}>{note}</div> : null}
    </Reveal>
  );
}
