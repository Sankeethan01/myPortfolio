"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Led development of multiple web applications using modern technologies. Implemented responsive designs and optimized performance for better user experiences.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    achievements: [
      "Developed and deployed 3+ full-stack applications",
      "Improved application performance by 40%",
      "Implemented responsive designs for all devices",
      "Collaborated with clients to deliver custom solutions",
    ],
  },
];

const Experience = () => {
  return (
    <section
      className="relative bg-secondary py-16 sm:py-20 md:py-24 lg:py-32"
      id="experience"
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
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Work Experience
          </h2>
          <p className="text-text-secondary max-w-2xl">
            My professional journey and the projects I&apos;ve worked on.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 bg-tertiary rounded-2xl border border-border hover:border-accent/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm">
                      <div className="flex items-center gap-2">
                        <FiBriefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
