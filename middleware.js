/* import { NextResponse } from "next/server";

export function middleware(reqest) {
    return NextResponse.redirect(new URL("/about", reqest.url))
} */

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
