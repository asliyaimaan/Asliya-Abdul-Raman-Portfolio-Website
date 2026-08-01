import type { Metadata } from "next";
import { Inter, Space_Mono, Jersey_10, Unica_One, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
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
      className={`dark ${spaceMono.variable} ${jersey.variable} ${unica.variable} ${spaceGrotesk.variable}`}
    >
      <body className={`${inter.className} bg-[#0B0F19] text-white min-h-screen antialiased`}>
        <Navbar />
        {/* pt-16 ensures page content clears the fixed navbar */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}