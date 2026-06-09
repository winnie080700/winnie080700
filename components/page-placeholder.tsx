type PagePlaceholderProps = {
  title: string;
  checkpoint: string;
  description: string;
};

export function PagePlaceholder({
  title,
  checkpoint,
  description,
}: PagePlaceholderProps) {
  return (
    <main className="mx-auto min-h-[calc(100svh-5rem)] w-full max-w-6xl px-5 py-20 sm:px-8">
      <p className="section-kicker">{checkpoint}</p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-portfolio-ink sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-portfolio-muted">
        {description}
      </p>
    </main>
  );
}
