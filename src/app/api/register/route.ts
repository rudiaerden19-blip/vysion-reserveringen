import { NextRequest, NextResponse } from 'next/server'
import { KASSA_REGISTER_API } from '@/lib/site'

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ongeldige aanvraag' }, { status: 400 })
  }

  const forwarded = request.headers.get('x-forwarded-for')
  const clientIp = forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || ''

  const upstream = await fetch(KASSA_REGISTER_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(clientIp ? { 'X-Forwarded-For': clientIp, 'X-Real-IP': clientIp } : {}),
    },
    body: JSON.stringify(body),
  })

  const data = await upstream.json().catch(() => ({}))
  return NextResponse.json(data, { status: upstream.status })
}
