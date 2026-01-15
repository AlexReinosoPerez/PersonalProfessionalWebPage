import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Alex Reinoso Perez",
  description: "Machine learning and AI projects including deepfake detection, computer vision, and MLOps implementations.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
