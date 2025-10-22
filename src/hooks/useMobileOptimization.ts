'use client'

import { useEffect, useState } from 'react'

export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      // Detekce mobilního zařízení podle velikosti obrazovky
      const mobileSize = window.innerWidth <= 768
      
      // Detekce touch zařízení
      const touchDevice = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 ||
                         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Detekce pomalého připojení
      const connection = (navigator as { connection?: { effectiveType?: string } }).connection
      const slowConnection = connection && 
                           (connection.effectiveType === 'slow-2g' || 
                            connection.effectiveType === '2g')
      
      // Detekce preferencí pro snížené animace
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      // Vypnout animace pokud je splněna jakákoliv podmínka
      const shouldDisableAnimations = mobileSize || touchDevice || slowConnection || prefersReducedMotion
      
      setIsMobile(mobileSize)
      setIsTouchDevice(touchDevice)
      
      // Přidat CSS třídu pro vypnutí animací
      if (shouldDisableAnimations) {
        document.documentElement.classList.add('disable-animations')
      } else {
        document.documentElement.classList.remove('disable-animations')
      }
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    // Sledovat změny v preferencích
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
      mediaQuery.removeEventListener('change', checkDevice)
    }
  }, [])

  return { isMobile, isTouchDevice }
}
