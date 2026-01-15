"use client";

import dynamic from "next/dynamic";
import { skillsData } from "@/data/skills";
import SkillCategoryComponent from "@/components/skill-category";

const StarsCanvas = dynamic(() => import("@/components/canvas/stars"), {
  ssr: false,
});

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      <StarsCanvas />
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">My abilities</p>
            <h1 className="text-5xl font-bold text-white mb-4">Skills</h1>
            <p className="text-xl text-gray-400">
              Technical expertise across the ML/AI stack
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <SkillCategoryComponent key={category.category} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
