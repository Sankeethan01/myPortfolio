"use client"
import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '@/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        href: string
    ) => {
        e.preventDefault();
        const targetId = href.startsWith('#') ? href.substring(1) : href;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMobileMenuOpen(false);
    };


    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50 px-4'>
                <div className='mx-auto hidden max-w-2xl items-center 
                justify-center rounded-lg border border-stone-50/30 bg-black/20
                py-3 backdrop-blur-lg lg:flex xl:max-w-3xl 2xl:max-w-4xl overflow-hidden'>
                    <div className='flex items-center justify-between'>
                        <div className=''>
                            <ul className='flex items-center gap-4 xl:gap-6 2xl:gap-8 justify-center'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className={`text-xl xl:text-2xl 2xl:text-3xl hover:text-special transition-colors touch-manipulation`}
                                            onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className='rounded-lg lg:hidden overflow-hidden'>
                    <div className='flex items-center justify-end'>
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden p-3 sm:p-4 touch-manipulation'
                                onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='m-2 h-6 w-6 sm:h-7 sm:w-7 backdrop-blur-lg' />
                                ) : (
                                    <FaBars className='m-2 h-6 w-6 sm:h-7 sm:w-7 backdrop-blur-lg' />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className='mt-4 flex flex-col gap-4 backdrop-blur-xl p-5 rounded-lg text-xl sm:text-2xl'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}
                                        className='block w-full text-lg sm:text-xl py-2 touch-manipulation'
                                        onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
