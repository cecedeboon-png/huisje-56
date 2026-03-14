'use client'

import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface LightboxSlide {
  src: string
  alt?: string
}

interface ImageLightboxProps {
  slides: LightboxSlide[]
  open: boolean
  index: number
  onClose: () => void
}

export function ImageLightbox({ slides, open, index, onClose }: ImageLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides.map((s) => ({ src: s.src, alt: s.alt ?? '' }))}
      styles={{
        container: { backgroundColor: 'rgba(27, 58, 92, 0.95)' },
      }}
    />
  )
}
