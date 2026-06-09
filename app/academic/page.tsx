import { Award, BookOpen, Calendar, GraduationCap, Languages } from "lucide-react";
import { academic } from "@/data/portfolio";

export default function AcademicPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-kicker">Academic</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-portfolio-ink sm:text-7xl">
            The foundation before the systems.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-portfolio-muted">
          A focused technology background in Internet Technology, strengthened
          by academic recognition and early community involvement.
        </p>
      </section>

      <section className="mt-16 border border-portfolio-line bg-portfolio-lift/70 p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
          <div>
            <div className="grid size-14 place-items-center border border-portfolio-line bg-portfolio-background text-portfolio-accent">
              <GraduationCap className="size-7" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-portfolio-ink">
              {academic.degree}
            </h2>
            <p className="mt-4 text-portfolio-muted">{academic.school}</p>
          </div>

          <div className="grid gap-px overflow-hidden border border-portfolio-line bg-portfolio-line sm:grid-cols-2">
            <InfoTile
              icon={<Calendar className="size-5" aria-hidden="true" />}
              label="Period"
              value={academic.period}
            />
            <InfoTile
              icon={<BookOpen className="size-5" aria-hidden="true" />}
              label="CGPA"
              value={academic.cgpa}
            />
            <InfoTile
              icon={<Award className="size-5" aria-hidden="true" />}
              label="Recognition"
              value="Merit, President & Dean List"
            />
            <InfoTile
              icon={<Languages className="size-5" aria-hidden="true" />}
              label="Language"
              value="Chinese, English, Cantonese, Malay"
            />
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[16rem_1fr]">
        <div>
          <p className="section-kicker">Highlights</p>
          <h2 className="mt-4 text-3xl font-semibold text-portfolio-ink">
            Academic achievements
          </h2>
        </div>
        <div className="space-y-4">
          {academic.achievements.map((achievement, index) => (
            <div
              className="flex gap-5 border-t border-portfolio-line pt-4"
              key={achievement}
            >
              <span className="text-sm font-semibold text-portfolio-accent">
                0{index + 1}
              </span>
              <p className="text-lg text-portfolio-ink">{achievement}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function InfoTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-portfolio-soft p-5">
      <div className="text-portfolio-accent">{icon}</div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-subtle">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-portfolio-ink">{value}</p>
    </div>
  );
}
