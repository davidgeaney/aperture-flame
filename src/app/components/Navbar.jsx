"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/journal', label: 'Journal' },
  ];

  return (
    <nav className='fixed w-full h-24 glass-effect z-50'>
      <div className='flex justify-between items-center h-full w-full px-6 2xl:px-16'>
        {/* Logo */}
        <Link href="/" className="spotlight">
          <Logo />
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className='hidden sm:flex space-x-12 text-sm uppercase tracking-[0.2em] stagger-children'>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className='hover-line hover:text-neutral-400 transition-colors'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Link */}
        <Link href="/contact" className="hidden sm:block text-sm uppercase tracking-[0.2em] magnetic-button">
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-black/95 backdrop-blur-sm sm:hidden">
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.2em] hover:text-neutral-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm uppercase tracking-[0.2em] magnetic-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;