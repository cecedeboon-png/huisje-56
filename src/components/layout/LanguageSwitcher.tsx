'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const locales = [
  { code: 'nl', label: 'NL' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale(newLocale: string) {
    // Replace current locale prefix with new one
    const pathWithoutLocale = pathname.replace(/^\/(nl|en|de)/, '')
    router.push(`/${newLocale}${pathWithoutLocale || ''}`)
  }

  return (
    <div className="flex items-center gap-1">
      <Globe
        size={14}
        className={cn('mr-1', light ? 'text-white/60' : 'text-stone-400')}
      />
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && (
            <span
              className={cn(
                'mx-1 text-xs',
                light ? 'text-white/30' : 'text-stone-300'
              )}
            >
              |
            </span>
          )}
          <button
            onClick={() => switchLocale(l.code)}
            className={cn(
              'text-xs font-medium tracking-wide transition-colors',
              l.code === locale
                ? light
                  ? 'text-white font-semibold'
                  : 'text-navy font-semibold'
                : light
                  ? 'text-white/60 hover:text-white'
                  : 'text-stone-400 hover:text-navy'
            )}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  )
}
