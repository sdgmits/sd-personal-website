import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personalInfo } from "@/utils/data";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: `Personal portfolio of ${personalInfo.name}, showcasing experience, projects, and skills in software engineering.`,
  keywords: ["Software Engineer", "Dynamics 365", "Copilot", "Solution Architect", "React", "Next.js", "TypeScript"],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    type: "website",
    url: "https://sdgmits.github.io", // Update this with your actual GitHub Pages URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
