import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  try {
    // Call our version endpoint
    const url = Netlify.env.get("URL")
    const versionResponse = await fetch(
      `${url}/.netlify/functions/graypaper-version`,
    )

    if (!versionResponse.ok) {
      throw new Error("Failed to get version info")
    }

    const data = await versionResponse.json()
    return Response.redirect(data.link, 302)
  } catch (exception) {
    console.error(exception)

    // If anything fails, plainly redirect to GitHub release page.
    return Response.redirect(
      `https://github.com/gavofyork/graypaper/releases/latest`,
      302,
    )
  }
}
