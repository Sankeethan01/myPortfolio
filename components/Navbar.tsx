"use client"
import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '@/constants';
import { FiX, FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-primary/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
            }`}
        >
            <div className='max-w-6xl mx-auto px-6'>
                <div className='flex items-center justify-between h-16 md:h-20'>
                    {/* Logo */}
                    <a href="#hero" className='text-xl font-bold text-text-primary hover:text-accent transition-colors'>
                        Sankee<span className="text-accent">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className='hidden md:flex items-center gap-1'>
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.href} 
                                    className='px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-tertiary'
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button - Desktop */}
                    <a 
                        href="#contact" 
                        className='hidden md:flex items-center px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-all duration-300'
                        onClick={(e) => handleLinkClick(e, '#contact')}
                    >
                        Contact Me
                    </a>

                    {/* Mobile Menu Button */}
                    <button 
                        className='md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors'
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <FiX className='w-6 h-6' />
                        ) : (
                            <FiMenu className='w-6 h-6' />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='md:hidden bg-secondary border-t border-border'
                    >
                        <ul className='px-6 py-4 space-y-1'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href}
                                        className='block px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-tertiary rounded-lg transition-colors'
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <li className='pt-2'>
                                <a 
                                    href="#contact" 
                                    className='block px-4 py-3 bg-accent hover:bg-accent-hover text-white text-center font-medium rounded-lg transition-all duration-300'
                                    onClick={(e) => handleLinkClick(e, '#contact')}
                                >
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
