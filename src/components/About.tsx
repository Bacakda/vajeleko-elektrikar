'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    });

    const target = document.getElementById('about');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  // Definice 5 okenek
  const features = [
    {
      icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
      title: "Zkušenosti, na které se můžete spolehnout",
      description: "Realizovali jsme desítky projektů – od bytových domů po komerční objekty."
    },
    {
      icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
      title: "Odborný tým s lidským přístupem",
      description: "Naši elektrikáři jsou certifikovaní profesionálové, kteří ví, co dělají."
    },
    {
      icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
      title: "Kvalitní elektroinstalace na míru",
      description: "Bez nepořádku, bez zbytečností – jen kvalitní provedení na míru."
    },
    {
      icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      title: "24/7 Pohotovost",
      description: "Nonstop technická podpora a okamžitý zásah v emergencích."

    },
    {
      icon: "M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      title: "Partnerství s důvěryhodností",
      description: "Spolupracujeme s renomovanými firmami a dodavateli."

    }
  ];

  return (
    <section id="about" className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O <span className="gradient-text">společnosti</span>
          </h2>
        </div>
        
        {/* Responzivní grid: mobile 2 sloupce, desktop 5 sloupců */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={isMobile ? { duration: 0 } : { delay: index * 0.1, duration: 0.6 }}
              className="text-center p-4 sm:p-6 border border-hero-dark-blue rounded-xl hover:shadow-xl transition-all backdrop-blur-sm bg-white/80 lg:col-span-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-hero-dark-blue/10 to-hero-yellow/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform duration-200 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-hero-dark-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

