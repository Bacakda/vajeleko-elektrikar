'use client'

import { motion } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

export default function Contact() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Telefon',
      details: ['+420 722 914 120', '+420 605 999 878'],
      link: 'tel:+420722914120',
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['info@vajeleko.cz', 'poptavky@vajeleko.cz'],
      link: 'mailto:info@vajeleko.cz',
    },
    {
      icon: MapPinIcon,
      title: 'Adresa',
      details: ['Chudenická 1059/30', 'Hostivař, 102 00 Praha'],
      link: 'https://maps.google.com/?q=Chudenická+1059/30,+Hostivař,+102+00+Praha',
    },
    {
      icon: ClockIcon,
      title: 'Pracovní doba',
      details: ['Po-Pá: 7:00 - 17:00', '24/7 Pohotovost'],
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {info.title === 'Adresa' ? (
                  // Speciální layout pro adresu s mapou
                  <div className="relative h-32">
                    {/* Mapa na pozadí - posunuta pro lepší viditelnost */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.5!2d14.532!3d50.065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c0b0b0b0b0b0b%3A0x0!2sChudenick%C3%A1%201059%2F30%2C%20Hostiva%C5%99%2C%20102%2000%20Praha!5e0!3m2!1scs!2scz!4v1234567890"
                        width="150%"
                        height="100%"
                        style={{ 
                          border: 0, 
                          minHeight: '128px',
                          transform: 'translateX(2%)',
                          transformOrigin: 'center center'
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps - VaJeleko s.r.o."
                      ></iframe>
                    </div>
                    
                    {/* Bílý gradient overlay zleva */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/70 to-transparent w-5/6 pointer-events-none rounded-2xl"></div>
                    
                    {/* Text obsah */}
                    <div className="relative z-10 pl-8 pr-6 py-6 flex items-center h-full">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-electric-100 rounded-xl flex items-center justify-center shadow-lg">
                            <info.icon className="w-7 h-7 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <div className="space-y-0.5">
                            <p className="text-gray-800 font-medium text-lg">
                              {info.details[0]}
                            </p>
                            <p className="text-gray-600 text-base">
                              {info.details[1]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : info.title === 'Telefon' ? (
                  // Speciální layout pro telefon - čísla vedle sebe
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-electric-100 rounded-xl flex items-center justify-center shadow-lg">
                          <info.icon className="w-7 h-7 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {info.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {info.details.map((phone, phoneIndex) => (
                        <motion.a
                          key={phoneIndex}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-electric-50 hover:from-blue-100 hover:to-electric-100 border border-blue-200 rounded-xl transition-all hover:shadow-lg group"
                        >
                          <PhoneIcon className="w-5 h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                          <span className="font-semibold text-gray-800">{phone}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                ) : info.title === 'Email' ? (
                  // Speciální layout pro email - emaily vedle sebe
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-electric-100 rounded-xl flex items-center justify-center shadow-lg">
                          <info.icon className="w-7 h-7 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {info.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {info.details.map((email, emailIndex) => (
                        <motion.a
                          key={emailIndex}
                          href={`mailto:${email}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-electric-50 hover:from-blue-100 hover:to-electric-100 border border-blue-200 rounded-xl transition-all hover:shadow-lg group"
                        >
                          <EnvelopeIcon className="w-5 h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                          <span className="font-semibold text-gray-800">{email}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Původní layout pro ostatní kontaktní informace
                  <motion.a
                    href={info.link}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-4 p-6 hover:shadow-xl transition-all group block"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-electric-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-7 h-7 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.a>
                )}
              </motion.div>
            ))}

            {/* 24/7 Emergency Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-8 bg-gradient-to-r from-electric-500 to-electric-600 rounded-2xl text-white shadow-xl"
            >
              <ClockIcon className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">24/7 Pohotovost</h3>
              <p className="mb-4">
                V případě naléhavé potřeby nás neváhejte kontaktovat kdykoliv.
              </p>
              <a
                href="tel:+420722914120"
                className="inline-block px-6 py-3 bg-white text-electric-600 rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Zavolat nyní
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nezávazná poptávka
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Vaše jméno"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="vas@email.cz"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+420 123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Vyberte službu
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>Elektroinstalace</option>
                  <option>Tepelná čerpadla a klimatizace</option>
                  <option>Fotovoltaika</option>
                  <option>Zabezpečení a kamerové systémy</option>
                  <option>Hromosvody</option>
                  <option>Revize</option>
                  <option>24/7 Pohotovost</option>
                  <option>Jiné</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Zpráva *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Popište nám Váš požadavek..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-electric-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Odeslat poptávku
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Povinné pole
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

