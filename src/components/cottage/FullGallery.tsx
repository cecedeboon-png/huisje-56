'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Expand } from 'lucide-react'
import { ImageLightbox } from '@/components/shared/ImageLightbox'
import { SectionHeading } from '@/components/shared/SectionHeading'

const galleryImages = [
  { src: '/images/gallery/foto08-park-water-zomer.jpg', alt: 'Wijds wateruitzicht met afgemeerde zeilboot en rij chalets aan de overkant' },
  { src: '/images/gallery/foto15-park-zomer-eenden.jpg', alt: 'Het huisje gezien vanaf het water met afgemeerde zeilboot' },
  { src: '/images/gallery/foto16-zonsondergang-bolderkar.jpg', alt: 'Buitenaanzicht van het huisje in het voorjaar met narcissen en blauwe lucht' },
  { src: '/images/gallery/foto14-park-water-winter.jpg', alt: 'Steigerterras met dramatische lucht en bootje aan de steiger' },
  { src: '/images/gallery/foto13-terras-water.jpg', alt: 'Steigerterras met witte tafel en stoelen, uitzicht op het water' },
  { src: '/images/gallery/foto12-woonkamer-bank-balken.jpg', alt: 'Eethoek met houten balken en schuifpui naar het terras' },
  { src: '/images/gallery/foto07-woonkamer-schuifpui.jpg', alt: 'Rotan stoelen bij de schuifpui met uitzicht op het water' },
  { src: '/images/gallery/foto03-woonkamer-rode-bank.jpg', alt: 'Woonkamer met rode bank, houten balken en ladder naar de vide' },
  { src: '/images/gallery/foto06-woonkamer-trap-water.jpg', alt: 'Houten trap naar de vide met wateruitzicht door het raam' },
  { src: '/images/gallery/foto04-doorgang-trap.jpg', alt: 'Doorgang met schuifdeur naar de hal' },
  { src: '/images/gallery/foto18-keuken.jpg', alt: 'Open keuken met grijze kasten, kookplaat en granieten werkblad' },
  { src: '/images/gallery/foto02-slaapkamer-licht.jpg', alt: 'Slaapkamer met 2 eenpersoonsbedden — lichte tinten met rode plaid' },
  { src: '/images/gallery/foto09-slaapkamer-blauw.jpg', alt: 'Slaapkamer onder het schuine dak met blauw geruit dekbed en dakraam' },
  { src: '/images/gallery/foto11-slaapkamer-rood-blauw.jpg', alt: 'Slaapkamer met 2 eenpersoonsbedden en lichtblauwe accenten' },
  { src: '/images/gallery/foto10-slaapkamer-roodgeruit.jpg', alt: 'Slaapkamer met 2 eenpersoonsbedden en rood-geruite dekbedden' },
  { src: '/images/gallery/foto17-slaapkamer-nis.jpg', alt: 'Slaapkamer in nis met geruit dekbed' },
  { src: '/images/gallery/foto01-babykamer.jpg', alt: 'Extra slaapkamer met tweepersoonsbed en kunst aan de wand' },
  { src: '/images/gallery/foto05-badkamer.jpg', alt: 'Badkamer met inloopdouche en handdoekradiator' },
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
