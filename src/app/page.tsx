'use client'

import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

// Lazy load těžké komponenty
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
})

// References s lazy loading specificky pro mobil
const References = dynamic(() => import('@/components/References'), {
  loading: () => <div className="h-96" />,
  ssr: true,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64" />,
  ssr: true,
})

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
            backgroundSize: '40px 40px',
            backgroundAttachment: 'fixed'
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

