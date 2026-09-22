import { bannerSrc } from "@/lib/banner-uri";

export function GET() {
  const raw = bannerSrc.split(",")[1] ?? "";
  const body = Buffer.from(raw, "base64");
  return new Response(body, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
