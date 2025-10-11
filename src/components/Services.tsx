'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import React from 'react'
import {
  BoltIcon,
  FireIcon,
  SunIcon,
  VideoCameraIcon,
  CloudIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

interface ServiceItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  color: string
  iconBg: string
  iconColor: string
}

// Mobile Service Carousel Component
function MobileServiceCarousel({ services }: { services: ServiceItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const getImageUrl = (service: ServiceItem) => {
    if (service.title.includes('Elektroinstalace')) return 'url(/images/services/Elektroinstalace.webp)'
    if (service.title.includes('čerpadla')) return 'url(/images/services/čerpadla.webp)'
    if (service.title.includes('Fotovoltaika')) return 'url(/images/services/fotovoltaiky.webp)'
    if (service.title.includes('Zabezpečení')) return 'url(/images/services/kamery.webp)'
    if (service.title.includes('Hromosvody')) return 'url(/images/services/hromosvod.webp)'
    if (service.title.includes('Revize')) return 'url(/images/services/revize.webp)'
    return 'url(/images/services/el-obv.avif)'
  }

  const handleCardClick = (index: number) => {
    // Prostě nastav index bez "obtáčení"
    setCurrentIndex(index)
  }

  // Minimální vzdálenost pro swipe
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Swipe vlevo - další karta
      setCurrentIndex(prev => prev + 1)
    } else if (isRightSwipe) {
      // Swipe vpravo - předchozí karta
      setCurrentIndex(prev => prev - 1)
    }
  }

  // Vytvoří nekonečný array služeb
  const getInfiniteServices = () => {
    const infiniteServices = []
    // Vytvoř mnoho kopií pro plynulý nekonečný scroll
    for (let copy = -10; copy <= 10; copy++) {
      for (let i = 0; i < services.length; i++) {
        const globalIndex = copy * services.length + i
        infiniteServices.push({ 
          ...services[i], 
          globalIndex,
          originalIndex: i
        })
      }
    }
    return infiniteServices
  }

  const infiniteServices = getInfiniteServices()

  // Normalizuj currentIndex pro dots
  const normalizedCurrentIndex = ((currentIndex % services.length) + services.length) % services.length

  // Automaticky resetuj currentIndex když se dostane příliš daleko
  React.useEffect(() => {
    if (Math.abs(currentIndex) > services.length * 5) {
      // Reset na ekvivalentní pozici blíž nule
      const newIndex = ((currentIndex % services.length) + services.length) % services.length
      setCurrentIndex(newIndex)
    }
  }, [currentIndex, services.length])

  return (
    <div 
      className="relative h-60 flex items-center justify-center" 
      style={{ perspective: '1000px' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative w-full">
        {infiniteServices.map((service, arrayIndex) => {
          const offset = service.globalIndex - currentIndex
          const isActive = offset === 0
          const isVisible = Math.abs(offset) <= 2
          
          if (!isVisible) return null
          
          // Pozice a rotace pro 3D efekt - menší rozestupy pro kompaktnější vzhled
          const translateX = offset * 140
          const translateZ = isActive ? 60 : -30
          const rotateY = offset * 20
          const scale = isActive ? 1 : 0.85
          const opacity = Math.abs(offset) > 1 ? 0.2 : isActive ? 1 : 0.4
          
          return (
            <motion.div
              key={`${service.globalIndex}-${arrayIndex}`}
              className="absolute left-1/2 top-0 cursor-pointer"
              onClick={() => handleCardClick(service.originalIndex)}
              animate={{
                x: translateX - 120, // -120 pro vycentrování (polovina šířky karty)
                z: translateZ,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.6
              }}
              style={{
                transformStyle: 'preserve-3d',
                zIndex: isActive ? 20 : 10 - Math.abs(offset),
                width: '240px'
              }}
            >
              {/* Kontejner pro kartu - všechny ve stejné výšce */}
              <div className="relative">
                {/* Bílé okénko s textem - pro všechny karty */}
                <div className="h-14 flex items-end mb-1">
                  <motion.div 
                    className={`bg-white rounded-t-2xl p-2 shadow-lg border border-gray-200 border-b-0 mx-3 w-full transition-all duration-500 ${
                      isActive ? 'shadow-xl' : 'shadow-md'
                    }`}
                    style={{
                      opacity: isActive ? 1 : 0.5
                    }}
                  >
                    <h3 className={`font-bold text-gray-900 text-center leading-tight ${
                      isActive ? 'text-sm' : 'text-xs'
                    }`}>
                      {service.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Hlavní karta s obrázkem - všechny ve stejné výšce */}
                <div
                  className={`relative p-4 h-40 rounded-2xl shadow-lg border overflow-hidden transition-all duration-500 ${
                    isActive 
                      ? 'border-blue-300 shadow-2xl' 
                      : 'border-gray-200 shadow-lg'
                  }`}
                  style={{
                    backgroundImage: getImageUrl(service),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Gradient overlay pro lepší kontrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Icon - vycentrovaná */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.div 
                      className={`${isActive ? 'w-16 h-16' : 'w-12 h-12'} ${service.iconBg} rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <service.icon className={`${isActive ? 'w-8 h-8' : 'w-6 h-6'} ${service.iconColor}`} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Dots indikátor */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === normalizedCurrentIndex 
                ? 'bg-blue-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Services() {
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
    {
      icon: ClockIcon,
      title: 'Elektro pohotovost 24/7',
      color: 'from-electric-500 to-electric-600',
      iconBg: 'bg-electric-100',
      iconColor: 'text-electric-600',
    },
  ]

  return (
    <section id="services" className="relative py-12 lg:py-20 overflow-hidden">
      {/* Bílý shadow zespodu nahoru */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative z-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Naše <span className="gradient-text">služby</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Profesionální elektrikářské služby pro váš domov i firmu
          </p>
        </motion.div>


        {/* Desktop Services Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* První řada - 3 služby */}
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Bílé okénko s textem - vyjíždí z karty - užší */}
              <div className="bg-white rounded-t-2xl p-3 shadow-lg border border-gray-200 border-b-0 mx-8">
                <h3 className="text-lg font-bold text-gray-900 text-center">
                  {service.title}
                </h3>
              </div>

              {/* Hlavní karta s obrázkem - zaoblené všechny hrany */}
              <div
                className="relative p-8 h-48 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                style={{
                  backgroundImage: index === 0 ? 'url(/images/services/Elektroinstalace.webp)' : 
                                  index === 1 ? 'url(/images/services/čerpadla.webp)' : 
                                  'url(/images/services/fotovoltaiky.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Icon - vycentrovaná */}
                <div className={`absolute inset-0 flex items-center justify-center z-10`}>
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center transition-transform duration-200 hover:scale-110`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Druhá řada - Zabezpečení a Hromosvody */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Bílé okénko s textem - vyjíždí z karty - užší */}
            <div className="bg-white rounded-t-2xl p-3 shadow-lg border border-gray-200 border-b-0 mx-8">
              <h3 className="text-lg font-bold text-gray-900 text-center">
                {services[3].title}
              </h3>
            </div>

            {/* Hlavní karta s obrázkem - zaoblené všechny hrany */}
            <div
              className="relative p-8 h-48 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              style={{ backgroundImage: 'url(/images/services/kamery.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Icon - vycentrovaná */}
              <div className={`absolute inset-0 flex items-center justify-center z-10`}>
                <div className={`w-16 h-16 ${services[3].iconBg} rounded-xl flex items-center justify-center transition-transform duration-200 hover:scale-110`}>
                  <VideoCameraIcon className={`w-8 h-8 ${services[3].iconColor}`} />
                </div>
              </div>
            </div>
          </motion.div>

          {services.slice(4, 6).map((service, index) => (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 4) * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Bílé okénko s textem - vyjíždí z karty - užší */}
              <div className="bg-white rounded-t-2xl p-3 shadow-lg border border-gray-200 border-b-0 mx-8">
                <h3 className="text-lg font-bold text-gray-900 text-center">
                  {service.title}
                </h3>
              </div>

              {/* Hlavní karta s obrázkem - zaoblené všechny hrany */}
              <div
                className="relative p-8 h-48 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                style={{
                  backgroundImage: index === 0 ? 'url(/images/services/hromosvod.webp)' : 'url(/images/services/revize.webp)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Icon - vycentrovaná */}
                <div className={`absolute inset-0 flex items-center justify-center z-10`}>
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center transition-transform duration-200 hover:scale-110`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Třetí řada - Elektro pohotovost 24/7 - zabere 2 sloupce */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg md:col-span-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 border border-gray-200"
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-electric-100 rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-200 hover:scale-110">
              <ClockIcon className="w-8 h-8 text-electric-600" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Elektro pohotovost 24/7
            </h3>
          </motion.div>

          {/* Více informací link */}
          <motion.a
            href="#sluzby"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-3 group cursor-pointer"
          >
           <span className="text-2xl font-bold bg-gradient-to-r from-black via-gray-800 via-gray-400 via-gray-800 to-black bg-clip-text text-transparent bg-[length:300%_auto] animate-gradient">
             Více informací
           </span>
            <ArrowRightIcon className="w-7 h-7 text-blue-600 group-hover:translate-x-2 group-hover:text-electric-500 transition-all duration-200 stroke-[3]" />
          </motion.a>
        </div>

        {/* Mobile Services Carousel - 2 řádky s interaktivním karuselem */}
        <div className="md:hidden space-y-2 mt-2">
          {/* První řádek - služby 0,1,2 */}
          <MobileServiceCarousel services={services.slice(0, 3)} />
          
          {/* Druhý řádek - služby 3,4,5 */}
          <MobileServiceCarousel services={services.slice(3, 6)} />
        </div>
      </div>
    </section>
  )
}

