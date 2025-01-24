import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  try {
    const response = await fetch(
      "https://github.com/gavofyork/graypaper/releases/latest/",
    )
    const latestReleaseUrl = response.url
    const version = latestReleaseUrl.split("/").pop()?.replace("v", "")

    if (!version) throw new Error("Version not found")

    return new Response(
      JSON.stringify({
        version,
        link: `https://github.com/gavofyork/graypaper/releases/download/v${version}/graypaper-${version}.pdf`,
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Netlify-CDN-Cache-Control":
            "public, durable, max-age=43200, stale-while-revalidate=3600",
        },
      },
    )
  } catch (exception) {
    console.error(exception)

    return new Response(undefined, {
      status: 404,
    })
  }
}
