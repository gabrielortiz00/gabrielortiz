"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "resume", href: "#resume" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f]"
          : ""
      }`}
    >
      <a
        href="#"
        className="font-mono text-accent font-semibold text-sm tracking-widest hover:opacity-70 transition-opacity"
      >
        go.
      </a>
      <nav className="hidden sm:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-xs text-[#737373] hover:text-[#ededed] transition-colors duration-200 tracking-wider"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
