# 🚀 Deployment Guide - VaJeleko s.r.o

## Příprava před nasazením

### 1. Zkontrolujte údaje
- ✅ Kontaktní informace v `src/lib/constants.ts`
- ✅ Email v `.env.local` (zkopírujte do produkčního prostředí)
- ✅ Všechny texty a popisy
- ✅ Metadata v `src/app/layout.tsx`

### 2. Přidejte obsah
- ✅ Reálné obrázky do `public/images/`
- ✅ Logo do `public/images/logos/`
- ✅ Favicon (32x32px)
- ✅ Reference a testimonials

### 3. Testování
```bash
# Lokální build test
npm run build
npm start

# Test na různých zařízeních
# - Desktop (Chrome, Firefox, Safari)
# - Tablet (iPad)
# - Mobile (iPhone, Android)
```

## Deploy na Vercel (Doporučeno) ⭐

### Výhody Vercel:
- ✅ Automatický deploy z Git
- ✅ Serverless funkce zdarma
- ✅ CDN po celém světě
- ✅ SSL certifikát zdarma
- ✅ Náhled pull requestů
- ✅ Edge network pro rychlost

### Kroky:

1. **Push do GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/vajeleko.git
git push -u origin main
```

2. **Připojte Vercel**
- Jděte na [vercel.com](https://vercel.com)
- Zaregistrujte se (můžete přes GitHub)
- Klikněte "New Project"
- Importujte GitHub repository
- Vercel automaticky detekuje Next.js

3. **Nastavení prostředí**
- V Vercel dashboardu: Settings → Environment Variables
- Přidejte všechny proměnné z `.env.local`

4. **Custom doména**
- Settings → Domains
- Přidejte vaši doménu (např. vajeleko.cz)
- Nastavte DNS záznamy podle instrukcí

5. **Deploy**
- Každý push do `main` branch automaticky deployuje
- Preview pro pull requesty

## Deploy na Netlify

### Kroky:

1. **Build settings**
```
Build command: npm run build
Publish directory: .next
```

2. **Netlify konfigurace**
Vytvořte `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

3. **Deploy**
- Push do GitHub
- Připojte repository na Netlify
- Nastavte environment variables

## Deploy na vlastní server

### Požadavky:
- Node.js 18+ (doporučeno Node.js 20)
- PM2 pro process management
- Nginx jako reverse proxy
- SSL certifikát (Let's Encrypt)

### Kroky:

1. **Build**
```bash
npm run build
```

2. **Upload na server**
```bash
# Nahrajte tyto složky/soubory:
- .next/
- public/
- node_modules/
- package.json
- next.config.js
```

3. **PM2 Setup**
```bash
# Instalace PM2
npm install -g pm2

# Spuštění
pm2 start npm --name "vajeleko" -- start
pm2 save
pm2 startup
```

4. **Nginx konfigurace**
```nginx
server {
    listen 80;
    server_name vajeleko.cz www.vajeleko.cz;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **SSL certifikát**
```bash
# Certbot (Let's Encrypt)
sudo certbot --nginx -d vajeleko.cz -d www.vajeleko.cz
```

## Environment Variables

### Produkční prostředí
Nastavte tyto proměnné:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://vajeleko.cz
NEXT_PUBLIC_SITE_NAME=VaJeleko s.r.o

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=info@vajeleko.cz
NEXT_PUBLIC_PHONE=+420123456789

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (pokud implementováno)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@vajeleko.cz
SMTP_PASSWORD=your_password
```

## Post-deployment checklist

Po nasazení zkontrolujte:

- [ ] Web je dostupný na doméně
- [ ] SSL certifikát funguje (https://)
- [ ] Kontaktní formulář funguje
- [ ] Všechny odkazy fungují
- [ ] Obrázky se načítají
- [ ] Mobilní verze funguje správně
- [ ] Page Speed je dobrý (Google PageSpeed Insights)
- [ ] Meta tagy pro SEO
- [ ] Google Search Console nastavení
- [ ] Google Analytics (pokud používáte)
- [ ] Sitemap odeslána do Google

## Monitoring

### Doporučené nástroje:

1. **Uptime monitoring**
   - UptimeRobot (zdarma)
   - Pingdom
   - StatusCake

2. **Analytics**
   - Google Analytics
   - Plausible Analytics
   - Fathom Analytics

3. **Error tracking**
   - Sentry
   - LogRocket
   - Bugsnag

## Backup

### Co zálohovat:
- Databáze (pokud máte)
- Environment variables
- Custom obrázky
- Konfigurace

### Kde zálohovat:
- GitHub (kód)
- Cloud storage (obrázky)
- Export env variables

## Aktualizace

```bash
# Lokální změny
git add .
git commit -m "Update XYZ"
git push origin main

# Vercel/Netlify automaticky deployují
# Vlastní server: SSH + git pull + pm2 restart
```

## Troubleshooting

### Web se nenačítá
1. Zkontrolujte build logy
2. Ověřte environment variables
3. Zkontrolujte Node.js verzi

### 404 chyby
1. Zkontrolujte routing v Next.js
2. Ověřte Nginx/server konfiguraci

### Pomalé načítání
1. Optimalizujte obrázky
2. Zkontrolujte CDN
3. Enable caching

## Podpora

Pro pomoc s deployment:
- 📧 Email: info@vajeleko.cz
- 📚 Next.js docs: https://nextjs.org/docs/deployment
- 💬 Vercel support: https://vercel.com/support
