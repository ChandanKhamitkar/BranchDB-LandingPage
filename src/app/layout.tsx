import type { Metadata } from "next";
import { Onest, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ['400', '500', '700']
});
export const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

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
        className={`${onest.variable} ${geistMono.variable} antialiased`}
      >
          <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
