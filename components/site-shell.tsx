import Link from "next/link";
import { Mail } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-portfolio-ink">
      <header className="sticky top-0 z-50 border-b border-portfolio-line bg-portfolio-background/82 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center border border-portfolio-line bg-portfolio-lift text-sm font-bold text-portfolio-accent shadow-portfolio-glow">
              WC
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold">
                {profile.name}
              </span>
              <span className="block text-xs text-portfolio-muted">
                {profile.title}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                className="px-3 py-2 text-sm text-portfolio-muted transition hover:text-portfolio-ink"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            className="inline-flex items-center gap-2 border border-portfolio-line px-3 py-2 text-sm font-medium text-portfolio-ink transition hover:border-portfolio-accent hover:text-portfolio-accent"
            href={`mailto:${profile.email}`}
          >
            <Mail className="size-4" aria-hidden="true" />
            <span>Email</span>
          </Link>
        </div>
      </header>

      {children}
    </div>
  );
}
