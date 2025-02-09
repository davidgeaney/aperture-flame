'use client'

import React from 'react'
import Image from 'next/image'

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Photos Delivered', value: '10k+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Awards Won', value: '15+' }
]

const AboutContent = () => {
  return (
    <section className="pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-light mb-6">About Me</h1>
          <p className="text-neutral-400 text-lg">
            Through the lens, I capture moments that tell stories and evoke emotions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1fr,400px] gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-4">The Story Behind the Lens</h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                My journey in photography began over a decade ago with a simple desire to capture 
                the beauty in everyday moments. What started as a passion has evolved into a lifelong 
                pursuit of visual storytelling.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                I specialize in portrait, event, and fine art photography, bringing a unique blend of 
                technical expertise and artistic vision to every project. My approach is rooted in 
                authenticity, seeking to capture genuine emotions and unscripted moments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-4">My Approach</h2>
              <p className="text-neutral-400 leading-relaxed">
                Every photography session is an opportunity to create something unique. I believe in 
                building a connection with my clients, understanding their vision, and translating 
                that into compelling visual narratives. Whether it is a wedding, a portrait session, 
                or a commercial project, my goal is to exceed expectations and deliver images that 
                will be treasured for generations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-t border-b border-neutral-800">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-light mb-2">{stat.value}</p>
                  <p className="text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative aspect-[3/4] bg-neutral-900">
            <Image src="/photographer.jpg" width={1000} height={1333} alt='Photographer' />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
