import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const adminToken = request.cookies.get("admin_token")?.value;
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isAuthRoute = pathname.startsWith("/sign-in");

  // Protect dashboard routes
  if (isDashboardRoute && !adminToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Prevent logged-in users from seeing the sign-in page
  if (isAuthRoute && adminToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Run redirect check only for non-static, non-dashboard, non-auth, non-api routes
  if (
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/dashboard") &&
    !pathname.startsWith("/sign-in") &&
    !pathname.includes(".")
  ) {
    try {
      const baseUrl = request.nextUrl.origin;
      const lookupUrl = new URL(`/api/redirect-lookup?from=${encodeURIComponent(pathname)}`, baseUrl);
      
      const res = await fetch(lookupUrl.toString(), {
        next: { revalidate: 60 }, // cache lookup for performance
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.toPath) {
          const targetUrl = data.toPath.startsWith("http")
            ? data.toPath
            : new URL(data.toPath, request.url).toString();
          
          return NextResponse.redirect(targetUrl, data.statusCode || 301);
        }
      }
    } catch {
      // Redirect lookup may fail on some hosts - silently skip
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
