import type { Chapter, Project, Shot } from "./types";

const phone = (src: string, alt: string, width = 230, height = 498): Shot => ({
  src,
  alt,
  format: "phone",
  width,
  height,
});

const wide = (src: string, alt: string, width: number, height: number): Shot => ({
  src,
  alt,
  format: "wide",
  width,
  height,
});

export const chapters: Chapter[] = [
  {
    id: "cogens",
    index: "01",
    title: "Multi-tenant school platform",
    org: "Cogens",
    period: "2025 — Present",
    blurb:
      "A multi-tenant education platform for schools in Canada: four mobile apps for parents, students, staff and drivers, plus the Django back office they all talk to. I work across the Flutter apps and the backend that feeds them.",
    site: "https://cogens.com/",
  },
  {
    id: "3i-vision",
    index: "02",
    title: "Computer vision on mobile",
    org: "3I Vision",
    period: "2024 — Present",
    blurb:
      "AI-driven products for people detection and license plate recognition, plus enterprise field tools that have to keep working when the network does not.",
    site: "http://3i-vision.com/#/home",
  },
  {
    id: "independent",
    index: "03",
    title: "Independent client delivery",
    org: "Freelance",
    period: "2023 — Present",
    blurb:
      "Client apps taken from first call to store listing: maps and live tracking, localisation, secure payments, and the backend integration behind them.",
  },
];

export const projects: Project[] = [
  {
    slug: "cogens-parent",
    name: "Cogens Parent",
    chapter: "cogens",
    org: "Cogens",
    role: "Software Engineer — Flutter & backend integration",
    period: "2025 — Present",
    status: "live",
    tagline: "The parent's window into the school day — attendance, billing, announcements, bus.",
    summary:
      "The family-facing app of the Cogens platform. Parents follow attendance and announcements, handle billing and orders, book appointments, and keep track of pickup and bus events for every child on one account.",
    contribution: [
      "Built feature modules on a shared multi-app Flutter codebase with Clean Architecture.",
      "Wired real-time notifications and billing/report workflows to the Django backend.",
      "Implemented token/JWT auth with role-based access and multi-tenant school switching.",
    ],
    tech: ["Flutter", "Dart", "BLoC", "REST APIs", "Firebase Cloud Messaging", "Django REST"],
    links: [
      { kind: "appstore", label: "App Store", href: "https://apps.apple.com/eg/app/cogens-parent/id1607885469" },
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.trispects.school.parents",
      },
    ],
    shots: [
      phone("/work/cogens-parent/1.webp", "Cogens Parent home screen with school modules"),
      phone("/work/cogens-parent/3.webp", "Cogens Parent billing screen"),
      phone("/work/cogens-parent/5.webp", "Cogens Parent announcements list"),
      phone("/work/cogens-parent/2.webp", "Cogens Parent student overview"),
      phone("/work/cogens-parent/4.webp", "Cogens Parent calendar view"),
      phone("/work/cogens-parent/6.webp", "Cogens Parent appointment booking"),
      phone("/work/cogens-parent/7.webp", "Cogens Parent account screen"),
    ],
  },
  {
    slug: "cogens-student",
    name: "Cogens Student",
    chapter: "cogens",
    org: "Cogens",
    role: "Software Engineer — Flutter & backend integration",
    period: "2025 — Present",
    status: "live",
    tagline: "Schedules, grades and school updates for students, in real time.",
    summary:
      "The student app of the same ecosystem: timetable, grades, attendance and school communication, sharing the module architecture and API contracts used across the platform.",
    contribution: [
      "Delivered student-side features on the shared modular Flutter codebase.",
      "Standardised API contracts with the backend so modules stay interchangeable across apps.",
      "Handled real-time updates and push notification routing per user role.",
    ],
    tech: ["Flutter", "Dart", "BLoC", "REST APIs", "Real-time notifications"],
    links: [
      { kind: "appstore", label: "App Store", href: "https://apps.apple.com/eg/app/cogens-student/id6476619759" },
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.trispects.school.students",
      },
    ],
    shots: [
      phone("/work/cogens-student/1.webp", "Cogens Student home screen", 230, 499),
      phone("/work/cogens-student/4.webp", "Cogens Student schedule", 230, 499),
      phone("/work/cogens-student/2.webp", "Cogens Student grades", 230, 499),
      phone("/work/cogens-student/6.webp", "Cogens Student attendance", 230, 499),
      phone("/work/cogens-student/7.webp", "Cogens Student notifications", 230, 499),
      phone("/work/cogens-student/3.webp", "Cogens Student profile", 230, 499),
      phone("/work/cogens-student/5.webp", "Cogens Student class list", 230, 499),
      phone("/work/cogens-student/8.webp", "Cogens Student detail screen", 230, 499),
    ],
  },
  {
    slug: "cogens-staff",
    name: "Cogens Staff",
    chapter: "cogens",
    org: "Cogens",
    role: "Software Engineer — Flutter & backend integration",
    period: "2025 — Present",
    status: "live",
    tagline: "Attendance, schedules and parent communication for teachers and school staff.",
    summary:
      "The staff-side app: recording attendance, managing schedules and reaching parents, with the same role-based access model that governs the rest of the platform.",
    contribution: [
      "Built staff workflows against the shared multi-tenant backend.",
      "Implemented role-based access so one codebase serves teachers, admins and support staff.",
      "Connected report and billing workflows used by school administration.",
    ],
    tech: ["Flutter", "Dart", "BLoC", "REST APIs", "JWT auth"],
    links: [
      { kind: "appstore", label: "App Store", href: "https://apps.apple.com/eg/app/cogens-staff/id1607885245" },
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.trispects.school.management",
      },
    ],
    shots: [
      phone("/work/cogens-staff/1.webp", "Cogens Staff dashboard"),
      phone("/work/cogens-staff/5.webp", "Cogens Staff attendance recording"),
      phone("/work/cogens-staff/4.webp", "Cogens Staff class schedule"),
      phone("/work/cogens-staff/6.webp", "Cogens Staff communication screen"),
      phone("/work/cogens-staff/2.webp", "Cogens Staff menu"),
      phone("/work/cogens-staff/3.webp", "Cogens Staff list view"),
      phone("/work/cogens-staff/7.webp", "Cogens Staff profile"),
    ],
  },
  {
    slug: "cogens-bus",
    name: "Cogens Bus Driver",
    chapter: "cogens",
    org: "Cogens",
    role: "Software Engineer — Flutter & backend integration",
    period: "2025 — Present",
    status: "live",
    tagline: "Route management and live location for school bus drivers.",
    summary:
      "The driver app that closes the loop on the school run: routes, student pickup and drop-off events, and location updates that surface as live tracking for parents.",
    contribution: [
      "Built driver route and trip screens against the shared platform APIs.",
      "Integrated location and map flows feeding parent-side tracking.",
      "Delivered notification handling for pickup and dismissal events.",
    ],
    tech: ["Flutter", "Dart", "Google Maps", "Live tracking", "REST APIs"],
    links: [
      { kind: "appstore", label: "App Store", href: "https://apps.apple.com/eg/app/cogens-bus-driver/id6479618217" },
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.trispects.school.bus.driver",
      },
    ],
    shots: [
      phone("/work/cogens-bus/1.webp", "Cogens Bus Driver route screen"),
      phone("/work/cogens-bus/2.webp", "Cogens Bus Driver trip list"),
      phone("/work/cogens-bus/3.webp", "Cogens Bus Driver student pickup list"),
      phone("/work/cogens-bus/4.webp", "Cogens Bus Driver map view"),
    ],
  },
  {
    slug: "maclink",
    name: "MACLINK",
    chapter: "cogens",
    org: "Cogens",
    role: "Software Engineer — Flutter",
    period: "2025 — Present",
    status: "live",
    tagline: "A community platform app: events, conventions, centres and prayer times in one place.",
    summary:
      "A multi-domain community app built for the Muslim Association of Canada. It brings conventions and events, nearby centres, learning content, bookings and prayer times together in a single Flutter application.",
    contribution: [
      "Built feature modules with a reusable Data / Logic / UI structure.",
      "Integrated production APIs, notifications and content-driven screens.",
      "Shipped and maintained releases across the App Store and Google Play.",
    ],
    tech: ["Flutter", "Dart", "BLoC", "REST APIs", "Push notifications"],
    links: [
      { kind: "appstore", label: "App Store", href: "https://apps.apple.com/us/app/maclink/id6502847350" },
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.mac.maclink&pcampaignid=web_share",
      },
    ],
    cover: wide("/work/maclink/cover.png", "MACLINK app screens: community feed, conventions, centres and prayer times", 1040, 537),
    shots: [],
  },
  {
    slug: "cogens-web",
    name: "Cogens Admin & Vendor",
    chapter: "cogens",
    org: "Cogens",
    role: "Software Engineer — Django backend",
    period: "2025 — Present",
    status: "live",
    tagline: "The multi-tenant back office the whole ecosystem runs on.",
    summary:
      "Web panels for school administration and food vendors, backed by the Django multi-tenant service layer: courses and marks, staff and student records, billing, reports and hot-lunch orders.",
    contribution: [
      "Built Django multi-tenant backend, billing/report workflows and real-time notifications.",
      "Implemented token/JWT auth and role-based access shared with the mobile apps.",
      "Standardised API contracts across modules so six clients speak one language.",
    ],
    tech: ["Python", "Django REST Framework", "PostgreSQL", "JWT", "Multi-tenancy"],
    links: [
      { kind: "site", label: "Admin panel", href: "https://school.cogens.com/#/login" },
      { kind: "site", label: "Vendor panel", href: "https://vendor.cogens.com/#/loginScreen" },
    ],
    cover: wide("/work/cogens-web/admin-1.png", "Cogens admin panel course management table", 1360, 585),
    shots: [
      wide("/work/cogens-web/admin-2.png", "Cogens admin panel school management screen", 1357, 570),
      wide("/work/cogens-web/admin-3.png", "Cogens admin panel records screen", 1358, 573),
      wide("/work/cogens-web/vendor-1.png", "Cogens vendor panel for hot lunch orders", 1356, 576),
    ],
  },
  {
    slug: "3i-vision",
    name: "3I Vision",
    chapter: "3i-vision",
    org: "3I Vision",
    role: "Flutter Developer",
    period: "2024 — Present",
    status: "live",
    tagline: "AI-driven people detection and license plate recognition on mobile.",
    summary:
      "A security and monitoring app built around computer vision: watch areas, detection history with permit status, and captured events streamed back from the recognition service to the phone.",
    contribution: [
      "Delivered the AI-driven detection experience for people and license plate recognition.",
      "Improved startup performance by 30% through optimisation and a lazy-loading strategy.",
      "Applied Clean Architecture with offline-first storage in Hive/SQLite and Firebase.",
    ],
    tech: ["Flutter", "Dart", "Clean Architecture", "Hive", "SQLite", "Firebase", "REST APIs"],
    links: [
      { kind: "appstore", label: "App Store", href: "https://apps.apple.com/eg/app/3i-vision/id6670479729" },
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.vision.watcharea",
      },
    ],
    shots: [
      phone("/work/3i-vision/2.webp", "3I Vision detection history with permit status", 230, 499),
      phone("/work/3i-vision/1.webp", "3I Vision watch area screen", 230, 499),
      phone("/work/3i-vision/3.webp", "3I Vision detection filters", 230, 499),
      phone("/work/3i-vision/4.webp", "3I Vision capture detail", 230, 499),
      phone("/work/3i-vision/5.webp", "3I Vision settings screen", 230, 499),
    ],
    accentLabel: "30% faster startup",
  },
  {
    slug: "datamind-agent",
    name: "DataMind Agent",
    chapter: "3i-vision",
    org: "3I Vision",
    role: "Flutter Developer",
    period: "2024 — Present",
    status: "live",
    tagline: "An intelligent file agent that scans, classifies and organises what is on your device.",
    summary:
      "A mobile agent that indexes device storage and classifies files so they can be found and organised by meaning rather than folder. Built with the same architecture and performance discipline as the rest of the 3I Vision suite.",
    contribution: [
      "Built the Flutter client with Clean Architecture and offline-first local storage.",
      "Optimised list rendering and lazy loading for large file sets.",
      "Shipped and maintained App Store and Google Play releases.",
    ],
    tech: ["Flutter", "Dart", "Clean Architecture", "SQLite", "AI integration"],
    links: [
      { kind: "appstore", label: "App Store", href: "https://apps.apple.com/eg/app/datamind-agent/id6754242027" },
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.datamind.agent",
      },
    ],
    shots: [
      phone("/work/datamind/2.webp", "DataMind Agent file classification screen"),
      phone("/work/datamind/1.webp", "DataMind Agent home"),
      phone("/work/datamind/3.webp", "DataMind Agent scan results"),
      phone("/work/datamind/4.webp", "DataMind Agent settings"),
    ],
  },
  {
    slug: "aramco",
    name: "Aramco Field App",
    chapter: "3i-vision",
    org: "3I Vision",
    role: "Flutter Developer",
    period: "2024 — Present",
    status: "private",
    tagline: "Enterprise sample registration and data management for Saudi Aramco.",
    summary:
      "A private enterprise app for field data management: sample registration, camera scanning, offline SQLite storage, Excel export and Zebra scanner integration — designed to keep working where connectivity does not.",
    contribution: [
      "Built sample registration and camera scanning workflows.",
      "Implemented offline-first SQLite storage with Excel export for reporting.",
      "Integrated Zebra hardware scanners with the Flutter client.",
    ],
    tech: ["Flutter", "Dart", "SQLite", "Camera scanning", "Zebra integration", "Excel export"],
    links: [],
    shots: [],
    accentLabel: "Private client work",
  },
  {
    slug: "adahi",
    name: "Adahi",
    chapter: "3i-vision",
    org: "3I Vision",
    role: "Flutter Developer",
    period: "2024 — Present",
    status: "live",
    tagline: "A livestock services app with AI-assisted checks, built for the Saudi market.",
    summary:
      "An Arabic-first Flutter app in the 3I Vision portfolio, published on Google Play for the Saudi market, using the company's computer-vision services inside a consumer-facing flow.",
    contribution: [
      "Built the Arabic-first, right-to-left Flutter interface.",
      "Integrated backend services and AI-assisted checks into the user flow.",
      "Prepared and shipped the Google Play release.",
    ],
    tech: ["Flutter", "Dart", "Arabic / RTL", "REST APIs", "AI integration"],
    links: [
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.adahi.sa&hl=en-CA",
      },
    ],
    shots: [phone("/work/adahi/1.webp", "Adahi app main screen", 411, 886)],
  },
  {
    slug: "yusr",
    name: "Yusr",
    altName: "يسر",
    chapter: "independent",
    org: "Self-employed",
    role: "Flutter Developer — end to end",
    period: "2025",
    status: "live",
    tagline: "An Arabic-first Islamic companion: Qur'an, adhkar, prayer times and readings.",
    summary:
      "A full Arabic, right-to-left Flutter app covering Qur'an reading and tafsir, daily adhkar, hadith, prayer times and reading statistics — with local data for offline use and remote APIs for the rest.",
    contribution: [
      "Designed and built the complete right-to-left Arabic experience.",
      "Combined bundled local data with remote APIs so core features work offline.",
      "Published to the App Store and Google Play and maintained releases.",
    ],
    tech: ["Flutter", "Dart", "Arabic / RTL", "SQLite", "Localisation", "REST APIs"],
    links: [
      {
        kind: "appstore",
        label: "App Store",
        href: "https://apps.apple.com/eg/app/%D9%8A%D8%B3%D8%B1-yusr/id6759193445",
      },
      {
        kind: "playstore",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.nooralhuda.noor",
      },
    ],
    cover: wide("/work/yusr/cover.png", "Yusr app screens: Qur'an reader, daily verse and reading statistics", 1040, 537),
    shots: [],
  },
  {
    slug: "yama-vet",
    name: "Yama Vet",
    chapter: "independent",
    org: "Self-employed",
    role: "Flutter Developer — end to end",
    period: "2024",
    status: "live",
    tagline: "A veterinary services app shipped for a private client.",
    summary:
      "A client project taken from brief to App Store listing: a veterinary services app built in Flutter with backend integration, localisation and store delivery handled end to end.",
    contribution: [
      "Built the Flutter client and integrated it with the client's backend.",
      "Handled localisation, app store assets and the release process.",
      "Supported the client through post-launch updates.",
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Firebase"],
    links: [{ kind: "appstore", label: "App Store", href: "https://apps.apple.com/eg/app/yama-vet/id6476448659" }],
    shots: [],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const projectsByChapter = (id: Chapter["id"]) => projects.filter((p) => p.chapter === id);

export const shippedAppCount = projects.filter((p) =>
  p.links.some((l) => l.kind === "appstore" || l.kind === "playstore"),
).length;
