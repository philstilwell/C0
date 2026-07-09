import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cø / N* — Phenomenal Presence Lab",
    template: "%s | Cø / N*",
  },
  description:
    "Explore the N* model: viability, integration, broadcast availability, and recurrent stability as a testable conjunction for minimal phenomenal presence.",
  authors: [{ name: "Phil Stilwell" }],
  openGraph: {
    title: "Cø / N* — Phenomenal Presence Lab",
    description: "Make a theory of minimal phenomenal consciousness move.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07090b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
