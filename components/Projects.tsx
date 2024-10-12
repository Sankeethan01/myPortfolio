"use client"
import { PROJECTS } from '@/constants'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className='pt-20'
      id='projects'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }} className='mb-12 mt-20 text-center text-4xl font-semibold'>
        Projects
      </motion.h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3' >
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id} className='group relative overflow-hidden rounded-md h-full ring-2 ring-black hover:ring-white hover:ring-1'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image.src}
              alt={project.name} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ background: "radial-gradient(circle at 85.4% 50.8%, rgb(3, 33, 108) 0%, rgb(3, 22, 65) 74.2%)" }}
              className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 ring-2 ring-white'>
              <h3 className='mb-2 text-xl'>{project.name}</h3>
              <p className='mb-3 p-4 ml-5'>{project.description}</p>
              <div className='flex items-center justify-between gap-7'>
              <a href={project.githubLink} target='_blank' rel='noopener noreferrer'
                className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'>
                <div className='flex items-center'>
                  <span>View on   GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
              <a href={project.viewDemo} target='_blank' rel='noopener noreferrer'
                className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'>
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

export default Projects
