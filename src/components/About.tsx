'use client'

import { motion } from 'framer-motion'
import {
  UserGroupIcon,
  ShieldCheckIcon,
  BoltIcon,
  ClockIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

export default function About() {
  const features = [
    {
      icon: UserGroupIcon,
      title: 'Zkušenosti, na které se můžete spolehnout',
      description: 'Realizovali jsme desítky projektů – od bytových domů po komerční objektech.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Odborný tým s lidským přístupem',
      description: 'Naši elektrikáři jsou certifikovaní profesionálové, kteří ví, co dělají.',
    },
    {
      icon: BoltIcon,
      title: 'Kvalitní elektroinstalace na míru',
      description: 'Bez nepořádku, bez zbytečností – jen kvalitní provedení na míru.',
    },
    {
      icon: ClockIcon,
      title: 'Rychlé zásahy i revize elektro',
      description: 'Zajišťujeme havarijní servis i kompletní revizní zprávy.',
    },
    {
      icon: CogIcon,
      title: 'Řešení na míru vašeho projektu',
      description: 'Každou zakázku přizpůsobíme vašim potřebám a možnostem.',
    },
  ]

  return (
    <section id="about" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O <span className="gradient-text">společnosti</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-electric-100 to-electric-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-electric-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

