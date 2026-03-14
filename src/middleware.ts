import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['nl', 'en', 'de'],
  defaultLocale: 'nl',
  localePrefix: 'always',
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
