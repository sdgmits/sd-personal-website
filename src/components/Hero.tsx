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
          transition={{ duration: 0.4 }}
        >
          {/* Code-style greeting */}
          <div className="mb-6 font-mono text-sm md:text-base text-gray-400">
            <span className="syntax-keyword">using</span>{" "}
            <span className="syntax-type">Microsoft.Dynamics365</span>
            <span className="syntax-operator">;</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <div className="text-gray-400 font-mono text-xl md:text-2xl mb-3">
              <span className="syntax-keyword">var</span>{" "}
              <span className="syntax-variable">architect</span>{" "}
              <span className="syntax-operator">=</span>{" "}
              <span className="syntax-keyword">new</span>
            </div>
            <span className="glitch-text">
              {personalInfo.name}
            </span>
            <span className="syntax-operator font-mono text-3xl md:text-4xl">( )</span>
            <span className="syntax-operator font-mono text-2xl md:text-3xl">;</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-mono">
            <span className="syntax-comment">{'//'}</span> {personalInfo.title}
          </p>
          
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="neon-button inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-cyan to-accent-purple text-dark-bg rounded-full font-semibold shadow-md hover:shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center px-6 py-3 border-2 border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/5 rounded-full transition-all font-semibold"
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
