import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='fixed w-full h-24 glass-effect z-50'>
      <div className='flex justify-between items-center h-full w-full px-6 2xl:px-16'>
        {/* Logo */}
        <Link href="/" className="spotlight">
          <Logo />
        </Link>
        
        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className='hidden sm:flex space-x-12 text-sm uppercase tracking-[0.2em] stagger-children'>
            <li>
              <Link href="/work" className='hover-line hover:text-neutral-400 transition-colors'>
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className='hover-line hover:text-neutral-400 transition-colors'>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className='hover-line hover:text-neutral-400 transition-colors'>
                Services
              </Link>
            </li>
            <li>
              <Link href="/journal" className='hover-line hover:text-neutral-400 transition-colors'>
                Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Link */}
        <Link href="/contact" className="text-sm uppercase tracking-[0.2em] magnetic-button">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar