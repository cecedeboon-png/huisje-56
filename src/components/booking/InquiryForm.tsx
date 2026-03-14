'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import type { DateRange } from 'react-day-picker'
import { format } from 'date-fns'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { inquirySchema, type InquiryFormData } from '@/types/forms'

interface InquiryFormProps {
  selectedRange?: DateRange
}

export function InquiryForm({ selectedRange }: InquiryFormProps) {
  const t = useTranslations('booking.form')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      arrivalDate: selectedRange?.from ? format(selectedRange.from, 'yyyy-MM-dd') : '',
      departureDate: selectedRange?.to ? format(selectedRange.to, 'yyyy-MM-dd') : '',
      guests: 2,
    },
  })

  async function onSubmit(data: InquiryFormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-sm border border-stone-100 shadow-sm p-8 text-center">
        <CheckCircle size={40} className="text-sage mx-auto mb-4" />
        <h3 className="font-display text-xl text-navy mb-2">Aanvraag verstuurd!</h3>
        <p className="text-stone-600 font-body text-sm">{t('success')}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-sm border border-stone-100 shadow-sm p-6 md:p-8">
      <h3 className="font-display text-xl text-navy mb-1">{t('heading')}</h3>
      <p className="text-sm text-stone-500 font-body mb-6">{t('subheading')}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label">{t('name')}</label>
            <input
              {...register('name')}
              type="text"
              placeholder="Jouw naam"
              className="form-input"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="form-label">{t('email')}</label>
            <input
              {...register('email')}
              type="email"
              placeholder="jouw@email.nl"
              className="form-input"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label">{t('phone')}</label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="+31 6 12 34 56 78"
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">{t('guests')}</label>
            <select {...register('guests')} className="form-input">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'persoon' : 'personen'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label">{t('arrivalDate')}</label>
            <input
              {...register('arrivalDate')}
              type="date"
              defaultValue={
                selectedRange?.from ? format(selectedRange.from, 'yyyy-MM-dd') : ''
              }
              className="form-input"
            />
            {errors.arrivalDate && (
              <p className="text-xs text-red-500 mt-1">{errors.arrivalDate.message}</p>
            )}
          </div>
          <div>
            <label className="form-label">{t('departureDate')}</label>
            <input
              {...register('departureDate')}
              type="date"
              defaultValue={
                selectedRange?.to ? format(selectedRange.to, 'yyyy-MM-dd') : ''
              }
              className="form-input"
            />
            {errors.departureDate && (
              <p className="text-xs text-red-500 mt-1">{errors.departureDate.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="form-label">{t('message')}</label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Heb je vragen of bijzondere wensen?"
            className="form-input resize-none"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-sm text-red-600 font-body">
            <AlertCircle size={15} />
            {t('error')}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-terracotta w-full justify-center text-base py-3.5"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              {t('submitting')}
            </>
          ) : (
            <>
              <Send size={16} />
              {t('submit')}
            </>
          )}
        </button>
      </form>
    </div>
  )
}
