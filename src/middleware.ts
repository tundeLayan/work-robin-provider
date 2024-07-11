import { NextRequest, NextResponse } from "next/server";

import cookie from "cookie";

import { SESSION_NAME, decrypt } from "@/lib/auth";
import routes from "./lib/routes";

export async function middleware(request: NextRequest) {
  const cookies = request.headers.get("cookie");
  const parsedCookies = cookies ? cookie.parse(cookies) : {};
  const CookieValue = parsedCookies[SESSION_NAME];

  const url = request.nextUrl.clone();

  // NOTE: For authentication
  if (url.pathname.startsWith("/dashboard")) {
    if (!CookieValue) {
      return NextResponse.redirect(
        new URL(routes.auth.login.path, request.url),
      );
    }
    try {
      // Decrypt the session cookie to verify it
      const session = await decrypt(CookieValue);
      const now = new Date();

      // console.log("session from middleware", session);
      // If the session has expired, redirect to login
      if (session.expires && new Date(session.expires as string) < now) {
        return NextResponse.redirect(
          new URL(routes.auth.login.path, request.url),
        );
      }
    } catch (error) {
      return NextResponse.redirect(
        new URL(routes.auth.login.path, request.url),
      );
    }
  }
}

// Specify the paths where this middleware should apply
export const config = {
  matcher: ["/dashboard/:path*"],
};
