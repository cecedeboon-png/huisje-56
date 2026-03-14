'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import type { DateRange } from 'react-day-picker'
import { PricingTable } from './PricingTable'
import { AvailabilityCalendar } from './AvailabilityCalendar'
import { InquiryForm } from './InquiryForm'

export function BookingPageClient() {
  const t = useTranslations('booking')
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
      <div className="lg:col-span-2">
        <PricingTable />
      </div>
      <div className="lg:col-span-3 space-y-8">
        <div>
          <h2 className="font-display text-2xl text-navy mb-4">
            {t('calendar.heading')}
          </h2>
          <AvailabilityCalendar onRangeSelect={setSelectedRange} />
        </div>
        <InquiryForm selectedRange={selectedRange} />
      </div>
    </div>
  )
}
