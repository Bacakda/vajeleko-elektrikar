'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  BoltIcon,
  FireIcon,
  SunIcon,
  VideoCameraIcon,
  CloudIcon,
  CogIcon,
  DocumentTextIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

export default function ServicesPage() {
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
      title: 'Revize elektroinstalace',
      icon: DocumentTextIcon,
      description: 'Výchozí i pravidelné revize',
      features: [
        'Revizní zprávy pro úřady a pojišťovny',
        'Dokumentace ke kolaudaci nebo změněné využití'
      ]
    },
    {
      title: 'Práce pro firmy a developery',
      icon: CogIcon,
      description: 'Komplexní elektroinstalace ve výstavbě',
      features: [
        'Výkonové rozvaděče, průmyslové objekty',
        'Zajištění projektů s revizí a dokumentací'
      ]
    },
    {
      title: 'Havarijní elektro servis 24/7',
      icon: ClockIcon,
      description: 'Výjezd technika v případě výpadku',
      features: [
        'Opravy zásadních závad a rizik',
        'Předhodné řešení a plán trvalých oprav'
      ]
    },
    {
      title: 'Montáž a servis fotovoltaiky',
      icon: SunIcon,
      description: 'Instalace FVE panelů a střídačů',
      features: [
        'Ochrany, připojení k síti, monitoring',
        'Technické poradenství a servis'
      ]
    },
    {
      title: 'Tepelná čerpadla a klimatizace',
      icon: FireIcon,
      description: 'Montáž a připojení zařízení',
      features: [
        'Příprava elektro a technická realizace',
        'Spolupráce s topením a koncovým dodavatelem'
      ]
    },
    {
      title: 'Kamerové a zabezpečovací systémy',
      icon: VideoCameraIcon,
      description: 'Instalace IP kamer, záznamových zařízení',
      features: [
        'Zabezpečovací systémy pro domy, sklady a pozemky',
        'Integrace s mobilem nebo alarmem'
      ]
    },
    {
      title: 'Montáž a revize chromosvodů',
      icon: CloudIcon,
      description: 'Kompletní montáž včetně uzemnění',
      features: [
        'Modernizace a opravy stávajícího vedení',
        'Revize dle ČSN pro objekty všech typů'
      ]
    }
  ]

  const additionalSections = [
    {
      title: 'Co umíme',
      content: 'Technické realizace a montáže',
      details: [
        'Kompletní realizace elektroinstalací od projektu po revizi',
        'Odbornou montáž FVE systémů, hromosvodů a rozvaděčů',
        'Instalace kamerových a zabezpečovacích systémů',
        'Montáže klimatizace a přípravy pro tepelná čerpadla',
        'Pravidelné i výchozí revize elektroinstalací a hromosvodů'
      ]
    },
    {
      title: 'Zajištění, dokumentace a spolupráce',
      content: 'Havarijní servis elektro – zásah v den nahlášení',
      details: [
        'Příprava dokumentace pro úřady, pojišťovny a kolaudace',
        'Spolupráci s firmami, developery a stavebními partnery',
        'Technická komunikace s projektanty, dozorem a distributory',
        'Práce po celé ČR – spolehlivě, rychle a profesionálně'
      ]
    }
  ]

  return (
    <main className="min-h-screen relative">
      {/* Stejné pozadí jako hlavní stránka */}
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Naše <span className="gradient-text">služby</span>
            </h1>
            <p className="text-xl text-gray-600">
              Kompletní elektroinstalační služby od A do Z
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-electric-500 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-12">
            {additionalSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6 font-medium">
                  {section.content}
                </p>
                <ul className="space-y-3">
                  {section.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-700 flex items-start">
                      <span className="w-2 h-2 bg-electric-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}