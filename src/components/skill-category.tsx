"use client";

import { motion } from "framer-motion";
import { SkillCategory } from "@/data/skills";

interface SkillCategoryProps {
  category: SkillCategory;
  index: number;
}

// Core skills to visually emphasize
const CORE_SKILLS = [
  "Python",
  "PyTorch",
  "MLflow",
  "Docker",
  "Kubernetes",
  "FastAPI",
  "Computer Vision"
];

export default function SkillCategoryComponent({ category, index }: SkillCategoryProps) {
  const isCore = (skill: string) => CORE_SKILLS.includes(skill);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 backdrop-blur-sm"
    >
      <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
              isCore(skill)
                ? "bg-blue-900/40 text-blue-200 border-blue-600/50 hover:border-blue-400"
                : "bg-gray-700/30 text-gray-400 border-gray-600/50 hover:border-gray-500"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
