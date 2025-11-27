'use client'

import { Carousel } from '@/app/components/ui/carousel'

export default function FolioCarousel() {
  // const images = Array.from({ length: 13 }, (_, i) => `/bild${i + 1}.JPG`)

  const images = [
    '/bild1.JPG',
    '/bild2.JPG',
    '/bild3.JPG',
    '/bild4.JPG',
    '/bild5.JPG',
  ]
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mina bilder</h2>
      <Carousel images={images} />
    </div>
  )
}
