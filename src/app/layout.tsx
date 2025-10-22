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
  title: 'Elektrikář Praha 24/7 | Elektroinstalace Nonstop | VaJeleko s.r.o',
  description: 'Elektrikář Praha 24/7 - elektroinstalace, elektro pohotovost, revize, fotovoltaika, hromosvody. Nejlepší elektrikář v Praze a Středočeském kraji. Rychlý výjezd, kvalitní práce. Volejte +420 722 914 120.',
  keywords: 'elektrikář praha, elektrikář 24/7, elektroinstalace praha, elektro pohotovost, elektrikář nonstop, elektrikář stredocesky kraj, elektrikář kladno, elektrikář mlada boleslav, elektrikář kolin, elektrikář praha 1, elektrikář praha 2, elektrikář praha 3, elektrikář praha 4, elektrikář praha 5, elektrikář praha 6, elektrikář praha 7, elektrikář praha 8, elektrikář praha 9, elektrikář praha 10, havarijni elektrikar, elektrikar vikend, elektrikar svatek, elektrikar 24 hodin, elektrikar nonstop, elektroinstalace, revize elektroinstalace, fotovoltaika, hromosvody, tepelná čerpadla, kamerové systémy, zabezpečení, elektromontáž, elektro opravy, elektro servis, elektroinstalace byt, elektroinstalace dům, elektroinstalace kancelář, elektroinstalace sklad, elektroinstalace hala, elektroinstalace škola, elektroinstalace nemocnice, elektroinstalace hotel, elektroinstalace restaurace, elektroinstalace obchod, elektroinstalace továrna, elektroinstalace výrobní hala, elektroinstalace administrativní budova, elektroinstalace bytový dům, elektroinstalace rodinný dům, elektroinstalace chaty, elektroinstalace chalupy, elektroinstalace garáže, elektroinstalace sklep, elektroinstalace půda, elektroinstalace koupelna, elektroinstalace kuchyň, elektroinstalace obývací pokoj, elektroinstalace ložnice, elektroinstalace dětský pokoj, elektroinstalace pracovna, elektroinstalace chodba, elektroinstalace schodiště, elektroinstalace balkon, elektroinstalace terasa, elektroinstalace zahrada, elektroinstalace bazén, elektroinstalace sauna, elektroinstalace wellness, elektroinstalace fitness, elektroinstalace posilovna, elektroinstalace tělocvična, elektroinstalace sportovní hala, elektroinstalace kulturní dům, elektroinstalace divadlo, elektroinstalace kino, elektroinstalace muzeum, elektroinstalace knihovna, elektroinstalace pošta, elektroinstalace banka, elektroinstalace pojišťovna, elektroinstalace úřad, elektroinstalace radnice, elektroinstalace soud, elektroinstalace věznice, elektroinstalace policejní stanice, elektroinstalace hasičská stanice, elektroinstalace záchranná služba, elektroinstalace nemocnice, elektroinstalace poliklinika, elektroinstalace ordinace, elektroinstalace lékárna, elektroinstalace laboratoř, elektroinstalace rentgen, elektroinstalace CT, elektroinstalace MRI, elektroinstalace ultrazvuk, elektroinstalace EKG, elektroinstalace EEG, elektroinstalace operace, elektroinstalace sál, elektroinstalace JIP, elektroinstalace ARO, elektroinstalace jednotka intenzivní péče, elektroinstalace anesteziologie, elektroinstalace chirurgie, elektroinstalace interní, elektroinstalace pediatrie, elektroinstalace gynekologie, elektroinstalace porodnice, elektroinstalace neonatologie, elektroinstalace psychiatrie, elektroinstalace neurologie, elektroinstalace kardiologie, elektroinstalace pneumologie, elektroinstalace gastroenterologie, elektroinstalace urologie, elektroinstalace ortopedie, elektroinstalace traumatologie, elektroinstalace oční, elektroinstalace ORL, elektroinstalace stomatologie, elektroinstalace dermatologie, elektroinstalace alergologie, elektroinstalace imunologie, elektroinstalace endokrinologie, elektroinstalace diabetologie, elektroinstalace onkologie, elektroinstalace hematologie, elektroinstalace nefrologie, elektroinstalace revmatologie, elektroinstalace rehabilitace, elektroinstalace fyzioterapie, elektroinstalace ergoterapie, elektroinstalace logopedie, elektroinstalace psychologie, elektroinstalace sociální práce, elektroinstalace nutriční poradenství, elektroinstalace lékárna, elektroinstalace laboratoř, elektroinstalace rentgen, elektroinstalace CT, elektroinstalace MRI, elektroinstalace ultrazvuk, elektroinstalace EKG, elektroinstalace EEG, elektroinstalace operace, elektroinstalace sál, elektroinstalace JIP, elektroinstalace ARO, elektroinstalace jednotka intenzivní péče, elektroinstalace anesteziologie, elektroinstalace chirurgie, elektroinstalace interní, elektroinstalace pediatrie, elektroinstalace gynekologie, elektroinstalace porodnice, elektroinstalace neonatologie, elektroinstalace psychiatrie, elektroinstalace neurologie, elektroinstalace kardiologie, elektroinstalace pneumologie, elektroinstalace gastroenterologie, elektroinstalace urologie, elektroinstalace ortopedie, elektroinstalace traumatologie, elektroinstalace oční, elektroinstalace ORL, elektroinstalace stomatologie, elektroinstalace dermatologie, elektroinstalace alergologie, elektroinstalace imunologie, elektroinstalace endokrinologie, elektroinstalace diabetologie, elektroinstalace onkologie, elektroinstalace hematologie, elektroinstalace nefrologie, elektroinstalace revmatologie, elektroinstalace rehabilitace, elektroinstalace fyzioterapie, elektroinstalace ergoterapie, elektroinstalace logopedie, elektroinstalace psychologie, elektroinstalace sociální práce, elektroinstalace nutriční poradenství',
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
