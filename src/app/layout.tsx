import type { Metadata } from "next";
import { onest, geistmono } from "@/lib/fonts";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from './AOSProvider';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "BranchDB - Blazingly Fast In-Memory Key-Value Database",
  description: "BranchDB is a lightweight, high-performance in-memory key-value store with persistence, TTL, WAL, and log compaction. Built in C++ and Docker-ready.",
  keywords: [
    "BranchDB database",
    "fast key-value store",
    "open-source C++ database",
    "in-memory key-value store with persistence",
    "lightweight database for developers",
    "Docker key-value database",
    "write-ahead logging database",
    "self-hosted NoSQL alternative",
    "open-source Redis alternative",
    "high-performance database engine"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
  openGraph: {
    title: "BranchDB - Blazingly Fast In-Memory Key-Value Database",
    description: "A high-performance C++ key-value store with persistence, WAL, and Docker support. Open-source and developer-friendly.",
    url: "https://branchdb.khamitkar.dev",
    siteName: "BranchDB",
    images: [
      {
        url: "https://branchdb.khamitkar.dev/Poster.png",
        width: 1200,
        height: 630,
        alt: "BranchDB Database",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BranchDB - Blazingly Fast In-Memory Database",
    description: "Lightweight C++ key-value database with persistence, WAL & Docker support.",
    images: ["https://branchdb.khamitkar.dev/Poster.png"],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://branchdb.khamitkar.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BranchDB",
              description: "Blazingly fast C++ in-memory key-value store with persistence.",
              applicationCategory: "Database",
              operatingSystem: "Linux, macOS, Windows",
              url: "https://branchdb.khamitkar.dev",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              softwareVersion: "1.0.0",
              author: {
                "@type": "Person",
                "name": "Chandan Khamitkar"
              }
            }),
          }}
        />

      </head>
      <body
        className={`${onest.variable} ${geistmono.variable} antialiased`}
      >
        <NavBar />
        <AOSProvider>{children}</AOSProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
