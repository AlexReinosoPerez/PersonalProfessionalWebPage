import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexreinosoperez.com"),
  title: {
    default: "Alejandro Reinoso Perez | Machine Learning Engineer",
    template: "%s | Alejandro Reinoso Perez",
  },
  description:
    "Machine Learning Engineer focused on MLOps and Deep Learning. Building end-to-end, production-ready ML systems.",
  keywords: [
    "Alejandro Reinoso Perez",
    "Machine Learning Engineer",
    "MLOps",
    "Deep Learning",
    "Computer Vision",
    "AI Engineer",
    "Python",
    "PyTorch",
  ],
  authors: [{ name: "Alejandro Reinoso Perez" }],
  creator: "Alejandro Reinoso Perez",
  openGraph: {
    title: "Alejandro Reinoso Perez | Machine Learning Engineer",
    description:
      "Machine Learning Engineer focused on MLOps & Deep Learning. Portfolio and selected projects.",
    url: "https://alexreinosoperez.com",
    siteName: "Alejandro Reinoso Perez",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Reinoso Perez | Machine Learning Engineer",
    description:
      "Machine Learning Engineer focused on MLOps & Deep Learning. Portfolio and selected projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
