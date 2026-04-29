'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Anchor } from 'lucide-react'

export function HeroSection() {
  const t = useTranslations('home.hero')
  const locale = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with ken-burns */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/foto-aanzicht.jpg"
          alt="Piramidehuisjes aan het water op Recreatiepark de Liuwe Daem in Gaastmeer"
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />
      </div>

      {/* Content — uses CSS animations for instant play on load */}
      <div className="relative z-10 container-content text-center text-white py-24">
        <div className="max-w-3xl mx-auto">
          {/* Tagline chip */}
          <div className="animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-sm text-white/90 mb-8 font-body">
              <Anchor size={13} className="text-terracotta" />
              Gaastmeer · Friesland
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            {t('headline')}
          </h1>

          {/* Tagline */}
          <p className="font-display text-xl md:text-2xl font-normal text-white/90 italic mb-6 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            &ldquo;{t('tagline')}&rdquo;
          </p>

          {/* Subheadline */}
          <p className="font-body text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
            {t('subheadline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.8s_ease-out_1s_both]">
            <Link
              href={`/${locale}/prijzen-boeken`}
              className="btn-terracotta text-base px-8 py-4"
            >
              {t('ctaBook')}
            </Link>
            <Link
              href={`/${locale}/het-huisje`}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-sm font-body font-medium text-base tracking-wide hover:bg-white/25 transition-all duration-300"
            >
              {t('ctaDiscover')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={28} className="text-white/60" />
      </div>
    </section>
  )
}
