'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { DayPicker, type DateRange } from 'react-day-picker'
import { eachDayOfInterval, parseISO, isBefore, startOfToday } from 'date-fns'
import { nl, enUS, de } from 'date-fns/locale'
import { useLocale } from 'next-intl'
import type { PublicAvailabilityResponse } from '@/types/availability'
import 'react-day-picker/style.css'

interface AvailabilityCalendarProps {
  onRangeSelect?: (range: DateRange | undefined) => void
}

const localeMap = { nl, en: enUS, de }

export function AvailabilityCalendar({ onRangeSelect }: AvailabilityCalendarProps) {
  const t = useTranslations('booking.calendar')
  const locale = useLocale() as 'nl' | 'en' | 'de'
  const [selected, setSelected] = useState<DateRange | undefined>()
  const [disabledDates, setDisabledDates] = useState<Date[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/availability')
      .then((r) => r.json())
      .then((data: PublicAvailabilityResponse) => {
        const dates = data.blockedRanges.flatMap((range) =>
          eachDayOfInterval({
            start: parseISO(range.from),
            end: parseISO(range.to),
          })
        )
        setDisabledDates(dates)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  function handleSelect(range: DateRange | undefined) {
    setSelected(range)
    onRangeSelect?.(range)
  }

  const today = startOfToday()

  return (
    <div className="bg-white border border-stone-100 rounded-sm shadow-sm p-4 md:p-6 overflow-hidden">
      <p className="text-sm text-stone-500 font-body mb-4">{t('instruction')}</p>

      {loading ? (
        <div className="flex items-center justify-center h-48 text-stone-400 text-sm font-body">
          Beschikbaarheid laden...
        </div>
      ) : (
        <div className="flex justify-center">
          <DayPicker
            mode="range"
            selected={selected}
            onSelect={handleSelect}
            disabled={[
              { before: today },
              ...disabledDates,
            ]}
            numberOfMonths={2}
            locale={localeMap[locale]}
            classNames={{
              root: 'rdp-root',
              months: 'flex flex-col lg:flex-row gap-6 justify-center',
              month: 'w-full max-w-[19rem] mx-auto',
              month_caption: 'font-display text-navy text-base capitalize mb-3 text-center',
              nav: 'flex items-center gap-1',
              button_previous: 'p-1.5 hover:bg-stone-100 rounded transition-colors text-navy',
              button_next: 'p-1.5 hover:bg-stone-100 rounded transition-colors text-navy',
              month_grid: 'w-full table-fixed',
              weekday: 'text-xs text-stone-400 font-body font-medium uppercase text-center',
              day: 'aspect-square text-sm font-body p-0 text-center',
              day_button: 'w-full h-full aspect-square rounded hover:bg-navy/10 transition-colors',
              selected: 'bg-navy text-white rounded',
              range_start: 'bg-navy text-white rounded-l',
              range_end: 'bg-navy text-white rounded-r',
              range_middle: 'bg-navy/15 text-navy',
              disabled: 'text-stone-300 line-through cursor-not-allowed opacity-60',
              outside: 'text-stone-200',
              today: 'font-bold text-terracotta',
            }}
          />
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs font-body text-stone-500">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-sm bg-navy inline-block" />
          {t('selected')}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-sm bg-stone-200 inline-block" />
          {t('unavailable')}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-sm bg-white border border-stone-200 inline-block" />
          {t('available')}
        </span>
      </div>
    </div>
  )
}
