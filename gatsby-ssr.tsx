import React from "react";
import { Layout } from "./src/components/Layout";

// Adds a class name to the body element
const onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
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
    // Google Font Preconnect is done by plugin,
    // Only need bold and bold italic, these are regular and italic
    // <link
    //   rel="preload"
    //   href="/fonts/cmunrm.ttf"
    //   as="font"
    //   type="font/ttf"
    //   crossOrigin="anonymous"
    //   key="computerModernFont"
    // />,
    // <link
    //   rel="preload"
    //   href="/fonts/cmunti.ttf"
    //   as="font"
    //   type="font/ttf"
    //   crossOrigin="anonymous"
    //   key="computerModernItalicFont"
    // />,
  ]);
  setBodyAttributes({
    className: "custom latex-dark",
  });
};

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export { onRenderBody, wrapPageElement };
