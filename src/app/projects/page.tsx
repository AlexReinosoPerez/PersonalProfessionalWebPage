"use client";

import dynamic from "next/dynamic";
import ProjectsGrid from "@/components/projects-grid";

const StarsCanvas = dynamic(() => import("@/components/canvas/stars"), {
  ssr: false,
});

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <StarsCanvas />
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">My Work</p>
            <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
            <p className="text-xl text-gray-400">
              Selected machine learning and AI projects
            </p>
          </div>
          <ProjectsGrid />
        </div>
      </div>
    </div>
  );
}
