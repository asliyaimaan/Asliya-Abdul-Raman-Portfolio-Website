import type { Metadata } from "next";
import { Inter, Space_Mono, Jersey_10, Unica_One } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/navbar';

const inter = Inter({
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
});

const unica = Unica_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-unica",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Asliya Abdulraman — Portfolio',
  description: 'Full-stack developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceMono.variable} ${jersey.variable} ${unica.variable}`}
    >
      <body className={`${inter.className} bg-[#0B0F19] text-white min-h-screen antialiased`}>
        <Navbar />
        {/* pt-16 ensures page content clears the fixed navbar */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}