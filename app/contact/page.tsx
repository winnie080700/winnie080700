import Link from "next/link";
import { Mail, MapPin, MessageSquareText } from "lucide-react";
import { ContactForm } from "./contact-form";
import { profile } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-kicker">Contact Me</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-portfolio-ink sm:text-7xl">
            Start with email. Keep it practical.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-portfolio-muted">
          For software development opportunities, collaborations, or project
          discussions, email is the public contact path. Phone details are kept
          inside the resume PDF.
        </p>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <ContactTile
            icon={<Mail className="size-6" aria-hidden="true" />}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactTile
            icon={<MapPin className="size-6" aria-hidden="true" />}
            label="Location"
            value={profile.location}
          />
          <ContactTile
            icon={<MessageSquareText className="size-6" aria-hidden="true" />}
            label="Best for"
            value="Backend roles, internal systems, API architecture, migration tooling, and AI automation discussions."
          />
        </div>

        <div className="border border-portfolio-line bg-portfolio-lift/70 p-6 sm:p-8">
          <p className="section-kicker">Email Draft</p>
          <h2 className="mt-4 text-3xl font-semibold text-portfolio-ink">
            Write the message here.
          </h2>
          <p className="mt-3 text-sm leading-6 text-portfolio-muted">
            Submitting opens your email client with the message pre-filled.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactTile({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="border border-portfolio-line bg-portfolio-soft p-6 transition hover:border-portfolio-accent/70">
      <div className="text-portfolio-accent">{icon}</div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-subtle">
        {label}
      </p>
      <p className="mt-3 text-base font-semibold leading-7 text-portfolio-ink">
        {value}
      </p>
    </div>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}
