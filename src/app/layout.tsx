import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingCallButton from '@/components/FloatingCallButton'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: 'VaJeleko s.r.o | Elektroinstalace, 24/7 Pohotovost | Česká Republika',
  description: 'Profesionální elektroinstalace a elektro pohotovost 24/7 – po celé ČR. Elektroinstalace, tepelná čerpadla, fotovoltaika, zabezpečení, kamerové systémy, hromosvody, revize. Volejte +420 722 914 120.',
  keywords: 'elektrikář, elektroinstalace, elektrikář 24/7, elektro pohotovost, elektrikář nonstop, tepelná čerpadla, fotovoltaika, zabezpečení domu, kamerové systémy, hromosvody, revize elektroinstalace, servis elektrikáře',
  applicationName: 'VaJeleko s.r.o',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VaJeleko s.r.o',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://vajeleko.cz',
    siteName: 'VaJeleko s.r.o',
    title: 'VaJeleko s.r.o | Elektroinstalace a 24/7 Pohotovost',
    description: 'Profesionální elektroinstalace a elektro pohotovost 24/7 po celé ČR. Rychlý servis, spolehlivé řešení.',
    images: [
      {
        url: 'https://vajeleko.cz/opengraph.svg',
        width: 1200,
        height: 630,
        alt: 'VaJeleko s.r.o - Elektroinstalace a 24/7 Pohotovost',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vajeleko.cz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VaJeleko" />
        
        {/* Preload service images pro Services sekci */}
        <link rel="preload" as="image" href="/images/services/Elektroinstalace.webp" />
        <link rel="preload" as="image" href="/images/services/čerpadla.webp" />
        <link rel="preload" as="image" href="/images/services/fotovoltaiky.webp" />
        <link rel="preload" as="image" href="/images/services/kamery.webp" />
        <link rel="preload" as="image" href="/images/services/hromosvod.webp" />
        <link rel="preload" as="image" href="/images/services/revize.webp" />
        
        {/* DNS Prefetch pro lepší výkon */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* JSON-LD Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'VaJeleko s.r.o',
              image: 'https://vajeleko.cz/images/logos/logo-header-svetlé.webp',
              description: 'Profesionální elektroinstalace a elektro pohotovost 24/7 po celé České republice',
              url: 'https://vajeleko.cz',
              telephone: '+420722914120',
              email: 'info@vajeleko.cz',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'CZ',
                addressLocality: 'Česká republika',
              },
              areaServed: 'CZ',
              availableLanguage: 'cs',
              priceRange: '$$',
              opens: '07:00',
              closes: '17:00',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '17:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday', 'Sunday'],
                  opens: 'Mo',
                  closes: 'Mo',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '50',
              },
              serviceArea: {
                '@type': 'Country',
                name: 'Czech Republic',
              },
              service: [
                {
                  '@type': 'Service',
                  name: 'Elektroinstalace',
                  description: 'Profesionální elektroinstalační práce',
                },
                {
                  '@type': 'Service',
                  name: 'Elektro pohotovost 24/7',
                  description: 'Dostupnost elektrikáře po dobu 24 hodin, 7 dní v týdnu',
                },
                {
                  '@type': 'Service',
                  name: 'Tepelná čerpadla',
                  description: 'Instalace a servis tepelných čerpadel',
                },
                {
                  '@type': 'Service',
                  name: 'Fotovoltaika',
                  description: 'Solární panely a fotovoltaické systémy',
                },
                {
                  '@type': 'Service',
                  name: 'Zabezpečení',
                  description: 'Instalace zabezpečovacích systémů',
                },
                {
                  '@type': 'Service',
                  name: 'Kamerové systémy',
                  description: 'Profesionální kamerové systémy',
                },
                {
                  '@type': 'Service',
                  name: 'Hromosvody',
                  description: 'Instalace a údržba hromosvodů',
                },
                {
                  '@type': 'Service',
                  name: 'Revize',
                  description: 'Elektroinstalační revize',
                },
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+420722914120',
                email: 'info@vajeleko.cz',
                availableLanguage: 'Czech',
                hoursAvailable: '24/7',
              },
              sameAs: [
                'https://www.facebook.com/vajeleko',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingCallButton />
      </body>
    </html>
  )
}
