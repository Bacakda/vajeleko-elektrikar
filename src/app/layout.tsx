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
  title: 'VaJeleko s.r.o | Profesionální elektroinstalace a zabezpečení',
  description: 'Profesionální elektroinstalace a zabezpečení – po celé ČR. Elektroinstalace, tepelná čerpadla, fotovoltaika, zabezpečení, kamerové systémy, hromosvody, revize a 24/7 pohotovost.',
  keywords: 'elektrikář, elektroinstalace, fotovoltaika, tepelná čerpadla, zabezpečení, kamerové systémy, hromosvody, revize, elektro pohotovost',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: true,
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
        {/* Preload service images pro Services sekci */}
        <link rel="preload" as="image" href="/images/services/Elektroinstalace.webp" />
        <link rel="preload" as="image" href="/images/services/čerpadla.webp" />
        <link rel="preload" as="image" href="/images/services/fotovoltaiky.webp" />
        <link rel="preload" as="image" href="/images/services/kamery.webp" />
        <link rel="preload" as="image" href="/images/services/hromosvod.webp" />
        <link rel="preload" as="image" href="/images/services/revize.webp" />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingCallButton />
      </body>
    </html>
  )
}

