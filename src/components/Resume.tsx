"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="border border-[#1f1f1f] rounded-2xl p-10 md:p-16 text-center bg-[#0f0f0f]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-accent text-xs tracking-widest mb-4">
              03. resume
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#ededed] mb-4">
              want the full picture?
            </h2>
            <p className="text-[#737373] mb-10 max-w-sm mx-auto leading-relaxed">
              My resume has the details on coursework, projects, skills, and anything
              else that didn&apos;t fit here.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-[#0a0a0a] font-mono text-sm font-bold rounded-lg hover:bg-accent/90 active:scale-95 transition-all duration-200"
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
      </div>
    </section>
  );
}
