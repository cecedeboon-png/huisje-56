'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimateOnScroll, StaggerChildren } from '@/components/shared/AnimateOnScroll'

type FloorKey = 'groundFloor' | 'firstFloor' | 'outdoor'

const floorImages: Record<string, string> = {
  groundFloor: '/images/gallery/foto-woonkamer.jpg',
  firstFloor: '/images/gallery/foto-vide.jpg',
  outdoor: '/images/gallery/foto-terras.jpg',
}

const floorRooms: Record<FloorKey, string[]> = {
  groundFloor: ['entrance', 'livingRoom', 'kitchen', 'bedroom1', 'bathroom'],
  firstFloor: ['landing', 'bedroom2', 'bedroom3', 'bedroom4', 'washbasin'],
  outdoor: ['terrace', 'jetty'],
}

const roomImages: Record<string, string> = {
  entrance: '/images/gallery/foto-hal.jpg',
  livingRoom: '/images/gallery/foto-woonkamer-uitzicht.jpg',
  kitchen: '/images/gallery/foto-keuken.jpg',
  bedroom1: '/images/gallery/foto-slaapkamer-1.jpg',
  bathroom: '/images/gallery/foto-badkamer.jpg',
  landing: '/images/gallery/foto-vide.jpg',
  bedroom2: '/images/gallery/foto-slaapkamer-2.jpg',
  bedroom3: '/images/gallery/foto-slaapkamer-3.jpg',
  bedroom4: '/images/gallery/foto-slaapkamer-4.jpg',
  washbasin: '/images/gallery/foto-wasbak.jpg',
  terrace: '/images/gallery/foto-terras.jpg',
  jetty: '/images/gallery/foto-steiger.jpg',
}

export function FloorPlan() {
  const t = useTranslations('cottage')
  const floors: FloorKey[] = ['groundFloor', 'firstFloor', 'outdoor']

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <AnimateOnScroll animation="fade-up">
          <SectionHeading heading="Indeling" subheading="Per verdieping, van beneden naar boven" />
        </AnimateOnScroll>

        {/* Specs bar */}
        <StaggerChildren
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14"
          staggerDelay={80}
          animation="fade-up"
        >
          {(Object.entries(t.raw('specs.items') as Record<string, string>)).map(
            ([key, value]) => (
              <div key={key} className="bg-stone-50 rounded-sm p-4 border border-stone-100 transition-shadow duration-300 hover:shadow-sm">
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
        </StaggerChildren>

        <div className="space-y-14">
          {floors.map((floor, floorIndex) => (
            <AnimateOnScroll key={floor} animation="fade-up" delay={floorIndex * 100}>
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
                <div className="relative h-64 md:h-80 overflow-hidden rounded-sm group">
                  <Image
                    src={floorImages[floor]}
                    alt={t(`floors.${floor}.label`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Rooms grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {floorRooms[floor].map((room) => (
                    <div
                      key={room}
                      className="bg-stone-50 rounded-sm p-4 border border-stone-100 flex gap-3 transition-all duration-300 hover:shadow-sm hover:border-stone-200"
                    >
                      {roomImages[room] && (
                        <div className="relative w-16 h-16 rounded-sm overflow-hidden shrink-0 group">
                          <Image
                            src={roomImages[room]}
                            alt={t(`floors.${floor}.rooms.${room}.name`)}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
