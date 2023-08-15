import { NextRequest, NextResponse } from "next/server";

const languages = ["uz", "ru", "en"];
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
export default function middleware(req: NextRequest) {
  const regex = new RegExp(languages.map((lng) => `(${lng})`).join("|"));
  const result = regex.test(req.nextUrl.pathname);
  if (!result) {
    return NextResponse.redirect(new URL(`uz${req.nextUrl.pathname}`, req.url));
  }
  NextResponse.next();
}
