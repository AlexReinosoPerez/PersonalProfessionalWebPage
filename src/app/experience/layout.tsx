import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience in machine learning engineering at Deloitte, including MLOps, deep learning model deployment, and AI system development.",
  openGraph: {
    title: "Experience | Alejandro Reinoso Perez",
    description:
      "Professional experience in machine learning engineering, MLOps, and AI development.",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
