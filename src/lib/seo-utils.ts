import { Metadata } from 'next'

export const generatePageMetadata = (
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata => {
  const baseUrl = 'https://vajeleko.cz'
  const fullUrl = `${baseUrl}${path}`
  const imageUrl = image || `${baseUrl}/opengraph.svg`

  return {
    title,
    description,
    keywords: [
      'elektrikář',
      'elektroinstalace', 
      'elektro pohotovost',
      'elektromontáž',
      'revize elektroinstalace',
      'fotovoltaika',
      'hromosvody',
      'Praha',
      'Česká republika'
    ],
    openGraph: {
      type: 'website',
      locale: 'cs_CZ',
      url: fullUrl,
      siteName: 'VaJeleko s.r.o',
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
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
  }
}

export const generateBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const generateProjectStructuredData = (project: any) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.description,
  "url": `https://vajeleko.cz/projekty/${project.id}`,
  "image": project.images[0],
  "author": {
    "@type": "Organization",
    "name": "VaJeleko s.r.o"
  },
  "dateCreated": new Date().toISOString(),
  "keywords": [project.category, "elektroinstalace", "elektromontáž", project.location],
  "about": {
    "@type": "Thing",
    "name": project.category
  }
})

export const generateServiceStructuredData = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "VaJeleko s.r.o",
    "url": "https://vajeleko.cz"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Czech Republic"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://vajeleko.cz/kontakt",
    "servicePhone": "+420722914120"
  }
})
