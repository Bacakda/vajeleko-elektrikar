export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VaJeleko s.r.o",
  "alternateName": "VaJeleko",
  "description": "Profesionální elektroinstalační služby v Praze a okolí. Montáž, opravy, revize elektroinstalací, fotovoltaiky a hromosvodů.",
  "url": "https://vajeleko.cz",
  "logo": "https://vajeleko.cz/images/logos/logo-header.webp",
  "image": "https://vajeleko.cz/images/logos/logo-hero.webp",
  "telephone": "+420-XXX-XXX-XXX",
  "email": "info@vajeleko.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adresa firmy",
    "addressLocality": "Praha",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.0755",
    "longitude": "14.4378"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Praha"
    },
    {
      "@type": "City", 
      "name": "Středočeský kraj"
    }
  ],
  "serviceType": [
    "Elektroinstalace",
    "Revize elektroinstalací", 
    "Fotovoltaické systémy",
    "Hromosvody",
    "Elektromontáže",
    "Opravy elektroinstalací"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Elektroinstalační služby",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Elektroinstalace",
          "description": "Kompletní elektroinstalace pro domy, byty a komerční objekty"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Revize elektroinstalací",
          "description": "Pravidelné revize a kontroly elektroinstalací dle ČSN"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Fotovoltaické systémy",
          "description": "Montáž a údržba fotovoltaických elektráren"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hromosvody", 
          "description": "Montáž a revize hromosvodů a ochrany proti přepětí"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/vajeleko",
    "https://www.linkedin.com/company/vajeleko"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "5-10",
  "slogan": "Profesionální elektroinstalační služby"
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "VaJeleko s.r.o",
  "alternateName": "VaJeleko Elektrikář",
  "url": "https://vajeleko.cz",
  "description": "Profesionální elektroinstalační služby v Praze a okolí",
  "publisher": {
    "@type": "Organization",
    "name": "VaJeleko s.r.o"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://vajeleko.cz/projekty?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vajeleko.cz/#organization",
  "name": "VaJeleko s.r.o",
  "image": "https://vajeleko.cz/images/logos/logo-hero.webp",
  "telephone": "+420-XXX-XXX-XXX",
  "email": "info@vajeleko.cz",
  "url": "https://vajeleko.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adresa firmy",
    "addressLocality": "Praha", 
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.0755",
    "longitude": "14.4378"
  },
  "openingHours": "Mo-Fr 08:00-17:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "CZK",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "50.0755",
      "longitude": "14.4378"
    },
    "geoRadius": "50000"
  }
};

export const breadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const projectStructuredData = (project: any) => ({
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
});
