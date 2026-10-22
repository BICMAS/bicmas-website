import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bicmasinstitute.com"),
  title: "Bicmas Institute | Transform Workforce Capability",
  description:
    "Digital learning ecosystems for workforce readiness, operational execution, and measurable business impact across Africa.",
  openGraph: {
    title: "Bicmas Institute | Transform Workforce Capability",
    description:
      "Digital learning ecosystems for workforce readiness, operational execution, and measurable business impact.",
    url: "https://bicmasinstitute.com",
    siteName: "Bicmas Institute",
    images: [{ url: "/images/hero-reference.png", width: 1200, height: 800, alt: "Bicmas platform preview" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Bicmas Institute | Transform Workforce Capability",
    description:
      "Digital learning ecosystems for workforce readiness, operational execution, and measurable business impact.",
    images: ["/images/hero-reference.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
