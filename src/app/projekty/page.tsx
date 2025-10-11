'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = useMemo(() => [
    {
      id: 'fiserovi',
      title: 'Dům rodiny Fišerových',
      description: 'Kompletní elektroinstalace rodinného domu včetně slaboproudu, zabezpečení a přípravy pro fotovoltaiku.',
      imageCount: 5,
      navImage: '/images/services/hromosvod.webp',
      galleryImage: '/images/services/hromosvod.webp'
    },
    {
      id: 'jicinska',
      title: 'Budova v ul. Jičínská',
      description: 'Rekonstrukce elektroinstalace komerční budovy s moderními rozvaděči a LED osvětlením.',
      imageCount: 6,
      navImage: '/images/services/kamery.webp',
      galleryImage: '/images/services/kamery.webp'
    },
    {
      id: 'orlicka',
      title: 'Chata u Orlické přehrady',
      description: 'Nová elektroinstalace rekreační chaty s ohledem na vlhké prostředí a bezpečnost.',
      imageCount: 5,
      navImage: '/images/services/čerpadla.webp',
      galleryImage: '/images/services/čerpadla.webp'
    }
  ], [])

  // Funkce pro scrollování na projekt
  const scrollToProject = (index: number) => {
    const element = document.getElementById(projects[index].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  // Detekce aktivního projektu při scrollování
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      projects.forEach((project, index) => {
        const element = document.getElementById(project.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveProject(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [projects])

  return (
    <main className="min-h-screen relative">
      {/* Světlejší pozadí */}
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

      {/* Fixní navigace vlevo */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative cursor-pointer group"
              onClick={() => scrollToProject(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Kolečko s jemným designem */}
              <div
                className={`relative rounded-full border-2 transition-all duration-300 overflow-hidden ${
                  activeProject === index
                    ? 'w-14 h-14 border-gray-400 shadow-md'
                    : 'w-10 h-10 border-gray-300 hover:border-gray-400'
                }`}
              >
                {/* Obrázek projektu */}
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={project.navImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-300"
                  />
                  {/* Overlay s číslem */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 ${
                    activeProject === index ? 'bg-black/20' : 'group-hover:bg-black/30'
                  }`}>
                    <span className={`font-bold text-white transition-all duration-300 ${
                      activeProject === index 
                        ? 'text-lg' 
                        : 'text-sm'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tooltip s názvem projektu - pouze při hover */}
              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900/95 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                {project.title}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900/95"></div>
              </div>

              {/* Jemný aktivní indikátor */}
              {activeProject === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -inset-1 rounded-full border border-gray-300 opacity-60"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
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
              Naše <span className="gradient-text">projekty</span>
            </h1>
            <p className="text-xl text-gray-600">
              Realizované elektroinstalace a komplexní projekty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projekty */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              id={project.id}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: index * 0.15
              }}
              className="space-y-8 drop-shadow-sm"
            >
              {/* Nadpis a popis */}
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-700">
                  {project.description}
                </p>
              </div>

              {/* Galerie */}
              {index === 0 ? (
                // Speciální layout pro Fišerovy - 5 obrázků jako u Orliky
                <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-6xl mx-auto" style={{ aspectRatio: '16/9' }}>
                  {/* Obrázek 1 - velký hlavní */}
                  <div
                    className="col-span-2 row-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group relative"
                  >
                    <Image
                      src={project.galleryImage}
                      alt={`${project.title} - Foto 1`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                    </div>
                  </div>

                  {/* Obrázky 2-5 - malé vpravo */}
                  {Array.from({ length: 4 }, (_, i) => (
                    <div
                      key={i + 2}
                      className="col-span-1 row-span-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group relative"
                    >
                      <Image
                        src={project.galleryImage}
                        alt={`${project.title} - Foto ${i + 2}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 text-white">
                        <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{i + 2}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : index === 1 ? (
                // Speciální layout pro Jičínskou - 6 obrázků s různými velikostmi
                <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full max-w-6xl mx-auto" style={{ aspectRatio: '16/9' }}>
                  {/* Všechny obrázky používají stejný obrázek kamery */}
                  {[
                    { span: 'col-span-2 row-span-2', num: 1 },
                    { span: 'col-span-1 row-span-2', num: 2 },
                    { span: 'col-span-1 row-span-2', num: 3 },
                    { span: 'col-span-2 row-span-1', num: 4 },
                    { span: 'col-span-1 row-span-1', num: 5 },
                    { span: 'col-span-1 row-span-1', num: 6 }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`${item.span} bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group relative`}
                    >
                      <Image
                        src={project.galleryImage}
                        alt={`${project.title} - Foto ${item.num}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 text-white">
                        <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{item.num}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : index === 2 ? (
                // Speciální layout pro Orlickou přehradu - 5 obrázků s různými velikostmi
                <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-6xl mx-auto" style={{ aspectRatio: '16/9' }}>
                  {/* Obrázek 1 - velký hlavní */}
                  <div
                    className="col-span-2 row-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group relative"
                  >
                    <Image
                      src={project.galleryImage}
                      alt={`${project.title} - Foto 1`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                    </div>
                  </div>

                  {/* Obrázky 2-5 - malé vpravo */}
                  {Array.from({ length: 4 }, (_, i) => (
                    <div
                      key={i + 2}
                      className="col-span-1 row-span-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group relative"
                    >
                      <Image
                        src={project.galleryImage}
                        alt={`${project.title} - Foto ${i + 2}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 text-white">
                        <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{i + 2}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Fallback pro další projekty
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: project.imageCount }, (_, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="aspect-square bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden group relative"
                    >
                      <Image
                        src={project.galleryImage}
                        alt={`${project.title} - Foto ${imageIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 text-white">
                        <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{imageIndex + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}