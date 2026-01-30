"use client";
import { skills } from "@/constants";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";

const categories = [
  { id: "frontend", label: "Frontend", icon: <FiCode className="w-4 h-4" /> },
  { id: "backend", label: "Backend", icon: <FiServer className="w-4 h-4" /> },
  {
    id: "database",
    label: "Database",
    icon: <FiDatabase className="w-4 h-4" />,
  },
  {
    id: "tools",
    label: "Tools & Others",
    icon: <FiTool className="w-4 h-4" />,
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative bg-primary py-16 sm:py-20 md:py-24 lg:py-32"
      id="skills"
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
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Technical Expertise
          </h2>
          <p className="text-text-secondary max-w-2xl">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActive(index)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === index
                  ? "bg-accent text-white"
                  : "bg-secondary text-text-secondary hover:text-text-primary border border-border hover:border-border-hover"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {skills[active].map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors text-center">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
