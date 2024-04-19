import React from "react"

// Adds a class name to the body element
export const onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/cmunbx.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="computerModernBoldFont"
    />,
    <link
      rel="preload"
      href="/fonts/cmunbi.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="computerModernBoldItalicFont"
    />,
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
      key={"googleFontsPreconnect"}
    />,
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
      key={"gstaticPreconnect"}
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Unbounded:wght@700&display=swap"
      rel="stylesheet"
      media="screen"
      key={"unboundedFont"}
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@700&display=swap"
      rel="stylesheet"
      key={"minchoFont"}
    />,
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&display=swap"
      rel="stylesheet"
      key={"notoSerifFont"}
    />,
  ])
  setBodyAttributes({
    className: "custom latex-dark",
  })
}
