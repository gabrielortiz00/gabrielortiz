export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16 lg:px-24 border-t border-[#1f1f1f]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[#3a3a3a] text-xs">
          © {new Date().getFullYear()} Gabriel Ortiz
        </p>
        <p className="font-mono text-[#3a3a3a] text-xs">
          built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            next.js
          </a>{" "}
          ·{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            tailwind
          </a>
        </p>
      </div>
    </footer>
  );
}
