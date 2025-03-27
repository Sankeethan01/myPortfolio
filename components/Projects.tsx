"use client"
import { PROJECTS } from '@/constants'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  githubLink: string;
  viewDemo: string;
  tech: string[];
}

const Projects = () => {
  return (
    <section className='relative min-h-screen bg-[#0A192F] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20' id='projects'>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-7xl mx-auto'>
          {(PROJECTS as Project[]).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className='group bg-[#112240] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-blue-500/50 flex flex-col'
            >
              {/* Image Container */}
              <div className='relative aspect-[16/9] overflow-hidden'>
                <motion.img
                  src={project.image.src}
                  alt={project.name}
                  className='w-full h-full object-cover'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className='p-6 sm:p-8 space-y-4 flex-1 flex flex-col'>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className='text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
                >
                  {project.name}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className='text-sm sm:text-base text-gray-300 flex-grow'
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className='pt-2'
                >
                  <h4 className='text-xs sm:text-sm font-medium text-gray-400 mb-3'>Technologies Used</h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className='px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4'
                >
                  <motion.a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 group'
                  >
                    <FiGithub className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                    View on GitHub
                    <MdArrowOutward className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                  <motion.a
                    href={project.viewDemo}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 group'
                  >
                    <FiExternalLink className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                    View Project
                    <MdArrowOutward className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
