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
            <span className="text-primary-600 dark:text-primary-400">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {personalInfo.title}
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10 rounded-lg transition-colors"
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
