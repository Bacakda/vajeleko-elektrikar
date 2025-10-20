'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  BoltIcon,
  DocumentTextIcon,
  CogIcon,
  ClockIcon,
  SunIcon,
  FireIcon,
  VideoCameraIcon,
  CloudIcon,
  PhoneIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

export default function ServicesPageClient() {
  const services = [
    {
      title: 'Elektroinstalace na klíč',
      icon: BoltIcon,
      description: 'Kompletní elektroinstalační služby od A do Z',
      features: [
        'Silnoproud a slaboproud',
        'Nové rozvodů a rekonstrukce',
        'Instalace v bytech, domech, halách a firmách'
      ]
    },
    {
      title: 'Tepelná čerpadla',
      icon: FireIcon,
      description: 'Moderní řešení vytápění a chladení',
      features: [
        'Instalace tepelných čerpadel',
        'Údržba a servis',
        'Energeticky efektivní systémy'
      ]
    },
    {
      title: 'Fotovoltaika',
      icon: SunIcon,
      description: 'Solární energie pro váš domov',
      features: [
        'Instalace solárních panelů',
        'Komplexní poradenství',
        'Údržba a monitoring'
      ]
    },
    {
      title: 'Zabezpečovací systémy',
      icon: CogIcon,
      description: 'Bezpečnost vašeho majetku',
      features: [
        'Hlásiče pohybu a dveřní čidla',
        'Alarm a notifikační systémy',
        'Inteligentní domácnost'
      ]
    },
    {
      title: 'Kamerové systémy',
      icon: VideoCameraIcon,
      description: 'Profesionální video monitoring',
      features: [
        '24/7 záznam',
        'Vzdálený přístup',
        'HD a 4K rozlišení'
      ]
    },
    {
      title: 'Hromosvody',
      icon: CloudIcon,
      description: 'Ochrana před bleskem',
      features: [
        'Instalace hromosvodů',
        'Kontrola funkčnosti',
        'Údržba a servis'
      ]
    },
    {
      title: 'Revize elektroinstalací',
      icon: DocumentTextIcon,
      description: 'Bezpečnostní kontrola elektroinstalace',
      features: [
        'Měření a testování',
        'Soupis nedostatků',
        'Vydání revizního zprávy'
      ]
    },
    {
      title: 'Elektro pohotovost 24/7',
      icon: ClockIcon,
      description: 'Servis dostupný v jakoukoliv dobu',
      features: [
        'Nonstop dostupnost',
        'Rychlý výjezd',
        'Profesionální řešení'
      ]
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-hero-dark-blue to-hero-dark-blue/90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Naše Služby
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Kompletní řešení elektroinstalačních a technických potřeb pro vaši domácnost i firmu
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-hero-dark-blue to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-hero-dark-blue to-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Potřebujete naši pomoc?
              </h2>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
                Kontaktujte nás a my vám poskytneme bezplatnou konzultaci
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-3 bg-hero-yellow text-black font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
              >
                <PhoneIcon className="w-5 h-5" />
                Zavolat Nás
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
