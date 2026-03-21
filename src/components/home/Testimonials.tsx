'use client'

import { useTranslations } from 'next-intl'
import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll, StaggerChildren } from '@/components/shared/AnimateOnScroll'

export function Testimonials() {
  const t = useTranslations('home.testimonials')
  const items = t.raw('items') as Array<{
    quote: string
    author: string
    location: string
    year: string
  }>

  return (
    <section className="section-padding bg-navy/5">
      <div className="container-content">
        <AnimateOnScroll animation="fade-up">
          <SectionHeading
            heading={t('heading')}
            centered
          />
        </AnimateOnScroll>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={150}
          animation="fade-up"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-sm p-7 shadow-sm border border-stone-100 flex flex-col transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote size={28} className="text-terracotta/40 shrink-0" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-terracotta fill-terracotta" />
                  ))}
                </div>
              </div>
              <p className="text-stone-700 font-body leading-relaxed text-sm italic flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-stone-100">
                <p className="text-navy font-display text-sm font-medium">{item.author}</p>
                <p className="text-stone-400 text-xs font-body mt-0.5">
                  {item.location} · {item.year}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
