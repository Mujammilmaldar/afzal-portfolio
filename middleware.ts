import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // If token is missing or invalid, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // In a real application, you would verify the JWT here.
  // For now, we'll just check if a token exists.
  // You'll need to implement JWT verification on the server-side.

  return NextResponse.next(); // Authenticated, allow access
}

// Only run middleware on these routes
export const config = {
  matcher: ["/admin/:path*"],
};