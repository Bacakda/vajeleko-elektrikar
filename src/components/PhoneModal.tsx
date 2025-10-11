'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, PhoneIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

interface PhoneModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PhoneModal({ isOpen, onClose }: PhoneModalProps) {
  const phoneNumbers = [
    { number: '+420 722 914 120', icon: PhoneIcon },
    { number: '+420 605 999 878', icon: DevicePhoneMobileIcon }
  ]

  const handlePhoneClick = (phoneNumber: string) => {
    // Odstranit mezery z čísla pro tel: link
    const cleanNumber = phoneNumber.replace(/\s/g, '')
    window.location.href = `tel:${cleanNumber}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 md:right-8 z-[9999] w-72 md:w-80"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-xl font-bold text-black">Zavolejte nám</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-3">
                {phoneNumbers.map((phone, index) => {
                  const IconComponent = phone.icon
                  return (
                    <motion.button
                      key={phone.number}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handlePhoneClick(phone.number)}
                      className="w-full p-4 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-xl transition-all hover:scale-105 hover:shadow-lg group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-black text-lg">{phone.number}</div>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Klikněte na číslo pro rychlé volání
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}