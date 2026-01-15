"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import ExperienceItem from "./experience-item";
import { textVariant, staggerContainer } from "@/lib/motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={textVariant()} className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">What I have done</p>
          <h2 className="text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-400">
            Professional experience in machine learning and data science
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
