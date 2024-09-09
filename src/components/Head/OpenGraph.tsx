import React from "react"
export const OpenGraph: React.FC = () => (
  <>
    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content="https://graypaper.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="JAM Gray Paper" />
    <meta
      property="og:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta property="og:image" content="/img/opengraph.png" />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="graypaper.com" />
    <meta property="twitter:url" content="https://graypaper.com" />
    <meta name="twitter:title" content="JAM Gray Paper" />
    <meta
      name="twitter:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta name="twitter:image" content="/img/opengraph.png" />
  </>
)
