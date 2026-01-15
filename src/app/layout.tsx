import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: "Alex Reinoso Perez | ML Engineer",
    template: "%s | Alex Reinoso Perez",
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#050816]">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
