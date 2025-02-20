"use client";
import { HERO, SOCIAL_MEDIA_LINKS } from "@/constants";
import React from "react";
import cardimg from "@/assets/hero3.png";
import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center mt-10" id="hero">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mb-10 mt-15"
      >
        <h2 className="my-6 font-semibold text-2xl sm:ml-3 lg:ml-12">
          Hey, I am {HERO.name}
        </h2>
        <p className="p-2 text-5xl tracking-tighter lg:text-6xl md:ml-10 text-left">
          I create{" "}
          <span style={{ color: "#dacfc8" }}>
            {/* <Typewriter
              words={["Stack Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            /> */}Full Stack Applications 
          </span>{" "}
          and{" "} <span style={{ color: "#dacfc8" }}>Innovative Solutions</span>
        </p>
        <p className="mb-5 p-2 text-xl md:ml-10 text-left">{HERO.description}</p>
        <div className="flex items-center justify-start sm:gap-10 gap-6 mb-10 ml-12 ">
          {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.5 }}
              href={link.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        
          <a
            href="/Sankeethan-FullStackDeveloper-Resume.pdf" 
            download="Sankeethan-FullStackDeveloper-Resume.pdf" 
            className="bg-yellow-50 rounded-sm text-black px-4 py-2 text-lg font-semibold hover:bg-slate-300 mb-10 ml-12"
          >
            Download CV
          </a>
        
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={cardimg.src}
            alt="my image"
            width={500}
            height={450}
            
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
