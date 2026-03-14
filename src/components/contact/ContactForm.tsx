'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contactSchema, type ContactFormData } from '@/types/forms'

export function ContactForm() {
  const t = useTranslations('contact.form')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
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
      <div className="bg-white rounded-sm border border-stone-100 shadow-sm p-10 text-center">
        <CheckCircle size={44} className="text-sage mx-auto mb-4" />
        <h3 className="font-display text-2xl text-navy mb-2">Bericht verstuurd!</h3>
        <p className="text-stone-500 font-body">{t('success')}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-sm border border-stone-100 shadow-sm p-6 md:p-8">
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

        <div>
          <label className="form-label">{t('subject')}</label>
          <input
            {...register('subject')}
            type="text"
            placeholder="Bijv: Vraag over beschikbaarheid"
            className="form-input"
          />
          {errors.subject && (
            <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label className="form-label">{t('message')}</label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Jouw bericht..."
            className="form-input resize-none"
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
          )}
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
