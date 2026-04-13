import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Ortiz",
  description: "CS student at Northeastern University building things with code.",
  openGraph: {
    title: "Gabriel Ortiz",
    description: "CS student at Northeastern University building things with code.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
