'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import LogoLoop from './LogoLoop'
import type { LogoItem } from './LogoLoop'

export default function References() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Partnerská loga pro animovaný karusel
  const partnerLogos: LogoItem[] = [
    { 
      src: "/images/logos/marek-zemni-prace.webp", 
      alt: "Marek Zemní práce", 
      title: "Marek Zemní práce", 
      href: "/partneri#marek-zemni-prace",
      width: 240,
      height: 140
    },
    { 
      src: "/images/logos/pro-security.webp", 
      alt: "Pro Security", 
      title: "Pro Security", 
      href: "/partneri#pro-security",
      width: 240,
      height: 140
    },
    { 
      src: "/images/logos/zev-svetice.webp", 
      alt: "ZEV Světice", 
      title: "ZEV Světice", 
      href: "/partneri#zev-svetice",
      width: 240,
      height: 140
    },
  ];

  return (
    <section id="references" className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={isMobile ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-0"
        >
          {/* Bílé okénko s nadpisem - menší na mobilu */}
          <div className="bg-white rounded-t-2xl p-3 sm:p-6 shadow-lg border border-[#0B1D36] border-b-0 mx-auto max-w-3xl sm:max-w-4xl">
            <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Spolupracujeme s <span className="gradient-text">důvěryhodnými partnery</span>
            </h2>
          </div>

          {/* Logo Loop container s profesionální animací - původní velikost okna */}
          <div className="bg-gradient-to-r from-[#0B1D36] to-[#FFC52E] rounded-b-3xl sm:rounded-3xl py-4 sm:py-12 md:py-16 text-white flex items-center justify-center overflow-hidden shadow-lg border border-[#0B1D36]/20 mx-auto w-full">
            <div className="w-full flex items-center justify-center" style={{ minHeight: '140px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={partnerLogos}
                speed={80}
                direction="left"
                logoHeight={120}
                gap={100}
                pauseOnHover={true}
                scaleOnHover={true}
                ariaLabel="Naši partneři"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

