import React from "react";
import Background from "./src/images/background.png";

// Adds a class name to the body element
const onRenderBody = (
  { setBodyAttributes, setHeadComponents },
  pluginOptions
) => {
  setBodyAttributes({
    className: "latex-dark bg-cover bg-black",
    style: {
      backgroundImage: `url(${Background})`,
    },
  });

  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/cmunui.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="computerModernFont"
    />,
  ]);
};

export { onRenderBody };

// // Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>;
// };
