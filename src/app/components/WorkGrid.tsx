'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageModal from './ImageModal'

// This would typically come from your CMS or API
const projects = [
  {
    id: 1,
    title: 'Light & Shadow',
    category: 'fine-art',
    thumbnail: '/image1.jpg',
    year: '2023',
  },
  {
    id: 2,
    title: 'Alpine Landscapes',
    category: 'landscape',
    thumbnail: '/image2.jpg',
    year: '2023',
  },
  {
    id: 3,
    title: 'Editorial Portraits',
    category: 'portraits',
    thumbnail: '/image3.jpg',
    year: '2023',
  },
  {
    id: 4,
    title: 'Urban Architecture',
    category: 'fine-art',
    thumbnail: '/image4.jpg',
    year: '2023',
  },
  // Add more projects as needed
]

interface WorkGridProps {
  selectedCategory?: string;
}

const WorkGrid = ({ selectedCategory }: WorkGridProps) => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  
  const filteredProjects = selectedCategory && selectedCategory !== 'all'
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <button 
            key={project.id}
            className="block text-left"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                priority={project.id === 1}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-light">{project.title}</h3>
                  <span className="text-sm text-neutral-400">{project.year}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <ImageModal 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  )
}

export default WorkGrid
