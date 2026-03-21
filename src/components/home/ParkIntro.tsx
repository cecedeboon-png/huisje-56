'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll, StaggerChildren } from '@/components/shared/AnimateOnScroll'

export function ParkIntro() {
  const t = useTranslations('home.park')
  const features = t.raw('features') as string[]

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <AnimateOnScroll animation="fade-up">
              <SectionHeading heading={t('heading')} />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="text-stone-600 leading-relaxed mb-8 font-body text-base md:text-lg">
                {t('body')}
              </p>
            </AnimateOnScroll>
            <StaggerChildren
              className="space-y-3"
              staggerDelay={80}
              animation="fade-left"
              duration={400}
            >
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-body text-stone-700 list-none">
                  <span className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-sage-600" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </StaggerChildren>
          </div>

          {/* Photo mosaic */}
          <AnimateOnScroll animation="fade-left" delay={200} duration={800}>
            <div className="grid grid-cols-2 gap-3 h-[420px]">
              <div className="relative row-span-2 overflow-hidden rounded-sm group">
                <Image
                  src="/images/gallery/foto14-park-water-winter.jpg"
                  alt="Piramidehuisjes aan het water in Gaastmeer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm group">
                <Image
                  src="/images/gallery/foto06-woonkamer-trap-water.jpg"
                  alt="Woonkamer met uitzicht over het water"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="25vw"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm group">
                <Image
                  src="/images/gallery/foto16-zonsondergang-bolderkar.jpg"
                  alt="Zonsondergang bij het park met bolderkar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="25vw"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
