import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request

  // NextAuth uses different cookie names depending on environment
  const token =
    cookies.get("next-auth.session-token")?.value ||
    cookies.get("__Secure-next-auth.session-token")?.value ||
    cookies.get("__Host-next-auth.csrf-token")?.value

  // Protect /admin routes - redirect to login if no session token
  if (!token && nextUrl.pathname.startsWith("/admin")) {
    const loginUrl = new URL("/auth/login", request.url)
    loginUrl.searchParams.set("callbackUrl", nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
