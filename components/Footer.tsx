"use client";
import React from "react";

import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="text-xl font-bold text-text-primary hover:text-accent transition-colors"
            >
              Sankee<span className="text-accent">.</span>
            </a>
            <p className="text-text-muted text-xs sm:text-sm mt-2">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sankeethan01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-text-muted hover:text-text-primary hover:bg-secondary rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sankee26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-text-muted hover:text-text-primary hover:bg-secondary rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sankeethantharmathayalan@gmail.com"
              className="p-2.5 text-text-muted hover:text-text-primary hover:bg-secondary rounded-lg transition-all duration-300"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-text-muted text-sm flex items-center justify-center gap-1">
            © {currentYear} Sankeethan. Built with
            <FiHeart className="w-4 h-4 text-red-500" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
