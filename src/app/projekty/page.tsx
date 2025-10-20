'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { projects, Project } from '@/lib/projects'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
        setSelectedProject(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    setCurrentIndex(0)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const prevImage = () => {
    if (!selectedProject) return
    setCurrentIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
  }

  const nextImage = () => {
    if (!selectedProject) return
    setCurrentIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <main className="min-h-screen relative">
      {/* Pozadí */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(11,29,54,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11,29,54,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0.3 } : { duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Naše <span className="gradient-text">projekty</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Vybrané reference z realizovaných projektů v oblasti elektroinstalací, zabezpečení a obnovitelných zdrojů
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projekty Galerie */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={isMobile ? { duration: 0.3 } : { delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() => openModal(project)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-50 h-48 lg:h-56 rounded-2xl">
                  
                  {project.totalImages === 1 ? (
                    /* 1 obrázek přes celou plochu */
                    <div className="relative h-full w-full rounded-md overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - Obrázek 1`}
                        fill
                        className="object-cover w-full h-full"
                        priority={index < 3}
                      />
                    </div>
                  ) : project.totalImages !== 2 ? (
                    <>
                      {/* 1 obrázek nahoře - celá šířka */}
                      <div className="relative h-32 w-full rounded-md overflow-hidden mb-1">
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} - Hlavní obrázek`}
                          fill
                          className="object-cover w-full h-full"
                          priority={index < 3}
                        />
                      </div>
                      
                      {/* 2 obrázky dole: levý normální, pravý tmavý */}
                      <div className="grid grid-cols-2 gap-1 h-24">
                        {/* Levý - normální */}
                        <div className="relative h-full rounded-md overflow-hidden">
                          <Image
                            src={project.images[1]}
                            alt={`${project.title} - Obrázek 2`}
                            fill
                            className="object-cover w-full h-full"
                            priority={index < 3}
                          />
                        </div>
                        
                        {/* Pravý - tmavý */}
                        <div className={`relative h-full bg-gradient-to-r ${project.id === 'cerpadel-zea' || project.id === 'sklad-zea' || project.id === 'chaty-cernevoderad' || project.id === 'reklama-pizzerie' || project.totalImages === 3 ? 'from-gray-100 to-gray-200' : 'from-gray-800 to-gray-900'} rounded-md overflow-hidden`}>
                          <Image
                            src={project.images[2]}
                            alt={`${project.title} - Obrázek 3`}
                            fill
                            className={`object-cover w-full h-full ${project.id === 'cerpadel-zea' || project.id === 'sklad-zea' || project.id === 'chaty-cernevoderad' || project.id === 'reklama-pizzerie' || project.totalImages === 3 ? 'opacity-100' : 'opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0'} transition-all duration-200 ease-in-out`}
                            priority={index < 3}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    /* 2 obrázky vedle sebe pro totalImages === 2 */
                    <div className="grid grid-cols-2 gap-1 h-full">
                      <div className="relative h-full rounded-md overflow-hidden">
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} - Obrázek 1`}
                          fill
                          className="object-cover w-full h-full"
                          priority={index < 3}
                        />
                      </div>
                      <div className="relative h-full rounded-md overflow-hidden">
                        <Image
                          src={project.images[1]}
                          alt={`${project.title} - Obrázek 2`}
                          fill
                          className="object-cover w-full h-full"
                          priority={index < 3}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Kategorie tag nahoře vlevo */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Badge +kolik - střed spodního pravého obrázku */}
                  {project.id !== 'cerpadel-zea' && project.id !== 'sklad-zea' && project.id !== 'chaty-cernevoderad' && project.id !== 'reklama-pizzerie' && project.totalImages !== 2 && project.totalImages !== 3 && project.totalImages !== 1 && (
                    <div className="absolute top-[78.57%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                          +{project.totalImages - 3}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 ease-in-out">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {project.location}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {project.totalImages} fotek
                    </span>
                    <span className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 ease-in-out">
                      Detail projektu →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modální okno detailu projektu */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal()
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[80vh] overflow-hidden relative"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-800" />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] h-full">
                {/* Levá část - Galerie obrázků */}
                <div className="space-y-2 p-4">
                  {/* Hlavní obrázek */}
                  <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <Image
                        src={selectedProject.images[currentIndex]}
                        alt={`${selectedProject.title} - Obrázek ${currentIndex + 1}`}
                        width={1200}
                        height={800}
                        className="max-w-full max-h-full object-contain"
                        priority
                      />
                    </motion.div>
                    
                    {/* Šipky navigace */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    >
                      <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    >
                      <ChevronRightIcon className="w-6 h-6 text-gray-800" />
                    </button>
                    
                    {/* Indikátor obrázku */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-base">
                      {currentIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                  
                  {/* Thumbnails dole */}
                  <div className="flex gap-1 justify-center">
                    {selectedProject.images.slice(0, 12).map((img, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => goToImage(index)}
                        className={`relative w-8 h-8 rounded overflow-hidden flex-shrink-0 transition-all duration-200 ${
                          index === currentIndex ? 'scale-125 ring-4 ring-blue-500' : 'hover:scale-110'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${selectedProject.title} - Náhled ${index + 1}`}
                          fill
                          className="object-cover w-full h-full"
                          priority
                        />
                        {index === currentIndex && (
                          <div className="absolute inset-0 bg-blue-500/30" />
                        )}
                      </motion.button>
                    ))}
                    {selectedProject.images.length > 12 && (
                      <div className="flex items-center justify-center text-xs text-gray-500 px-2">
                        +{selectedProject.images.length - 12} dalších
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Pravá část - Popis */}
                <div className="p-6 space-y-2 h-full overflow-y-auto">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h1>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Detaily projektu</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Celkový počet fotografií: {selectedProject.totalImages}</li>
                      <li>• Kategorie: {selectedProject.category}</li>
                      <li>• Datum realizace: 2024</li>
                      <li>• Lokalita: Česká republika</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}