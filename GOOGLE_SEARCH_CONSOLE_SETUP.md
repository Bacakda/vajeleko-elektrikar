# Google Search Console Setup - VaJeleko s.r.o

## 🚀 Kompletní SEO Setup pro Google Search Console

### 1. Připojení domény k Google Search Console

1. **Přejděte na [Google Search Console](https://search.google.com/search-console)**
2. **Přidejte vlastnost:**
   - Zvolte "URL prefix" 
   - Zadejte: `https://vajeleko.cz`
3. **Ověření vlastnictví:**
   - Zvolte "HTML tag" metodu
   - Zkopírujte verification kód
   - Vložte do `src/app/layout.tsx` do `<head>` sekce

### 2. Sitemap Configuration

**Sitemap URL:** `https://vajeleko.cz/sitemap.xml`

**Jak přidat sitemap:**
1. V Google Search Console → Sitemaps
2. Přidejte novou sitemap: `sitemap.xml`
3. Odeslat pro indexování

### 3. Robots.txt Optimalizace

**Robots.txt URL:** `https://vajeleko.cz/robots.txt`

**Obsahuje:**
- ✅ Povolení pro Googlebot
- ✅ Blokování nechtěných botů
- ✅ Sitemap reference
- ✅ Crawl delay optimalizace

### 4. Structured Data (JSON-LD)

**Implementováno:**
- ✅ LocalBusiness schema
- ✅ Organization schema  
- ✅ WebSite schema
- ✅ Service schema
- ✅ BreadcrumbList schema

### 5. Core Web Vitals Monitoring

**Doporučené metriky:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### 6. Google Analytics Integration

**Setup:**
1. Vytvořte Google Analytics 4 property
2. Zkopírujte Measurement ID (G-XXXXXXXXXX)
3. Přidejte do `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 7. Enhanced E-commerce Tracking

**Implementované eventy:**
- `service_inquiry` - zájem o služby
- `phone_call` - volání z floating buttonu
- `form_submit` - odeslání kontaktního formuláře
- `project_view` - zobrazení projektů

### 8. Mobile-First Indexing

**Optimalizace:**
- ✅ Responsive design
- ✅ Touch-friendly interface
- ✅ Fast loading images (WebP)
- ✅ Optimized fonts (Inter)

### 9. Local SEO

**Structured Data obsahuje:**
- Business address
- Phone number
- Service area (Česká republika)
- Opening hours
- Service categories

### 10. Performance Monitoring

**Doporučené nástroje:**
- Google PageSpeed Insights
- Google Search Console Core Web Vitals
- Lighthouse CI

### 11. URL Structure

**Optimalizované URL:**
- `/` - Hlavní stránka
- `/sluzby` - Služby
- `/projekty` - Projekty
- `/projekty/[id]` - Detail projektu
- `/o-nas` - O nás
- `/kontakt` - Kontakt

### 12. Next Steps

1. **Ověřte doménu** v Google Search Console
2. **Přidejte sitemap** do GSC
3. **Nastavte Google Analytics** tracking
4. **Monitorujte Core Web Vitals**
5. **Pravidelně kontrolujte** Search Console reporty

### 13. Kontaktní informace pro SEO

**Pro technické dotazy:**
- Email: info@vajeleko.cz
- Telefon: +420 722 914 120

**Důležité soubory:**
- `src/app/sitemap.ts` - Sitemap generátor
- `src/app/layout.tsx` - Metadata a structured data
- `public/robots.txt` - Robots.txt konfigurace
- `public/manifest.json` - PWA manifest
- `src/lib/seo-utils.ts` - SEO utility funkce
