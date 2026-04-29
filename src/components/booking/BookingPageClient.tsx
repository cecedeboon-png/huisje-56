'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import type { DateRange } from 'react-day-picker'
import { AvailabilityCalendar } from './AvailabilityCalendar'
import { InquiryForm } from './InquiryForm'

export function BookingPageClient() {
  const t = useTranslations('booking')
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>()

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      {/* Korte uitleg over tarieven */}
      <div className="bg-white border border-stone-100 rounded-sm shadow-sm p-6 md:p-8">
        <h2 className="font-display text-xl text-navy mb-3">
          {t('rates.heading')}
        </h2>
        <p className="text-sm font-body text-stone-600 leading-relaxed">
          {t('rates.note')}
        </p>
      </div>

      {/* Beschikbaarheidskalender */}
      <div>
        <h2 className="font-display text-2xl text-navy mb-4">
          {t('calendar.heading')}
        </h2>
        <AvailabilityCalendar onRangeSelect={setSelectedRange} />
      </div>

      {/* Boekingsaanvraag */}
      <InquiryForm selectedRange={selectedRange} />
    </div>
  )
}
