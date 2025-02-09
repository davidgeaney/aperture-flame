'use client'

import React, { useState } from 'react'

type FormData = {
  name: string
  email: string
  service: string
  message: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  service: '',
  message: ''
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData(initialFormData)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,400px] gap-16">
          {/* Contact Form */}
          <div>
            <div className="max-w-xl">
              <h1 className="text-4xl font-light mb-6">Get in Touch</h1>
              <p className="text-neutral-400 text-lg mb-12">
                Ready to start your photography journey? Fill out the form below and I will get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-white outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-white outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm text-neutral-400 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-white outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="portrait">Portrait Photography</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="event">Event Photography</option>
                  <option value="commercial">Commercial Photography</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-white outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-3 bg-white text-black hover:bg-neutral-200 disabled:opacity-50 transition-colors"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-light mb-4">Contact Information</h2>
              <div className="space-y-4 text-neutral-400">
                <p>Email: contact@aperture.ie</p>
                <p>Phone: (+353) 889-3458</p>
                <p>Studio: Pearse Road Letterkenny<br />Donegal, Ireland</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-light mb-4">Business Hours</h2>
              <div className="space-y-2 text-neutral-400">
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-light mb-4">Follow Me</h2>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
