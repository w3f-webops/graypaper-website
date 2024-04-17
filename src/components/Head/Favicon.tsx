import React from "react"

export const Favicon: React.FC = () => (
  <>
    <link media="(prefers-color-scheme: dark)" rel="apple-touch-icon" sizes="180x180" href="/dark/apple-touch-icon.png" />
    <link media="(prefers-color-scheme: dark)" rel="icon" type="image/png" sizes="32x32" href="/dark/favicon-32x32.png" />
    <link media="(prefers-color-scheme: dark)" rel="icon" type="image/png" sizes="16x16" href="/dark/favicon-16x16.png" />
    <link media="(prefers-color-scheme: dark)" rel="manifest" href="/dark/site.webmanifest" />

    <link media="(prefers-color-scheme: light)" rel="apple-touch-icon" sizes="180x180" href="/light/apple-touch-icon.png" />
    <link media="(prefers-color-scheme: light)" rel="icon" type="image/png" sizes="32x32" href="/light/favicon-32x32.png" />
    <link media="(prefers-color-scheme: light)" rel="icon" type="image/png" sizes="16x16" href="/light/favicon-16x16.png" />
    <link media="(prefers-color-scheme: light)" rel="manifest" href="/light/site.webmanifest" />
  </>
)
