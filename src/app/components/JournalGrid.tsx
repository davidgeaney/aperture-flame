'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Mastering Natural Light in Portrait Sessions',
    excerpt: 'How to harness available light to create stunning, natural-looking portraits in any setting.',
    category: 'Photography Tips',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: '/naturallightphotography.jpg'
  },
  {
    id: 2,
    title: 'A Breathtaking Mountain Elopement',
    excerpt: 'Capturing intimate moments against the majestic backdrop of the Swiss Alps.',
    category: 'Wedding Stories',
    date: 'March 10, 2024',
    readTime: '8 min read',
    image: '/mountainwedding.jpg'
  },
  {
    id: 3,
    title: 'My Essential Photography Kit',
    excerpt: 'A detailed look at the gear I use to create professional portraits and why each piece matters.',
    category: 'Equipment',
    date: 'March 5, 2024',
    readTime: '6 min read',
    image: '/photographygear.jpg'
  },
  {
    id: 4,
    title: 'Understanding Light and Color',
    excerpt: 'Exploring how different lighting conditions affect color and mood in photography.',
    category: 'Photography Tips',
    date: 'February 28, 2024',
    readTime: '7 min read',
    image: '/colortheory.jpg'
  }
]

const JournalGrid = () => {
  return (
    <section className="pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-light mb-6">Photography Journal</h1>
          <p className="text-neutral-400 text-lg">
            Insights, stories, and tips from my photography journey.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['All Posts', 'Photography Tips', 'Wedding Stories', 'Equipment', 'Behind the Scenes'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm border border-neutral-800 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <Link 
              key={post.id}
              href={`/journal/${post.id}`}
              className="group"
            >
              <article>
                <div className="aspect-[16/9] bg-neutral-900 mb-6 overflow-hidden relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={post.id === 1}
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-light group-hover:text-neutral-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-400">
                    {post.excerpt}
                  </p>
                  <div className="pt-4">
                    <span className="text-sm uppercase tracking-wider group-hover:text-neutral-400 transition-colors">
                      Read Article →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalGrid
