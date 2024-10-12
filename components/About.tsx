"use client"
import { BIO } from '@/constants'
import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className='flex max-w-4xl flex-col gap-12' id='about'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='mb-12 mt-20 text-center text-4xl font-semibold'>
                About Me
            </motion.h2>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8,delay:0.2}}>
                {BIO.map((bio, index) => (
                    <motion.p
                    initial={{opacity:0,x:-20}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.8,delay:index*0.5}}
                    key={index} className='mb-4 text-lg lg:text-xl'>
                        {bio}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    )
}

export default About
