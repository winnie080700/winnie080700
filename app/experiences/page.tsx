import { BriefcaseBusiness, Layers3, ListChecks } from "lucide-react";
import { otherProjects, projectExperience, workExperience } from "@/data/portfolio";

export default function ExperiencesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-kicker">Experiences</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-portfolio-ink sm:text-7xl">
            Systems, migrations, tools, and production work.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-portfolio-muted">
          A detailed view of professional roles, project ownership, and the
          engineering work behind API-driven platforms, internal systems, and AI
          automation.
        </p>
      </section>

      <SectionHeader
        icon={<BriefcaseBusiness className="size-6" aria-hidden="true" />}
        kicker="Work"
        title="Professional experience"
      />
      <section className="space-y-10">
        {workExperience.map((item) => (
          <article
            className="grid gap-8 border-t border-portfolio-line pt-8 lg:grid-cols-[18rem_1fr]"
            key={`${item.company}-${item.role}`}
          >
            <div>
              <p className="text-sm font-semibold text-portfolio-accent">
                {item.period}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-portfolio-ink">
                {item.role}
              </h2>
              <p className="mt-2 text-portfolio-muted">{item.company}</p>
              <p className="mt-1 text-sm text-portfolio-subtle">
                {item.location}
              </p>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-portfolio-ink">
                {item.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <li className="flex gap-3 text-sm leading-6 text-portfolio-muted" key={bullet}>
                    <span className="mt-2 size-1.5 shrink-0 bg-portfolio-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <TagList items={item.stack} className="mt-6" />
            </div>
          </article>
        ))}
      </section>

      <SectionHeader
        icon={<Layers3 className="size-6" aria-hidden="true" />}
        kicker="Other"
        title="Other project experience"
      />
      <section className="grid gap-px overflow-hidden border border-portfolio-line bg-portfolio-line md:grid-cols-2">
        {otherProjects.map((project) => (
          <article
            className="bg-portfolio-soft p-6 md:last:col-span-2"
            key={project.name}
          >
            <h2 className="text-xl font-semibold text-portfolio-ink">
              {project.name}
            </h2>
            <p className="mt-4 text-sm leading-6 text-portfolio-muted">
              {project.ownership}
            </p>
            <TagList items={project.stack} className="mt-5" />
          </article>
        ))}
      </section>

      <SectionHeader
        icon={<ListChecks className="size-6" aria-hidden="true" />}
        kicker="Dossier"
        title="Detailed project section"
      />
      <section className="space-y-8">
        {projectExperience.map((project, index) => (
          <article
            className="grid gap-8 border border-portfolio-line bg-portfolio-lift/60 p-6 sm:p-8 lg:grid-cols-[12rem_1fr]"
            key={project.name}
          >
            <div>
              <p className="text-sm font-semibold text-portfolio-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-portfolio-ink">
                {project.name}
              </h2>
              <TagList items={project.stack} className="mt-5" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <DetailBlock title="Problem" body={project.problem} />
              <DetailBlock title="Approach" body={project.approach} />
              <DetailBlock title="Outcome" body={project.outcome} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function SectionHeader({
  icon,
  kicker,
  title,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mt-24 mb-8 flex items-end justify-between gap-6 border-b border-portfolio-line pb-5">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-4 text-3xl font-semibold text-portfolio-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="hidden size-12 place-items-center border border-portfolio-line text-portfolio-accent sm:grid">
        {icon}
      </div>
    </div>
  );
}

function TagList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span
          className="border border-portfolio-line bg-portfolio-background/70 px-2.5 py-1.5 text-xs text-portfolio-muted"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent">
        {title}
      </p>
      <p className="mt-3 text-sm leading-6 text-portfolio-muted">{body}</p>
    </div>
  );
}
