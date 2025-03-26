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
            <nav className='fixed left-0 right-0 top-4 z-50'>
                <div className='mx-auto hidden max-w-2xl items-center 
                justify-center rounded-lg border border-stone-50/30 bg-black/20
                py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-between'>
                        <div className=''>
                            <ul className='flex items-center gap-4 justify-center'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className={`text-xl hover:text-special`}
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
                <div className='rounded-lg  lg:hidden'>
                    <div className='flex items-center justify-between'>
                        <div></div>
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden p-2'
                                onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='m-2 h-6 w-5 backdrop-blur-lg' />
                                ) : (
                                    <FaBars className='m-2 h-6 w-5 backdrop-blur-lg' />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className='ml-4 mr-4 mt-4 flex flex-col gap-4 backdrop-blur-xl p-5 rounded-lg text-xl'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}
                                        className='block w-full text-lg'
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
