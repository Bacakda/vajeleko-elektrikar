'use client'

import { motion } from 'framer-motion'
import LogoLoop from './LogoLoop'

export default function References() {
  // Skutečná loga partnerů s odkazy na konkrétní sekce
  const partnerLogos = [
    { src: "/images/logos/marek-zemni-prace.webp", alt: "Marek Zemní práce", title: "Marek Zemní práce", href: "/partneri#marek-zemni-prace" },
    { src: "/images/logos/pro-security.webp", alt: "Pro Security", title: "Pro Security", href: "/partneri#pro-security" },
    { src: "/images/logos/zev-svetice.webp", alt: "ZEV Světice", title: "ZEV Světice", href: "/partneri#zev-svetice" },
    { src: "/images/logos/marek-zemni-prace.webp", alt: "Marek Zemní práce", title: "Marek Zemní práce", href: "/partneri#marek-zemni-prace" },
    { src: "/images/logos/pro-security.webp", alt: "Pro Security", title: "Pro Security", href: "/partneri#pro-security" },
    { src: "/images/logos/zev-svetice.webp", alt: "ZEV Světice", title: "ZEV Světice", href: "/partneri#zev-svetice" },
    { src: "/images/logos/marek-zemni-prace.webp", alt: "Marek Zemní práce", title: "Marek Zemní práce", href: "/partneri#marek-zemni-prace" },
    { src: "/images/logos/pro-security.webp", alt: "Pro Security", title: "Pro Security", href: "/partneri#pro-security" },
  ]

  return (
    <section id="references" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-0"
        >
          {/* Bílé okénko s nadpisem */}
          <div className="bg-white rounded-t-2xl p-6 shadow-lg border border-gray-200 border-b-0 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Spolupracujeme s <span className="gradient-text">důvěryhodnými partnery</span>
            </h2>
          </div>

          {/* Gradientové okno s LogoLoop */}
          <div className="bg-gradient-to-r from-blue-600 to-electric-500 rounded-3xl py-16 text-white flex items-center justify-center overflow-hidden shadow-lg border border-gray-200 mx-auto w-full">
            {/* Logo Loop */}
            <div style={{ height: '200px', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <LogoLoop
                logos={partnerLogos}
                speed={50}
                direction="left"
                logoHeight={160}
                gap={180}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={false}
                ariaLabel="Naše specializace"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

