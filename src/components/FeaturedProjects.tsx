"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects, pageContent } from "@/utils/data";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  // Don't render if no projects
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-mono text-sm text-gray-500 mb-4">
            <span className="syntax-keyword">public</span> <span className="syntax-type">List</span>&lt;<span className="syntax-class">Project</span>&gt; <span className="syntax-property">Featured</span> {'{'}
          </div>
          <h2 className="text-4xl font-bold mb-4 relative inline-block section-title gradient-text">
            {pageContent.projects.featured.heading}
          </h2>
          <p className="text-gray-400 mt-6">
            {pageContent.projects.featured.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="neon-card rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2 text-neon-cyan">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-accent-purple/20 text-accent-purple border border-accent-purple/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
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
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="neon-button inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-cyan to-accent-purple text-dark-bg rounded-full font-semibold shadow-md hover:shadow-lg"
          >
            <span>View All Projects</span>
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
        
        <div className="font-mono text-sm text-gray-500 text-center mt-8">
          {'}'}
        </div>
      </div>
    </section>
  );
}
