'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import References from '@/components/References'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Bílo-černý gradient s bílým mřížkováním */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-300 to-gray-900">
        {/* Bílé mřížkování */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <Header />
      <Hero />
      <Services />
      <About />
      <References />
      <Footer />
    </main>
  )
}

