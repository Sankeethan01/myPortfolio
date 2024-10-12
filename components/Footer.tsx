"use client"
import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '@/constants'
import {motion} from 'framer-motion';

const Footer = () => {
    return (
        <div className='mb-8 mt-20'>
            <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-center text-lg'>Sankeethan Tharmathayalan</h1>
                    <h3 style={{fontFamily:"cursive"}} className='text-center mb-3'>077 8337 669</h3>
            </div>
            <div className='flex items-center justify-center gap-8'>
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
            <p className='mt-8 text-center text-sm tracking-wide text-gray-400 '>
                &copy;sankee. All rights reserved.
            </p>
        </div>
    )
}

export default Footer
