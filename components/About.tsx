"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { FiMonitor } from 'react-icons/fi'
import { FaMobileAlt, FaServer } from 'react-icons/fa'

const services = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: "Website Development",
    description: "Creating responsive and modern web applications",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaMobileAlt className="w-7 h-7" />,
    title: "App Development",
    description: "Building cross-platform mobile solutions",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FaServer className="w-7 h-7" />,
    title: "Website Hosting",
    description: "Reliable and secure hosting services",
    color: "from-orange-500 to-red-500"
  },
];

const stats = [
  {
    number: "03",
    suffix: "+",
    text: "Completed Projects",
    icon: "🎯"
  },
  {
    number: "95",
    suffix: "%",
    text: "Client satisfaction",
    icon: "⭐"
  },
  {
    number: "01",
    suffix: "+",
    text: "Years of experience",
    icon: "💫"
  }
];

const About = () => {
  return (
    <section className='relative min-h-screen bg-[#0A192F] text-white px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20' id='about'>
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#112240] to-[#0A192F] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-start'>
          {/* Services Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex gap-4 items-start pl-16 group"
                >
                  <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                    <div className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${service.color} shadow-lg shadow-blue-500/50`} />
                    <div className={`absolute w-3 h-3 rounded-full bg-gradient-to-br ${service.color} animate-ping opacity-75`} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-4 items-center">
                      <div className={`p-3 rounded-lg bg-[#112240] group-hover:bg-gradient-to-br ${service.color} group-hover:bg-opacity-10 transition-all duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 pl-[52px] group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              className="p-6 rounded-xl bg-[#112240] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I am an enthusiastic Full Stack Developer with a strong foundation in modern technologies like React, Node.js, and PHP. My journey began with a fascination for technology, and I thrive in dynamic environments, collaborating with fellow developers to craft innovative solutions. With a focus on clean, efficient code and continuous learning, I explore new technologies to push the boundaries of software development.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-[#112240] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                      <span className="text-white">{stat.suffix}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
