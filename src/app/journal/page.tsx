import React from 'react'
import Navbar from '../components/Navbar'
import JournalGrid from '../components/JournalGrid'
import NewsletterCTA from '../components/NewsletterCTA'

export default function Journal() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <JournalGrid />
      <NewsletterCTA />
    </main>
  )
}
