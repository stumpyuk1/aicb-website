import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: {
    default: "Advanced Innovation Charter Borough",
    template: "%s · AICB",
  },
  description:
    "A chartered territorial commons: English liberties, Networked Commons Governance, and a living community on the ground.",
  openGraph: {
    title: "Advanced Innovation Charter Borough",
    description:
      "The territorial vehicle for Networked Commons Governance — a legally grounded opt-in borough that can actually build.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <Shell>{children}</Shell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
