'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Expand } from 'lucide-react'
import { ImageLightbox } from '@/components/shared/ImageLightbox'
import { SectionHeading } from '@/components/shared/SectionHeading'

const galleryImages = [
  // Algemeen aanzicht
  { src: '/images/gallery/foto-aanzicht.jpg', alt: 'Het huisje gezien vanaf het water met afgemeerde zeilboot' },
  { src: '/images/gallery/foto-aanzicht-zijkant.jpg', alt: 'Buitenaanzicht van het huisje met terras' },
  // Buitenruimte
  { src: '/images/gallery/foto-terras.jpg', alt: 'Steigerterras met witte tafel en stoelen' },
  { src: '/images/gallery/foto-steiger.jpg', alt: 'Eigen aanlegsteiger met zeilboot en uitzicht over het water' },
  { src: '/images/gallery/foto-buitenruimte.jpg', alt: 'Picknicktafel op het terras met zicht op het water' },
  { src: '/images/gallery/foto-tuin.jpg', alt: 'Waterzijde van de tuin met rode kano' },
  // Woonkamer
  { src: '/images/gallery/foto-woonkamer.jpg', alt: 'Woonkamer met eettafel, rotan stoelen en uitzicht naar het terras' },
  { src: '/images/gallery/foto-woonkamer-uitzicht.jpg', alt: 'Rotan stoelen bij de schuifpui met uitzicht op het water' },
  { src: '/images/gallery/foto-vide.jpg', alt: 'Open vide met balken en kleurrijke vogelhuisjes' },
  // Keuken
  { src: '/images/gallery/foto-keuken.jpg', alt: 'Open keuken met grijze kasten, oven en kookplaat' },
  { src: '/images/gallery/foto-keuken-detail.jpg', alt: 'Keuken-detail met granieten werkblad en gaskookplaat' },
  // Hal
  { src: '/images/gallery/foto-hal.jpg', alt: 'Doorgang en hal met houten vloer en bakstenen wand' },
  // Slaapkamers
  { src: '/images/gallery/foto-slaapkamer-1.jpg', alt: 'Slaapkamer 1 op de begane grond met tweepersoonsbed' },
  { src: '/images/gallery/foto-slaapkamer-2.jpg', alt: 'Slaapkamer 2 onder het schuine dak met dakraam' },
  { src: '/images/gallery/foto-slaapkamer-2-alt.jpg', alt: 'Slaapkamer 2 — andere hoek met twee eenpersoonsbedden' },
  { src: '/images/gallery/foto-slaapkamer-3.jpg', alt: 'Slaapkamer 3 met twee eenpersoonsbedden onder dakraam' },
  { src: '/images/gallery/foto-slaapkamer-4.jpg', alt: 'Slaapkamer 4 met blauw geruit dekbed onder houten plafond' },
  // Wasbak
  { src: '/images/gallery/foto-wasbak.jpg', alt: 'Wasbak op de overloop met patrijspoort-spiegel' },
  // Badkamer
  { src: '/images/gallery/foto-badkamer.jpg', alt: 'Badkamer met wastafel, spiegelkast en handdoekradiator' },
  { src: '/images/gallery/foto-badkamer-douche.jpg', alt: 'Inloopdouche met witte tegels' },
  { src: '/images/gallery/foto-badkamer-toilet.jpg', alt: 'Badkamer met hangtoilet' },
  // Sfeer & details
  { src: '/images/gallery/foto-poster.jpg', alt: 'Vintage reclamebord uit 1961 — sfeerelement op de trap' },
  { src: '/images/gallery/foto-retro-keuken.jpg', alt: 'Retro rode waterkoker en magnetron — keukendetail' },
  { src: '/images/gallery/foto-vlaggen.jpg', alt: 'Maritiem detail — seinvlaggen en zeilbootschilderij' },
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
