import type { ExperienceEntry, SkillGroup } from "./types";

/** Straight from the CV, newest start date first. */
export const experience: ExperienceEntry[] = [
  {
    company: "PixellCode",
    role: "Flutter Developer",
    period: "May 2025",
    start: "2025-05",
    location: "Remote · Part-time",
    current: false,
    summary: "Large-scale field services app with maps, calls and bank payments.",
    points: [
      "Building a large-scale app with maps, real-time tracking, Agora calls, job listings, and integrated bank payment workflows.",
    ],
    projects: [],
  },
  {
    company: "Cogens",
    role: "Software Engineer",
    period: "Jan 2025 — Present",
    start: "2025-01",
    location: "Canada · Remote",
    current: true,
    summary: "A multi-tenant school platform: six clients, one backend.",
    points: [
      "Scaled a multi-app school ecosystem (Parent, Student, Staff, Bus, Admin, Vendor).",
      "Built Django multi-tenant backend, real-time notifications, and billing/report workflows.",
      "Implemented token/JWT auth, role-based access, and standardised API contracts across modules.",
    ],
    site: "https://cogens.com/",
    projects: ["cogens-parent", "cogens-student", "cogens-staff", "cogens-bus", "maclink", "cogens-web"],
  },
  {
    company: "3I Vision",
    role: "Flutter Developer",
    period: "Jan 2024 — Present",
    start: "2024-01",
    location: "Giza, Egypt · Hybrid",
    current: true,
    summary: "AI-driven mobile products and offline-first enterprise field tools.",
    points: [
      "Delivered AI-driven mobile apps for people detection and license plate recognition.",
      "Improved startup performance by 30% through optimisation and lazy-loading strategy.",
      "Applied Clean Architecture with offline-first design using Hive/SQLite and Firebase.",
      "Key projects: 3I Vision App, DataMind Agent, Aramco App, Adahi.",
    ],
    site: "http://3i-vision.com/#/home",
    projects: ["3i-vision", "datamind-agent", "aramco", "adahi"],
  },
  {
    company: "Arrow_Tech",
    role: "Flutter Developer",
    period: "August 2023",
    start: "2023-08",
    location: "Remote",
    current: false,
    summary: "Flutter app development and maintenance.",
    points: [
      "Developed and maintained Flutter apps using Clean Architecture, REST APIs, Firebase, and BLoC/Provider state management.",
    ],
    projects: [],
  },
  {
    company: "Self-employed",
    role: "Software Engineer · Freelance",
    period: "Jan 2023 — Present",
    start: "2023-01",
    location: "Remote",
    current: true,
    summary: "Client apps taken from brief to store listing.",
    points: [
      "Shipped production apps with maps, live tracking, localisation, secure payments, and end-to-end backend integration.",
    ],
    projects: ["yusr", "yama-vet"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Mobile",
    note: "Where most of my hours go — Flutter apps built to survive real users and real networks.",
    items: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "BLoC / Provider",
      "Offline-first design",
      "Performance profiling",
      "Debugging",
      "SDLC",
    ],
  },
  {
    index: "02",
    title: "Backend",
    note: "The other half of end-to-end delivery: the APIs my apps talk to are usually mine too.",
    items: ["Python", "Django / DRF", "FastAPI", "Flask", "REST APIs", "JWT auth", "Role-based access"],
  },
  {
    index: "03",
    title: "Data",
    note: "Relational on the server, embedded on the device, synced in between.",
    items: ["PostgreSQL", "MySQL", "SQLite", "Hive"],
  },
  {
    index: "04",
    title: "DevOps",
    note: "Getting builds out of my machine and into stores and servers, repeatably.",
    items: ["Docker", "Nginx", "CI/CD", "GitHub Actions", "Codemagic"],
  },
  {
    index: "05",
    title: "Cloud & hosting",
    note: "Services and servers behind the products.",
    items: ["Firebase Auth", "Firebase Cloud Messaging", "Firestore", "AWS (EC2/S3 basics)", "Hetzner Cloud (VPS)"],
  },
  {
    index: "06",
    title: "Domains",
    note: "Problem spaces I have already shipped into.",
    items: ["Education systems", "AI-powered computer vision", "ERP", "IoT & security automation"],
  },
];

/** Chips used in the hero and about sections. */
export const principles = ["Clean Architecture", "Performance", "AI integration", "End-to-end delivery"];
