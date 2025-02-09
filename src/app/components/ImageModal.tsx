'use client'

import React from 'react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    thumbnail: string
    year: string
  } | null
}

const ImageModal = ({ isOpen, onClose, project }: ImageModalProps) => {
  if (!isOpen || !project) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white z-10 hover:opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="relative w-full h-full">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-light">{project.title}</h3>
          <span className="text-sm text-neutral-400">{project.year}</span>
        </div>
      </div>
    </div>
  )
}

export default ImageModal 