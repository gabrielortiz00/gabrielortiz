"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AirViz",
    description:
      "3D visualization of US airspace boundaries in a browser. Made to help pilots build a better spatial understanding of the airspace around them before they fly.",
    tech: ["JavaScript", "Mapbox GL JS", "deck.gl"],
    github: "https://github.com/gabrielortiz00/airviz",
    live: null,
  },
  {
    title: "Dolor Sit Amet",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
    tech: ["TypeScript", "Node.js"],
    github: "https://github.com/gabrielortiz00",
    live: null,
  },
  {
    title: "Consectetur",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum tortor quam feugiat vitae.",
    tech: ["Java", "Spring Boot"],
    github: "https://github.com/gabrielortiz00",
    live: null,
  },
];

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-accent text-xs tracking-widest mb-3">
            02. projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ededed]">
            things i&apos;ve built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-6 hover:border-accent/20 transition-all duration-300"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-[#ededed] text-[15px]">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 ml-4 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3a3a3a] hover:text-accent transition-colors"
                    aria-label="View on GitHub"
                  >
                    <GitHubIcon />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3a3a3a] hover:text-accent transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#737373] text-sm leading-6 flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-accent/60 bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
