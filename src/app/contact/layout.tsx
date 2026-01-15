import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alejandro Reinoso Perez for machine learning engineering, AI consulting, and collaboration opportunities.",
  openGraph: {
    title: "Contact | Alejandro Reinoso Perez",
    description:
      "Contact Alejandro Reinoso Perez for ML engineering and AI opportunities.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
