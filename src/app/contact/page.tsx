"use client";

import dynamic from "next/dynamic";
import ContactItem from "@/components/contact-item";
import { CONTACT_INFO } from "@/lib/constants";

const StarsCanvas = dynamic(() => import("@/components/canvas/stars"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <StarsCanvas />
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Get in touch</p>
            <h1 className="text-5xl font-bold text-white mb-4">Contact</h1>
            <p className="text-xl text-gray-400">
              Let's connect and discuss opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
            <a
              href="/cv.pdf"
              download
              className="bg-tertiary/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all p-8 block text-center backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Resume</h3>
              <p className="text-xl text-white hover:text-blue-400 transition-colors">
                Download CV ↓
              </p>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              Open to full-time opportunities and consulting projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
