'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Menu, X, Anchor } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '@/lib/utils'

export function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/het-huisje`, label: t('cottage') },
    { href: `/${locale}/de-omgeving`, label: t('area') },
    { href: `/${locale}/prijzen-boeken`, label: t('booking') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className={cn(
              'flex items-center gap-2 font-display text-xl font-normal transition-colors',
              scrolled ? 'text-navy' : 'text-white'
            )}
          >
            <Anchor
              size={20}
              className={cn(
                'shrink-0',
                scrolled ? 'text-terracotta' : 'text-white/80'
              )}
            />
            Huisje 56
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-body tracking-wide transition-colors',
                  scrolled
                    ? 'text-stone-600 hover:text-navy'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <LanguageSwitcher light={!scrolled} />
            <Link
              href={`/${locale}/prijzen-boeken`}
              className={cn(
                'text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200 font-body tracking-wide',
                scrolled
                  ? 'bg-navy text-white hover:bg-navy-600'
                  : 'bg-white/20 text-white border border-white/40 hover:bg-white/30 backdrop-blur-sm'
              )}
            >
              {t('bookNow')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              'md:hidden p-2 transition-colors',
              scrolled ? 'text-navy' : 'text-white'
            )}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
          <nav className="container-content py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-navy py-2.5 text-base font-body border-b border-stone-50 last:border-0 hover:text-terracotta transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex items-center justify-between">
              <LanguageSwitcher />
              <Link
                href={`/${locale}/prijzen-boeken`}
                onClick={() => setMenuOpen(false)}
                className="btn-primary !py-2 !px-4 text-sm"
              >
                {t('bookNow')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
