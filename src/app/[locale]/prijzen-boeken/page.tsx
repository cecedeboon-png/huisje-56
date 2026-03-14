import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { BookingPageClient } from '@/components/booking/BookingPageClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.booking' })
  return { title: t('title'), description: t('description') }
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'booking' })

  return (
    <>
      <div className="bg-navy pt-28 pb-14 md:pt-36 md:pb-16">
        <div className="container-content">
          <SectionHeading heading={t('heading')} subheading={t('subheading')} light />
        </div>
      </div>
      <div className="section-padding bg-background">
        <div className="container-content">
          <BookingPageClient />
        </div>
      </div>
    </>
  )
}
