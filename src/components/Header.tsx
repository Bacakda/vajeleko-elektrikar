'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Použít useMediaQuery hook pro detekci mobilu
  const isMobileScreen = useMediaQuery('(max-width: 1023px)')

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      
      // UZAVŘÍT MENU PŘI SCROLLU - SIDEBAR ZŮSTANE FIXED
      if (scrolled && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'Domů', href: '/' },
    { name: 'Služby', href: '/sluzby' },
    { name: 'Projekty', href: '/projekty' },
    { name: 'Partneři', href: '/partneri' },
    { name: 'Kontakt', href: '/kontakt' }
  ]

  // Na službách a jiných stránkách (ne na hlavní) je header vždy tmavý
  const isMainPage = pathname === '/'
  const useWhiteText = isMainPage && !isScrolled

  // Logo podle stránky - SPRÁVNÁ CESTA S DIAKRITIKOU
  const logoSrc = isMainPage && !isScrolled ? '/images/logos/logo-header-svetlé.webp' : '/images/logos/logo-header.webp'

  return (
    <>
      {/* BLUR OVERLAY NA CELU STRÁNKU */}
      {isMobileScreen && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 pointer-events-none"
        />
      )}
      
      {/* OVERLAY PRO ZAVŘENÍ */}
      {isMobileScreen && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 cursor-default"
          onClick={() => setMobileMenuOpen(false)}
          style={{ touchAction: 'pan-y' }}
        />
      )}
      
      {/* HLAVNÍ HEADER - SCHOVÁVAT NA MOBILU PŘI OTEVŘENÉM MENU */}
      <header className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out
        ${isMobileScreen && mobileMenuOpen ? 'pointer-events-none' : ''}
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
        }
      `}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logoSrc}
                alt="VaJeLekO Logo"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  height: '64px',
                  width: 'auto'
                }}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    font-medium transition-colors py-2 px-3 rounded-md
                    ${pathname === link.href 
                      ? 'text-electric-500 border-b-2 border-electric-500' 
                      : useWhiteText 
                      ? 'text-white hover:text-electric-200' 
                      : 'text-gray-700 hover:text-gray-900'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
              {/* Partneři link pro desktop */}
              <Link
                href="/partneri"
                className={`
                  font-medium transition-colors py-2 px-3 rounded-md
                  ${pathname === '/partneri' 
                    ? 'text-electric-500 border-b-2 border-electric-500' 
                    : useWhiteText 
                    ? 'text-white hover:text-electric-200' 
                    : 'text-gray-700 hover:text-gray-900'
                  }
                `}
              >
                Partneři
              </Link>
            </div>

            {/* Mobilní menu tlačítko */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`
                  p-2 rounded-full transition-colors ${
                    useWhiteText 
                      ? 'text-white hover:bg-white/10' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Kontaktní tlačítko - vždy viditelné */}
            <a
              href="tel:+420722914120"
              className={`
                hidden lg:flex items-center px-4 py-2 rounded-xl font-semibold transition-all
                ${useWhiteText 
                  ? 'bg-white text-electric-600 hover:bg-white/90 shadow-lg' 
                  : 'bg-electric-500 text-white hover:bg-electric-600 shadow-lg'
                }
              `}
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Zavolat
            </a>
          </div>
        </nav>
      </header>

      {/* MOBILNÍ SIDEBAR MENU - FIXED, Z-INDEX VYŠŠÍ NEŽ HEADER */}
      {isMobileScreen && (
        <div 
          className={`
            fixed top-0 right-0 h-screen w-80 bg-white/95 backdrop-blur-xl border-l-2 border-gray-200 shadow-2xl
            transform transition-all duration-300 ease-out rounded-l-3xl flex flex-col z-[60]
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Header sidebaru */}
          <div className="p-6 border-b flex justify-between items-center border-gray-200 bg-white/95 flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/images/logos/logo-header.webp"
                alt="VaJeLekO Logo"
                width={56}
                height={56}
                className="object-contain rounded"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full transition-colors text-gray-600 hover:bg-gray-100"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Navigační menu - VŽDY TMAVÝ TEXT */}
          <nav className="p-6 space-y-1 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`
                  block py-4 px-6 rounded-xl text-lg font-medium transition-all duration-200 flex items-center
                  text-hero-dark-blue hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Kontaktní sekce - dole - VŽDY tmavý text */}
          <div className="p-6 border-t border-gray-200 flex-shrink-0">
            <h3 className="text-xl font-bold mb-6 text-hero-dark-blue">Kontakty</h3>
            <div className="space-y-4 mb-8">
              <a href="tel:+420722914120" className="flex items-center space-x-3 text-gray-700 hover:text-electric-500 transition-colors">
                <PhoneIcon className="w-5 h-5" />
                <span>+420 722 914 120</span>
              </a>
              <a href="tel:+420605999878" className="flex items-center space-x-3 text-gray-700 hover:text-electric-500 transition-colors">
                <PhoneIcon className="w-5 h-5" />
                <span>+420 605 999 878</span>
              </a>
              <a href="mailto:info@vajeleko.cz" className="flex items-center space-x-3 text-gray-700 hover:text-electric-500 transition-colors">
                <EnvelopeIcon className="w-5 h-5" />
                <span>info@vajeleko.cz</span>
              </a>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold mb-2 text-gray-800">Pracovní doba</h4>
              <p className="text-sm text-gray-600 mb-1">Po-Pá: 7:00 - 17:00</p>
              <p className="text-sm text-electric-600 font-medium">24/7 Pohotovost</p>
            </div>
          </div>
        </div>
      )}

      {/* Hlavní obsah stránky */}
      <main className={`
        ${isMobileScreen && mobileMenuOpen ? 'pt-20 lg:pt-0' : 'pt-16 lg:pt-20'}
        min-h-screen
      `}>
        <slot />
      </main>
    </>
  )
}

