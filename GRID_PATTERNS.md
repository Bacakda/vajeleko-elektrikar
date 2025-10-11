# 🎨 Grid Pattern Varianty

Dokumentace různých grid patternů (mřížkování) pro Hero sekci a další části webu.

## 📐 Základní Grid Pattern

### 1. Standardní mřížka (40x40px)
```tsx
<div 
  className="absolute inset-0 opacity-30"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px'
  }}
/>
```

### 2. Větší mřížka (80x80px)
```tsx
<div 
  className="absolute inset-0 opacity-25"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.08) 2px, transparent 2px),
      linear-gradient(to bottom, rgba(0,0,0,0.08) 2px, transparent 2px)
    `,
    backgroundSize: '80px 80px'
  }}
/>
```

### 3. Tečkovaná mřížka
```tsx
<div 
  className="absolute inset-0 opacity-30"
  style={{
    backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)',
    backgroundSize: '30px 30px'
  }}
/>
```

### 4. Jemná mřížka (20x20px)
```tsx
<div 
  className="absolute inset-0 opacity-40"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px'
  }}
/>
```

## 🎨 Barevné varianty gradientu

### Bílo-černý (současný)
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-900">
  {/* Grid pattern */}
</div>
```

### Bílo-tmavě modrý
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-gray-900">
  {/* Grid pattern */}
</div>
```

### Světle šedý-tmavě šedý
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-800">
  {/* Grid pattern */}
</div>
```

### Bílá-fialová-černá
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-white via-purple-100 to-gray-900">
  {/* Grid pattern */}
</div>
```

## 🌟 Kompletní vzory

### Varianta 1: Jemný přechod s malou mřížkou
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-700">
  <div 
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px'
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-black/50" />
</div>
```

### Varianta 2: Výrazný kontrast s velkou mřížkou
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-200 to-black">
  <div 
    className="absolute inset-0 opacity-40"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.15) 2px, transparent 2px),
        linear-gradient(to bottom, rgba(0,0,0,0.15) 2px, transparent 2px)
      `,
      backgroundSize: '80px 80px'
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-black/70" />
</div>
```

### Varianta 3: Tečkovaný pattern
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-900">
  <div 
    className="absolute inset-0 opacity-35"
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 2px, transparent 2px)',
      backgroundSize: '40px 40px'
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-black/60" />
</div>
```

### Varianta 4: Dvojitá mřížka (velká + malá)
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-900">
  {/* Velká mřížka */}
  <div 
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.1) 2px, transparent 2px),
        linear-gradient(to bottom, rgba(0,0,0,0.1) 2px, transparent 2px)
      `,
      backgroundSize: '80px 80px'
    }}
  />
  {/* Malá mřížka */}
  <div 
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px'
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-black/60" />
</div>
```

## 🎯 CSS Utility Třídy

Můžete použít předpřipravené CSS třídy z `globals.css`:

### .grid-pattern
Standardní mřížka 40x40px
```tsx
<div className="absolute inset-0 grid-pattern opacity-30" />
```

### .grid-pattern-dots
Tečkovaná mřížka
```tsx
<div className="absolute inset-0 grid-pattern-dots opacity-30" />
```

### .grid-pattern-large
Velká mřížka 80x80px
```tsx
<div className="absolute inset-0 grid-pattern-large opacity-25" />
```

### .hero-grid-bg
Kompletní pozadí s gradientem a mřížkou
```tsx
<div className="hero-grid-bg min-h-screen" />
```

## 💡 Tipy pro použití

1. **Opacity**: Upravte `opacity` mezi 0.1 - 0.5 pro jiný efekt
2. **Velikost**: Měňte `backgroundSize` pro větší/menší kostičky
3. **Barva**: Změňte `rgba(0,0,0,0.1)` na jinou barvu
4. **Gradient overlay**: Přidejte další gradient layer pro lepší kontrast s textem

## 🔧 Jak změnit v Hero.tsx

Najděte řádek 10-24 v `src/components/Hero.tsx` a nahraďte pozadí některou z variant výše.

Příklad:
```tsx
// Původní
<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-900">

// Změněné na tečkovaný pattern
<div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-gray-900">
  <div 
    className="absolute inset-0 opacity-35"
    style={{
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 2px, transparent 2px)',
      backgroundSize: '40px 40px'
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-black/60" />
</div>
```

## 📱 Responzivní úpravy

Pro různé velikosti obrazovek:
```tsx
<div 
  className="absolute inset-0 opacity-30"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
    `,
    // Menší mřížka na mobilu, větší na desktopu
    backgroundSize: window.innerWidth < 768 ? '30px 30px' : '40px 40px'
  }}
/>
```

## 🔄 Obrácený gradient pro plynulé přechody

Pro vytvoření hladkého přechodu mezi sekcemi použijte obrácený gradient:

### Hero → Services přechod
```tsx
// HERO sekce (bílá → černá)
<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-900">
  {/* Grid pattern */}
</div>

// SERVICES sekce (černá → bílá) - obrácený gradient
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-100 to-white">
  {/* Grid pattern */}
</div>
```

### Výsledek:
```
HERO:     ⬜⬜⬜ → 🔲🔲 → ⬛⬛⬛
                         ↓ plynulý přechod
SERVICES: ⬛⬛⬛ → 🔲🔲 → ⬜⬜⬜
```

---

**Současně použité patterny**: 
- Hero: Bílo-černý gradient s 40x40px mřížkováním (opacity 0.3)
- Services: Černo-bílý gradient (obrácený) se stejnou mřížkou

