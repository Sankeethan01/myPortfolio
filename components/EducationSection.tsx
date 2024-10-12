"use client";
import { EDUCATION } from '@/constants';
import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
    return (
        <motion.section className='py-8 max-w-5xl' id='education'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='mb-12 mt-20 text-center text-4xl font-semibold'>
                Education
            </motion.h2>
            {Array.isArray(EDUCATION) && EDUCATION.map((edu, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.5 }}
                    key={index}
                    className='mb-6 p-4 flex flex-col md:flex-row items-center justify-between gap-3'>

                    <div className='flex-shrink-0'>
                        {edu.img}
                    </div>
                    <div className='flex flex-col ml-5 justify-center md:ml-2 w-full md:w-3/4'>
                        <h3 className='text-xl font-semibold'>{edu.degree}</h3>
                        <p className='text-lg'>{edu.institution}</p>
                        <p className='text-sm text-stone-300'>{edu.duration}</p>
                        <p className='mt-2'>{edu.description}</p>
                    </div>
                </motion.div>

            ))}
        </motion.section>
    );
}

export default EducationSection;
