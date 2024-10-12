"use client"
import { PROJECTS } from '@/constants'
import React, { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'

const Projects = () => {
  const [clickedProject, setClickedProject] = useState<number | null>(null); // State to track clicked project on mobile

  const handleProjectClick = (id: number) => {
    if (window.innerWidth < 768) // Trigger overlay on click only for mobile
      setClickedProject(clickedProject === id ? null : id); // Toggle overlay
    }
  

  return (
    <section className='pt-20' id='projects'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }} className='mb-12 mt-20 text-center text-4xl font-semibold'>
        Projects
      </motion.h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className='group relative overflow-hidden rounded-md h-full ring-2 ring-black hover:ring-white hover:ring-1'
            onClick={() => handleProjectClick(project.id)} // Handle click event
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image.src}
              alt={project.name}
              className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              animate={{ opacity: clickedProject === project.id ? 1 : 0 }} // Animate overlay for mobile
              transition={{ duration: 0.5 }}
              style={{ background: "radial-gradient(circle at 85.4% 50.8%, rgb(3, 33, 108) 0%, rgb(3, 22, 65) 74.2%)" }}
              className='absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-500 group-hover:opacity-100 ring-2 ring-white'
            >
              <h3 className='mb-2 text-base md:text-lg lg:text-xl'>{project.name}</h3>
              <p className='mb-3 p-2 md:p-4 ml-2 md:ml-5 text-sm md:text-base'>
                {project.description}
              </p>
              <div className='flex items-center justify-between gap-4 md:gap-7'>
                <a href={project.githubLink} target='_blank' rel='noopener noreferrer'
                  className='rounded-full bg-white px-3 py-2 text-xs md:text-sm lg:text-base text-black hover:bg-gray-300'>
                  <div className='flex items-center'>
                    <span>View on GitHub</span>
                    <MdArrowOutward />
                  </div>
                </a>
                <a href={project.viewDemo} target='_blank' rel='noopener noreferrer'
                  className='rounded-full bg-white px-3 py-2 text-xs md:text-sm lg:text-base text-black hover:bg-gray-300'>
                  <div className='flex items-center'>
                    <span>View Project</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
