'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

export function IntroSection() {
  const t = useTranslations('home.intro')
  const locale = useLocale()

  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fade-up" duration={700}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
              {t('heading')}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={150} duration={700}>
            <p className="text-stone-600 font-body text-lg md:text-xl leading-relaxed mb-8">
              {t('body')}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={300} duration={700}>
            <Link
              href={`/${locale}/het-huisje`}
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-600 font-medium font-body transition-colors group"
            >
              Ontdek het huisje <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
