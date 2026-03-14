import { useTranslations } from 'next-intl'
import { Anchor, Car, Users, Waves } from 'lucide-react'

const highlights = [
  {
    key: 'jetty',
    icon: Anchor,
    color: 'text-navy',
    bg: 'bg-navy/8',
  },
  {
    key: 'carFree',
    icon: Car,
    color: 'text-terracotta',
    bg: 'bg-terracotta/10',
  },
  {
    key: 'guests',
    icon: Users,
    color: 'text-sage',
    bg: 'bg-sage/15',
  },
  {
    key: 'location',
    icon: Waves,
    color: 'text-navy',
    bg: 'bg-navy/8',
  },
] as const

export function HighlightBlocks() {
  const t = useTranslations('home.highlights')

  return (
    <section className="bg-white border-b border-stone-100">
      <div className="container-content">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
          {highlights.map(({ key, icon: Icon, color, bg }) => (
            <div
              key={key}
              className="flex flex-col items-center text-center px-6 py-8 md:py-10 gap-3"
            >
              <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center`}>
                <Icon size={22} className={color} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-navy mb-1">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-xs md:text-sm text-stone-500 leading-relaxed font-body">
                  {t(`${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
