import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Naše služby | VaJeleko s.r.o | Elektroinstalace, 24/7 Pohotovost',
  description: 'Kompletní nabídka elektroinstalačních služeb: elektroinstalace, tepelná čerpadla, fotovoltaika, zabezpečení, kamerové systémy, hromosvody, revize. 24/7 pohotovost dostupná.',
  keywords: 'elektroinstalace, elektrikář, tepelná čerpadla, fotovoltaika, zabezpečení, kamerové systémy, hromosvody, revize, elektro pohotovost, nonstop servis',
  openGraph: {
    title: 'Naše služby | VaJeleko s.r.o',
    description: 'Kompletní elektroinstalační služby a 24/7 pohotovost po celé ČR',
    type: 'website',
    url: 'https://vajeleko.cz/sluzby',
    images: [
      {
        url: 'https://vajeleko.cz/opengraph-sluzby.svg',
        width: 1200,
        height: 630,
        alt: 'VaJeleko s.r.o - Naše služby: Elektroinstalace, Tepelná čerpadla, Fotovoltaika',
      },
    ],
  },
  alternates: {
    canonical: 'https://vajeleko.cz/sluzby',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
