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
              Born in San Diego, but raised mostly in Mexico, I got into coding around 13
              with no real plan, just an Arduino, some free time, and a lot of trial and error.
              Built a weather station for my house, made a couple of physics games in Unity for
              no reason other than curiosity. That&apos;s more or less how it started.
            </p>
            <p>
              I&apos;m drawn to the logic and systems side of things, the math, the way things actually
              work under the hood. The fact that I can open my computer and build anything that
              comes to mind is a fascinating idea that immediately caught my eye the first time I
              opened an IDE. I write mostly in Python and Java. One of my first real projects was
              a cost management tool I built for a Mexican manufacturing company while in high school.
            </p>
            <p>
              Certified private pilot, freelance DJ, mountain biker, and space nerd. I also speak
              Spanish and German.
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
