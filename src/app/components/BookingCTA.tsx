'use client'

import React from 'react'
import Link from 'next/link'

const BookingCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative overflow-hidden rounded-lg bg-neutral-900/50 p-8 lg:p-12 opacity-0 translate-y-4 animate-fadeIn"
        >
          <div className="relative z-10">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-light mb-6">Ready to Create Something Beautiful?</h2>
              <p className="text-neutral-400 text-lg">
                Let's discuss your photography needs and create a custom package that perfectly suits your vision.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="px-8 py-3 bg-white text-black hover:bg-neutral-200 transition-colors">
                  Book a Consultation
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </section>
  )
}

export default BookingCTA
