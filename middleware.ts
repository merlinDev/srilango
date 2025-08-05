import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const subdomain = host.split('.')[0];

  // Skip www and root domain
  if (subdomain === 'www' || host === 'srilango.com') {
    return NextResponse.next();
  }

  // Set subdomain in headers for client/server use
  const response = NextResponse.next();
  response.headers.set('x-subdomain', subdomain);
  return response;
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
