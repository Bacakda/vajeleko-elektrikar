# 📚 Dokumentace VaJeleko s.r.o - Index

Vítejte v kompletní dokumentaci webové prezentace **VaJeleko s.r.o**!

## 📖 Dokumenty

### 🚀 Začínáme
1. **[README.md](./README.md)** - Základní informace o projektu
2. **[QUICKSTART.md](./QUICKSTART.md)** - Rychlý start a první kroky
3. **[STRUCTURE.md](./STRUCTURE.md)** - Detailní popis struktury projektu

### 🛠️ Pro vývojáře
4. **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Kompletní návod na nasazení
5. **[CHANGELOG.md](./CHANGELOG.md)** - Historie změn
6. **[GRID_PATTERNS.md](./GRID_PATTERNS.md)** - Grid pattern varianty pro Hero sekci

### 📁 Důležité složky
- `src/app/` - Stránky aplikace
- `src/components/` - React komponenty
- `src/lib/constants.ts` - Konstanty (upravte kontakty zde!)
- `public/images/` - Vložte sem obrázky

## 🎯 Rychlé odkazy

### První spuštění
```bash
npm install    # Instalace závislostí
npm run dev    # Spuštění vývojového serveru
```
→ Otevřete http://localhost:3000

### Úprava obsahu
1. **Kontakty**: `src/lib/constants.ts` → `COMPANY_INFO`
2. **Služby**: `src/lib/constants.ts` → `SERVICES`
3. **Obrázky**: `public/images/` složky
4. **Grid pattern**: Viz [GRID_PATTERNS.md](./GRID_PATTERNS.md) pro různé varianty

### Deploy
- **Vercel** (doporučeno): Push do GitHub + připojení na vercel.com
- **Vlastní server**: Viz [DEPLOYMENT.md](./DEPLOYMENT.md)

## ✅ Checklist - Co upravit před nasazením

### Povinné
- [ ] Kontaktní údaje v `src/lib/constants.ts`
- [ ] Email v `.env.local`
- [ ] Metadata v `src/app/layout.tsx`
- [ ] Logo v `public/images/logos/`

### Doporučené
- [ ] Reálné obrázky služeb
- [ ] Fotky týmu
- [ ] Reference s fotkami projektů
- [ ] Implementace emailového formuláře
- [ ] Google Analytics (optional)

## 📦 Obsah projektu

### Stránky
- `/` - Hlavní stránka (Hero, Služby, O nás, Reference, Kontakt)
- `/sluzby` - Přehled služeb
- `/o-nas` - O společnosti
- `/reference` - Reference a projekty
- `/kontakt` - Kontaktní stránka

### Technologie
- **Next.js 14** - React framework
- **TypeScript** - Typová bezpečnost
- **Tailwind CSS** - Styling
- **Framer Motion** - Animace
- **Heroicons** - Ikony

### Funkce
- ✅ Plně responzivní design
- ✅ SEO optimalizace
- ✅ Moderní animace
- ✅ Kontaktní formulář
- ✅ Mobilní menu
- ✅ Smooth scrolling
- ✅ TypeScript podpora

## 🔧 Užitečné příkazy

```bash
# Development
npm run dev              # Vývojový server na :3000

# Production
npm run build            # Build produkční verze
npm start                # Spuštění produkční verze

# Ostatní
npm run lint             # Kontrola kódu
```

## 📞 Kontakt & Podpora

- **Web**: http://localhost:3000 (local)
- **Email**: info@vajeleko.cz
- **Telefon**: +420 123 456 789

## 🎓 Naučit se více

- [Next.js dokumentace](https://nextjs.org/docs)
- [React dokumentace](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 📝 Poznámky

### Verze 1.0.0
Kompletní webová prezentace připravená k nasazení. Obsahuje:
- 5 hlavních stránek
- 7 hlavních komponent
- Kompletní utility a hooks
- TypeScript typy
- Responzivní design
- SEO optimalizaci

### Co doplnit
- Reálné obrázky (services, team, references)
- Skutečné kontakty
- Email implementaci pro formulář
- Analytics tracking
- Real content (texty, popisy)

## 🚀 Další kroky

1. **Upravte obsah** - Viz [QUICKSTART.md](./QUICKSTART.md)
2. **Přidejte obrázky** - Do `public/images/` složek
3. **Testujte lokálně** - `npm run dev`
4. **Nasaďte** - Viz [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Vytvořeno**: 7. října 2024  
**Verze**: 1.0.0  
**Framework**: Next.js 14 + TypeScript  
**Licence**: © 2024 VaJeleko s.r.o

