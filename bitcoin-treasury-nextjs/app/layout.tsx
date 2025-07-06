import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitcoin Treasury Solutions | Melbourne's Bitcoin Adoption Experts",
  description: "Helping Melbourne Businesses Harness the Power of Bitcoin - Professional Bitcoin Treasury Services",
  keywords: ["bitcoin", "treasury", "melbourne", "business", "consulting"],
  authors: [{ name: "Bitcoin Treasury Solutions" }],
  creator: "Bitcoin Treasury Solutions",
  publisher: "Bitcoin Treasury Solutions",
  applicationName: "Bitcoin Treasury Solutions",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Bitcoin Treasury Solutions | Melbourne's Bitcoin Adoption Experts",
    description: "Helping Melbourne Businesses Harness the Power of Bitcoin - Professional Bitcoin Treasury Services",
    url: "https://bitcointreasurysolutions.com",
    siteName: "Bitcoin Treasury Solutions",
    images: [
      {
        url: "/img/bitcoin-treasury-cover.png",
        width: 1200,
        height: 630,
        alt: "Bitcoin Treasury Solutions",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Treasury Solutions | Melbourne's Bitcoin Adoption Experts",
    description: "Helping Melbourne Businesses Harness the Power of Bitcoin - Professional Bitcoin Treasury Services",
    images: ["/img/bitcoin-treasury-cover.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://bitcointreasurysolutions.com",
  },
  category: "Business Services",
  classification: "Bitcoin Treasury Services",
  other: {
    "msapplication-TileColor": "#3d63dd",
    "msapplication-TileImage": "/favicon/mstile-144x144.png",
    "theme-color": "#3d63dd",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#3d63dd" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
