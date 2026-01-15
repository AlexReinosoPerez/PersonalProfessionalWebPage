"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import WhatIDo from "@/components/what-i-do";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";

const StarsCanvas = dynamic(() => import("@/components/canvas/stars"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative">
      <StarsCanvas />
      <div className="relative z-10">
        <Hero />
        <WhatIDo />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
