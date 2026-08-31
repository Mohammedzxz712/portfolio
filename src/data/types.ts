export type LinkKind = "appstore" | "playstore" | "site" | "linkedin" | "github" | "email" | "phone" | "file";

export interface ProjectLink {
  kind: LinkKind;
  label: string;
  href: string;
}

export interface Shot {
  /** Path under /public */
  src: string;
  alt: string;
  /** Phone screenshots render inside a device frame, wide ones as plates. */
  format: "phone" | "wide";
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  name: string;
  /** Arabic or secondary name, rendered next to the title when present. */
  altName?: string;
  chapter: ChapterId;
  org: string;
  role: string;
  period: string;
  status: "live" | "private" | "in-development";
  /** One line used in the work index. */
  tagline: string;
  /** Two or three sentences used on the project page. */
  summary: string;
  contribution: string[];
  tech: string[];
  links: ProjectLink[];
  shots: Shot[];
  /** Wide plate used as the project's key visual, when one exists. */
  cover?: Shot;
  accentLabel?: string;
}

export type ChapterId = "cogens" | "3i-vision" | "independent";

export interface Chapter {
  id: ChapterId;
  index: string;
  title: string;
  org: string;
  period: string;
  blurb: string;
  site?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  start: string;
  location: string;
  current: boolean;
  summary: string;
  points: string[];
  site?: string;
  projects: string[];
}

export interface SkillGroup {
  index: string;
  title: string;
  note: string;
  items: string[];
}
