import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Naše Projekty | VaJeleko s.r.o | Galerie Realizací',
  description: 'Prohlédněte si naše dokončené projekty - elektroinstalace, tepelná čerpadla, fotovoltaika a mnoho dalšího. Výsledky naší práce.',
  keywords: 'projekty, realizace, galerie, elektroinstalace, práce, portfolio',
  openGraph: {
    title: 'Naše Projekty | VaJeleko s.r.o',
    description: 'Prohlédněte si naše dokončené projekty a realizace',
    type: 'website',
    url: 'https://vajeleko.cz/projekty',
    images: [
      {
        url: 'https://vajeleko.cz/opengraph-projekty.svg',
        width: 1200,
        height: 630,
        alt: 'VaJeleko s.r.o - Galerie našich realizací a projektů',
      },
    ],
  },
  alternates: {
    canonical: 'https://vajeleko.cz/projekty',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
