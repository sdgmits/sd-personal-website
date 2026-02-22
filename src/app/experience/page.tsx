"use client";

import { motion } from "framer-motion";
import { experiences, pageContent } from "@/utils/data";
import { ExternalLink } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="font-mono text-sm text-gray-500 mb-3">
          <span className="syntax-keyword">public</span> <span className="syntax-keyword">interface</span> <span className="syntax-class">IExperience</span> {'{'}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{pageContent.experience.title}</h1>
        <p className="text-lg text-gray-400 mb-12">
          {pageContent.experience.subtitle}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-cyan/40 via-accent-purple/30 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                  <div className="neon-card rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-neon-cyan">{experience.role}</h3>
                      {experience.companyUrl && (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neon-cyan hover:text-accent-pink transition-colors"
                          aria-label={`Visit ${experience.company} website`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <p className="text-lg text-accent-purple mb-1">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      {experience.startDate} - {experience.endDate} • {experience.location}
                    </p>
                    <p className="text-gray-300 mb-4">
                      {experience.description}
                    </p>
                    
                    <h4 className="font-semibold mb-2 text-neon-cyan">Key Achievements:</h4>
                    <ul className="space-y-2 mb-4">
                      {experience.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-gray-400 flex items-start"
                        >
                          <span className="text-neon-cyan mr-2">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-accent-purple/20 text-accent-purple border border-accent-purple/30 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neon-cyan rounded-full border-2 border-dark-bg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
