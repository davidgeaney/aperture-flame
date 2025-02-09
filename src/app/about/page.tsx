import React from 'react'
import Navbar from '../components/Navbar'
import AboutContent from '../components/AboutContent'
import Testimonials from '../components/Testimonials'
import BookingCTA from '../components/BookingCTA'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutContent />
      <Testimonials />
      <BookingCTA />
    </main>
  )
}
