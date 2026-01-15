"use client";

import { motion } from "framer-motion";

export default function WhatIDo() {
  const areas = [
    {
      title: "End-to-End ML Systems",
      description: "Design and implement complete machine learning solutions from data collection to production deployment."
    },
    {
      title: "MLOps & Infrastructure",
      description: "Build scalable ML pipelines with automated training, deployment, and monitoring systems."
    },
    {
      title: "Deep Learning",
      description: "Develop state-of-the-art deep learning models for computer vision, NLP, and other AI domains."
    },
    {
      title: "Production Focus",
      description: "Deliver robust, maintainable ML systems that scale and perform in real-world environments."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What I Do</h2>
          <p className="text-xl text-gray-400">Expertise in building production-ready ML solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
              <p className="text-gray-300">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
