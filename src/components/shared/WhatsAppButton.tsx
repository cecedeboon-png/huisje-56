'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '31622522854'

export function WhatsAppButton() {
  const message = encodeURIComponent('Hallo, ik heb een vraag over Huisje 56 in Gaastmeer.')
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
    >
      {/* Icon-only on small screens, label on md+ */}
      <span className="flex items-center gap-2 px-4 py-3">
        <MessageCircle size={22} strokeWidth={2} className="shrink-0" />
        <span className="hidden md:inline text-sm font-medium font-body whitespace-nowrap">
          WhatsApp
        </span>
      </span>
    </a>
  )
}
