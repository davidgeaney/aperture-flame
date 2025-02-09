'use client'

import React from 'react'

const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'portraits', name: 'Portraits' },
  { id: 'events', name: 'Events' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'fine-art', name: 'Fine Art' },
]

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-8 text-sm">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`uppercase tracking-[0.2em] hover:text-white transition-colors
              ${activeCategory === category.id ? 'text-white' : 'text-neutral-400'}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="h-[1px] bg-neutral-800 mt-8"></div>
    </div>
  )
}

export default CategoryFilter
