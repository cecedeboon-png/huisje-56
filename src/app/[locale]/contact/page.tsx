import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { MapPin, Mail, Phone, Car, Navigation } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'
import { SectionHeading } from '@/components/shared/SectionHeading'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.contact' })
  return { title: t('title'), description: t('description') }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <>
      {/* Hero header */}
      <div className="bg-navy pt-28 pb-14 md:pt-36 md:pb-16">
        <div className="container-content">
          <SectionHeading
            heading={t('heading')}
            subheading={t('subheading')}
            light
            className="mb-0"
          />
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Contact info + route */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details */}
              <div>
                <h2 className="font-display text-2xl text-navy mb-5">
                  {t('info.heading')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-terracotta shrink-0 mt-0.5" />
                    <div className="text-sm font-body text-stone-600 leading-relaxed">
                      Liuwedaem 56<br />
                      8611 JJ Gaastmeer<br />
                      Friesland, Nederland
                    </div>
                  </div>
                  <a
                    href="mailto:liuwedaem56@gmail.com"
                    className="flex items-center gap-3 text-sm font-body text-stone-600 hover:text-navy transition-colors"
                  >
                    <Mail size={18} className="text-terracotta shrink-0" />
                    liuwedaem56@gmail.com
                  </a>
                  <a
                    href="tel:+31615615063"
                    className="flex items-center gap-3 text-sm font-body text-stone-600 hover:text-navy transition-colors"
                  >
                    <Phone size={18} className="text-terracotta shrink-0" />
                    +31 6 15 61 50 63
                  </a>
                </div>
              </div>

              {/* Route */}
              <div>
                <h2 className="font-display text-2xl text-navy mb-4">
                  {t('route.heading')}
                </h2>
                <p className="text-sm font-body text-stone-600 leading-relaxed mb-4 bg-terracotta/10 border border-terracotta/20 rounded-sm p-3">
                  💡 {t('route.intro')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Car size={16} className="text-navy shrink-0 mt-0.5" />
                    <p className="text-sm font-body text-stone-600 leading-relaxed">
                      <strong className="text-navy">Amsterdam</strong>{' '}
                      {t('route.byCarAmsterdam')}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car size={16} className="text-navy shrink-0 mt-0.5" />
                    <p className="text-sm font-body text-stone-600 leading-relaxed">
                      <strong className="text-navy">Duitsland</strong>{' '}
                      {t('route.byCarGermany')}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Navigation size={16} className="text-navy shrink-0 mt-0.5" />
                    <p className="text-sm font-body text-stone-600 leading-relaxed">
                      {t('route.gps')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-sm overflow-hidden border border-stone-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.8!2d5.5582!3d52.9856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c865dcf5aabd29%3A0x8a3ffa68f30ad9b7!2sLiuwedaem%2056%2C%208611%20JJ%20Gaastmeer!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kaart — Huisje 56 Gaastmeer"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl text-navy mb-5">{t('intro')}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
