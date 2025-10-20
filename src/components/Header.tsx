'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
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
      {/* BLUR OVERLAY NA CELU STRÁNKU - funguje i při scroll=0 */}
      {isMobileScreen && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 pointer-events-none"
        />
      )}
      
      {/* OVERLAY PRO ZAVŘENÍ - zachytí klik na stránku/mimo menu */}
      {isMobileScreen && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 cursor-default"
          onClick={() => setMobileMenuOpen(false)}
          style={{ touchAction: 'pan-y' }}
        />
      )}
      
      {/* HLAVNÍ HEADER - SCHOVÁVAT NA MOBILU PŘI OTEVŘENÉM MENU */}
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isMobileScreen && mobileMenuOpen ? '-translate-y-full opacity-0' : ''}
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
                    ${isScrolled 
                      ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                      : useWhiteText 
                        ? 'text-white hover:text-yellow-300 hover:bg-black/10' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                href="/kontakt"
                className={`
                  px-6 py-2.5 font-semibold rounded-full transition-all
                  ${isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : useWhiteText 
                      ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 border border-yellow-400' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }
                `}
              >
                Kontakt
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`
                lg:hidden p-2 rounded-md transition-all duration-300
                ${isScrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : useWhiteText 
                    ? 'text-white hover:bg-black/10' 
                    : 'text-gray-900 hover:bg-gray-100'
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
        </nav>
      </header>
      
      {/* MOBILNÍ SIDEBAR - PLYNULÁ ANIMACE */}
      <div
        className={`
          fixed inset-0 z-50 pointer-events-none lg:hidden
          ${mobileMenuOpen ? 'pointer-events-auto' : ''}
        `}
      >
        <div 
          className={`
            fixed top-0 right-0 max-h-screen w-80 bg-white/95 backdrop-blur-xl border-l-2 border-gray-200 shadow-2xl
            transform transition-all duration-300 ease-out overflow-y-auto rounded-l-3xl
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Header sidebaru */}
          <div className="p-6 border-b flex justify-between items-center border-gray-200 bg-white/95">
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
          <nav className="p-6 space-y-1 flex-1">
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
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-6 text-hero-dark-blue">Kontakty</h3>
            <div className="space-y-4 mb-8">
              <a 
                href="tel:+420722914120" 
                className="flex items-center space-x-4 py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-200
                   bg-gradient-to-r from-blue-50 to-blue-100 text-hero-dark-blue hover:from-blue-100 hover:to-blue-200
                   font-semibold border-l-4 border-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PhoneIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-lg">+420 722 914 120</span>
              </a>
              <a 
                href="tel:+420605999878" 
                className="flex items-center space-x-4 py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-200
                   bg-gradient-to-r from-yellow-50 to-yellow-100 text-hero-dark-blue hover:from-yellow-100 hover:to-yellow-200
                   font-semibold border-l-4 border-yellow-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PhoneIcon className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <span className="text-lg">+420 605 999 878</span>
              </a>
              <div className="flex items-center space-x-3 py-3 px-5 bg-red-50 rounded-xl border-l-4 border-red-500">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <PhoneIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-base font-semibold text-red-700">24/7 Pohotovost</span>
              </div>
            </div>
            
            {/* CTA tlačítko - NOVÝ GRADIENT MODRÝ-ŽLUTÝ */}
            <Link
              href="/kontakt"
              className={`
                block w-full py-4 px-8 font-bold text-lg rounded-xl text-center transition-all duration-200 shadow-xl
                bg-gradient-to-r from-[#0B1D36] to-[#FFC52E] text-white hover:shadow-2xl
                hover:from-[#0B1D36]/90 hover:to-[#FFC52E]/90 transform hover:scale-[1.02]
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              Nezávazná poptávka
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

