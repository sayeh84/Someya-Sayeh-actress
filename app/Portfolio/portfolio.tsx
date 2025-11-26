'use client'
import SendEmail from './sendEmail'
import My from './my'
import Footer from './footer'

export default function PortfolioPage() {
  return (
    <div className="p-8 text-foreground antialiased">
      <My />
      <SendEmail />
      <Footer />
    </div>
  )
}
