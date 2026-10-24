// All site content lives here. Keep it in sync with the resume.

export const SITE_URL = "https://www.gabrielortiz.io";

export const profile = {
  name: "Gabriel Ortiz",
  headline: "Computer Science student at Northeastern University.",
  status: "Looking for a co-op for January–June 2027.",
  location: "Boston, MA",
  email: "gabriel@gabrielortiz.io",
};

export const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: "https://github.com/gabrielortiz00" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabrielortiz00" },
];

export const about = [
  "I was born in San Diego and grew up mostly in Mexico. I started programming around 13 with an Arduino and a lot of trial and error. I'm drawn to the systems side of software: the math, and how things actually work under the hood.",
  "Outside of class I'm a licensed private pilot, a DJ, and a mountain biker. I speak Spanish and German.",
];

export const experience = [
  {
    org: "AerospaceNU",
    role: "Software Engineer",
    dates: "Jul 2026 – Present",
    location: "Boston, MA",
    points: [
      "Extended the async data acquisition pipeline for ATLAS, a Python CLI that pulls satellite imagery and climate data from 20+ sources (Sentinel-2, Landsat, MODIS, NASA FLDAS).",
      "Fixed silent incomplete or misleading results in 4 ATLAS data clients (GOES, Himawari, Maxar, GIBS) by adding shared S3 pagination, antimeridian-aware bounding-box filtering, and event filtering before Maxar's result cap.",
      "Designing mode-transition logic and the electronics stack for Mudskipper, a multi-modal air/ground/water drone.",
    ],
  },
];

export type Project = {
  name: string;
  year: string;
  summary: string;
  description: string;
  highlights?: string[];
  image?: { src: string; alt: string; width: number; height: number };
  tech: string[];
  code: string;
  live: string | null;
};

export const projects: Project[] = [
  {
    name: "AirViz",
    year: "2026",
    summary: "3D map of US airspace, built from FAA data",
    description:
      "Pilots learn airspace from flat sectional charts, which makes the real 3D shape hard to picture. AirViz shows every Class B, C, and D airspace in the US as 3D volumes at their real floors and ceilings, on top of real terrain, in the browser.",
    highlights: [
      "Data pipeline turns the FAA's NASR shapefile into the map data: GDAL export and simplification (about 15x smaller), then a script that cuts overlapping volumes the way the FAA legal descriptions assign them.",
      "The build checks the result against known points from sectional charts and fails if any are wrong, e.g. 1,499 ft over Hayward is inside Hayward's Class D and 1,500 ft is not.",
      "A GitHub Actions job pulls each new 28-day FAA cycle, rebuilds and verifies the data, and commits it so Vercel redeploys. If anything fails it opens an issue and the site keeps the previous cycle.",
      "Airport search across about 5,000 public-use airports, and the Mode C veil, generated from the airport list in 14 CFR Part 91 Appendix D.",
    ],
    image: {
      src: "/projects/airviz.jpg",
      alt: "AirViz showing San Francisco Class B airspace shelves in 3D over the Bay Area",
      width: 1200,
      height: 630,
    },
    tech: ["JavaScript", "MapLibre GL JS", "deck.gl", "GDAL", "GitHub Actions", "Vite"],
    code: "https://github.com/gabrielortiz00/airviz",
    live: "https://airviz.gabrielortiz.io",
  },
  {
    name: "Open Flight Schools",
    year: "2026",
    summary: "Community-maintained directory of US flight schools",
    description:
      "Open-source directory with an interactive map, filterable school listings, detail pages, and community-submitted entries reviewed through a moderation queue.",
    tech: ["TypeScript", "Next.js", "Supabase", "Mapbox GL JS"],
    code: "https://github.com/gabrielortiz00/open-flight-schools",
    live: "https://openflightschools.com",
  },
  {
    name: "Cost Accumulation Software",
    year: "2024",
    summary: "Internal costing tool for a manufacturer",
    description:
      "Desktop app that replaced Excel formulas for the costing team at BYP, a Mexican paint-applicator manufacturer. Calculates product cost from shipping, taxes, container limits, and import fees, with user auth, live exchange rates, and a margin-based pricing calculator.",
    tech: ["Java", "JavaFX"],
    code: "https://github.com/gabrielortiz00/byp-cost-calculator",
    live: null,
  },
];

export const education = {
  school: "Northeastern University",
  degree: "B.S. in Computer Science",
  dates: "Expected May 2029",
  honors: "Dean's List, Spring 2026",
  coursework: [
    "Object-Oriented Design",
    "Linear Algebra",
    "Discrete Structures",
    "Program Design & Implementation 1",
  ],
};

export const skills = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"] },
  { label: "Libraries", items: ["NumPy", "Pandas", "Matplotlib", "asyncio", "JavaFX", "MapLibre GL JS", "deck.gl", "Mapbox GL JS"] },
  { label: "Tools", items: ["Git", "GitHub Actions", "REST APIs", "pytest", "GDAL", "QGIS", "Vite"] },
];

export const interests = [
  { label: "Private pilot", detail: "FAA certificated" },
  { label: "DJ", detail: "10+ years, crowds of 3,000+" },
  { label: "Languages", detail: "Spanish (native), German (B2)" },
  { label: "Mountain biking", detail: "" },
];

export function isExternal(href: string) {
  return href.startsWith("http");
}
