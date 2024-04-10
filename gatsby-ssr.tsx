import React from "react";
import Background from "./src/images/background.png";

// Adds a class name to the body element
const onRenderBody = (
  { setBodyAttributes, setHeadComponents },
  pluginOptions
) => {
  setBodyAttributes({
    className: "custom latex-dark bg-cover bg-black",
    style: {
      backgroundImage: `url(${Background})`,
    },
  });

  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/cmunrm.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="computerModernFont"
    />,
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
      rel="preload"
      href="/fonts/cmunti.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="computerModernItalicFont"
    />,
  ]);
};

export { onRenderBody };

// // Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>;
// };
