import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin-token")?.value;
  const secret = new TextEncoder().encode(
    process.env.ADMIN_JWT_SECRET || "lonash-admin-secret-change-me"
  );

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
