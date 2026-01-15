import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Alex Reinoso Perez",
  description: "Technical skills in Python, PyTorch, TensorFlow, MLOps, Docker, Kubernetes, and more.",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
