import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const parts = host.split('.')

  // Skip root domain (srigo.lk)
  if (parts.length < 3) return NextResponse.next()

  const subdomain = parts[0]

  // Ignore 'www'
  if (subdomain === 'www') return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = `/sites/${subdomain}${url.pathname}`
  return NextResponse.rewrite(url)
}
