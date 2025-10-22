# 🎯 Favicon Setup - VaJeleko s.r.o

## ✅ Kompletní favicon konfigurace pro všechny platformy

### 📁 Struktura faviconů
```
public/favicon/
├── favicon.ico              # Hlavní favicon (16x16, 32x32, 48x48)
├── favicon.svg              # Vektorový favicon (moderní prohlížeče)
├── favicon-96x96.png        # PNG favicon pro lepší kvalitu
├── apple-touch-icon.png     # Apple Touch Icon (180x180)
├── web-app-manifest-192x192.png  # PWA ikona 192x192
├── web-app-manifest-512x512.png  # PWA ikona 512x512
└── site.webmanifest         # Web App Manifest
```

### 🔧 Implementace v layout.tsx

#### 1. HTML Link Tags
```html
<!-- Favicons - Kompletní sada pro všechny platformy -->
<link rel="icon" href="/favicon/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="/favicon/favicon-96x96.png" type="image/png" sizes="96x96" />

<!-- Apple Touch Icons -->
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
<link rel="apple-touch-icon" sizes="192x192" href="/favicon/web-app-manifest-192x192.png" />
<link rel="apple-touch-icon" sizes="512x512" href="/favicon/web-app-manifest-512x512.png" />

<!-- PWA Manifest -->
<link rel="manifest" href="/favicon/site.webmanifest" />
```

#### 2. Next.js Metadata API
```typescript
icons: {
  icon: [
    { url: '/favicon/favicon.ico', sizes: 'any' },
    { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
  ],
  apple: [
    { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    { url: '/favicon/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
    { url: '/favicon/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
  ],
  other: [
    { rel: 'mask-icon', url: '/favicon/favicon.svg', color: '#1e40af' }
  ]
}
```

### 🚀 Vercel Deployment

#### vercel.json konfigurace
```json
{
  "headers": [
    {
      "source": "/favicon/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/favicon.ico",
      "destination": "/favicon/favicon.ico"
    },
    {
      "source": "/favicon.svg",
      "destination": "/favicon/favicon.svg"
    },
    {
      "source": "/apple-touch-icon.png",
      "destination": "/favicon/apple-touch-icon.png"
    },
    {
      "source": "/site.webmanifest",
      "destination": "/favicon/site.webmanifest"
    }
  ]
}
```

### 📱 Podporované platformy

#### Desktop prohlížeče
- ✅ Chrome, Firefox, Safari, Edge
- ✅ favicon.ico (fallback)
- ✅ favicon.svg (moderní prohlížeče)
- ✅ favicon-96x96.png (vysoká kvalita)

#### Mobilní zařízení
- ✅ iOS Safari (apple-touch-icon)
- ✅ Android Chrome (PWA manifest)
- ✅ Samsung Internet
- ✅ Opera Mobile

#### PWA (Progressive Web App)
- ✅ Web App Manifest
- ✅ 192x192 a 512x512 ikony
- ✅ Theme color: #1e40af
- ✅ Apple Web App capable

### 🎨 Design specifikace

#### Barvy
- **Primární:** #1e40af (modrá)
- **Sekundární:** #ffffff (bílá)
- **Accent:** #f59e0b (žlutá)

#### Velikosti
- **favicon.ico:** 16x16, 32x32, 48x48
- **favicon.svg:** Vektorový (škálovatelný)
- **favicon-96x96.png:** 96x96px
- **apple-touch-icon.png:** 180x180px
- **PWA ikony:** 192x192px, 512x512px

### 🔍 Testování

#### Online nástroje
1. **Favicon Checker:** https://realfavicongenerator.net/favicon_checker
2. **PWA Builder:** https://www.pwabuilder.com/
3. **Web App Manifest Validator:** https://manifest-validator.appspot.com/

#### Lokální testování
```bash
# Spuštění development serveru
npm run dev

# Kontrola faviconů
curl -I http://localhost:3000/favicon.ico
curl -I http://localhost:3000/favicon.svg
curl -I http://localhost:3000/apple-touch-icon.png
```

### 📋 Deployment checklist

#### Před nasazením na Vercel
- [ ] Všechny favicon soubory jsou v `/public/favicon/`
- [ ] `vercel.json` je správně nakonfigurován
- [ ] `layout.tsx` obsahuje všechny link tagy
- [ ] Metadata API je správně nastaveno
- [ ] Build prochází bez chyb (`npm run build`)

#### Po nasazení na Vercel
- [ ] Favicon se zobrazuje v browser tabu
- [ ] Apple Touch Icon funguje na iOS
- [ ] PWA manifest je dostupný
- [ ] Všechny velikosti se načítají správně
- [ ] Cache headers fungují (1 rok cache)

### 🐛 Troubleshooting

#### Favicon se nezobrazuje
1. Zkontrolujte cestu v browser dev tools
2. Ověřte, že soubory jsou v `/public/favicon/`
3. Zkontrolujte `vercel.json` rewrites
4. Vyčistěte browser cache

#### Apple Touch Icon nefunguje
1. Ověřte velikost (180x180px)
2. Zkontrolujte `apple-touch-icon` link tag
3. Testujte na skutečném iOS zařízení

#### PWA manifest chyby
1. Ověřte JSON syntax v `site.webmanifest`
2. Zkontrolujte cesty k ikonám
3. Ověřte theme-color hodnotu

### 📞 Kontakt
- **Email:** info@vajeleko.cz
- **Telefon:** +420 722 914 120
- **Web:** https://vajeleko.cz

---
**✅ Status:** Všechny favicony jsou správně nakonfigurovány a připraveny pro deployment na Vercel!
