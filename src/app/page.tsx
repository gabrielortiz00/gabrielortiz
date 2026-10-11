import KonamiCode from "@/components/KonamiCode";
import {
  about,
  education,
  experience,
  interests,
  isExternal,
  links,
  profile,
  projects,
  skills,
} from "@/content";

const externalProps = { target: "_blank", rel: "noopener noreferrer" };

const label = "font-mono text-[11px] uppercase tracking-[0.15em] text-muted";
const textLink = "underline decoration-red/60 decoration-1 underline-offset-4 hover:decoration-red hover:decoration-2";

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-20">
      <div className="mb-6 flex items-baseline gap-4 border-b-2 border-red pb-2">
        <span className="font-mono text-sm text-red">{n}</span>
        <h2 className="text-sm font-semibold uppercase tracking-[0.15em]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

// One labelled cell of the header block
function Field({ name, children, className = "" }: { name: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`border-rule p-4 ${className}`}>
      <p className={label}>{name}</p>
      <div className="mt-1.5 text-[15px]">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <KonamiCode />

      <p className={label}>Personal record · {new Date().getFullYear()}</p>
      <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
        Computer science student at Northeastern. I build software for aviation,
        mapping, and data problems.
      </p>

      {/* Header block, styled like the front page of a logbook */}
      <div className="mt-10 grid border border-rule bg-paper sm:grid-cols-4">
        <Field name="Status" className="border-b sm:col-span-2 sm:border-r">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red" />
            Seeking co-op · Jan–Jun 2027
          </span>
        </Field>
        <Field name="Base" className="border-b sm:border-r">
          {profile.location}
        </Field>
        <Field name="Certificate" className="border-b">
          Private Pilot
        </Field>
        <Field name="School" className="border-b sm:col-span-2 sm:border-b-0 sm:border-r">
          {education.school} · CS
        </Field>
        <Field name="Contact" className="sm:col-span-2">
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            {links.map(({ label: l, href }) => (
              <a key={l} href={href} className={textLink} {...(isExternal(href) ? externalProps : {})}>
                {l}
              </a>
            ))}
          </span>
        </Field>
      </div>

      <Section n="01" title="Projects">
        {/* Table on wide screens, stacked entries on phones */}
        <div className="hidden border border-rule bg-paper md:block">
          <div className={`grid grid-cols-[4rem_13rem_1fr_6rem] gap-4 border-b border-rule px-4 py-2 ${label}`}>
            <span>Year</span>
            <span>Project</span>
            <span>Remarks</span>
            <span className="text-right">Links</span>
          </div>
          {projects.map(({ name, year, description, tech, code, live }) => (
            <div
              key={name}
              className="grid grid-cols-[4rem_13rem_1fr_6rem] gap-4 border-b border-rule px-4 py-5 last:border-b-0"
            >
              <span className="font-mono text-sm text-muted">{year}</span>
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="mt-2 font-mono text-[11px] leading-5 text-muted">{tech.join(" / ")}</p>
              </div>
              <p className="text-sm leading-6">{description}</p>
              <div className="flex flex-col items-end gap-1 text-sm">
                <a href={code} {...externalProps} className={textLink}>Code</a>
                {live && <a href={live} {...externalProps} className={textLink}>Live</a>}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 md:hidden">
          {projects.map(({ name, year, description, tech, code, live }) => (
            <div key={name} className="border border-rule bg-paper p-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">{name}</h3>
                <span className="font-mono text-sm text-muted">{year}</span>
              </div>
              <p className="mt-1 font-mono text-[11px] text-muted">{tech.join(" / ")}</p>
              <p className="mt-3 text-sm leading-6">{description}</p>
              <div className="mt-3 flex gap-4 text-sm">
                <a href={code} {...externalProps} className={textLink}>Code</a>
                {live && <a href={live} {...externalProps} className={textLink}>Live</a>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section n="02" title="Experience">
        {experience.map(({ org, role, dates, location, points }) => (
          <div key={org} className="md:grid md:grid-cols-[13rem_1fr] md:gap-8">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold">{org}</h3>
              <p className="text-sm text-muted">{role}</p>
              <p className="mt-2 font-mono text-xs text-muted">{dates}</p>
              <p className="font-mono text-xs text-muted">{location}</p>
            </div>
            <ul className="space-y-3 text-[15px] leading-7">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[0.7rem] h-1 w-1 shrink-0 bg-red" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section n="03" title="About">
        <div className="md:grid md:grid-cols-[13rem_1fr] md:gap-8">
          <dl className="mb-6 space-y-3 md:mb-0">
            {interests.map(({ label: l, detail }) => (
              <div key={l}>
                <dt className="text-sm font-medium">{l}</dt>
                {detail && <dd className="font-mono text-xs text-muted">{detail}</dd>}
              </div>
            ))}
          </dl>
          <div className="space-y-4 text-[15px] leading-7">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section n="04" title="Education & Skills">
        <div className="md:grid md:grid-cols-[13rem_1fr] md:gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold">{education.school}</h3>
            <p className="text-sm text-muted">{education.degree}</p>
            <p className="mt-2 font-mono text-xs text-muted">{education.dates}</p>
            <p className="font-mono text-xs text-red">{education.honors}</p>
          </div>
          <dl className="space-y-3">
            {skills.map(({ label: l, items }) => (
              <div key={l} className="sm:grid sm:grid-cols-[7rem_1fr] sm:gap-4">
                <dt className={`${label} pt-1`}>{l}</dt>
                <dd className="text-[15px]">{items.join(", ")}</dd>
              </div>
            ))}
            <div className="sm:grid sm:grid-cols-[7rem_1fr] sm:gap-4">
              <dt className={`${label} pt-1`}>Coursework</dt>
              <dd className="text-[15px]">{education.coursework.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <footer className="mt-24 flex flex-wrap justify-between gap-4 border-t border-rule pt-6 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Blue skies.</span>
      </footer>
    </main>
  );
}
