export interface BlockedRange {
  id: string
  from: string   // ISO 8601: "2025-07-05"
  to: string     // ISO 8601: "2025-07-19"
  label?: string // Internal note: "Familie Schmidt" (not exposed publicly)
  isBooked: boolean
}

export interface AvailabilityData {
  lastUpdated: string
  blockedRanges: BlockedRange[]
}

export interface PublicAvailabilityResponse {
  lastUpdated: string
  blockedRanges: Array<{
    from: string
    to: string
    isBooked: boolean
  }>
}
