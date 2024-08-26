import type { Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
  const response = await fetch(
    "https://github.com/gavofyork/graypaper/releases/latest/",
  )

  const latestReleaseUrl = response.url
  const version = latestReleaseUrl.split("/").pop()?.replace("v", "")

  // Should not happen, however if so, redirect to the latest release on Github
  if (!version) {
    return Response.redirect(
      `https://github.com/gavofyork/graypaper/releases/latest`,
      302,
    )
  }

  // Directly download PDF from GitHub Release Page
  return Response.redirect(
    `https://github.com/gavofyork/graypaper/releases/latest/download/graypaper-${version}.pdf`,
    302,
  )
}
