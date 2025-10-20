# EmailJS Setup - Pokyny

## Instalace a Konfigurace

### 1. EmailJS je již nainstalován
```bash
npm list @emailjs/browser
# Výstup: @emailjs/browser@4.4.1
```

### 2. Environment proměnné (.env.local)
Soubor `.env.local` obsahuje:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=FmbqUrQV1kM20cwkH
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_227ajma
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_a0t1jwh
NEXT_PUBLIC_CONTACT_EMAIL=info@vajeleko.cz
```

### 3. Jak funguje formulář?

**Cesta:** `/src/components/Contact.tsx`

#### Inicializace EmailJS (řádek 34)
```typescript
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
```

#### Odeslání emailu (řádek 67-80)
```typescript
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,      // Service ID
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,     // Template ID
  {
    to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service: formData.service,
    message: formData.message,
    reply_to: formData.email
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
);
```

### 4. Funkce formuláře

✓ **Validace** - Kontroluje, že všechna povinná pole jsou vyplněna
✓ **Error handling** - Zobrazuje chybové zprávy
✓ **Loading state** - Tlačítko se zakáže během odesílání
✓ **Success message** - Zelená zpráva po úspěšném odeslání
✓ **Form reset** - Pole se vymažou po odeslání
✓ **Console logging** - Debug informace v konzoli

### 5. Test

1. Jdi na stránku `/kontakt`
2. Vyplň formulář
3. Klikni "Odeslat poptávku"
4. Zkontroluj EmailJS dashboard a email na `info@vajeleko.cz`

### 6. Bezpečnost

⚠️ **DŮLEŽITÉ:**
- `.env.local` je v `.gitignore` a **NESMÍ** být commitnut
- Public Key je bezpečná na klientu (NEXT_PUBLIC prefix)
- Private Key v EmailJS dashboardu se nesmí sdílet

### 7. Troubleshooting

**Formulář nefunguje?**
- Otevři Developer Console (F12) a zkontroluj chyby
- Ověř, že `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` je v `.env.local`
- Restartujs Next.js server: `npm run dev`

**Email nechodí?**
- Zkontroluj EmailJS dashboard: https://dashboard.emailjs.com
- Ověř Service ID a Template ID v `.env.local`
- Zkontroluj, že template je správně nakonfigurován

**Stav tlačítka?**
- Zobrazuje "Odesílám..." během odeslání
- Je disabled (nelze klikat) během procesu
- Vrátí se do normálního stavu po skončení

---

**Všechno je nastaveno a funkční! 🚀**
