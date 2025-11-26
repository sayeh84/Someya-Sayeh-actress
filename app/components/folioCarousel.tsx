'use client'

import { Carousel } from '@/app/components/ui/carousel'

export default function FolioCarousel() {
  const images = Array.from({ length: 13 }, (_, i) => `/bild${i + 1}.jpg`)

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mina bilder</h2>
      <Carousel images={images} />
    </div>
  )
}
