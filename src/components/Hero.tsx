"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-20">
      {/* Subtle accent glow in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] bg-accent blur-[120px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        <motion.p
          variants={item}
          className="font-mono text-accent text-sm mb-5 tracking-widest"
        >
          hello, i&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#ededed] tracking-tight leading-none mb-6 font-[family-name:var(--font-display)]"
        >
          Gabriel Ortiz.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-[#737373] max-w-lg leading-relaxed mb-10"
        >
          CS @ Northeastern building things and flying planes.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#0a0a0a] font-mono text-sm font-bold rounded-lg hover:bg-accent/90 active:scale-95 transition-all duration-200"
          >
            see my work
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1f1f1f] text-[#737373] font-mono text-sm rounded-lg hover:border-accent/40 hover:text-[#ededed] transition-all duration-300"
          >
            get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
