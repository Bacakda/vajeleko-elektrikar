'use client'

import { useState, useEffect } from 'react'
import { PhoneIcon } from '@heroicons/react/24/outline'
import PhoneModal from './PhoneModal'

export default function FloatingCallButton() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [showNotification, setShowNotification] = useState(true)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = () => {
    setShowNotification(false)
    setIsPhoneModalOpen(true)
  }

  if (!isMounted) return null

  return (
    <>
      {/* Plovoucí tlačítko v pravém dolním rohu */}
      <div className="fixed bottom-8 right-8 z-[9999]">
        <button
          onClick={handleClick}
          className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95 relative"
        >
          <PhoneIcon className="w-7 h-7 text-black" />
          {/* Notifikační badge - číslo 1 na obvodu - zmizí po kliknutí */}
          {showNotification && (
            <div className="absolute -top-1 -right-1 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-yellow-400">
              1
            </div>
          )}
        </button>
      </div>

      {/* Phone Modal */}
      <PhoneModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />
    </>
  )
}
