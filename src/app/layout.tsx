import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
