"use client";

import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export default function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-800/50 rounded-lg border border-gray-700 p-8"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{experience.role}</h3>
        <div className="flex flex-wrap items-center gap-4 text-gray-400">
          <span className="text-lg font-semibold text-blue-400">{experience.company}</span>
          <span>•</span>
          <span>{experience.period}</span>
        </div>
      </div>

      <p className="text-gray-300 mb-6">{experience.description}</p>

      {experience.awards && experience.awards.length > 0 && (
        <div className="mb-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">Awards & Recognition</h4>
          <ul className="space-y-1">
            {experience.awards.map((award, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-start">
                <span className="text-blue-400 mr-2">🏆</span>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Achievements</h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="text-gray-300 text-sm flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies & Tools</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
