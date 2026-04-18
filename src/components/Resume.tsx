"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <p className="font-mono text-accent text-xs tracking-widest mb-3">
              04. resume
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#ededed]">
              want the full picture?
            </h2>
          </div>
          <a
            href="/gabriel_ortiz_resume_2026.pdf"
            download
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent text-[#0a0a0a] font-mono text-sm font-bold rounded-lg hover:bg-accent/90 active:scale-95 transition-all duration-200 shrink-0"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            download resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
