import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Alex Reinoso Perez",
  description: "Get in touch with Alex Reinoso Perez for machine learning and AI opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
