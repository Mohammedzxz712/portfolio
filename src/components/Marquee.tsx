import styles from "./Marquee.module.css";

/** Infinite ticker. The list is rendered twice; the copy is hidden from AT. */
export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className={styles.marquee}>
      <ul className={styles.track}>
        {items.map((item) => (
          <li key={item}>
            {item}
            <span aria-hidden="true">/</span>
          </li>
        ))}
      </ul>
      <ul className={styles.track} aria-hidden="true">
        {items.map((item) => (
          <li key={item}>
            {item}
            <span>/</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
