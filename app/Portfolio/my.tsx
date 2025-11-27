'use client'
import { Card } from '@/app/components/ui/card'
import FolioCarousel from '@/app/components/ui/folioCarousel'
import { VideoCarousel } from '@/app/components/ui/videoCarousel'
import { SocialMedia } from '@/app/components/ui/socialMedia'

export default function My() {
  const items = [
    '/video1.mp4',
    '/video2.mp4',
    '/video3.mp4',
    '/video4.mp4',
    '/video5.mp4',
  ]
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 space-y-16">
      <section className="text-center space-y-3">
        <h1 className=" font-bold tracking-wide text-2xl">Someya Sayeh</h1>
        <p className="text-muted-foreground text-lg">Skådespelare • Statist</p>
        <p className="max-w-2xl mx-auto text-sm text-muted-foreground">
          Erfaren skådespelare med stark kameranärvaro, flerspråkig bakgrund,
          och stor vana av improvisation, uttryck och sociala medier.
        </p>
        <article className="flex justify-center">
          <SocialMedia />
        </article>
      </section>

      <FolioCarousel />
      <section>
        <h2 className="text-4xl font-semibold mb-3 text-center">Showreel</h2>
        <VideoCarousel items={items} />
      </section>
      <section className="space-y-8">
        <h2 className="text-4xl font-semibold text-center">CV & Erfarenhet</h2>
        <Card>
          <h3 className="font-semibold text-lg">Erfarenhet</h3>
          <ul className="text-sm space-y-2">
            <li>⭐ Statistroller – olika produktioner (2024)</li>
            <li>
              ⭐ Eget innehåll: improvisation, regiunderlag, sociala medier
              (YouTube, Instagram, TikTok – flera tusen följare)
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="font-semibold text-lg">Utbildning</h3>
          <p className="text-sm text-muted-foreground">
            Teaterutbildningar & workshops – fokus på sceniskt uttryck,
            improvisation och karaktärsarbete. Arbetat med både moderna och
            klassiska texter.
          </p>
        </Card>
        <Card>
          <h3 className="font-semibold text-lg">Färdigheter</h3>
          <ul className="text-sm space-y-2">
            <li>🎭 Starka känslouttryck och kameranärvaro</li>
            <li>🗣️ Svenska • Arabiska • Engelska • Franska</li>
            <li>🚗 B-körkort</li>
            <li>💡 Van vid kamera, ljus och improvisation</li>
          </ul>
        </Card>
      </section>
    </main>
  )
}
