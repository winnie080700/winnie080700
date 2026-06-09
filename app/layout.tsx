import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winnie Choong | Senior Software Developer",
  description:
    "Portfolio website for Winnie Choong, Senior Software Developer focused on API architecture, internal systems, and AI automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
