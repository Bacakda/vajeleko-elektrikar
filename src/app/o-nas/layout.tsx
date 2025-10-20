import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O Nás | VaJeleko s.r.o | Profesionální Elektrikáři',
  description: 'VaJeleko s.r.o - Profesionální elektrikáři s dlouholetou praxí. Specializujeme se na elektroinstalace, tepelná čerpadla, fotovoltaiku a 24/7 pohotovost.',
  keywords: 'o nás, elektrikáři, profesionálové, elektroinstalace, zkušenosti, tým',
  openGraph: {
    title: 'O Nás | VaJeleko s.r.o',
    description: 'Poznáte náš tým profesionálních elektrikářů',
    type: 'website',
    url: 'https://vajeleko.cz/o-nas',
    images: [
      {
        url: 'https://vajeleko.cz/opengraph-onas.svg',
        width: 1200,
        height: 630,
        alt: 'VaJeleko s.r.o - Profesionální elektrikáři s dlouholetou praxí',
      },
    ],
  },
  alternates: {
    canonical: 'https://vajeleko.cz/o-nas',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
