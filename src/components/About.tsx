"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "school", value: "Northeastern University" },
  { label: "year", value: "Freshman · Class of 2029" },
  { label: "location", value: "Boston, MA" },
  { label: "major", value: "Computer Science" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-accent text-xs tracking-widest mb-3">
            01. about
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ededed]">
            a bit about me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-4 text-[#737373] text-base leading-7"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
              ultricies eget, tempor sit amet, ante.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="space-y-4 font-mono text-sm">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex gap-5">
                  <span className="text-accent shrink-0 w-20">{label}</span>
                  <span className="text-[#737373]">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
