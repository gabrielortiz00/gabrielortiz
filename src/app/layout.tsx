import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SITE_URL } from "@/content";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Computer science student at Northeastern University and private pilot. Projects include AirViz, a 3D map of US airspace built from FAA data.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gabriel Ortiz",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gabriel Ortiz",
    description,
    url: "/",
    siteName: "Gabriel Ortiz",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  );
}
