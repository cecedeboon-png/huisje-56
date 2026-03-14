import { NextRequest, NextResponse } from 'next/server'
import { inquirySchema } from '@/types/forms'
import { sendInquiryEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = inquirySchema.parse(body)
    await sendInquiryEmail(data)
    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
