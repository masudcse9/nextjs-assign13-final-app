import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/api/authorization")) {
    const requestHeaders = new Headers(req.headers);

    const auth = requestHeaders.has("Authorization");

    if (auth === true) {
      requestHeaders.set("Bearer", "Rana-ABC-123");
      return NextResponse.next({
        request: { headers: requestHeaders },
      });
    } else {
      return NextResponse.json({ message: "Invaid header" }, { status: 401 });
    }
  }
}
