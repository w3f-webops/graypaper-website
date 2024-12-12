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
    <meta id="twitter:card" name="twitter:card" content="summary_large_image" />
    <meta
      id="twitter:domain"
      property="twitter:domain"
      content="graypaper.com"
    />
    <meta
      id="twitter:url"
      property="twitter:url"
      content="https://graypaper.com"
    />
    <meta id="twitter:title" name="twitter:title" content="JAM Gray Paper" />
    <meta
      id="twitter:description"
      name="twitter:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta
      id="twitter:image"
      name="twitter:image"
      content="/img/opengraph.png"
    />
  </>
)
