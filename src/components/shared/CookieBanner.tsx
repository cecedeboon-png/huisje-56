'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { X } from 'lucide-react'

export function CookieBanner() {
  const t = useTranslations('cookie')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy text-white shadow-2xl">
      <div className="container-content py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-white/90 leading-relaxed max-w-2xl">
          {t('message')}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-sm text-white/70 hover:text-white underline underline-offset-2 transition-colors"
          >
            {t('reject')}
          </button>
          <button
            onClick={accept}
            className="btn-terracotta !py-2 !px-5 text-sm"
          >
            {t('accept')}
          </button>
          <button onClick={reject} className="text-white/60 hover:text-white p-1">
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
