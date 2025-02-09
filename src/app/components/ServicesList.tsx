'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const services = [
  {
    id: 'portraits',
    title: 'Portrait Photography',
    description: 'Capturing personality and emotion in carefully crafted portrait sessions.',
    details: [
      'Individual Portraits',
      'Family Sessions',
      'Professional Headshots',
      'Environmental Portraits',
      'Studio Sessions'
    ],
    pricing: 'Starting from $300',
    duration: '2-3 hours'
  },
  {
    id: 'events',
    title: 'Event Photography',
    description: 'Documenting your special moments with an unobtrusive and artistic approach.',
    details: [
      'Weddings',
      'Corporate Events',
      'Private Celebrations',
      'Live Performances',
      'Social Gatherings'
    ],
    pricing: 'Starting from $800',
    duration: '4-8 hours'
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    description: 'Professional imagery that elevates your brand and tells your story.',
    details: [
      'Product Photography',
      'Brand Campaigns',
      'Architecture & Interiors',
      'Food Photography',
      'Corporate Portfolios'
    ],
    pricing: 'Custom quotes',
    duration: 'Project-based'
  },
  {
    id: 'fine-art',
    title: 'Fine Art Photography',
    description: 'Creating artistic pieces that capture beauty in the extraordinary and mundane.',
    details: [
      'Limited Edition Prints',
      'Conceptual Series',
      'Abstract Photography',
      'Nature & Landscape',
      'Black & White Studies'
    ],
    pricing: 'Prints from $200',
    duration: 'Ongoing projects'
  }
]

const ServicesList = () => {
  const [activeService, setActiveService] = useState(services[0].id)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[300px,1fr] gap-12">
          {/* Service Navigation */}
          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left p-4 transition-all duration-300 rounded-sm
                  ${activeService === service.id 
                    ? 'bg-white/5 text-white' 
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <span className="block text-lg font-light">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="lg:pl-12 lg:border-l border-neutral-800">
            {services.map((service) => (
              <div
                key={service.id}
                className={`transition-all duration-300 
                  ${service.id === activeService 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 hidden'
                  }`}
              >
                <h3 className="text-3xl font-light mb-6">{service.title}</h3>
                <p className="text-neutral-400 text-lg mb-8">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 stagger-children">
                  {services.map((service, index) => (
                    <div
                      key={service.title}
                      className="relative p-8 border border-neutral-800 spotlight group"
                    >
                      <h3 className="text-2xl font-light mb-4 text-gradient">
                        {service.title}
                      </h3>
                      <p className="text-neutral-400 text-lg mb-6">{service.description}</p>
                      <div className="grid sm:grid-cols-2 gap-12">
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Includes</h4>
                          <ul className="space-y-3 text-sm text-neutral-300 mb-12">
                            {service.details.map((detail, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">Investment</h4>
                            <p className="text-xl font-light">{service.pricing}</p>
                          </div>
                          <div>
                            <h4 className="text-sm uppercase tracking-wider text-neutral-500 mb-2">Duration</h4>
                            <p className="text-xl font-light">{service.duration}</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4">
                        <Link
                          href="/contact"
                          className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors magnetic-button"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesList
