"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "frameworks",
    skills: ["Next.js", "Flask", "JavaFX", "Framer Motion"],
  },
  {
    label: "libraries",
    skills: ["Mapbox GL JS", "deck.gl", "Apache PDFBox"],
  },
  {
    label: "tools",
    skills: ["Git", "Supabase", "Arduino", "Unity"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-accent text-xs tracking-widest mb-3">
            02. skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ededed]">
            what i work with
          </h2>
        </motion.div>

        <div className="space-y-6">
          {categories.map(({ label, skills }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start"
            >
              <span className="font-mono text-accent text-sm shrink-0 w-24 pt-1">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] text-accent/60 bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}