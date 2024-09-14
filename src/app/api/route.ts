export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge";

export function GET(request: Request) {
  const url = new URL(request.url);
  const googleSearchUrl = url.searchParams.get("url");

  if (googleSearchUrl) {
    const googleSearchUrlObj = new URL(googleSearchUrl);
    const searchQuery = googleSearchUrlObj.searchParams.get("q");

    if (searchQuery) {
      const googleSearchUrl = `https://ya.ru/search/?text=${encodeURIComponent(
        searchQuery
      )}`;
      return Response.redirect(googleSearchUrl, 302);
    }
  }

  return new Response('Bad Request: missing or invalid "url" parameter', {
    status: 400,
  });
}
