"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./project-card";
import { textVariant, staggerContainer } from "@/lib/motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant()} className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">My Work</p>
          <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Selected machine learning and AI projects showcasing expertise in deep learning, 
            computer vision, and end-to-end ML systems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
