import KonamiCode from "@/components/KonamiCode";
import {
  about,
  education,
  experience,
  isExternal,
  links,
  profile,
  projects,
  skills,
} from "@/content";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}

const linkClass =
  "underline decoration-neutral-300 underline-offset-4 hover:decoration-current dark:decoration-neutral-600";

const externalProps = { target: "_blank", rel: "noopener noreferrer" };

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <KonamiCode />

      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          {profile.headline} {profile.status}
        </p>
        <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className={linkClass} {...(isExternal(href) ? externalProps : {})}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <Section title="About">
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-7">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        {experience.map(({ org, role, dates, points }) => (
          <div key={org}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium">
                {org} <span className="font-normal text-neutral-500">· {role}</span>
              </h3>
              <span className="text-sm text-neutral-500">{dates}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 leading-7">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Projects">
        <div className="space-y-8">
          {projects.map(({ name, code, live, tech, description }) => (
            <div key={name}>
              <h3 className="font-medium">
                <a href={live ?? code} className={linkClass} {...externalProps}>
                  {name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-neutral-500">{tech.join(", ")}</p>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300 leading-7">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="font-medium">{education.school}</h3>
          <span className="text-sm text-neutral-500">{education.dates}</span>
        </div>
        <p className="mt-1 text-neutral-700 dark:text-neutral-300">
          {education.degree} · {education.honors}
        </p>
        <p className="mt-2 text-sm text-neutral-500 leading-6">
          Coursework: {education.coursework.join(", ")}
        </p>
      </Section>

      <Section title="Skills">
        <dl className="space-y-2">
          {skills.map(({ label, items }) => (
            <div key={label} className="sm:flex sm:gap-4">
              <dt className="w-24 shrink-0 font-medium">{label}</dt>
              <dd className="text-neutral-700 dark:text-neutral-300">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <footer className="mt-20 text-sm text-neutral-500">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
