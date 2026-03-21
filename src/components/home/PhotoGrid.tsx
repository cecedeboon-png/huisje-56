'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll'

const gridPhotos = [
  {
    src: '/images/gallery/foto13-terras-water.jpg',
    alt: 'Steigerterras met uitzicht over het Gaastmeer',
  },
  {
    src: '/images/gallery/foto07-woonkamer-schuifpui.jpg',
    alt: 'Woonkamer met rode bank en zichtbare houten balken',
  },
  {
    src: '/images/gallery/foto09-slaapkamer-blauw.jpg',
    alt: 'Slaapkamer met twee eenpersoonsbedden',
  },
  {
    src: '/images/gallery/foto15-park-zomer-eenden.jpg',
    alt: 'Piramidehuisje aan het water in Gaastmeer',
  },
]

export function PhotoGrid() {
  const t = useTranslations('home.photoGrid')
  const locale = useLocale()

  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <SectionHeading
              heading={t('heading')}
              subheading={t('subheading')}
              className="mb-0"
            />
            <Link
              href={`/${locale}/het-huisje`}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm text-terracotta hover:text-terracotta-600 font-medium font-body transition-colors shrink-0 group"
            >
              {t('cta')} <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={100} duration={800}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 h-[440px] md:h-[520px]">
            {/* Large left photo */}
            <div className="relative row-span-2 overflow-hidden group rounded-sm">
              <Image
                src={gridPhotos[0].src}
                alt={gridPhotos[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300" />
            </div>

            {/* Top right */}
            <div className="relative overflow-hidden group rounded-sm">
              <Image
                src={gridPhotos[1].src}
                alt={gridPhotos[1].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300" />
            </div>

            {/* Middle right */}
            <div className="relative overflow-hidden group rounded-sm">
              <Image
                src={gridPhotos[2].src}
                alt={gridPhotos[2].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300" />
            </div>

            {/* Bottom spanning */}
            <div className="relative col-span-2 overflow-hidden group rounded-sm">
              <Image
                src={gridPhotos[3].src}
                alt={gridPhotos[3].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300" />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
