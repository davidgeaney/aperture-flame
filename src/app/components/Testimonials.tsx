'use client'

import React, { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Client',
    content: 'Working with this photographer was an absolute dream. They captured our wedding day perfectly, catching all those special moments we might have missed. The photos are beyond beautiful.',
    image: '/testimonials/sarah.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Commercial Client',
    content: 'Professional, creative, and detail-oriented. The product photography exceeded our expectations and helped elevate our brand identity. Highly recommended for any commercial work.',
    image: '/testimonials/michael.jpg'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Portrait Session',
    content: 'I was nervous about my portrait session, but they made me feel so comfortable and confident. The results are stunning - I have never felt more beautiful in photos.',
    image: '/testimonials/emma.jpg'
  }
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light mb-6">Client Words</h2>
          <p className="text-neutral-400">
            Read what my clients have to say about their experience and results.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <blockquote className="text-center">
                    <p className="text-lg text-neutral-300 mb-8">
                      "{testimonial.content}"
                    </p>
                    <footer>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-800 relative">
                        {/* Replace with actual images when available */}
                        <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-500">
                          Photo
                        </div>
                      </div>
                      <cite className="not-italic">
                        <span className="block text-lg font-light">{testimonial.name}</span>
                        <span className="block text-sm text-neutral-400 mt-1">{testimonial.role}</span>
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300
                  ${index === activeIndex ? 'bg-white' : 'bg-neutral-600'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-neutral-800 rounded-full p-2">
            <button
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-neutral-800 rounded-full p-2">
            <button
              onClick={() => setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
