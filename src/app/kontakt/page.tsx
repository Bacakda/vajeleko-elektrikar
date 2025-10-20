'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Světlejší pozadí */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-100 to-gray-300">
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
      
      {/* Hero Section pro kontakt */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0.3 } : { duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Kontaktujte <span className="gradient-text">nás</span>
            </h1>
            <p className="text-xl text-gray-600">
              Jsme tu pro vás 24/7. Neváhejte se na nás obrátit s jakýmkoliv dotazem nebo požadavkem.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}