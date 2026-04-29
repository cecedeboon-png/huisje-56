import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Playfair_Display, Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/shared/CookieBanner'
import { SchemaMarkup } from '@/components/shared/SchemaMarkup'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import '@/app/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://huisje56.nl'),
  title: {
    template: '%s | Huisje 56 Gaastmeer',
    default: 'Huisje 56 Gaastmeer | Vakantiehuisje aan het water in Friesland',
  },
  description:
    'Huurvakantiehuis direct aan het water in Gaastmeer, Friesland. Eigen aanlegsteiger, steigerterras, 4 slaapkamers voor 6 personen. Autovrij park.',
  openGraph: {
    type: 'website',
    siteName: 'Huisje 56 Gaastmeer',
    images: [
      {
        url: '/images/gallery/foto08-park-water-zomer.jpg',
        width: 1200,
        height: 630,
        alt: 'Huisje 56 — Piramidehuisjes aan het water in Gaastmeer',
      },
    ],
  },
}

const validLocales = ['nl', 'en', 'de']

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!validLocales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <SchemaMarkup />
      </head>
      <body className="bg-background antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
