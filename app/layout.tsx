import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://winnie080700.vercel.app"),
  title: "Winnie Choong | Senior Software Developer",
  description:
    "Portfolio website for Winnie Choong, Senior Software Developer focused on API architecture, internal systems, and AI automation.",
  openGraph: {
    title: "Winnie Choong | Senior Software Developer",
    description:
      "API architecture, internal systems, migration tooling, and AI-integrated workflow automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
