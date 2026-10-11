// All site content lives here. Keep it in sync with public/Gabriel_Ortiz_Resume.pdf.

export const RESUME = "/Gabriel_Ortiz_Resume.pdf";

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
  { label: "Resume", href: RESUME },
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

export const projects = [
  {
    name: "AirViz",
    year: "2026",
    summary: "3D airspace visualizer for student pilots",
    description:
      "Renders FAA Class B, C, and D airspace for 13 terminal areas as stacked 3D volumes instead of flat sectional charts, built from FAA NASR data converted to GeoJSON.",
    tech: ["JavaScript", "Mapbox GL JS", "Vite", "QGIS"],
    code: "https://github.com/gabrielortiz00/airviz",
    live: null as string | null,
  },
  {
    name: "Open Flight Schools",
    year: "2026",
    summary: "Community-maintained directory of US flight schools",
    description:
      "Open-source directory with an interactive map, filterable school listings, detail pages, and community-submitted entries reviewed through a moderation queue.",
    tech: ["TypeScript", "Next.js", "Supabase", "Mapbox GL JS"],
    code: "https://github.com/gabrielortiz00/open-flight-schools",
    live: "https://openflightschools.com" as string | null,
  },
  {
    name: "Cost Accumulation Software",
    year: "2024",
    summary: "Internal costing tool for a manufacturer",
    description:
      "Desktop app that replaced Excel formulas for the costing team at BYP, a Mexican paint-applicator manufacturer. Calculates product cost from shipping, taxes, container limits, and import fees, with user auth, live exchange rates, and a margin-based pricing calculator.",
    tech: ["Java", "JavaFX"],
    code: "https://github.com/gabrielortiz00/byp-cost-calculator",
    live: null as string | null,
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
  { label: "Libraries", items: ["NumPy", "Pandas", "Matplotlib", "asyncio", "JavaFX", "Mapbox GL JS"] },
  { label: "Tools", items: ["Git", "REST APIs", "pytest", "QGIS"] },
];

export const interests = [
  { label: "Private pilot", detail: "FAA certificated" },
  { label: "DJ", detail: "10+ years, crowds of 3,000+" },
  { label: "Languages", detail: "Spanish (native), German (B2)" },
  { label: "Mountain biking", detail: "" },
];

export function isExternal(href: string) {
  return href.startsWith("http") || href === RESUME;
}
