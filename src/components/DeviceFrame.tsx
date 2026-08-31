import Image from "next/image";
import type { Shot } from "@/data/types";
import { asset } from "@/lib/asset";
import styles from "./DeviceFrame.module.css";

interface DeviceFrameProps {
  shot: Shot;
  /** Rendered width of the phone in pixels — screenshots are 230px wide, so keep it close. */
  width?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/** A phone screenshot in a bezel. Keeps raw app captures from floating on the page. */
export function DeviceFrame({ shot, width = 218, priority = false, className, sizes }: DeviceFrameProps) {
  return (
    <div className={`${styles.device} ${className ?? ""}`} style={{ width }}>
      <div className={styles.screen}>
        <Image
          src={asset(shot.src)}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          priority={priority}
          sizes={sizes ?? `${width}px`}
          className={styles.shot}
        />
      </div>
      <span className={styles.pill} aria-hidden="true" />
    </div>
  );
}
