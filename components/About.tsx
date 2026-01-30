"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiServer, FiArrowRight } from "react-icons/fi";

const services = [
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Building responsive, performant web applications with modern frameworks and best practices.",
  },
  {
    icon: <FiSmartphone className="w-6 h-6" />,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications that deliver native-like experiences.",
  },
  {
    icon: <FiServer className="w-6 h-6" />,
    title: "Backend Development",
    description:
      "Designing scalable APIs and robust server-side solutions for complex applications.",
  },
];

const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "95%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section
      className="relative bg-primary py-16 sm:py-20 md:py-24 lg:py-32"
      id="about"
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
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 sm:mb-6">
            Passionate about creating
            <br />
            <span className="text-text-secondary">digital experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              I&apos;m an enthusiastic Full Stack Developer with a strong
              foundation in modern technologies like React, Node.js, and Python.
              My journey began with a fascination for technology, leading me to
              create seamless web applications that enhance user experiences.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Collaboration drives my work ethic. I thrive in dynamic
              environments, exchanging ideas with fellow developers and
              designers to craft innovative solutions. My focus on clean,
              efficient code ensures that projects remain maintainable and
              scalable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-text-muted mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-4 sm:p-6 bg-secondary rounded-xl border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-accent/10 text-accent rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <FiArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
