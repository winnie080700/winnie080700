"use client";

import { FormEvent, useMemo, useState } from "react";
import { Mail, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    );

    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [email, message, name]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Field
        label="Name"
        onChange={setName}
        placeholder="Your name"
        value={name}
      />
      <Field
        label="Email"
        onChange={setEmail}
        placeholder="your.email@example.com"
        type="email"
        value={email}
      />
      <div>
        <label
          className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-subtle"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="mt-3 min-h-44 w-full resize-y border border-portfolio-line bg-portfolio-background px-4 py-3 text-sm leading-6 text-portfolio-ink outline-none transition placeholder:text-portfolio-subtle focus:border-portfolio-accent"
          id="message"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell me about the role, collaboration, or project discussion."
          required
          value={message}
        />
      </div>
      <button
        className="inline-flex w-full items-center justify-center gap-2 bg-portfolio-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        type="submit"
      >
        Draft Email
        <Send className="size-4" aria-hidden="true" />
      </button>
      <a
        className="inline-flex w-full items-center justify-center gap-2 border border-portfolio-line px-5 py-3 text-sm font-semibold text-portfolio-ink transition hover:border-portfolio-accent hover:text-portfolio-accent"
        href={`mailto:${profile.email}`}
      >
        Email Directly
        <Mail className="size-4" aria-hidden="true" />
      </a>
    </form>
  );
}

function Field({
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  value: string;
}) {
  const id = label.toLowerCase();

  return (
    <div>
      <label
        className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-subtle"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="mt-3 w-full border border-portfolio-line bg-portfolio-background px-4 py-3 text-sm text-portfolio-ink outline-none transition placeholder:text-portfolio-subtle focus:border-portfolio-accent"
        id={id}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
    </div>
  );
}
