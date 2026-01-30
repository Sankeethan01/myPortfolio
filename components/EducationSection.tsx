"use client";
import { EDUCATION } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

const EducationSection = () => {
  return (
    <section
      className="relative bg-primary py-16 sm:py-20 md:py-24 lg:py-32"
      id="education"
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
            Education
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Academic Background
          </h2>
          <p className="text-text-secondary max-w-2xl">
            My educational journey and academic achievements.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-6">
          {Array.isArray(EDUCATION) &&
            EDUCATION.map((edu, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="group p-6 bg-secondary rounded-xl border border-border hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex gap-5">
                  {/* Logo */}
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-tertiary flex-shrink-0 flex items-center justify-center">
                    {edu.img}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-accent text-sm font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                      <FiCalendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <p className="text-text-secondary text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
