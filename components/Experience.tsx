"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiLink } from "react-icons/fi";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2024 - Present",
    location: "Remote",
    website: "https://freelane.com",
    description: "Led development of multiple web applications using React, Node.js, and MongoDB. Implemented responsive designs and optimized performance.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Express", "TypeScript"],
    achievements: [
      "Developed and deployed 02+ full-stack applications",
      "Improved application performance by 40%",
      "Implemented responsive designs for all devices",
      "Collaborated with cross-functional teams"
    ]
  },
];

const Experience = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#0A192F]" id="experience">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-400 text-lg">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-[#112240] p-6 sm:p-8 rounded-lg border border-gray-800 hover:border-special/50 transition-all duration-300 hover:shadow-lg hover:shadow-special/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-special/10 text-special group-hover:scale-110 transition-transform duration-300">
                    <FiBriefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <a 
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-special hover:text-blue-400 transition-colors"
                      >
                        <FiLink className="w-4 h-4" />
                        <span className="text-sm">{exp.company}</span>
                      </a>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-gray-400">
                        <FiCalendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <FiMapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{exp.description}</p>

                    <div className="space-y-4">
                      <h4 className="text-special font-medium">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <span className="text-special mt-1">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-sm bg-special/10 text-special border border-special/20 hover:bg-special/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
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