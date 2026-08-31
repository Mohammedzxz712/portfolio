/**
 * One shared IntersectionObserver for every scroll-reveal on the page.
 * Elements are revealed once and then unobserved, so scrolling stays cheap.
 */
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (typeof window === "undefined") return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "in");
          observer?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
  }
  return observer;
}

export function observeReveal(el: Element | null) {
  if (!el) return () => {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    el.setAttribute("data-reveal", "in");
    return () => {};
  }
  const io = getObserver();
  io?.observe(el);
  return () => io?.unobserve(el);
}
