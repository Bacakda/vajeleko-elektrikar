# Obrázky / Images

Tato složka obsahuje všechny obrázky použité na webu.

## Struktura

```
images/
├── services/       # Obrázky služeb
├── team/          # Fotky týmu
├── references/    # Obrázky referencí a projektů
└── logos/         # Logo a brand assets
```

## Doporučené velikosti

### Služby (services/)
- Ikony služeb: 512x512px (PNG, optimalizované)
- Fotky projektů: 1200x800px (WebP nebo optimalizované JPG)

### Tým (team/)
- Profilové fotky: 400x400px (kruhové oříznutí, WebP)

### Reference (references/)
- Fotky projektů: 1200x800px (WebP nebo optimalizované JPG)
- Thumbnaily: 400x300px

### Loga (logos/)
- Hlavní logo: SVG (ideálně) nebo PNG s průhledností
- Favicon: 32x32px, 64x64px (ICO nebo PNG)

## Optimalizace

Pro optimalizaci obrázků použijte:
- https://tinypng.com/ (PNG/JPG komprese)
- https://squoosh.app/ (WebP konverze)
- Next.js Image komponenta (automatická optimalizace)

## Příklad použití

```tsx
import Image from 'next/image'

<Image
  src="/images/services/elektroinstalace.jpg"
  alt="Elektroinstalace"
  width={1200}
  height={800}
  className="rounded-lg"
/>
```

