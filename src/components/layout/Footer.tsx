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
    <footer className="bg-navy text-white">
      <div className="container-content py-14 md:py-16">
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
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-4 font-body">
              Pagina&apos;s
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-4 font-body">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="shrink-0 mt-0.5 text-terracotta" />
                Liuwedaem 56, 8611 JJ Gaastmeer, Friesland
              </li>
              <li>
                <a
                  href="mailto:liuwedaem56@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={15} className="shrink-0 text-terracotta" />
                  liuwedaem56@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+31615615063"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-terracotta" />
                  +31 6 15 61 50 63
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Huisje 56 Gaastmeer. Alle rechten voorbehouden.</p>
          <p>Recreatiepark de Liuwe Daem · Gaastmeer · Friesland</p>
        </div>
      </div>
    </footer>
  )
}
