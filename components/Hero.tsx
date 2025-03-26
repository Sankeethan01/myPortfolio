"use client";
import { HERO, SOCIAL_MEDIA_LINKS } from "@/constants";
import React from "react";
import cardimg from "@/assets/hero3.png";
import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20" id="hero">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Hey, I am {HERO.name}
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            I create{" "}
            <span className="text-[#dacfc8]">
              Full Stack Applications
            </span>{" "}
            and{" "}
            <span className="text-[#dacfc8]">
              Innovative Solutions
            </span>
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            {HERO.description}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-6 mb-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.5 }}
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="/Sankeethan-FullStackDeveloper-Resume.pdf"
            download="Sankeethan-FullStackDeveloper-Resume.pdf"
            className="inline-block bg-yellow-50 text-black px-6 py-3 text-lg font-semibold rounded-sm hover:bg-slate-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={cardimg.src}
            alt="my image"
            className="w-full max-w-[500px] h-auto object-contain"
            width={500}
            height={450}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;