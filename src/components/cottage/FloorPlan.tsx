import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { SectionHeading } from '@/components/shared/SectionHeading'

type FloorKey = 'groundFloor' | 'firstFloor' | 'outdoor'

const floorImages: Record<string, string> = {
  groundFloor: '/images/gallery/foto06-woonkamer-trap-water.jpg',
  firstFloor: '/images/gallery/foto01-babykamer.jpg',
  outdoor: '/images/gallery/foto13-terras-water.jpg',
}

const floorRooms: Record<FloorKey, string[]> = {
  groundFloor: ['entrance', 'livingRoom', 'kitchen', 'bedroom1', 'bathroom'],
  firstFloor: ['landing', 'bedroom2', 'bedroom3', 'bedroom4', 'babyRoom'],
  outdoor: ['terrace', 'jetty'],
}

const roomImages: Record<string, string> = {
  livingRoom: '/images/gallery/foto07-woonkamer-schuifpui.jpg',
  bedroom1: '/images/gallery/foto02-slaapkamer-licht.jpg',
  bathroom: '/images/gallery/foto05-badkamer.jpg',
  bedroom2: '/images/gallery/foto09-slaapkamer-blauw.jpg',
  bedroom3: '/images/gallery/foto11-slaapkamer-rood-blauw.jpg',
  bedroom4: '/images/gallery/foto10-slaapkamer-roodgeruit.jpg',
  babyRoom: '/images/gallery/foto01-babykamer.jpg',
  terrace: '/images/gallery/foto13-terras-water.jpg',
}

export function FloorPlan() {
  const t = useTranslations('cottage')
  const floors: FloorKey[] = ['groundFloor', 'firstFloor', 'outdoor']

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionHeading heading="Indeling" subheading="Per verdieping, van beneden naar boven" />

        {/* Specs bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {(Object.entries(t.raw('specs.items') as Record<string, string>)).map(
            ([key, value]) => (
              <div key={key} className="bg-stone-50 rounded-sm p-4 border border-stone-100">
                <p className="text-xs font-body text-stone-400 uppercase tracking-wide mb-1">
                  {key === 'area' ? 'Oppervlakte' :
                   key === 'plot' ? 'Perceel' :
                   key === 'capacity' ? 'Capaciteit' :
                   key === 'bedrooms' ? 'Slaapkamers' :
                   key === 'built' ? 'Bouwjaar' : 'Adres'}
                </p>
                <p className="text-sm font-body font-medium text-navy">{value}</p>
              </div>
            )
          )}
        </div>

        <div className="space-y-14">
          {floors.map((floor) => (
            <div key={floor}>
              {/* Floor header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-stone-200" />
                <h3 className="font-display text-xl text-navy whitespace-nowrap">
                  {t(`floors.${floor}.label`)}
                </h3>
                <div className="h-px flex-1 bg-stone-200" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                {/* Floor image */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-sm">
                  <Image
                    src={floorImages[floor]}
                    alt={t(`floors.${floor}.label`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Rooms grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {floorRooms[floor].map((room) => (
                    <div
                      key={room}
                      className="bg-stone-50 rounded-sm p-4 border border-stone-100 flex gap-3"
                    >
                      {roomImages[room] && (
                        <div className="relative w-16 h-16 rounded-sm overflow-hidden shrink-0">
                          <Image
                            src={roomImages[room]}
                            alt={t(`floors.${floor}.rooms.${room}.name`)}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="font-display text-sm font-medium text-navy leading-snug mb-1">
                          {t(`floors.${floor}.rooms.${room}.name`)}
                        </h4>
                        <p className="text-xs text-stone-500 font-body leading-relaxed line-clamp-3">
                          {t(`floors.${floor}.rooms.${room}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
