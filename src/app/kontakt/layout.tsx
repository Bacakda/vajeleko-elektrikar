import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | VaJeleko s.r.o | Elektrikář 24/7 Pohotovost',
  description: 'Kontaktujte nás: +420 722 914 120 nebo +420 605 999 878. Elektrikář 24/7 pohotovost. Dostupní po dobu 24 hodin, 7 dní v týdnu.',
  keywords: 'kontakt elektrikář, tel elektrikář, elektro pohotovost, 24/7 servis, zásah elektrikáře',
  openGraph: {
    title: 'Kontakt | VaJeleko s.r.o',
    description: 'Kontaktujte nás pro elektroinstalační služby a 24/7 pohotovost',
    type: 'website',
    url: 'https://vajeleko.cz/kontakt',
    images: [
      {
        url: 'https://vajeleko.cz/opengraph-kontakt.svg',
        width: 1200,
        height: 630,
        alt: 'VaJeleko s.r.o - Kontaktujte nás: +420 722 914 120',
      },
    ],
  },
  alternates: {
    canonical: 'https://vajeleko.cz/kontakt',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
