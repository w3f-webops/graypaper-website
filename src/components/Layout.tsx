import React, { ReactNode } from "react";
import Background from "../images/background.png";
import Header from "./Header";
import { PageProps } from "gatsby";

interface LayoutProps extends Omit<PageProps, "children"> {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children, ...pageProps }) => {
  return (
    <div
      className=" pb-6 md:my-6 shadow-lg"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Header {...pageProps} />
      <div className="flex flex-col px-6 pb-6 min-h-svh">{children}</div>
    </div>
  );
};
