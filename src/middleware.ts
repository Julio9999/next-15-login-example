import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token');

  const pathName = request.nextUrl.pathname;

  if (!token && pathName !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if(token && pathName === '/login'){
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
