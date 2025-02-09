import React from 'react'
import Navbar from '../components/Navbar'
import ServicesList from '../components/ServicesList'
import ProcessTimeline from '../components/ProcessTimeline'
import BookingCTA from '../components/BookingCTA'

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-light mb-6">Photography Services</h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              From intimate portraits to grand events, I offer a range of professional photography 
              services tailored to capture your unique moments with artistry and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <ServicesList />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Booking CTA */}
      <BookingCTA />
    </main>
  )
}
