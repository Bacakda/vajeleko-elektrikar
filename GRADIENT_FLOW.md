# 🌊 Gradient Flow - VaJeleko s.r.o

Vizuální dokumentace plynulých přechodů gradientů napříč sekcemi webu.

## 🎨 Přehled 3 sekcí s gradienty

### 1️⃣ HERO Sekce
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-900">
```

**Směr:** Diagonálně vpravo dolů (bottom-right)  
**Gradient:** ⬜ Bílá (vlevo nahoře) → 🔲 Světle šedá → ⬛ Černá (vpravo dole)

```
┌─────────────────────────────────────┐
│ ⬜                                  │
│   ⬜⬜                              │
│     🔲🔲                          │
│       🔲🔲                        │
│         ⬛⬛                      │
│           ⬛⬛                    │
│             ⬛⬛⬛                │
└─────────────────────────────────────┘
```

---

### 2️⃣ SERVICES Sekce
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-100 to-white">
```

**Směr:** Diagonálně vpravo dolů (bottom-right) - **OBRÁCENÝ**  
**Gradient:** ⬛ Černá (vlevo nahoře) → 🔲 Světle šedá → ⬜ Bílá (vpravo dole)

```
┌─────────────────────────────────────┐
│ ⬛                                  │
│   ⬛⬛                              │
│     🔲🔲                          │
│       🔲🔲                        │
│         ⬜⬜                      │
│           ⬜⬜                    │
│             ⬜⬜⬜                │
└─────────────────────────────────────┘
```

**Efekt:** Hero končí černě vpravo dole → Services začíná černě vlevo nahoře → Plynulý vizuální přechod! ✨

---

### 3️⃣ ABOUT Sekce
```tsx
<div className="absolute inset-0 bg-gradient-to-l from-white via-gray-100 to-gray-900">
```

**Směr:** Zprava doleva (left)  
**Gradient:** ⬜ Bílá (vpravo) → 🔲 Světle šedá → ⬛ Černá (vlevo)

```
┌─────────────────────────────────────┐
│ ⬛⬛⬛⬛   🔲🔲🔲   ⬜⬜⬜⬜        │
│ ⬛⬛⬛⬛   🔲🔲🔲   ⬜⬜⬜⬜        │
│ ⬛⬛⬛⬛   🔲🔲🔲   ⬜⬜⬜⬜        │
│ ⬛⬛⬛⬛   🔲🔲🔲   ⬜⬜⬜⬜        │
└─────────────────────────────────────┘
    ↑                          ↑
  ČERNÁ                      BÍLÁ
  VLEVO                     VPRAVO
```

**Efekt:** Services končí bíle vpravo → About začíná bíle vpravo → Černá je teď vlevo! 🔄

---

## 🌈 Celkový Flow

```
════════════════════════════════════════════════════════════
                        HERO SEKCE
┌─────────────────────────────────────────────────────────┐
│ ⬜⬜ (bílá vlevo nahoře)                                │
│    ↘                                                    │
│      🔲🔲 (střed)                                      │
│        ↘                                                │
│          ⬛⬛⬛ (černá vpravo dole)                    │
└─────────────────────────────────────────────────────────┘
            ↓ plynulý vizuální přechod
════════════════════════════════════════════════════════════
                      SERVICES SEKCE
┌─────────────────────────────────────────────────────────┐
│ ⬛⬛ (černá vlevo nahoře) ← NAVAZUJE!                   │
│    ↘                                                    │
│      🔲🔲 (střed)                                      │
│        ↘                                                │
│          ⬜⬜⬜ (bílá vpravo dole)                      │
└─────────────────────────────────────────────────────────┘
            ↓ plynulý vizuální přechod
════════════════════════════════════════════════════════════
                       ABOUT SEKCE
┌─────────────────────────────────────────────────────────┐
│ ⬛⬛⬛⬛⬛⬛ ◄════ 🔲🔲 ◄════ ⬜⬜⬜ ← NAVAZUJE!          │
│   (vlevo)         (střed)      (vpravo)                 │
│   ČERNÁ                         BÍLÁ                    │
└─────────────────────────────────────────────────────────┘
════════════════════════════════════════════════════════════
```

## 🎯 Klíčové body

1. **Hero → Services**: Obrácený diagonální gradient vytváří vizuální kontinuitu
2. **Services → About**: Změna směru (horizontální) přidává dynamiku
3. **Grid pattern**: Všechny 3 sekce mají stejnou mřížku 40x40px (opacity 0.3)
4. **Návaznost**: Každá sekce končí tam, kde další začíná

## 📐 Tailwind třídy

| Sekce    | Gradient směr     | From        | Via         | To          |
|----------|-------------------|-------------|-------------|-------------|
| Hero     | `bg-gradient-to-br` | `white`     | `gray-100`  | `gray-900`  |
| Services | `bg-gradient-to-br` | `gray-900`  | `gray-100`  | `white`     |
| About    | `bg-gradient-to-l`  | `white`     | `gray-100`  | `gray-900`  |

## 🔧 Jak upravit

### Změnit směr gradientu:
- `bg-gradient-to-r` - zleva doprava
- `bg-gradient-to-l` - zprava doleva (About)
- `bg-gradient-to-b` - shora dolů
- `bg-gradient-to-t` - zdola nahoru
- `bg-gradient-to-br` - diagonálně (bottom-right) (Hero, Services)
- `bg-gradient-to-bl` - diagonálně (bottom-left)
- `bg-gradient-to-tr` - diagonálně (top-right)
- `bg-gradient-to-tl` - diagonálně (top-left)

### Změnit barvy:
```tsx
// Světlejší gradient
from-gray-50 via-gray-200 to-gray-700

// Temnější gradient
from-gray-100 via-gray-400 to-black

// S barevným akcentem
from-white via-blue-100 to-gray-900
```

---

**Vytvořeno:** 7. října 2024  
**Aktuální design:** 3 sekce s plynulými gradienty a grid mřížkou
