"use client";

import { motion } from "framer-motion";
import { personalInfo, skills, certifications, pageContent } from "@/utils/data";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{pageContent.about.title}</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{pageContent.about.background.heading}</h2>
            {pageContent.about.background.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {paragraph}
              </p>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors mt-4"
            >
              Download Resume
              <Download className="ml-2" size={20} />
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{pageContent.about.whatIDo.heading}</h2>
            <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400">
              {pageContent.about.whatIDo.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">{pageContent.about.skillsHeading}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-surface rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                  {skillCategory.category}
                </h3>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">{pageContent.about.certificationsHeading}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-bg rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-dark-border"
              >
                <div className="flex flex-col items-center text-center">
                  {cert.logo && (
                    <div className="mb-4 w-24 h-24 relative">
                      <Image
                        src={cert.logo}
                        alt={`${cert.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {cert.date}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    >
                      View Credential
                      <ExternalLink className="ml-1" size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
