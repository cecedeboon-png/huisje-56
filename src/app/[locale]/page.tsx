import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { HeroSection } from '@/components/home/HeroSection'
import { HighlightBlocks } from '@/components/home/HighlightBlocks'
import { IntroSection } from '@/components/home/IntroSection'
import { PhotoGrid } from '@/components/home/PhotoGrid'
import { ParkIntro } from '@/components/home/ParkIntro'
import { Testimonials } from '@/components/home/Testimonials'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://huisje56.nl/${locale}`,
      languages: {
        nl: 'https://huisje56.nl/nl',
        en: 'https://huisje56.nl/en',
        de: 'https://huisje56.nl/de',
        'x-default': 'https://huisje56.nl/nl',
      },
    },
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightBlocks />
      <IntroSection />
      <PhotoGrid />
      <ParkIntro />
      <Testimonials />
    </>
  )
}
