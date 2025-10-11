'use client'

import { motion } from 'framer-motion'
import { BoltIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Image - zobrazuje se nahoře na mobilu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex lg:hidden items-center justify-center relative order-first"
          >
            <div className="relative w-full max-w-md">
              {/* Obrázek rozvaděče */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative z-10 w-full flex items-center justify-center"
              >
                <Image
                  src="/images/services/rozvadec.webp"
                  alt="Elektrický rozvaděč"
                  width={2000}
                  height={1500}
                  className="object-contain w-full h-auto max-h-64"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left relative z-20 -mt-16 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <BoltIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-semibold">Profesionální služby</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Profesionální{' '}
              <span className="gradient-text">elektroinstalace</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              a zabezpečení – po celé České republice
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {/* První řádek - Nezávazná poptávka + první telefon - telefony jen na desktopu */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="/kontakt"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-electric-500 text-white rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-electric-500/50 transition-all hover:scale-105"
                >
                  Nezávazná poptávka
                </a>
                <a
                  href="tel:+420722914120"
                  className="hidden lg:flex px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-all hover:scale-105 items-center justify-center"
                >
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  +420 722 914 120
                </a>
              </div>

              {/* Druhý řádek - 24/7 pohotovost + druhý telefon - telefony jen na desktopu */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-500 to-electric-600 text-white rounded-full font-bold text-base sm:text-lg shadow-2xl flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  24/7 Elektro pohotovost
                </div>
                <a
                  href="tel:+420605999878"
                  className="hidden lg:flex px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-electric-500 text-electric-600 rounded-full font-bold text-base sm:text-lg hover:bg-electric-50 transition-all hover:scale-105 items-center justify-center"
                >
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  +420 605 999 878
                </a>
              </div>
            </motion.div>

          </motion.div>

                 {/* Right Content - Decorative - pouze desktop */}
                 <motion.div
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   className="hidden lg:flex items-center justify-center relative"
                 >
                   <div className="relative w-full max-w-4xl">
                     {/* Obrázek rozvaděče */}
                     <motion.div
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ delay: 0.5, duration: 0.8 }}
                       className="relative z-10 w-full flex items-center justify-center"
                     >
                       <Image
                         src="/images/services/rozvadec.webp"
                         alt="Elektrický rozvaděč"
                         width={2000}
                         height={1500}
                         className="object-contain"
                       />
                     </motion.div>
                   </div>
                 </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 lg:mt-16 grid grid-cols-4 gap-2 sm:gap-3 lg:gap-8"
        >
          {[
            { number: 'ČR', label: 'Celá republika' },
            { number: '8', label: 'Hlavních služeb' },
            { number: '24/7', label: 'Pohotovost' },
            { number: '3', label: 'Ověření partneři' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-2 sm:p-4 lg:p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

