import type { Metadata } from "next";
import { onest, geistmono } from "@/lib/fonts";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from './AOSProvider';

export const metadata: Metadata = {
  title: "BranchDB",
  description: "BranchDB a lightweight a Key-Value Store, with in-memory data & disk persistence built in C++.",
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
      </body>
    </html>
  );
}
