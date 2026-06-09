import { Award, Bot, Code2 } from "lucide-react";
import { achievements } from "@/data/portfolio";

export default function AchievementsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <section className="max-w-4xl">
        <p className="section-kicker">Achievements</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-portfolio-ink sm:text-7xl">
          Recognition, ownership, and useful automation.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-portfolio-muted">
          A curated view of academic recognition, engineering ownership, and
          AI-assisted work that reflects how I approach practical software
          delivery.
        </p>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        <AchievementGroup
          icon={<Award className="size-6" aria-hidden="true" />}
          title="Academic"
          items={achievements.academic}
        />
        <AchievementGroup
          icon={<Code2 className="size-6" aria-hidden="true" />}
          title="Engineering"
          items={achievements.engineering}
        />
        <AchievementGroup
          icon={<Bot className="size-6" aria-hidden="true" />}
          title="AI + Automation"
          items={achievements.automation}
        />
      </section>
    </main>
  );
}

function AchievementGroup({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <article className="border border-portfolio-line bg-portfolio-lift/70 p-6">
      <div className="flex items-center gap-4">
        <div className="grid size-12 place-items-center border border-portfolio-line bg-portfolio-background text-portfolio-accent">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-portfolio-ink">{title}</h2>
      </div>
      <div className="mt-8 space-y-5">
        {items.map((item, index) => (
          <div className="border-t border-portfolio-line pt-4" key={item}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-accent">
              0{index + 1}
            </p>
            <p className="mt-2 text-sm leading-6 text-portfolio-muted">{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
