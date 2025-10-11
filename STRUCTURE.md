# Struktura projektu VaJeleko s.r.o

## 📁 Přehled struktury

```
elektrikář/
│
├── public/                          # Statické soubory
│   ├── images/                      # Obrázky
│   │   ├── services/               # Obrázky služeb
│   │   ├── team/                   # Fotky týmu
│   │   ├── references/             # Obrázky referencí
│   │   └── logos/                  # Loga a brand assets
│   └── fonts/                      # Custom fonty (pokud potřeba)
│
├── src/                            # Zdrojové soubory
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Hlavní stránka
│   │   ├── globals.css            # Globální styly
│   │   ├── robots.txt             # SEO robots
│   │   ├── sitemap.ts             # Sitemap generator
│   │   │
│   │   ├── sluzby/                # Stránka služeb
│   │   │   └── page.tsx
│   │   ├── o-nas/                 # Stránka o nás
│   │   │   └── page.tsx
│   │   ├── reference/             # Stránka referencí
│   │   │   └── page.tsx
│   │   ├── kontakt/               # Kontaktní stránka
│   │   │   └── page.tsx
│   │   │
│   │   └── api/                   # API routes
│   │       └── contact/           # Kontaktní formulář API
│   │           └── route.ts
│   │
│   ├── components/                 # React komponenty
│   │   ├── Header.tsx             # Navigace
│   │   ├── Hero.tsx               # Hero sekce
│   │   ├── Services.tsx           # Sekce služeb
│   │   ├── About.tsx              # O společnosti
│   │   ├── References.tsx         # Reference
│   │   ├── Contact.tsx            # Kontaktní formulář
│   │   └── Footer.tsx             # Patička
│   │
│   ├── lib/                        # Knihovny a konfigurace
│   │   └── constants.ts           # Konstanty (kontakty, služby, atd.)
│   │
│   ├── utils/                      # Utility funkce
│   │   ├── helpers.ts             # Pomocné funkce
│   │   └── api.ts                 # API funkce
│   │
│   ├── types/                      # TypeScript typy
│   │   └── index.ts               # Definice typů
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── useScroll.ts           # Hook pro scroll
│   │   ├── useMediaQuery.ts       # Hook pro media queries
│   │   └── useIntersectionObserver.ts  # Hook pro intersection observer
│   │
│   └── styles/                     # Dodatečné styly
│       └── animations.css         # CSS animace
│
├── .env.example                    # Příklad env proměnných
├── .env.local                      # Lokální env proměnné
├── .eslintrc.json                  # ESLint konfigurace
├── .prettierrc                     # Prettier konfigurace
├── .gitignore                      # Git ignore
├── next.config.js                  # Next.js konfigurace
├── tailwind.config.js              # Tailwind CSS konfigurace
├── postcss.config.js               # PostCSS konfigurace
├── tsconfig.json                   # TypeScript konfigurace
├── package.json                    # NPM závislosti
├── README.md                       # Dokumentace projektu
└── STRUCTURE.md                    # Tento soubor
```

## 🎯 Popis složek

### `/public`
Statické soubory, které jsou veřejně přístupné. Obsahuje obrázky, fonty a další assety.

### `/src/app`
Next.js App Router - hlavní aplikační logika, stránky a API routes.

### `/src/components`
Znovupoužitelné React komponenty pro různé sekce webu.

### `/src/lib`
Knihovní funkce a konstanty (kontakty, služby, konfigurace).

### `/src/utils`
Utility funkce pro validaci, formátování a API komunikaci.

### `/src/types`
TypeScript definice typů pro lepší type safety.

### `/src/hooks`
Custom React hooks pro opakovaně používanou logiku.

### `/src/styles`
Dodatečné CSS styly a animace.

## 🚀 Jak přidat nový obsah

### Přidat novou stránku
1. Vytvoř složku v `src/app/nova-stranka/`
2. Přidej `page.tsx` do této složky
3. Aktualizuj navigaci v `src/components/Header.tsx`

### Přidat novou službu
1. Aktualizuj `src/lib/constants.ts` v poli `SERVICES`
2. Případně přidej obrázek do `public/images/services/`

### Přidat nový obrázek
1. Vlož obrázek do příslušné složky v `public/images/`
2. Použij Next.js `Image` komponentu pro optimalizaci

### Upravit kontaktní údaje
1. Uprav `src/lib/constants.ts` v objektu `COMPANY_INFO`
2. Případně uprav `.env.local` pro API klíče

## 📦 Instalace závislostí

```bash
npm install
```

## 🏃‍♂️ Spuštění projektu

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## 🔧 Konfigurace

- **Next.js**: `next.config.js`
- **Tailwind CSS**: `tailwind.config.js`
- **TypeScript**: `tsconfig.json`
- **Environment**: `.env.local`

## 📝 Poznámky

- Všechny komponenty jsou plně responzivní
- Používáme Framer Motion pro animace
- Heroicons pro ikony
- Tailwind CSS pro styling
- TypeScript pro type safety

