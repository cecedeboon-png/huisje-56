'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Expand } from 'lucide-react'
import { ImageLightbox } from '@/components/shared/ImageLightbox'
import { SectionHeading } from '@/components/shared/SectionHeading'

const galleryImages = [
  { src: '/images/gallery/foto08-park-water-zomer.jpg', alt: 'Piramidehuisjes aan het water in Gaastmeer — zomers uitzicht' },
  { src: '/images/gallery/foto13-terras-water.jpg', alt: 'Steigerterras met eettafel en wateruitzicht' },
  { src: '/images/gallery/foto15-park-zomer-eenden.jpg', alt: 'Buitenaanzicht van het piramidehuisje vanuit het water' },
  { src: '/images/gallery/foto14-park-water-winter.jpg', alt: 'Piramidehuisjes aan het water — winterse blauwe lucht' },
  { src: '/images/gallery/foto07-woonkamer-schuifpui.jpg', alt: 'Woonkamer met rode bank, houten balken en schuifpui naar terras' },
  { src: '/images/gallery/foto12-woonkamer-bank-balken.jpg', alt: 'Woonkamer met rode bank, houten balken en uitzicht op water' },
  { src: '/images/gallery/foto06-woonkamer-trap-water.jpg', alt: 'Open woonkamer met trap en panoramisch wateruitzicht' },
  { src: '/images/gallery/foto03-woonkamer-rode-bank.jpg', alt: 'Woonkamer met rode bank en zichtbare houten constructie' },
  { src: '/images/gallery/foto04-doorgang-trap.jpg', alt: 'Doorgang naar slaapkamer beneden met trap' },
  { src: '/images/gallery/foto01-babykamer.jpg', alt: 'Babykamer met babyledikant en slaapbank — ideaal voor gezin met baby' },
  { src: '/images/gallery/foto02-slaapkamer-licht.jpg', alt: 'Slaapkamer met 2 eenpersoonsbedden en lichtblauwe dekbedden' },
  { src: '/images/gallery/foto09-slaapkamer-blauw.jpg', alt: 'Slaapkamer met 2 eenpersoonsbedden en blauwe dekbedden' },
  { src: '/images/gallery/foto11-slaapkamer-rood-blauw.jpg', alt: 'Slaapkamer met 2 bedden — rood en donkerblauw dekbed' },
  { src: '/images/gallery/foto10-slaapkamer-roodgeruit.jpg', alt: 'Slaapkamer met eenpersoonsbed en rood geruit dekbed' },
  { src: '/images/gallery/foto17-slaapkamer-nis.jpg', alt: 'Slaapkamer in nis met wit dekbed' },
  { src: '/images/gallery/foto05-badkamer.jpg', alt: 'Badkamer met inloopdouche, wastafel en designradiator' },
  { src: '/images/gallery/foto16-zonsondergang-bolderkar.jpg', alt: 'Zonsondergang bij het park met bolderkar' },
]

export function FullGallery() {
  const t = useTranslations('cottage.gallery')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  function openLightbox(index: number) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <SectionHeading heading={t('heading')} subheading={t('subheading')} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden group aspect-[4/3] bg-stone-100"
              aria-label={`${t('open')}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300 flex items-center justify-center">
                <Expand
                  size={22}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
          ))}
        </div>

        <ImageLightbox
          slides={galleryImages}
          open={lightboxOpen}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      </div>
    </section>
  )
}
