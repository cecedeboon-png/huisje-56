import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Anchor, Bike, MapPin, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.area' })
  return { title: t('title'), description: t('description') }
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'area' })

  const watersportActivities = t.raw('watersports.activities') as string[]
  const cyclingActivities = t.raw('cycling.activities') as string[]
  const towns = t.raw('towns.items') as Record<
    string,
    { name: string; distance: string; desc: string }
  >
  const distances = t.raw('distances.items') as Record<
    string,
    { name: string; bike: string | null; car: string | null }
  >

  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/gallery/foto-aanzicht.jpg"
          alt="Gaastmeer en de Friese meren"
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

      {/* Watersports */}
      <section className="section-padding bg-background">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-1.5 text-navy text-sm font-body font-medium mb-5">
                <Anchor size={14} />
                Water & Varen
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">
                {t('watersports.heading')}
              </h2>
              <p className="text-stone-600 font-body leading-relaxed mb-6">
                {t('watersports.body')}
              </p>
              <ul className="space-y-2">
                {watersportActivities.map((activity, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm font-body text-stone-700">
                    <ArrowRight size={13} className="text-terracotta shrink-0" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-sm overflow-hidden">
              <Image
                src="/images/gallery/foto-steiger.jpg"
                alt="Zeilen en varen op de Friese meren"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cycling */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80 rounded-sm overflow-hidden">
              <Image
                src="/images/gallery/foto-tuin.jpg"
                alt="Fietsen in het Friese landschap"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-sage/15 rounded-full px-4 py-1.5 text-sage-700 text-sm font-body font-medium mb-5">
                <Bike size={14} />
                Fietsen & Wandelen
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">
                {t('cycling.heading')}
              </h2>
              <p className="text-stone-600 font-body leading-relaxed mb-6">
                {t('cycling.body')}
              </p>
              <ul className="space-y-2">
                {cyclingActivities.map((activity, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm font-body text-stone-700">
                    <ArrowRight size={13} className="text-terracotta shrink-0" />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby towns */}
      <section className="section-padding bg-background">
        <div className="container-content">
          <SectionHeading
            heading={t('towns.heading')}
            subheading={t('towns.intro')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(towns).map(([key, town]) => (
              <div
                key={key}
                className="bg-white rounded-sm border border-stone-100 shadow-sm p-5"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg text-navy">{town.name}</h3>
                  <span className="text-xs bg-navy/8 text-navy rounded-full px-2.5 py-1 font-body whitespace-nowrap shrink-0">
                    {town.distance}
                  </span>
                </div>
                <p className="text-sm text-stone-500 font-body leading-relaxed">{town.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distances table */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading heading={t('distances.heading')} />
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-3 pr-6 text-stone-500 font-medium">Bestemming</th>
                  <th className="text-left py-3 pr-6 text-stone-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Bike size={14} /> {t('distances.byBike')}
                    </div>
                  </th>
                  <th className="text-left py-3 text-stone-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} /> {t('distances.byCar')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(distances).map(([key, dist]) => (
                  <tr key={key} className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="py-3 pr-6 font-medium text-navy">{dist.name}</td>
                    <td className="py-3 pr-6 text-stone-500">
                      {dist.bike ?? '—'}
                    </td>
                    <td className="py-3 text-stone-500">{dist.car ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-background">
        <div className="container-content">
          <SectionHeading heading={t('map.heading')} />
          <div className="bg-white rounded-sm border border-stone-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-stone-100 flex items-center gap-2 text-sm font-body text-stone-600">
              <MapPin size={15} className="text-terracotta" />
              {t('map.address')}
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.8!2d5.5582!3d52.9856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c865dcf5aabd29%3A0x8a3ffa68f30ad9b7!2sLiuwedaem%2056%2C%208611%20JJ%20Gaastmeer!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Huisje 56 Gaastmeer"
            />
          </div>
        </div>
      </section>
    </>
  )
}
