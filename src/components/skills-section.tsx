"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import SkillCategoryComponent from "./skill-category";
import { textVariant, staggerContainer } from "@/lib/motion";

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant()} className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">My abilities</p>
          <h2 className="text-5xl font-bold text-white mb-4">Skills</h2>
          <p className="text-xl text-gray-400">
            Technical expertise across the ML/AI stack
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategoryComponent key={category.category} category={category} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
