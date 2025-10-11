# 🚀 Rychlý Start - VaJeleko s.r.o

## 1️⃣ První spuštění

### Instalace závislostí
```bash
npm install
```

### Spuštění vývojového serveru
```bash
npm run dev
```

Otevřete prohlížeč na [http://localhost:3000](http://localhost:3000)

## 2️⃣ Úprava obsahu

### Změna kontaktních údajů
Upravte soubor `src/lib/constants.ts`:
```typescript
export const COMPANY_INFO = {
  name: 'VaJeleko s.r.o',
  email: 'info@vajeleko.cz',
  phone: '+420 123 456 789',
  // ... další údaje
}
```

### Přidání/úprava služeb
V souboru `src/lib/constants.ts` upravte pole `SERVICES`:
```typescript
export const SERVICES = [
  {
    id: 'elektroinstalace',
    title: 'Elektroinstalace',
    shortDescription: '...',
    // ... další údaje
  },
]
```

### Přidání obrázků
1. Vložte obrázky do příslušné složky v `public/images/`
2. Použijte je v komponentách:
```tsx
import Image from 'next/image'

<Image
  src="/images/services/elektroinstalace.jpg"
  alt="Elektroinstalace"
  width={1200}
  height={800}
/>
```

## 3️⃣ Přidání nové stránky

1. Vytvořte složku v `src/app/nova-stranka/`
2. Přidejte soubor `page.tsx`
3. Aktualizujte navigaci v `src/components/Header.tsx`

Příklad:
```tsx
// src/app/nova-stranka/page.tsx
export default function NovaStranka() {
  return (
    <main>
      <Header />
      <h1>Nová stránka</h1>
      <Footer />
    </main>
  )
}
```

## 4️⃣ Kontaktní formulář

### Nastavení emailů
Upravte `.env.local`:
```env
NEXT_PUBLIC_CONTACT_EMAIL=info@vajeleko.cz
NEXT_PUBLIC_PHONE=+420123456789
```

### Implementace odesílání emailů
Upravte `src/app/api/contact/route.ts` a přidejte emailovou službu:
- [Nodemailer](https://nodemailer.com/)
- [SendGrid](https://sendgrid.com/)
- [Resend](https://resend.com/)

## 5️⃣ Build a Deploy

### Vytvoření produkční verze
```bash
npm run build
```

### Spuštění produkční verze lokálně
```bash
npm start
```

### Deploy na Vercel (doporučeno)
1. Push do GitHub repository
2. Připojte na [vercel.com](https://vercel.com)
3. Vercel automaticky nasadí web

### Deploy jinam
Web lze nasadit na:
- Vercel ⭐ (doporučeno)
- Netlify
- AWS Amplify
- Vlastní server s Node.js

## 6️⃣ Užitečné příkazy

```bash
# Vývojový server
npm run dev

# Build
npm run build

# Produkční server
npm start

# Lint
npm run lint

# Formátování (pokud máte prettier)
npx prettier --write .
```

## 7️⃣ Struktura složek

```
src/
├── app/           # Stránky
├── components/    # Komponenty
├── lib/           # Konstanty
├── utils/         # Pomocné funkce
├── types/         # TypeScript typy
├── hooks/         # Custom hooks
└── styles/        # Styly

public/
└── images/        # Obrázky
    ├── services/
    ├── team/
    ├── references/
    └── logos/
```

## 8️⃣ Customizace designu

### Barvy
Upravte `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {...},  // Vaše barvy
    }
  }
}
```

### Fonty
Upravte `src/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
```

## 🆘 Potřebujete pomoc?

- 📖 [Next.js dokumentace](https://nextjs.org/docs)
- 🎨 [Tailwind CSS dokumentace](https://tailwindcss.com/docs)
- 🎭 [Framer Motion dokumentace](https://www.framer.com/motion/)
- 📧 Kontakt: info@vajeleko.cz

## ✅ Checklist před nasazením

- [ ] Upraveny kontaktní údaje v `src/lib/constants.ts`
- [ ] Nastaveny správné emaily v `.env.local`
- [ ] Přidány reálné obrázky do `public/images/`
- [ ] Implementováno odesílání kontaktního formuláře
- [ ] Otestována responzivita na mobilu
- [ ] Zkontrolovány všechny odkazy
- [ ] Přidány správné meta tagy pro SEO
- [ ] Nastavena doména a hosting

