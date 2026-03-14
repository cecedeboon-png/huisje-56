import { NextResponse } from 'next/server'
import { readBlockedDates } from '@/lib/availability'

export async function GET() {
  const data = readBlockedDates()

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=300',
    },
  })
}
