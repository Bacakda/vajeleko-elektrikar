# 🎣 Custom React Hooks

Custom hooks pro opakovaně používanou logiku.

## useScroll

Sledování scroll pozice.

```typescript
import { useScroll } from '@/hooks/useScroll'

function MyComponent() {
  const { scrollY, isScrolled } = useScroll()
  
  return (
    <div className={isScrolled ? 'sticky' : ''}>
      Scroll pozice: {scrollY}px
    </div>
  )
}
```

## useMediaQuery

Media query hook pro responzivitu.

```typescript
import { 
  useMediaQuery, 
  useIsMobile, 
  useIsTablet, 
  useIsDesktop 
} from '@/hooks/useMediaQuery'

function MyComponent() {
  const isMobile = useIsMobile()        // < 768px
  const isTablet = useIsTablet()        // 769-1024px
  const isDesktop = useIsDesktop()      // > 1025px
  const isLarge = useMediaQuery('(min-width: 1440px)')
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isDesktop && <DesktopView />}
    </div>
  )
}
```

## useIntersectionObserver

Detekce viditelnosti elementu.

```typescript
import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

function MyComponent() {
  const ref = useRef(null)
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.5,        // 50% viditelnosti
    rootMargin: '0px'
  })
  
  return (
    <div ref={ref}>
      {isVisible ? 'Viditelné!' : 'Skryté'}
    </div>
  )
}
```

## Příklady použití

### Lazy loading animace
```typescript
const ref = useRef(null)
const isVisible = useIntersectionObserver(ref)

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
  >
    Obsah
  </motion.div>
)
```

### Responzivní komponenta
```typescript
const isMobile = useIsMobile()

return isMobile ? <MobileNav /> : <DesktopNav />
```

### Sticky header
```typescript
const { isScrolled } = useScroll()

return (
  <header className={isScrolled ? 'shadow-lg' : ''}>
    Navigace
  </header>
)
```

