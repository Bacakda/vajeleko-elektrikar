'use client'

import { useState } from 'react'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string | undefined) => void;
      send: (serviceId: string | undefined, templateId: string | undefined, data: Record<string, string>) => Promise<{ text: string }>;
    };
  }
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Elektroinstalace',
    message: ''
  });

  // Formátování telefonu na hezký formát: +420 606 880 804 s mezerami
  const formatPhoneNumber = (phone: string): string => {
    // Odstraníme všechny znaky co nejsou čísla nebo +
    const cleaned = phone.replace(/\D/g, '').replace(/^\+/, '');
    
    // Pokud není číslo, vrátíme původní
    if (!cleaned) return phone;
    
    let formatted = '';
    
    // Přidáme +420 na začátek pokud není
    if (cleaned.length >= 9 && !cleaned.startsWith('420')) {
      formatted = '+420 ';
      // Vezmeme poslední 9 číslic
      const lastNine = cleaned.slice(-9);
      formatted += lastNine.slice(0, 3) + ' ' + lastNine.slice(3, 6) + ' ' + lastNine.slice(6);
    } else if (cleaned.startsWith('420')) {
      formatted = '+' + cleaned.slice(0, 3) + ' ' + cleaned.slice(3, 6) + ' ' + cleaned.slice(6, 9) + ' ' + cleaned.slice(9);
    } else {
      // Formát bez +420
      formatted = cleaned.slice(0, 3) + ' ' + cleaned.slice(3, 6) + ' ' + cleaned.slice(6, 9);
      if (cleaned.length > 9) {
        formatted += ' ' + cleaned.slice(9);
      }
    }
    
    return formatted.trim();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setLoading(true);
    setError('');
    setSubmitted(false);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Prosím vyplňte všechna povinná pole.');
      setLoading(false);
      return;
    }

    try {
      // Načteme EmailJS script
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.async = true;
        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load EmailJS'));
          document.head.appendChild(script);
        });
      }

      // Inicializace EmailJS
      window.emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      console.log('🚀 Odesílám email...', formData);

      // Odeslání emailu
      const result = await window.emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
          from_name: formData.name,
          from_email: formData.email,
          phone: formatPhoneNumber(formData.phone),
          service: formData.service,
          message: formData.message,
          reply_to: formData.email
        }
      );

      console.log('✅ Email úspěšně odeslán!', result);
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Elektroinstalace',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      console.error('❌ Chyba při odeslání:', err);
      const error = err as { text?: string; message?: string };
      setError(error.text || error.message || 'Chyba při odeslání. Zkuste to prosím později.');
    } finally {
      setLoading(false);
    }
  };

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
      link: 'https://maps.google.com/?q=Chudenická+1059/30,+Hostiva%C5%99,+102+00+Praha',
    },
    {
      icon: ClockIcon,
      title: 'Pracovní doba',
      details: ['Po-Pá: 7:00 - 17:00', '24/7 Pohotovost'],
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-xl order-first lg:order-last">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">
              Nezávazná poptávka
            </h3>
            
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✅ Úspěšně odesláno! Brzy se vám ozveme.
              </div>
            )}

            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ❌ {error}
              </div>
            )}
            
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm text-gray-900 bg-white"
                  placeholder="Vaše jméno"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm text-gray-900 bg-white"
                  placeholder="vas@email.cz"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm text-gray-900 bg-white"
                  placeholder="+420 123 456 789"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Vyberte službu
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm text-gray-900 bg-white"
                >
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
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Zpráva *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm text-gray-900 bg-white"
                  placeholder="Popište nám Váš požadavek..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading || submitted}
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all ${
                  submitted
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                    : 'bg-gradient-to-r from-[#0B1D36] to-[#FFC52E] text-white hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                {loading ? 'Odesílám...' : submitted ? '✅ Úspěšně odesláno' : 'Odeslat poptávku'}
              </button>

              <p className="text-xs sm:text-sm text-gray-500 text-center">
                * Povinné pole
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 order-last lg:order-first">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {info.title === 'Adresa' ? (
                  <div className="relative h-32 sm:h-32">
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
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/70 to-transparent w-5/6 pointer-events-none rounded-2xl"></div>
                    
                    <div className="relative z-10 pl-4 sm:pl-8 pr-3 sm:pr-6 py-4 sm:py-6 flex items-center h-full">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-electric-100 rounded-xl flex items-center justify-center shadow-lg">
                            <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <div className="space-y-0.5">
                            <p className="text-gray-800 font-medium text-sm">
                              {info.details[0]}
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm">
                              {info.details[1]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : info.title === 'Telefon' ? (
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-electric-100 rounded-xl flex items-center justify-center shadow-lg">
                          <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        {info.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                      {info.details.map((phone, phoneIndex) => (
                        <a
                          key={phoneIndex}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="flex items-center justify-center p-3 sm:p-3 bg-gradient-to-r from-blue-50 to-electric-50 hover:from-blue-100 hover:to-electric-100 border border-blue-200 rounded-lg sm:rounded-xl transition-all hover:shadow-lg group text-xs sm:text-sm font-medium"
                        >
                          <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-800 truncate">{phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : info.title === 'Email' ? (
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-electric-100 rounded-xl flex items-center justify-center shadow-lg">
                          <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        {info.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
                      {info.details.map((email, emailIndex) => (
                        <a
                          key={emailIndex}
                          href={`mailto:${email}`}
                          className="flex items-center justify-center p-3 sm:p-3 bg-gradient-to-r from-blue-50 to-electric-50 hover:from-blue-100 hover:to-electric-50 border border-blue-200 rounded-lg sm:rounded-xl transition-all hover:shadow-lg group text-xs sm:text-sm font-medium"
                        >
                          <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-800 truncate">{email}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={info.link}
                    className="flex items-start space-x-3 sm:space-x-4 p-5 sm:p-6 hover:shadow-xl transition-all group block"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-electric-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-xs sm:text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </a>
                )}
              </div>
            ))}

            <div className="p-5 sm:p-8 bg-gradient-to-r from-electric-500 to-electric-600 rounded-2xl text-white shadow-xl">
              <ClockIcon className="w-8 h-8 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-2">24/7 Pohotovost</h3>
              <p className="mb-4 sm:mb-4 text-sm sm:text-base">
                V případě naléhavé potřeby nás neváhejte kontaktovat kdykoliv.
              </p>
              <a
                href="tel:+420722914120"
                className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-electric-600 rounded-lg sm:rounded-full font-bold hover:bg-gray-100 transition-all text-sm sm:text-base"
              >
                Zavolat nyní
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
