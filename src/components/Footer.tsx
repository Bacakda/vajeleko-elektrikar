'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import PhoneModal from './PhoneModal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-electric-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold">VaJeleko s.r.o</span>
            </div>
            <p className="text-gray-400 mb-6">
              Profesionální elektroinstalace a zabezpečení – po celé České republice.
            </p>
            <div className="space-y-3">
              <a href="tel:+420722914120" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <PhoneIcon className="w-5 h-5" />
                <span>+420 722 914 120</span>
              </a>
              <a href="tel:+420605999878" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <PhoneIcon className="w-5 h-5" />
                <span>+420 605 999 878</span>
              </a>
              <a href="mailto:info@vajeleko.cz" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <EnvelopeIcon className="w-5 h-5" />
                <span>info@vajeleko.cz</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPinIcon className="w-5 h-5 mt-1" />
                <span>Česká republika</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Rychlé odkazy</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Naše služby</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/sluzby"
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="text-gray-400">
                <div className="font-semibold text-white mb-2">Pracovní doba</div>
                <div>Po - Pá: 7:00 - 17:00</div>
                <div>So - Ne: Na objednávku</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-electric-500 to-electric-600 rounded-lg">
                <div className="font-bold text-sm">24/7 Pohotovost</div>
                <div className="text-xs opacity-90">Pro naléhavé případy</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} VaJeleko s.r.o. Všechna práva vyhrazena.
          </p>
        </motion.div>
      </div>

      {/* Quick Call Button */}
      <motion.button
        onClick={() => setIsPhoneModalOpen(true)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-electric-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
      >
        <PhoneIcon className="w-6 h-6 text-white" />
      </motion.button>

      {/* Phone Modal */}
      <PhoneModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />
    </footer>
  )
}

