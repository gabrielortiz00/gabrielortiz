import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
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

const description = "Computer Science student at Northeastern University.";

export const metadata: Metadata = {
  title: "Gabriel Ortiz",
  description,
  openGraph: {
    title: "Gabriel Ortiz",
    description,
    url: "https://gabrielortiz.io",
    siteName: "Gabriel Ortiz",
    locale: "en_US",
    type: "website",
  },
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
