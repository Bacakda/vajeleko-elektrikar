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
      title: 'Montáž a revize hromosvodů',
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
      <section className="pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-[#0B1D36] text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
                <BoltIcon className="w-4 h-4 mr-2" />
                Kompletní elektroinstalační služby
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1D36] mb-6 leading-tight">
                Naše <span className="gradient-text">služby</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                Kompletní elektroinstalační služby od A do Z
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a
                  href="/kontakt"
                  className="px-6 py-3 bg-gradient-to-r from-[#0B1D36] to-[#1F2D42] text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-center flex items-center justify-center"
                >
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  +420 722 914 120
                </a>
                <a
                  href="tel:+420605999878"
                  className="px-6 py-3 border-2 border-[#0B1D36] text-[#0B1D36] font-bold rounded-lg hover:bg-[#0B1D36] hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <ClockIcon className="w-4 h-4 mr-2" />
                  24/7 Pohotovost
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 -z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D36] to-[#FFC52E] opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl -z-10 blur-sm"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0B1D36] to-[#FFC52E] rounded-xl flex items-center justify-center mb-4 shadow-lg transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#0B1D36] mb-3 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-700 flex items-start group-hover:text-gray-900 transition-colors">
                          <CheckIcon className="w-4 h-4 text-[#FFC52E] mt-0.5 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {additionalSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="group relative bg-gradient-to-br from-[#0B1D36]/5 to-[#FFC52E]/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0B1D36]/20 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D36] to-[#FFC52E] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl -z-10 blur-sm"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-[#0B1D36] mb-4 group-hover:text-gray-800 transition-colors">
                      {section.title}
                    </h2>
                    
                    <p className="text-lg text-gray-700 mb-6 font-medium leading-relaxed">
                      {section.content}
                    </p>
                    
                    <ul className="space-y-3">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-700 flex items-start group-hover:text-gray-900 transition-colors">
                          <div className="w-2 h-2 bg-[#FFC52E] rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-16 bg-gradient-to-r from-[#0B1D36] to-[#1F2D42] rounded-3xl text-white shadow-2xl"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Potřebujete <span className="gradient-text">profesionální</span> řešení?
                </h2>
                <p className="text-lg mb-6 max-w-3xl mx-auto opacity-95">
                  Nezávazná konzultace zdarma
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <a
                    href="/kontakt"
                    className="px-6 py-3 bg-[#FFC52E] text-[#0B1D36] font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-center hover:bg-[#FFC52E]/90 flex items-center justify-center"
                  >
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    +420 722 914 120
                  </a>
                  <a
                    href="tel:+420605999878"
                    className="px-6 py-3 border-2 border-[#FFC52E] text-[#FFC52E] font-bold rounded-lg hover:bg-[#FFC52E] hover:text-[#0B1D36] transition-all duration-300 flex items-center justify-center"
                  >
                    <ClockIcon className="w-4 h-4 mr-2" />
                    24/7 Pohotovost
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }