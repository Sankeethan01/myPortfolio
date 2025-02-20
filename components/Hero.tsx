"use client"
import { HERO, SOCIAL_MEDIA_LINKS } from '@/constants'
import React from 'react'
import cardimg from '@/assets/hero2.png'
import {motion} from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
  return (
    <section className='flex min-h-screen flex-wrap items-center' id='hero'>
      <motion.div
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:1}}
      className='w-full md:w-1/2 text-center'>
      <h2 className='my-6 p-2 text-4xl font-semibold md:text-5xl lg:text-4xl md:ml-10'>
        {HERO.name}
        </h2>
        <p className='p-2 text-3xl tracking-tighter lg:text-5xl md:ml-10'>
        Full{' '}
        <span style={{ color: '#dacfc8' }}> 
            <Typewriter
              words={['Stack Developer']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <p className='mb-5 p-2 text-xl md:ml-10'>
            {HERO.description}
        </p>
        <div className='flex items-center justify-center gap-10 mb-10'>
                {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                    <motion.a
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.2,delay:index*0.5}}
                    href={link.href} key={index} target='_blank'
                    rel='noopener noreferrer'>
                        {link.icon}
                    </motion.a>
                ))}
            </div>
        </motion.div>
        <motion.div
          initial={{opacity:0,scale:.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1}}
        className='w-full md:w-1/2 lg:p-8'>
         <div className='flex justify-center'>
            <motion.img
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            src={cardimg.src} alt='my image'
            width={450} height={450} className='rounded-full' />
         </div>
        </motion.div>
    </section>
  )
}

export default Hero
