import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  try {
    const response = await fetch(
      "https://github.com/gavofyork/graypaper/releases/latest/",
    )
    const latestReleaseUrl = response.url
    const version = latestReleaseUrl.split("/").pop()?.replace("v", "")

    // Should not happen
    if (!version) throw new Error("Version not found")

    // Redirect to download PDF from GitHub Release Page
    return Response.redirect(
      `https://github.com/gavofyork/graypaper/releases/latest/download/graypaper-${version}.pdf`,
      302,
    )
  } catch (exception) {
    console.error(exception)

    // If anything fails, plainly redirect to GitHub release page.
    return Response.redirect(
      `https://github.com/gavofyork/graypaper/releases/latest`,
      302,
    )
  }
}
