import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div className="absolute top-20 left-[20%] w-48 h-72 bg-neutral-900/50 rounded-lg transform -rotate-6"></div>
        <div className="absolute top-40 left-[35%] w-64 h-48 bg-neutral-800/50 rounded-lg transform rotate-3"></div>
        <div className="absolute top-60 right-[25%] w-56 h-64 bg-neutral-900/50 rounded-lg transform -rotate-3"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-left pt-20">
          <div className="mb-8">
            <p className="text-neutral-400 uppercase tracking-[0.3em] mb-4">Photography Portfolio</p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-light mb-6 leading-[1.1] animate-fadeIn">
              <span className="text-stroke opacity-90">Capturing Life</span>
              <span className="inline-block ml-4">Through The Lens</span>
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start gap-8 mb-16">
            <p className="text-lg text-neutral-400 max-w-md">
              Specializing in portrait, event, and fine art photography. 
              Creating timeless images that tell your unique story.
            </p>
            <Link href="/work" className="group">
              <button className="border border-white px-8 py-3 rounded-none flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-400">
                View Gallery
                <span className="group-hover:translate-x-1 transition-transform duration-400">→</span>
              </button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-neutral-800 pt-8">
            <div>
              <p className="text-4xl font-light">5+</p>
              <p className="text-sm text-neutral-400 mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-light">120+</p>
              <p className="text-sm text-neutral-400 mt-1">Photo Sessions</p>
            </div>
            <div>
              <p className="text-4xl font-light">40+</p>
              <p className="text-sm text-neutral-400 mt-1">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-light">10+</p>
              <p className="text-sm text-neutral-400 mt-1">Awards Received</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero