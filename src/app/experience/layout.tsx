import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Alex Reinoso Perez",
  description: "Professional experience in machine learning engineering, data science, and AI development.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
