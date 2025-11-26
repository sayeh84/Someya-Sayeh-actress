'use client'
import Image from 'next/image'
import * as React from 'react'

interface CarouselProps {
  images: string[]
}

export function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = React.useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (images.length === 0) return null

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div className="relative w-full h-[600px]">
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ▶
      </button>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
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
