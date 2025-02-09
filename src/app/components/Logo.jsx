import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 font-light">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-2 border-white rounded-full"></div>
        <div className="absolute inset-[6px] border border-white rounded-full"></div>
        <div className="absolute inset-[10px] bg-white rounded-full"></div>
      </div>
      <span className="text-xl tracking-[0.2em] uppercase">Aperture</span>
    </div>
  )
}

export default Logo
