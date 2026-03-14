import { useTranslations } from 'next-intl'
import {
  Wifi,
  Thermometer,
  Shield,
  UtensilsCrossed,
  ShowerHead,
  WashingMachine,
  Tv,
  Anchor,
  Umbrella,
  Baby,
  ParkingCircle,
  Zap,
  Waves,
  Ship,
} from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

const amenityIcons: Record<string, React.ElementType> = {
  heating: Thermometer,
  doubleGlazing: Shield,
  furnished: Umbrella,
  kitchen: UtensilsCrossed,
  bathroom: ShowerHead,
  washer: WashingMachine,
  tv: Tv,
  wifi: Wifi,
  jetty: Anchor,
  terrace: Waves,
  baby: Baby,
  parking: ParkingCircle,
  ev: Zap,
  playground: Waves,
  boatlift: Ship,
}

export function AmenitiesList() {
  const t = useTranslations('cottage.amenities')
  const items = t.raw('items') as Record<string, string>

  return (
    <section className="section-padding bg-navy/5">
      <div className="container-content">
        <SectionHeading
          heading={t('heading')}
          subheading="Alles wat je nodig hebt voor een zorgeloze vakantie"
          centered
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Object.entries(items).map(([key, label]) => {
            const Icon = amenityIcons[key] ?? Wifi
            return (
              <div
                key={key}
                className="bg-white rounded-sm p-4 border border-stone-100 flex flex-col items-center text-center gap-2.5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-navy/8 flex items-center justify-center">
                  <Icon size={18} className="text-navy" />
                </div>
                <span className="text-xs font-body font-medium text-stone-700 leading-snug">
                  {label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
