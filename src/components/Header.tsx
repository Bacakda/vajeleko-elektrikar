'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Domů', href: '/' },
    { name: 'Služby', href: '/sluzby' },
    { name: 'Projekty', href: '/projekty' },
    { name: 'Partneři', href: '/partneri' },
  ]

  // Funkce pro kontrolu aktivní stránky
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold gradient-text">
              VaJeleko s.r.o
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
                 {navItems.map((item) => (
                   <motion.a
                     key={item.name}
                     href={item.href}
                     className={`font-medium transition-colors ${
                       isActive(item.href) 
                         ? 'text-blue-600' 
                         : 'text-gray-700 hover:text-blue-600'
                     }`}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     {item.name}
                   </motion.a>
                 ))}
                   <motion.a
                     href="/kontakt"
                     className={`px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all ${
                       pathname === '/kontakt'
                         ? 'bg-blue-600 text-white'
                         : 'bg-gradient-to-r from-blue-600 to-electric-500 text-white'
                     }`}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     Kontakt
                   </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-3"
          >
                 {navItems.map((item) => (
                   <a
                     key={item.name}
                     href={item.href}
                     className={`block px-4 py-2 rounded-lg transition-colors ${
                       isActive(item.href)
                         ? 'text-blue-600 bg-blue-50'
                         : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                     }`}
                     onClick={() => setIsMobileMenuOpen(false)}
                   >
                     {item.name}
                   </a>
                 ))}
                   <a
                     href="/kontakt"
                     className={`block mx-4 px-6 py-3 text-white rounded-full font-semibold text-center shadow-lg ${
                       pathname === '/kontakt'
                         ? 'bg-blue-600'
                         : 'bg-gradient-to-r from-blue-600 to-electric-500'
                     }`}
                     onClick={() => setIsMobileMenuOpen(false)}
                   >
                     Kontakt
                   </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

