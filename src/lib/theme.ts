export type Theme = "light" | "dark";

/**
 * The theme lives on <html data-theme> (set before paint by ThemeScript), so the
 * DOM is the store. Components read it through useSyncExternalStore instead of
 * mirroring it in React state.
 */
const listeners = new Set<() => void>();

export function subscribeTheme(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/** Rendered on the server, and during hydration, before the DOM is read. */
export function getServerTheme(): Theme {
  return "light";
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* storage can be blocked — the theme still applies for this visit */
  }
  listeners.forEach((listener) => listener());
}
