import { readFileSync } from 'fs'
import { join } from 'path'
import type { AvailabilityData, PublicAvailabilityResponse } from '@/types/availability'

export function readBlockedDates(): PublicAvailabilityResponse {
  try {
    const filePath = join(process.cwd(), 'data', 'blocked-dates.json')
    const raw = readFileSync(filePath, 'utf-8')
    const data: AvailabilityData = JSON.parse(raw)

    return {
      lastUpdated: data.lastUpdated,
      blockedRanges: data.blockedRanges.map(({ from, to, isBooked }) => ({
        from,
        to,
        isBooked,
      })),
    }
  } catch {
    return {
      lastUpdated: new Date().toISOString(),
      blockedRanges: [],
    }
  }
}
