"use client";
import { PROJECTS } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  githubLink: string;
  viewDemo: string;
  tech: string[];
}

const Projects = () => {
  return (
    <section
      className="relative bg-secondary py-16 sm:py-20 md:py-24 lg:py-32"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary max-w-2xl">
            A selection of projects that showcase my skills and passion for
            building great products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(PROJECTS as Project[]).map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-tertiary rounded-xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image.src}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-1">
                  {project.name}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech
                    .slice(0, 3)
                    .map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 text-xs font-medium text-text-secondary bg-secondary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 text-xs font-medium text-text-muted bg-secondary rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-secondary hover:bg-border rounded-lg transition-all duration-300"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.viewDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent hover:bg-accent-hover text-white rounded-lg transition-all duration-300"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
