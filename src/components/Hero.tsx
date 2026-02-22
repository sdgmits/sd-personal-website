"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/utils/data";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m{" "}
            <span className="glitch-text">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            {personalInfo.title}
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="neon-button inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-cyan to-accent-purple text-dark-bg rounded-full font-semibold transition-all shadow-lg shadow-neon-cyan/30 hover:shadow-neon-pink/50 z-10"
            >
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="ml-2 relative z-10" size={20} />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center px-6 py-3 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded-full transition-all font-semibold"
            >
              Download Resume
              <Download className="ml-2" size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
