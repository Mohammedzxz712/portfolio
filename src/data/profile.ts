/**
 * Single source of truth for personal details.
 * Everything here comes from Mohammed Rageh's CV
 * (Mohammed-Rageh-Flutter-Developer-Resume.html / .pdf).
 */
export const profile = {
  name: "Mohammed Rageh",
  firstName: "Mohammed",
  lastName: "Rageh",
  initials: "MR",
  title: "Software Engineer",
  discipline: "Cross-platform (Flutter) & Backend (Python)",
  tagline: "End-to-end development",
  location: "Cairo, Egypt",
  timezone: "GMT+3",
  available: "Open to full-time & freelance work",
  years: "2+",
  intro:
    "I build production mobile apps and the backends behind them — Flutter on the front, Python on the server, shipped end to end and kept alive in the stores.",
  summary:
    "Software Engineer with 2+ years of experience building scalable, high-performance mobile and backend systems. Specialised in Flutter and Python (Django, FastAPI, Flask), with strong ownership of architecture, deployment, and production quality.",
  email: "mohammedragehzxz@gmail.com",
  phone: "+201111400729",
  phoneHref: "+201111400729",
  linkedin: "https://www.linkedin.com/in/mohammedrageh/",
  linkedinLabel: "linkedin.com/in/mohammedrageh",
  github: "https://github.com/mohammedzxz712",
  githubLabel: "github.com/mohammedzxz712",
  siteUrl: "https://mohammedzxz712.github.io/portfolio",
  cv: "/Mohammed-Rageh-CV.pdf",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional" },
  ],
  education: {
    degree: "B.Sc. in Computer and Information Science",
    school: "Assiut University",
    graduated: "June 2024",
    grade: "GPA 3.19 / 4.0 — Very Good",
  },
  certifications: [
    { name: "The Complete Flutter & Dart", issuer: "Route", year: "2023" },
    { name: "Multi-Modular & Clean Architecture", issuer: "Udemy", year: "2023" },
  ],
  softSkills: [
    "Client communication",
    "Stakeholder management",
    "Problem solving",
    "Team collaboration",
    "Ownership",
    "Adaptability",
    "Time management",
  ],
} as const;

export const stack = [
  "Flutter",
  "Dart",
  "Clean Architecture",
  "BLoC",
  "Django REST",
  "FastAPI",
  "PostgreSQL",
  "Firebase",
  "Hive",
  "SQLite",
  "Docker",
  "CI/CD",
];
