import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { focusAreas, homeHighlights, profile, techStack } from "@/data/portfolio";

export default function Home() {
  const stackGroups = [
    ["Backend", techStack.backend],
    ["Frontend", techStack.frontend],
    ["Database", techStack.database],
    ["Tools", techStack.tools],
    ["AI + Automation", techStack.ai],
  ] as const;

  return (
    <main>
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-portfolio-line">
        <Image
          src="/hero-workspace.png"
          alt="Dark developer workspace with abstract API architecture lines"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,18,0.96)_0%,rgba(7,10,18,0.84)_34%,rgba(7,10,18,0.42)_66%,rgba(7,10,18,0.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-portfolio-background to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-5 py-20 sm:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-portfolio-accent">
              {profile.location}
            </p>
            <h1 className="mt-6 text-6xl font-semibold tracking-tight text-portfolio-ink sm:text-8xl lg:text-9xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-medium text-portfolio-ink sm:text-3xl">
              {profile.title}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-portfolio-muted">
              I architect API-driven systems, internal platforms, and
              AI-integrated workflows that turn complex business operations into
              reliable software.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center gap-2 bg-portfolio-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                View Experience
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href={profile.resumePath}
                className="inline-flex items-center justify-center gap-2 border border-portfolio-line bg-portfolio-background/45 px-5 py-3 text-sm font-semibold text-portfolio-ink backdrop-blur transition hover:border-portfolio-accent hover:text-portfolio-accent"
              >
                Download Resume
                <Download className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">About Me</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-portfolio-ink sm:text-5xl">
            Backend-first, product-aware, practical by default.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-portfolio-muted">
          <p>
            I am a Senior Software Developer with 4+ years of experience across
            backend systems, web applications, internal platforms, and legacy
            modernization. My core strength is architecting maintainable
            API-driven systems with C# / .NET while working comfortably across
            frontend, database, tooling, and AI-assisted workflows.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {homeHighlights.map((highlight) => (
              <div
                className="border-l border-portfolio-accent/70 pl-4 text-base leading-7 text-portfolio-ink"
                key={highlight}
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-portfolio-line bg-portfolio-soft/70">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <p className="section-kicker">What I Focus On</p>
          <div className="mt-10 grid gap-px overflow-hidden border border-portfolio-line bg-portfolio-line md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <article className="bg-portfolio-soft p-6" key={area.title}>
                <h3 className="text-xl font-semibold text-portfolio-ink">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-portfolio-muted">
                  {area.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Tech Stack</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-portfolio-ink sm:text-5xl">
            Tools I use to turn workflows into systems.
          </h2>
        </div>
        <div className="mt-12 space-y-8">
          {stackGroups.map(([label, items]) => (
            <div
              className="grid gap-5 border-t border-portfolio-line pt-6 lg:grid-cols-[12rem_1fr]"
              key={label}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-accent">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    className="border border-portfolio-line bg-portfolio-lift/70 px-3 py-2 text-sm text-portfolio-ink"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="flex flex-col justify-between gap-8 border border-portfolio-line bg-portfolio-lift p-6 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="section-kicker">Next</p>
            <h2 className="mt-4 text-3xl font-semibold text-portfolio-ink">
              Explore the work behind the systems.
            </h2>
            <p className="mt-3 max-w-2xl text-portfolio-muted">
              Work history, project ownership, and detailed engineering
              highlights live in the Experiences section.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center gap-2 bg-portfolio-ink px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              Experiences
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 border border-portfolio-line px-5 py-3 text-sm font-semibold text-portfolio-ink transition hover:border-portfolio-accent hover:text-portfolio-accent"
            >
              Email Me
              <Mail className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
