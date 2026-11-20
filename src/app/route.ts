export function GET(request: Request): Response {
  const preferredLanguage = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split(";")[0]
    ?.trim()
    .toLowerCase();
  const locale = preferredLanguage?.startsWith("zh")
    ? "zh"
    : preferredLanguage?.startsWith("es")
      ? "es"
      : "en";

  return new Response(null, {
    status: 307,
    headers: {
      Location: `/${locale}${new URL(request.url).search}`,
      Vary: "Accept-Language",
      "Cache-Control": "private, no-store",
    },
  });
}
