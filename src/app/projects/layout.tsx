import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected machine learning and AI projects including deepfake detection, computer vision, art authentication with neural networks, and production ML pipelines.",
  openGraph: {
    title: "Projects | Alejandro Reinoso Perez",
    description:
      "Selected machine learning and AI projects including deepfake detection, computer vision, and production ML pipelines.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
