# 🧩 Komponenty

Všechny React komponenty pro webovou stránku.

## Přehled komponent

### Header.tsx
Hlavní navigace s responzivním menu.
- Desktop: Horizontální menu
- Mobile: Hamburger menu
- Sticky header při scrollu
- Smooth scroll k sekcím

### Hero.tsx
Úvodní sekce s velkým nadpisem.
- Hlavní nadpis s gradientem
- CTA tlačítka
- Animované pozadí
- Statistiky (15+ let, 500+ projektů, atd.)

### Services.tsx
Přehled všech služeb.
- 7 hlavních služeb
- Ikony z Heroicons
- Hover efekty
- Grid layout (3 sloupce desktop)

### About.tsx
Sekce o společnosti.
- Informace o firmě
- Hodnoty a certifikace
- Statistiky
- CTA tlačítko

### References.tsx
Reference a testimonials.
- 3 testimonials
- Star rating
- Statistiky projektů
- Gradient box

### Contact.tsx
Kontaktní formulář a informace.
- Formulář (jméno, email, telefon, služba, zpráva)
- Kontaktní údaje
- Pracovní doba
- 24/7 pohotovost box

### Footer.tsx
Patička s odkazy a informacemi.
- Logo a popis
- Quick links
- Seznam služeb
- Pracovní doba
- Copyright
- Scroll to top button

## Použití

```tsx
import Header from '@/components/Header'

export default function Page() {
  return (
    <>
      <Header />
      {/* ... další obsah */}
    </>
  )
}
```

## Customizace

### Změna barev
Barvy jsou nastaveny v `tailwind.config.js`:
- `blue-600` - Primární modrá
- `electric-500` - Žlutá/oranžová
- Gradienty: `from-blue-600 to-electric-500`

### Úprava textu
Všechny texty jsou v komponentách nebo v `src/lib/constants.ts`

### Přidání animací
Komponenty používají Framer Motion:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Obsah
</motion.div>
```

