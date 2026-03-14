import { useTranslations } from 'next-intl'
import { Info } from 'lucide-react'

export function PricingTable() {
  const t = useTranslations('booking.pricing')
  const tCommon = useTranslations('common')
  const seasons = ['low', 'mid', 'high', 'peak'] as const

  const seasonColors = {
    low: 'border-l-stone-300',
    mid: 'border-l-sage',
    high: 'border-l-terracotta',
    peak: 'border-l-navy',
  }

  return (
    <div>
      <h2 className="font-display text-2xl text-navy mb-6">{t('heading')}</h2>

      <div className="space-y-3 mb-6">
        {seasons.map((season) => (
          <div
            key={season}
            className={`bg-white rounded-sm border border-stone-100 border-l-4 ${seasonColors[season]} shadow-sm p-5`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-lg text-navy">
                  {t(`seasons.${season}.label`)}
                </h3>
                <p className="text-sm text-stone-500 font-body mt-0.5">
                  {t(`seasons.${season}.period`)}
                </p>
              </div>
              <div className="flex items-center gap-6 sm:text-right">
                <div>
                  <div className="text-2xl font-display text-navy">
                    {t(`seasons.${season}.weekPrice`)}
                  </div>
                  <div className="text-xs text-stone-400 font-body">
                    {tCommon('perWeek')}
                  </div>
                </div>
                <div className="text-stone-300 hidden sm:block">·</div>
                <div>
                  <div className="text-base font-body font-medium text-stone-600">
                    {t(`seasons.${season}.nightPrice`)}
                  </div>
                  <div className="text-xs text-stone-400 font-body">{tCommon('perNight')}</div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-xs text-stone-400 font-body">
              Min. {t(`seasons.${season}.minNights`)}
            </div>
          </div>
        ))}
      </div>

      {/* Extras */}
      <div className="bg-stone-50 rounded-sm p-5 border border-stone-100">
        <div className="flex items-center gap-2 mb-3">
          <Info size={15} className="text-navy" />
          <h3 className="text-sm font-semibold font-body text-navy">
            {t('extras.heading')}
          </h3>
        </div>
        <ul className="space-y-1.5 text-sm text-stone-600 font-body">
          {(['cleaning', 'deposit', 'energy', 'tourist'] as const).map((key) => (
            <li key={key} className="flex items-start gap-2">
              <span className="text-terracotta mt-0.5">·</span>
              {t(`extras.${key}`)}
            </li>
          ))}
        </ul>
        <p className="text-xs text-stone-400 mt-4 font-body">{t('note')}</p>
      </div>
    </div>
  )
}
