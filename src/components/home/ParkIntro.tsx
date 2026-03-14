import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function ParkIntro() {
  const t = useTranslations('home.park')
  const features = t.raw('features') as string[]

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeading heading={t('heading')} />
            <p className="text-stone-600 leading-relaxed mb-8 font-body text-base md:text-lg">
              {t('body')}
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-body text-stone-700">
                  <span className="w-5 h-5 rounded-full bg-sage/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-sage-600" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo mosaic */}
          <div className="grid grid-cols-2 gap-3 h-[420px]">
            <div className="relative row-span-2 overflow-hidden rounded-sm">
              <Image
                src="/images/gallery/foto14-park-water-winter.jpg"
                alt="Piramidehuisjes aan het water in Gaastmeer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/gallery/foto06-woonkamer-trap-water.jpg"
                alt="Woonkamer met uitzicht over het water"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/gallery/foto16-zonsondergang-bolderkar.jpg"
                alt="Zonsondergang bij het park met bolderkar"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
