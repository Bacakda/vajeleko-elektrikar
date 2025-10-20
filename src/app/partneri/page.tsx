'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PartnersPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const partners = [
    {
      id: 'zev-svetice',
      name: 'ZEV Světice a.s.',
      logo: '/images/logos/zev-svetice.webp',
      description: [
        'Pro společnost ZEA Světice as zajišťujeme kompletní elektroinstalační servis napříč jejich areály ve Světicích, Bulánce a Všestarech.',
        'Naše hlavní činnosti je:',
        '• Postupná výměna původní elektroinstalace, která je často starší než 30 let, včetně kompletních obměny technologií',
        '• Realizace nové elektroinstalace a zapojení technologií při výstavbě nových objektů v rámci areálů',
        '• Údržba a opravy elektroinstalací ve stávajících provozních a administrativních budovách',
        '• Servisní zásahy a havarijní výjezdy, které řešíme v režimu nonstop pohotovosti, a to i mimo pracovní dobu',
        '• Kompletní elektropráce, od návrhu přes montáž až po revize a následný servis',
        'Naše spolupráce je založena na důvěře, kvalitě a dlouhodobém technickém zajištění všech elektroinstalačních potřeb společnosti ZEA Světice, as.'
      ]
    },
    {
      id: 'marek-zemni-prace',
      name: 'Marek Lejček – Zemní práce',
      logo: '/images/logos/marek-zemni-prace.webp',
      description: [
        'Pro společnost Marek Lejček – Zemní práce zajišťujeme kompletní technické zabezpečení v oblasti elektroinstalací a bezpečnostních systémů.',
        'Naše spolupráce zahrnuje:',
        '• Kompletní realizace elektroinstalace celého areálu určeného pro třídění zemí a svoz stavebních prací',
        '• Montáž kamerového systému Hikvision pro zajištění bezpečnosti a ochrany objektu',
        '• Přívod elektrické energie, včetně projektování a realizace připojení k distribuční síti',
        '• Dlouhodobý elektroservis, pravidelnou údržbu a operativní zásahy dle provozních potřeb',
        '• Technickou podporu při výstavbě a provozu areálu',
        '• Servisní a elektroinstalační úkony při výkopových pracích a zemních zásazích, včetně rychlých operativních řešení přímo v terénu',
        'Spolupráce je založena na technické preciznosti, časové flexibilitě a důvěře. Naše služby zajišťující bezpečný, efektivní a bezproblémový provoz areálu i průběh výkopových prací.'
      ]
    },
    {
      id: 'pro-security',
      name: 'Pro Security Technologies s.r.o.',
      logo: '/images/logos/pro-security.webp',
      description: [
        'Pro společnost Pro security technologies sro zajišťujeme kompletní technickou podporu v oblasti zabezpečovacích systémů.',
        'Naše spolupráce se opírá o vysokou úroveň spolehlivosti, rychlosti zásahů a odborného provedení, přičemž konkrétně zajišťujeme:',
        '• Montáže kamerových systémů Hikvision v objektech pro zabezpečení majetku, osob i firemních prostor',
        '• Instalace a servis elektronických zabezpečovacích systémů (EZS) pro domácnosti, provozovny i větší firemní areály',
        '• Technický dohled nad funkčností a dlouhodobým provozem systémů včetně pravidelných kontrol, testování a aktualizací',
        '• Operativní servisní zásahy v případě poruchy nebo potřeb klienta, včetně možností havarijního výjezdu',
        '• Individuální řešení na míru podle požadavků objektu a míry rizika, s důrazem na technologickou kvalitu a diskrétnost',
        'Společnost PRO SECURITY je dlouhodobým partnerem, pro kterého zajišťujeme důvěryhodné a profesionální technické zázemí, a to v oblasti zabezpečení rodinných domů, tak i rozsáhlejších komerčních objektů.'
      ]
    }
  ]

  return (
    <main className="min-h-screen relative">
      {/* Světlejší pozadí */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-100 to-gray-300">
        {/* Bílé mřížkování */}
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-electric-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.3 } : { duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Naši <span className="gradient-text">partneři</span>
            </h1>
            <p className="text-xl text-gray-600">
              Spolupracujeme s důvěryhodnými společnostmi a poskytujeme jim komplexní elektroinstalační služby
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section - zvětšená loga na desktopu */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                id={partner.id}
                initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 50 }}
                whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={isMobile ? { duration: 0.3 } : { delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">
                  {/* Logo vlevo - zvětšené na desktopu */}
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <div className="relative w-48 h-48 lg:w-96 lg:h-96 flex items-center justify-center p-4 lg:p-10">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain p-4 lg:p-8"
                      />
                    </div>
                  </div>

                  {/* Popisek vpravo */}
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      {partner.name}
                    </h2>
                    <div className="text-gray-700 text-base leading-normal space-y-2">
                      {partner.description.map((paragraph, index) => (
                        <p key={index} className={paragraph.startsWith('•') ? 'ml-4' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - původní velikost na desktopu */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-electric-500 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Chcete se stát naším partnerem?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl mb-10 max-w-3xl mx-auto"
          >
            Kontaktujte nás a promluvme si o možnostech spolupráce.
          </motion.p>
          <motion.a
            href="/kontakt"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all inline-block"
          >
            Kontaktujte nás
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
