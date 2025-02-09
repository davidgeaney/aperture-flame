'use client'

import React, { useState } from 'react'

const NewsletterCTA = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg bg-neutral-900/50 p-8 lg:p-12">
          <div className="relative z-10 max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">Stay Updated</h2>
            <p className="text-neutral-400 mb-8">
              Subscribe to receive photography tips, behind-the-scenes content, and creative inspiration.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/20 border border-neutral-800 focus:border-white outline-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-white text-black hover:bg-neutral-200 disabled:opacity-50 transition-colors"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {status === 'success' && (
              <p className="text-green-400 mt-4">Thanks for subscribing!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </section>
  )
}

export default NewsletterCTA
