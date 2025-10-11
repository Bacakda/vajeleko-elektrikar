import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VaJeleko s.r.o | Profesionální elektroinstalace a zabezpečení',
  description: 'Profesionální elektroinstalace a zabezpečení – po celé ČR. Elektroinstalace, tepelná čerpadla, fotovoltaika, zabezpečení, hromosvody, revize a 24/7 pohotovost.',
  keywords: 'elektrikář, elektroinstalace, fotovoltaika, tepelná čerpadla, zabezpečení, kamerové systémy, hromosvody, revize, elektro pohotovost',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

