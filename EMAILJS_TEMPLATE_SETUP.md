# EmailJS Template - Hezký Email pro Poptávky

## 📧 Jak Nastavit HTML Template v EmailJS

### Krok 1: Otevři EmailJS Dashboard
1. Jdi na https://dashboard.emailjs.com
2. Přihlášeníse svým účtem
3. Jdi do **Email Templates** v levé menu

### Krok 2: Edituj Template
1. Vyhledej template `template_a0t1jwh`
2. Klikni na **Edit**

### Krok 3: Zkopiruj HTML Template
1. Otevři soubor `src/components/EmailTemplate.tsx` v projektu
2. Zkopiruj celý obsah mezi backticks (```)
3. V EmailJS editoru vlož obsah do sekce **HTML Content**

### Krok 4: Ověř Proměnné
V HTML template se používají tyto proměnné:
- `{{from_name}}` - Jméno odesílatele
- `{{from_email}}` - Email odesílatele
- `{{phone}}` - Telefonní číslo
- `{{service}}` - Vybraná služba
- `{{message}}` - Zpráva od zákazníka
- `{{timestamp}}` - Čas přijetí (volitelné)

### Krok 5: Ulož
Klikni **Save** v EmailJS editoru

---

## 🎨 Co je v Template Zahrnuté

✅ **Logo Vajeleko s.r.o** - Na začátku emailu
✅ **Vše z formuláře** - Jméno, email, telefon, služba, zpráva
✅ **Hezký Design** - Tmavá témata se gradientem, responzivní
✅ **Tlačítko Odpovědět** - Automaticky odešle email odesílateli
✅ **Footer s Kontaktem** - Adresa, telefon, email
✅ **Mobilní Podpora** - Hezky se zobrazí i na mobilu

---

## 📝 Příklad HTML

Template obsahuje:
- Header s logem a badgem
- Tabulka s informacemi (jméno, email, telefon, služba)
- Zpráva od zákazníka
- Tlačítko "Odpovědět zákazníkovi"
- Footer s kontakty

---

## ⚙️ EmailJS Konfiguraci

Tvá konfiguraci:
- **Service ID:** `service_227ajma`
- **Template ID:** `template_a0t1jwh`
- **Public Key:** `FmbqUrQV1kM20cwkH`

Vše je nastaveno v `.env.local`

---

## 🧪 Testování

1. Běž na http://localhost:3000/kontakt
2. Vyplň formulář a odešli
3. Zkontroluj email na `info@vajeleko.cz`
4. Měl by přijít hezký email s tvým template

---

## 📱 Responsivní Design

Template automaticky přizpůsobí velikost:
- **Desktop** (>600px): Plné rozložení, tabulka vedle sebe
- **Mobil** (<600px): Vrstvené rozložení, optimalizováno pro čtení

---

## 🔧 Customizace

Pokud chceš změnit barvy, loga nebo text:
1. Otevři `src/components/EmailTemplate.tsx`
2. Uprav barvy v `<style>` sekci
3. Zkopiruj nový HTML do EmailJS
4. Ulož a testuj
