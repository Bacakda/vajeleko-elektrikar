'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { useMobileOptimization } from '@/hooks/useMobileOptimization'
import {
  BoltIcon,
  FireIcon,
  SunIcon,
  VideoCameraIcon,
  CloudIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

interface ServiceItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  color: string
  iconBg: string
  iconColor: string
}

// Mobile Service Cards - Všechny 6 služeb, 3 řádky po 2
function MobileServiceCards({ services, isMobile }: { services: ServiceItem[], isMobile: boolean }) {
  const getImageUrl = (service: ServiceItem) => {
    if (service.title.includes('Elektroinstalace')) return '/images/projects/části haly Tehovec/5.webp'
    if (service.title.includes('čerpadla')) return '/images/projects/klimatizace - Toušice/1.webp'
    if (service.title.includes('Fotovoltaika')) return '/images/projects/Demontáž a zpětná/2.webp'
    if (service.title.includes('Zabezpečení')) return '/images/services/kamery.webp'
    if (service.title.includes('Hromosvody')) return '/images/projects/hromosvodu údolí čerpadel/1.webp'
    if (service.title.includes('Revize')) return '/images/projects/budova bývalé banky/1.webp'
    return '/images/services/el-obv.avif'
  }

  // Rozděl služby na 3 řádky po 2 službách
  const rows = [
    services.slice(0, 2),  // Elektroinstalace + Čerpadla
    services.slice(2, 4),  // Fotovoltaika + Zabezpečení
    services.slice(4, 6),  // Hromosvody + Revize
  ]

  return (
    <div className="space-y-6">
      {/* 3 řádky po 2 službách - VŽDY 2 vedle sebe */}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-2 gap-3 sm:gap-4">
          {row.map((service, serviceIndex) => (
            <motion.div
              key={serviceIndex}
              initial={isMobile ? undefined : { opacity: 0, y: 20 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? undefined : { delay: (rowIndex * 2 + serviceIndex) * 0.1, duration: 0.6 }}
              className="w-full"
            >
              {/* Kompletní karta: fixní výška pro konzistentní layout */}
              <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-[164px] sm:h-[192px]">
                {/* Textové okenko - FIXNÍ VÝŠKA pro stejné rozměry všech karet */}
                <div className="bg-hero-dark-blue h-12 px-2 sm:px-3 border-b border-hero-dark-blue/50 flex items-center justify-center">
                  <h3 className="text-xs sm:text-sm font-bold text-hero-white text-center leading-tight line-clamp-2 overflow-hidden">
                    {service.title}
                  </h3>
                </div>

                {/* Obrázková část - RELATIVNÍ VÝŠKA podle textu */}
                <div
                  className="relative w-full h-[124px] sm:h-[152px]"
                >
                  <Image
                    src={getImageUrl(service)}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, 200px"
                    priority={serviceIndex < 4}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Ikona - vycentrovaná */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 p-1 sm:p-2">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 ${service.iconBg} rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${service.iconColor}`} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}

      {/* Speciální karta - Elektro pohotovost 24/7 */}
      <motion.div
        initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={isMobile ? { duration: 0.3 } : { delay: 0.6, duration: 0.6 }}
        className="bg-hero-dark-blue p-6 rounded-2xl shadow-lg text-center border border-hero-dark-blue/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-12 h-12 bg-hero-yellow/20 rounded-xl flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-hero-yellow">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-hero-white">Elektro pohotovost 24/7</h3>
      </motion.div>

      {/* Tlačítko Více informací - PŘIDÁNO PRO MOBILE */}
      <motion.a
        href="/sluzby"
        initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={isMobile ? { duration: 0.3 } : { delay: 0.7, duration: 0.6 }}
        className="flex items-center justify-center gap-3 group cursor-pointer mt-6"
      >
        <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-black via-gray-800 via-gray-400 via-gray-800 to-black bg-clip-text text-transparent bg-[length:300%_auto] animate-gradient">
          Více informací
        </span>
        <ArrowRightIcon className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600 group-hover:translate-x-2 group-hover:text-electric-500 transition-all duration-200 stroke-[3]" />
      </motion.a>
    </div>
  )
}

export default function Services() {
  const { isMobile } = useMobileOptimization();

  const services = [
    {
      icon: BoltIcon,
      title: 'Elektroinstalace pro firmy i domácnosti',
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: FireIcon,
      title: 'Tepelná čerpadla a klimatizace',
      color: 'from-red-500 to-orange-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      icon: SunIcon,
      title: 'Fotovoltaika',
      color: 'from-yellow-500 to-orange-500',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: VideoCameraIcon,
      title: 'Zabezpečení a kamerové systémy',
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: CloudIcon,
      title: 'Hromosvody',
      color: 'from-gray-500 to-gray-600',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-600',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Revize',
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    // Pohotovost je speciální karta, ne v seznamu
  ]

  return (
    <section id="services" className="relative py-12 lg:py-20 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 relative z-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            <span className="text-hero-dark-blue">Naše</span>{' '}
            <span className="gradient-text">služby</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Profesionální elektrikářské služby pro váš domov i firmu
          </p>
        </motion.div>

        {/* Desktop Services - 3 sloupce */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={isMobile ? undefined : { opacity: 0, y: 20 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? undefined : { delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* Textové okenko */}
              <div className="bg-hero-dark-blue h-14 px-4 border-b border-hero-dark-blue/50 flex items-center justify-center">
                <h3 className="text-sm font-bold text-hero-white text-center leading-tight line-clamp-2">
                  {service.title}
                </h3>
              </div>

              {/* Obrázková část s ikonou */}
              <div className="relative w-full h-48">
                <Image
                  src={index === 0 ? '/images/projects/části haly Tehovec/5.webp' : 
                       index === 1 ? '/images/projects/klimatizace - Toušice/1.webp' : 
                       index === 2 ? '/images/projects/Demontáž a zpětná/2.webp' :
                       index === 3 ? '/images/services/kamery.webp' :
                       index === 4 ? '/images/projects/hromosvodu údolí čerpadel/1.webp' :
                       '/images/projects/budova bývalé banky/1.webp'}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
                  <div className={`w-14 h-14 ${service.iconBg} rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-lg`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Bottom Row */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {/* Desktop 24/7 Pohotovost - zabírá 2 sloupce vlevo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-2"
          >
            <div className="bg-hero-dark-blue p-6 rounded-2xl shadow-lg text-center border border-hero-dark-blue/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="w-12 h-12 bg-hero-yellow/20 rounded-xl flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-hero-yellow">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-hero-white">Elektro pohotovost 24/7</h3>
            </div>
          </motion.div>

          {/* Desktop - Více informací tlačítko - vpravo dole */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center"
          >
            <a
              href="/sluzby"
              className="flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-black via-gray-800 via-gray-400 via-gray-800 to-black bg-clip-text text-transparent">
                Více informací
              </span>
              <ArrowRightIcon className="w-6 h-6 text-blue-600 group-hover:translate-x-2 group-hover:text-electric-500 transition-all duration-200 stroke-[3]" />
            </a>
          </motion.div>
        </div>

        {/* Mobile Services - 3 řádky po 2 službách */}
        <div className="block md:hidden space-y-6 mt-0 -mt-3">
          <MobileServiceCards services={services} isMobile={isMobile} />
        </div>
      </div>
    </section>
  )
}

