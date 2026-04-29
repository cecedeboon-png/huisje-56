import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Anchor, MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const t = useTranslations('nav')
  const tContact = useTranslations('contact.info')
  const locale = useLocale()

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/het-huisje`, label: t('cottage') },
    { href: `/${locale}/de-omgeving`, label: t('area') },
    { href: `/${locale}/prijzen-boeken`, label: t('booking') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <footer className="bg-navy text-white relative">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] md:h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,20 C360,60 720,0 1080,30 C1260,45 1380,35 1440,20 L1440,60 L0,60 Z"
            fill="#1B3A5C"
          />
        </svg>
      </div>

      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor size={20} className="text-terracotta" />
              <span className="font-display text-xl">Huisje 56</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Heerlijk vakantiehuisje aan het water op Recreatiepark de Liuwe Daem in Gaastmeer, Friesland.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-5 font-body">
              Pagina&apos;s
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-5 font-body">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="shrink-0 mt-0.5 text-terracotta" />
                Liuwedaem 56, 8611 JJ Gaastmeer, Friesland
              </li>
              <li>
                <a
                  href="mailto:liuwedaem56@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Mail size={15} className="shrink-0 text-terracotta" />
                  liuwedaem56@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+31622522854"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Phone size={15} className="shrink-0 text-terracotta" />
                  06-22522854
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Huisje 56 Gaastmeer. Alle rechten voorbehouden.</p>
          <p>Recreatiepark de Liuwe Daem · Gaastmeer · Friesland</p>
        </div>
      </div>
    </footer>
  )
}
