import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical expertise in Python, PyTorch, TensorFlow, MLOps tools (MLflow, DVC), Docker, Kubernetes, FastAPI, and computer vision frameworks.",
  openGraph: {
    title: "Skills | Alejandro Reinoso Perez",
    description:
      "Technical skills across the ML/AI stack: Python, PyTorch, MLOps, Docker, Kubernetes.",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
