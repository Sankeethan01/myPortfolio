"use client"
import { skills } from '@/constants';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const categories = [
  { id: "frontend", label: "Frontend", icon: <FiCode className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", icon: <FiServer className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
  { id: "database", label: "Database", icon: <FiDatabase className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
  { id: "custom", label: "Custom", icon: <FiTool className="w-5 h-5" />, color: "from-green-500 to-emerald-500" }
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className='relative min-h-screen bg-[#0A192F] text-white px-3 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20' id='skills'>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='relative max-w-5xl mx-auto'
      >
        {/* Section Header */}
        <motion.div 
          className='text-center mb-6 sm:mb-12 md:mb-16'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Technical Skills
          </h2>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-3 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className='text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-3 sm:px-4'>
            A showcase of my technical expertise and the tools I use to build amazing web applications
          </p>
        </motion.div>

        {/* Category Navigation */}
        <nav className='mb-6 sm:mb-12 md:mb-16 overflow-x-auto pb-2 sm:pb-0 -mx-3 sm:mx-0 px-3 sm:px-0'>
          <div className='flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-3 md:gap-4 min-w-max sm:min-w-0'>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(index)}
                className={`px-3 sm:px-6 py-1.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap
                  ${active === index 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25` 
                    : 'bg-[#112240] text-gray-400 hover:text-white hover:bg-[#1a2f52]'}`}
              >
                <span className={`${active === index ? 'text-white' : 'text-gray-400'}`}>
                  {category.icon}
                </span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Skills Grid */}
        <motion.div
          key={active}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8'
        >
          {skills[active].map((tech, index) => (
            <motion.div
              key={tech.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className={`relative group p-3 sm:p-6 md:p-8 rounded-xl bg-[#112240] border border-gray-800 
                hover:border-blue-500/50 transition-all duration-300
                ${hoveredSkill === index ? 'shadow-lg shadow-blue-500/10' : ''}`}
            >
              <div className='flex flex-col items-center justify-center gap-2 sm:gap-4 relative z-10'>
                <motion.div
                  animate={{
                    scale: hoveredSkill === index ? 1.1 : 1,
                    rotate: hoveredSkill === index ? 5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'
                >
                  {tech.icon}
                </motion.div>
                <p className='text-[10px] sm:text-sm md:text-base font-medium text-center text-gray-300 group-hover:text-white transition-colors'>
                  {tech.name}
                </p>
              </div>

              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${categories[active].color} opacity-0 
                group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills;
