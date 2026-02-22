"use client";

import { motion } from "framer-motion";
import { projects, pageContent } from "@/utils/data";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  
  // Handle empty projects
  if (projects.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{pageContent.projects.title}</h1>
          <p className="text-lg text-gray-400 mb-12">
            {pageContent.projects.emptyMessage}
          </p>
        </motion.div>
      </div>
    );
  }
  
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="font-mono text-sm text-gray-500 mb-3">
          <span className="syntax-keyword">class</span> <span className="syntax-class">Projects</span> <span className="syntax-operator">:</span> <span className="syntax-type">IPortfolio</span> {'{'}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{pageContent.projects.title}</h1>
        <p className="text-lg text-gray-400 mb-12">
          {pageContent.projects.subtitle}
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full transition-all font-medium ${
                filter === category
                  ? "bg-gradient-to-r from-neon-cyan to-accent-purple text-dark-bg shadow-md"
                  : "bg-dark-surface text-gray-300 hover:text-neon-cyan border border-neon-cyan/20 hover:border-neon-cyan/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="neon-card rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-neon-cyan">{project.title}</h3>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-cyan transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 mb-4">
                {project.longDescription || project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-accent-purple/20 text-accent-purple border border-accent-purple/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
