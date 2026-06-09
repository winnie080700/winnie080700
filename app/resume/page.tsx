import Link from "next/link";
import { Download, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <section className="lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-kicker">Resume</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-portfolio-ink sm:text-7xl">
            A downloadable snapshot of my work.
          </h1>
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_20rem]">
        <div className="overflow-hidden border border-portfolio-line bg-portfolio-lift">
          <div className="flex items-center justify-between border-b border-portfolio-line px-4 py-3">
            <p className="text-sm font-semibold text-portfolio-ink">
              Winnie Choong Resume
            </p>
            <Link
              className="inline-flex items-center gap-2 text-sm text-portfolio-accent hover:text-sky-300"
              href={profile.resumePath}
              target="_blank"
            >
              Open PDF
              <ExternalLink className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <object
            aria-label="Resume PDF preview"
            className="h-[72svh] min-h-[36rem] w-full bg-portfolio-background"
            data={profile.resumePath}
            type="application/pdf"
          >
            <div className="grid h-[72svh] min-h-[36rem] place-items-center p-8 text-center">
              <div>
                <p className="text-xl font-semibold text-portfolio-ink">
                  PDF preview is not available in this browser.
                </p>
                <p className="mt-3 max-w-md text-sm leading-6 text-portfolio-muted">
                  Some browsers disable embedded PDF previews. You can still
                  open or download the resume directly.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    className="inline-flex items-center justify-center gap-2 bg-portfolio-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                    href={profile.resumePath}
                    target="_blank"
                  >
                    Open PDF
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center gap-2 border border-portfolio-line px-5 py-3 text-sm font-semibold text-portfolio-ink transition hover:border-portfolio-accent hover:text-portfolio-accent"
                    download
                    href={profile.resumePath}
                  >
                    Download
                    <Download className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </object>
        </div>

        <aside className="h-fit border border-portfolio-line bg-portfolio-soft p-6">
          <p className="section-kicker">Actions</p>
          <div className="mt-6 space-y-3">
            <Link
              className="inline-flex w-full items-center justify-center gap-2 bg-portfolio-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              download
              href={profile.resumePath}
            >
              Download Resume
              <Download className="size-4" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex w-full items-center justify-center gap-2 border border-portfolio-line px-5 py-3 text-sm font-semibold text-portfolio-ink transition hover:border-portfolio-accent hover:text-portfolio-accent"
              href={`mailto:${profile.email}?subject=Portfolio%20Resume%20Inquiry`}
            >
              Email Me
              <Mail className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 border-t border-portfolio-line pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-subtle">
              Public contact
            </p>
            <Link
              className="mt-3 block text-sm text-portfolio-accent hover:text-sky-300"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
