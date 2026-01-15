"use client";

import { motion } from "framer-motion";
import ContactItem from "./contact-item";
import { CONTACT_INFO } from "@/lib/constants";
import { textVariant, staggerContainer, slideIn } from "@/lib/motion";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={textVariant()} className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Get in touch</p>
          <h2 className="text-5xl font-bold text-white mb-4">Contact</h2>
          <p className="text-xl text-gray-400">
            Let's connect and discuss opportunities
          </p>
        </motion.div>
        
        <motion.div 
          variants={slideIn("up", "tween", 0.2, 1)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <ContactItem
            label="Email"
            value={CONTACT_INFO.email}
            href={`mailto:${CONTACT_INFO.email}`}
            index={0}
          />
          <ContactItem
            label="LinkedIn"
            value="View Profile"
            href={CONTACT_INFO.linkedin}
            index={1}
          />
          <ContactItem
            label="GitHub"
            value="View Repositories"
            href={CONTACT_INFO.github}
            index={2}
          />
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all p-8 block text-center"
          >
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Resume</h3>
            <p className="text-xl text-white hover:text-blue-400 transition-colors">
              Download CV ↓
            </p>
          </motion.a>
        </motion.div>

        <motion.div 
          variants={textVariant(0.5)}
          className="text-center"
        >
          <p className="text-gray-400">
            Open to full-time opportunities and consulting projects
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
