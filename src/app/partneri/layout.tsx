import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partneři | VaJeleko s.r.o | Spolupráce a Reference',
  description: 'Naši obchodní partneři a reference - přední společnosti v oboru energetiky a technologií. Spolupracujeme s nejlepšími.',
  keywords: 'partneři, reference, spolupráce, obchodní partneři',
  openGraph: {
    title: 'Partneři | VaJeleko s.r.o',
    description: 'Naši ověření partneři a reference',
    type: 'website',
    url: 'https://vajeleko.cz/partneri',
    images: [
      {
        url: 'https://vajeleko.cz/opengraph-partneri.svg',
        width: 1200,
        height: 630,
        alt: 'VaJeleko s.r.o - Naši ověření obchodní partneři',
      },
    ],
  },
  alternates: {
    canonical: 'https://vajeleko.cz/partneri',
  },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
