import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/icon.png`, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, type: "image/png", sizes: "180x180" }],
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
