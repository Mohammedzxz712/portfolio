"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { observeReveal } from "@/lib/reveal";

interface RevealProps {
  children: ReactNode;
  /** Rendered element — keeps the markup semantic (li, figure, section…). */
  as?: ElementType;
  className?: string;
  /** Stagger in milliseconds. */
  delay?: number;
  id?: string;
}

export function Reveal({ children, as: Tag = "div", className, delay = 0, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => observeReveal(ref.current), []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      id={id}
      className={className}
      data-reveal=""
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
