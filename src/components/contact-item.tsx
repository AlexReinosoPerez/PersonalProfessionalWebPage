"use client";

import { motion } from "framer-motion";

interface ContactItemProps {
  label: string;
  value: string;
  href: string;
  index: number;
}

export default function ContactItem({ label, value, href, index }: ContactItemProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all p-8 block"
    >
      <h3 className="text-lg font-semibold text-gray-400 mb-2">{label}</h3>
      <p className="text-xl text-white hover:text-blue-400 transition-colors">{value}</p>
    </motion.a>
  );
}
