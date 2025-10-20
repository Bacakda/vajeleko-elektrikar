'use client'

import { BoltIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-20 overflow-hidden">
      {/* Pozadí - plnohodnotný obrázek elektroinstalace */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/el-obv.avif"
          alt="Profesionální elektroinstalace - obvod"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Tmavý overlay pro lepší čitelnost textu */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Logo overlay v pravém dolním rohu */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20">
        <Image
          src="/images/logos/logo-hero.webp"
          alt="VaJeLekO Logo"
          width={300}
          height={200}
          className="object-contain drop-shadow-2xl max-w-[200px] sm:max-w-none"
          priority
        />
      </div>

      {/* Obsah - text a tlačítka overlay na obrázku */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-hero-dark-gray/95 backdrop-blur-md text-hero-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 shadow-lg border border-hero-white/20">
            <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-hero-yellow" />
            Profesionální elektroinstalace
          </div>
          
          {/* Hlavní nadpis */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-hero-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            Kompletní řešení pro{' '}
            <span className="text-hero-yellow">vaši elektroinstalaci</span>
          </h1>
          
          {/* Popis */}
          <p className="text-base sm:text-lg md:text-xl text-hero-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Poskytujeme profesionální elektroinstalační služby, revize, zabezpečení a 24/7 pohotovost po celé České republice. 
            Spolehlivost, kvalita a rychlost – to jsou naše priority.
          </p>
          
          {/* Tlačítka */}
          <div className="space-y-3 sm:space-y-4 max-w-md mx-auto lg:max-w-lg">
            {/* Hlavní tlačítka */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/kontakt"
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-hero-dark-blue hover:bg-hero-dark-gray text-hero-white font-bold rounded-lg shadow-xl transition-all duration-300 flex items-center justify-center flex-1 relative overflow-hidden text-sm sm:text-base"
              >
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:text-gray-900 transition-colors duration-300" />
                <span className="relative group-hover:text-gray-900 transition-colors duration-300">
                  +420 605 999 878
                </span>
                {/* Hover overlay efekt */}
                <div className="absolute inset-0 bg-hero-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg -z-10"></div>
              </a>
              <a
                href="tel:+420722914120"
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-hero-white text-hero-white font-bold rounded-lg hover:bg-hero-white/90 transition-all duration-300 flex items-center justify-center flex-1 relative overflow-hidden text-sm sm:text-base"
              >
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:text-gray-900 transition-colors duration-300" />
                <span className="relative group-hover:text-gray-900 transition-colors duration-300">
                  +420 722 914 120
                </span>
                {/* Hover overlay efekt */}
                <div className="absolute inset-0 bg-hero-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg -z-10"></div>
              </a>
            </div>
            
            {/* Pohotovost */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 bg-hero-dark-gray/20 backdrop-blur-md rounded-lg px-4 sm:px-6 py-2 sm:py-3 border border-hero-white/20">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-hero-yellow rounded-full"></div>
              <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-hero-yellow" />
              <span className="text-hero-white font-medium text-sm sm:text-base">24/7 Pohotovost</span>
            </div>
          </div>
          
          {/* Statistiky */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="text-hero-white text-center min-w-[60px]">
              <div className="text-2xl sm:text-3xl font-bold text-hero-yellow mb-1">ČR</div>
              <div className="text-xs sm:text-sm opacity-90">Celá republika</div>
            </div>
            <div className="text-hero-white text-center min-w-[60px]">
              <div className="text-2xl sm:text-3xl font-bold text-hero-yellow mb-1">8+</div>
              <div className="text-xs sm:text-sm opacity-90">Služeb</div>
            </div>
            <div className="text-hero-white text-center min-w-[60px]">
              <div className="text-2xl sm:text-3xl font-bold text-hero-yellow mb-1">24/7</div>
              <div className="text-xs sm:text-sm opacity-90">Pohotovost</div>
            </div>
            <div className="text-hero-white text-center min-w-[60px]">
              <div className="text-2xl sm:text-3xl font-bold text-hero-yellow mb-1">15+</div>
              <div className="text-xs sm:text-sm opacity-90">Let zkušeností</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

