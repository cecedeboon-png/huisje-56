import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { FullGallery } from '@/components/cottage/FullGallery'
import { FloorPlan } from '@/components/cottage/FloorPlan'
import { AmenitiesList } from '@/components/cottage/AmenitiesList'
import { SectionHeading } from '@/components/shared/SectionHeading'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.cottage' })
  return { title: t('title'), description: t('description') }
}

export default async function CottagePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cottage' })

  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/gallery/foto-aanzicht.jpg"
          alt="Huisje 56 aan het water in Gaastmeer"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-content pb-10">
            <SectionHeading
              heading={t('heading')}
              subheading={t('subheading')}
              light
              className="mb-0"
            />
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-12">
        <div className="container-content max-w-3xl">
          <p className="text-stone-600 font-body text-lg leading-relaxed">{t('intro')}</p>
        </div>
      </div>

      <FullGallery />
      <FloorPlan />
      <AmenitiesList />
    </>
  )
}
