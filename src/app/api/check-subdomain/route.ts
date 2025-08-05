// app/api/check-subdomain/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const domain = url.searchParams.get('domain')

  if (!domain) {
    return NextResponse.json({ error: 'Missing domain' }, { status: 400 })
  }

  const subdomain = domain.split('.')[0]

  // TODO: Check if subdomain exists in your database
  const exists = subdomain === 'demo' || subdomain === 'example' // fake check

  if (exists) {
    return new NextResponse(null, { status: 200 }) // allow cert
  } else {
    return new NextResponse(null, { status: 403 }) // deny cert
  }
}
