"use client"
import { skills } from '@/constants';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    }
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

const title = ["Frontend", "Backend", "Database", "Custom"];

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <div className='container mx-auto lg:max-w-3xl' id='skills'>
      <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>Skills</h2>

      {/* Navigation for skill categories */}
      <div className='flex items-center justify-around mb-5 gap-1 py-3'>
        {
          title.map((item, index) => (
            <h3 key={index}
              className={`md:text-2xl cursor-pointer ${active == index ? "border-b-2" : ""}`}
              onClick={() => setActive(index)}
            >
              {item}
            </h3>
          ))
        }
      </div>

      {/* Ensure re-rendering by using the active index as a key */}
      <motion.div
        key={active} 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className='mx-3 grid grid-cols-3 gap-4 max-w-5xl rounded-3xl px-4 py-3 lg:px-20 border border-stone-50/30'
      >
        {skills[active].map((tech) => (
          <motion.div
            variants={itemVariants}
            key={tech.id}
            className={`py-6 flex gap-4 items-center justify-center border-b border-stone-50/30`}
          >
            <div className='flex flex-col items-center justify-center gap-4'>
              {tech.icon}
              <h3 className='px-6 text-lg lg:text-xl'>{tech.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills;
