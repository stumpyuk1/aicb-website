import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.redirect(new URL("/banner.jpg", "https://www.charterborough.org"), 308);
}
