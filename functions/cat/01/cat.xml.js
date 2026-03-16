export async function onRequestGet(context) {
  const host = context.request.headers.get("host");

  const urls = [
    "/",
    "/artikel01/",
    "/artikel02/",
    "/artikel03/"
  ];

  const items = urls.map(url => {
    return `
<url>
  <loc>https://${host}${url}</loc>
</url>`;
  }).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
