"use client";

import { motion } from "framer-motion";


const links = [
  {
    label: "email",
    href: "mailto:gabriel@gabrielortiz.io",
    display: "gabriel@gabrielortiz.io",
  },
  {
    label: "github",
    href: "https://github.com/gabrielortiz00",
    display: "github",
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/gabrielortiz00",
    display: "linkedin",
  },
  {
    label: "resume",
    href: "/gabriel_ortiz_resume_2026.pdf",
    display: "resume.pdf",
  },
];

function EmailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function getIcon(label: string) {
  if (label === "email") return <EmailIcon />;
  if (label === "github") return <GitHubIcon />;
  if (label === "linkedin") return <LinkedInIcon />;
  if (label === "resume") return <DocumentIcon />;
  return null;
}

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-accent text-xs tracking-widest mb-3">
            04. contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ededed] mb-4">
            let&apos;s talk
          </h2>
          <p className="text-[#737373] max-w-md leading-relaxed">
            I&apos;m always open to new opportunities, cool projects, or just a good
            conversation. My inbox is open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3"
        >
          {links.map(({ label, href, display }) => (
            <a
              key={label}
              href={href}
              target={label === "github" || label === "linkedin" ? "_blank" : undefined}
              rel={label === "github" || label === "linkedin" ? "noopener noreferrer" : undefined}
              download={label === "resume" ? true : undefined}
              className="inline-flex items-center gap-3 px-5 py-3.5 border border-[#1f1f1f] rounded-lg font-mono text-sm text-[#737373] hover:border-accent/30 hover:text-[#ededed] hover:bg-accent/5 transition-all duration-300"
            >
              <span className="text-accent">{getIcon(label)}</span>
              {display}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
