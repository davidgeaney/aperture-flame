'use client'

import React from 'react'

const ProcessTimeline = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We will discuss your vision, requirements, and desired outcomes for the photoshoot.'
    },
    {
      number: '02',
      title: 'Planning & Preparation',
      description: 'Together we will plan the perfect location, timing, and style for your photography session.'
    },
    {
      number: '03',
      title: 'The Photoshoot',
      description: 'Relax and enjoy while we capture beautiful, authentic moments that tell your story.'
    },
    {
      number: '04',
      title: 'Post-Production',
      description: 'Your images are carefully selected and professionally edited to perfection.'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Receive your final collection of stunning photographs in both digital and print formats.'
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 text-center">
          <h2 className="text-3xl font-light mb-6 reveal-text">The Process</h2>
          <p className="text-neutral-400">
            A streamlined journey from our first conversation to the final delivery of your images.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-12 bottom-0 w-[1px] bg-neutral-800 hidden lg:block" />

          {/* Timeline Steps */}
          <div className="space-y-16 lg:space-y-24 stagger-children">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid lg:grid-cols-[100px,1fr] gap-8 opacity-0 translate-y-4 animate-fadeIn spotlight"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex lg:block items-center gap-4">
                  <span className="text-3xl font-light text-neutral-600">{step.number}</span>
                  <div className="hidden lg:block absolute left-[46px] top-3 w-3 h-3 rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4 text-gradient">{step.title}</h3>
                  <p className="text-neutral-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
