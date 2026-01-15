"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-lg mb-4">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Alex Reinoso Perez
          </h1>
          <p className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
            Machine Learning Engineer
          </p>
          <p className="text-xl text-gray-400 mb-4">
            focused on MLOps & Deep Learning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            I build end-to-end machine learning systems, with a strong focus on MLOps, 
            deep learning, and production-ready AI pipelines. My work emphasizes 
            reproducibility, scalability, and practical impact in real-world environments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="cursor-pointer"
          onClick={scrollToProjects}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-600 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-blue-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
