import type { Metadata } from "next";
import { onest, geistmono } from "@/lib/fonts";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from './AOSProvider';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "BranchDB",
  description: "BranchDB a lightweight a Key-Value Store, with in-memory data & disk persistence built in C++.",
  keywords: [
    "BranchDB",
    "Branch DB",
    "key-value store",
    "key value store",
    "in-memory database",
    "in memory database",
    "C++ database",
    "Cpp database",
    "from scratch database",
    "persistence",
    "WAL",
    "Write-Ahead Log",
    "multithreaded database",
    "concurrent",
    "TTL",
    "log compaction",
    "binary protocol",
    "self-hosted",
    "Docker",
    "open-source database",
    "developer tools"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
