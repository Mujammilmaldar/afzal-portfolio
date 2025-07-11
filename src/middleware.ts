import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token")?.value || request.cookies.get("__Secure-next-auth.session-token")?.value

  // Protect /admin route
  if (!token && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
