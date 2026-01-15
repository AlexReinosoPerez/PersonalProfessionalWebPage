"use client";

import dynamic from "next/dynamic";
import { experiences } from "@/data/experience";
import ExperienceItem from "@/components/experience-item";

const StarsCanvas = dynamic(() => import("@/components/canvas/stars"), {
  ssr: false,
});

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen">
      <StarsCanvas />
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">What I have done</p>
            <h1 className="text-5xl font-bold text-white mb-4">Experience</h1>
            <p className="text-xl text-gray-400">
              Professional experience in machine learning and data science
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
