import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          background: "var(--background)",
          soft: "var(--background-soft)",
          lift: "var(--background-lift)",
          ink: "var(--ink)",
          muted: "var(--muted)",
          subtle: "var(--subtle)",
          line: "var(--line)",
          accent: "var(--accent)",
          strong: "var(--accent-strong)",
          warm: "var(--warm)"
        }
      },
      boxShadow: {
        "portfolio-glow": "0 24px 90px rgba(37, 99, 235, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
