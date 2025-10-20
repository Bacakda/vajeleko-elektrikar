'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import PhoneModal from './PhoneModal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const quickLinks = [
    { name: 'Domů', href: '/' },
    { name: 'Služby', href: '/sluzby' },
    { name: 'Projekty', href: '/projekty' },
    { name: 'Partneři', href: '/partneri' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  const services = [
    'Elektroinstalace',
    'Tepelná čerpadla',
    'Fotovoltaika',
    'Zabezpečení',
    'Hromosvody',
    'Revize',
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* MOBIL - STEJNÝ JAK DŘIVE - BEZ ZMĚN */}
        <div className="sm:hidden space-y-6">
          
          {/* Company Info - Logo v STŘEDU nahoře */}
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.3 } : { delay: 0.1, duration: 0.6 }}
            className="text-center mb-6"
          >
            {/* Logo v STŘEDU - SVĚTLÉ LOGO Z HEADERU */}
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/images/logos/logo-header-svetlé.webp"
                alt="VaJeleko Logo"
                width={80}
                height={80}
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
            
            {/* Kontakty - 2 SLUPCE: 2 telefony vlevo, email+adresa vpravo */}
            <div className="max-w-md mx-auto border-t border-gray-700 pt-6">
              <div className="grid grid-cols-2 gap-4">
                
                {/* SLUPECE 1 - 2 TELEFONY VLEVO */}
                <div className="flex flex-col space-y-3 text-left">
                  <a href="tel:+420722914120" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                    <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">+420 722 914 120</span>
                  </a>
                  <a href="tel:+420605999878" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                    <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">+420 605 999 878</span>
                  </a>
                </div>
                
                {/* SLUPECE 2 - EMAIL + ADRESA VPRAVO */}
                <div className="flex flex-col space-y-3 text-left">
                  <a href="mailto:info@vajeleko.cz" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                    <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">info@vajeleko.cz</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPinIcon className="w-5 h-5" />
                    <span className="text-sm">Česká republika</span>
                  </div>
                </div>
                
              </div>
            </div>
          </motion.div>

          {/* Oddělovací čára */}
          <div className="border-t border-gray-700"></div>

          {/* Links a Services - 2 sloupce vedle sebe s border mezi */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Quick Links */}
            <motion.div
              initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? { duration: 0.3 } : { delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-gray-300 mb-4 border-b border-gray-700 pb-2">Rychlé odkazy</h4>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? { duration: 0.3 } : { delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-sm font-semibold text-gray-300 mb-4 border-b border-gray-700 pb-2">Naše služby</h4>
              <ul className="space-y-2 text-sm">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="/sluzby"
                      className="text-gray-400 hover:text-white transition-colors block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Oddělovací čára */}
          <div className="border-t border-gray-700 pt-4"></div>

          {/* Contact Info */}
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.3 } : { delay: 0.3, duration: 0.6 }}
          >
            <div className="space-y-3 text-sm">
              
              {/* Pracovní doba - 2 SLUPCE: Po-Pá vlevo, So-Ne vpravo */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                
                {/* SLUPECE 1 - Po-Pá VLEVO */}
                <div className="text-gray-400 text-left">
                  <div className="font-medium text-white mb-1">Po - Pá</div>
                  <div className="text-sm">7:00 - 17:00</div>
                </div>
                
                {/* SLUPECE 2 - So-Ne VPRAVO */}
                <div className="text-gray-400 text-left">
                  <div className="font-medium text-white mb-1">So - Ne</div>
                  <div className="text-sm">Na objednávku</div>
                </div>
                
              </div>
              
              <div className="p-3 bg-gradient-to-r from-electric-500 to-electric-600 rounded-lg">
                <div className="font-bold text-sm">24/7 Pohotovost</div>
                <div className="text-xs opacity-90">Pro naléhavé případy</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP - Upravený footer s větším logem a 2 sloupci */}
        <div className="hidden sm:grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info - VĚTŠÍ LOGO */}
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.3 } : { duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Větší logo */}
            <div className="flex justify-center items-center mb-6">
              <Image
                src="/images/logos/logo-header-svetlé.webp"
                alt="VaJeleko Logo"
                width={80}
                height={80}
                className="rounded-lg shadow-lg object-contain"
              />
            </div>
            
            {/* Kontakty - 2 SLUPCE */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* SLUPECE 1 - 2 TELEFONY VLEVO */}
              <div className="flex flex-col space-y-3">
                <a href="tel:+420722914120" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <span>+420 722 914 120</span>
                </a>
                <a href="tel:+420605999878" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <span>+420 605 999 878</span>
                </a>
              </div>
              
              {/* SLUPECE 2 - EMAIL + ADRESA VPRAVO */}
              <div className="flex flex-col space-y-3">
                <a href="mailto:info@vajeleko.cz" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                  <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                  <span>info@vajeleko.cz</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPinIcon className="w-5 h-5 mt-1" />
                  <span>Česká republika</span>
                </div>
              </div>
              
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.3 } : { delay: 0.1, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-6">Rychlé odkazy</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.3 } : { delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-6">Naše služby</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/sluzby"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block text-base"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Pracovní doba v 2 sloupcích */}
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.3 } : { delay: 0.3, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              
              {/* Pracovní doba - 2 SLUPCE */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                
                {/* SLUPECE 1 - Po-Pá VLEVO */}
                <div className="text-gray-400">
                  <div className="font-semibold text-white mb-1">Po - Pá</div>
                  <div>7:00 - 17:00</div>
                </div>
                
                {/* SLUPECE 2 - So-Ne VPRAVO */}
                <div className="text-gray-400">
                  <div className="font-semibold text-white mb-1">So - Ne</div>
                  <div>Na objednávku</div>
                </div>
                
              </div>
              
              <div className="p-3 bg-gradient-to-r from-electric-500 to-electric-600 rounded-lg">
                <div className="font-bold text-sm">24/7 Pohotovost</div>
                <div className="text-xs opacity-90">Pro naléhavé případy</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright - Unified */}
        <motion.div
          initial={isMobile ? { opacity: 0 } : { opacity: 0 }}
          whileInView={isMobile ? { opacity: 1 } : { opacity: 1 }}
          viewport={{ once: true }}
          transition={isMobile ? { duration: 0.3 } : { delay: 0.4, duration: 0.6 }}
          className="pt-6 sm:pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} VaJeleko s.r.o. Všechna práva vyhrazena.
          </p>
        </motion.div>
      </div>

      {/* Quick Call Button */}
      <motion.button
        onClick={() => setIsPhoneModalOpen(true)}
        initial={isMobile ? { opacity: 0 } : { opacity: 0 }}
        whileInView={isMobile ? { opacity: 1 } : { opacity: 1 }}
        viewport={{ once: true }}
        transition={isMobile ? { duration: 0.3 } : { delay: 0.4, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-electric-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
      >
        <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </motion.button>

      {/* Phone Modal */}
      <PhoneModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />
    </footer>
  )
}

