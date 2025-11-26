'use client'
import Contact from './contact'
import About from './about'
import My from './my'
import Footer from './footer'

export default function PortfolioPage() {
  return (
    <div className="p-8 text-foreground antialiased">
      <My />
      <Contact />
      <Footer />
    </div>
  )
}
