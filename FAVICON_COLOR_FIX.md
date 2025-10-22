# 🎨 Favicon Color Fix - VaJeleko s.r.o

## ❌ Problém
Favicony se zobrazují jako bílé místo správných barev VaJeleko loga.

## 🔧 Řešení

### 1. Vytvořit správné favicony s barvami
Potřebujeme vytvořit nové favicony s:
- **Modrá barva:** #1e40af (hlavní barva VaJeleko)
- **Žlutá barva:** #f59e0b (accent barva)
- **Bílá barva:** #ffffff (text a pozadí)

### 2. Design specifikace pro favicony

#### favicon.svg (16x16, 32x32, 48x48)
```svg
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <!-- Pozadí - modrá -->
  <rect width="32" height="32" fill="#1e40af" rx="6"/>
  
  <!-- Blesk - žlutý -->
  <path d="M8 12 L16 8 L12 16 L20 12 L16 20 L8 12" fill="#f59e0b"/>
  
  <!-- Text "V" - bílý -->
  <text x="16" y="26" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">V</text>
</svg>
```

#### apple-touch-icon.png (180x180)
- Modré pozadí (#1e40af)
- Žlutý blesk (#f59e0b)
- Bílý text "VAJELEKO"
- Zaoblené rohy

#### web-app-manifest ikony (192x192, 512x512)
- Stejný design jako apple-touch-icon
- Vysoké rozlišení
- Maskable pro PWA

### 3. Implementace

#### Aktualizace layout.tsx
```typescript
// Přidat mask-icon s správnou barvou
other: [
  { rel: 'mask-icon', url: '/favicon/favicon.svg', color: '#1e40af' }
]
```

#### Aktualizace site.webmanifest
```json
{
  "theme_color": "#1e40af",
  "background_color": "#ffffff"
}
```

### 4. Nástroje pro vytvoření faviconů

#### Online generátory
1. **RealFaviconGenerator:** https://realfavicongenerator.net/
2. **Favicon.io:** https://favicon.io/
3. **Canva:** https://www.canva.com/

#### Design specifikace pro generátory
- **Logo:** VaJeleko s bleskem
- **Pozadí:** #1e40af (modrá)
- **Accent:** #f59e0b (žlutá)
- **Text:** #ffffff (bílá)

### 5. Testování

#### Kontrola barev
1. Otevřít stránku v browseru
2. Zkontrolovat favicon v tabu
3. Ověřit barvy v developer tools
4. Testovat na mobilních zařízeních

#### Browser cache
```bash
# Vyčistit cache
Ctrl+Shift+R (Chrome)
Cmd+Shift+R (Safari)
```

### 6. Deployment

#### Před nasazením
- [ ] Všechny favicony mají správné barvy
- [ ] SVG favicon je vektorový
- [ ] Apple Touch Icon má správné rozměry
- [ ] Web manifest má správné cesty

#### Po nasazení
- [ ] Favicon se zobrazuje s barvami
- [ ] Apple Touch Icon funguje
- [ ] PWA manifest se načítá
- [ ] Všechny velikosti fungují

### 7. Troubleshooting

#### Favicon je stále bílý
1. Zkontrolovat, že nové favicony jsou v `/public/favicon/`
2. Vyčistit browser cache
3. Ověřit cesty v HTML
4. Zkontrolovat vercel.json rewrites

#### Barvy se nezobrazují správně
1. Ověřit, že favicony mají správné barvy
2. Zkontrolovat SVG kód
3. Ověřit PNG kvalitu
4. Testovat na různých zařízeních

### 📞 Kontakt
- **Email:** info@vajeleko.cz
- **Telefon:** +420 722 914 120

---
**⚠️ DŮLEŽITÉ:** Problém je v tom, že současné favicony jsou bílé. Musíme vytvořit nové s správnými barvami VaJeleko loga!
