'use client'

import { useState, useEffect, useRef } from 'react'

interface CarouselProps {
  items: string[]
}

export function VideoCarousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentItem = items[current]
  const isVideo = currentItem.endsWith('.mp4')

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.volume = 0.1 // 10% volym
      videoRef.current.muted = false
    }
  }, [current, isVideo])
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  if (items.length === 0) return null

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div className="relative w-full h-[600px] bg-black">
          {isVideo && (
            <video
              key={current}
              controls
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            >
              <source src={currentItem} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* ◀ Prev */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ◀
      </button>

      {/* ▶ Next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ▶
      </button>

      {/* Indicators (dots) */}
      <div className="flex justify-center mt-2 space-x-2">
        {items.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
