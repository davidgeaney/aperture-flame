'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import WorkGrid from '../components/WorkGrid'
import CategoryFilter from '@/app/components/CategoryFilter'

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-light mb-4">Selected Work</h1>
            <p className="text-neutral-400">A curated collection of photographic stories</p>
          </div>
          
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          <WorkGrid selectedCategory={activeCategory} />
        </div>
      </section>
    </main>
  )
}
