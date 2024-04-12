import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import { PageProps } from "gatsby";
import "../i18n";

interface LayoutProps extends Omit<PageProps, "children"> {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children, ...pageProps }) => {
  return (
    <div className="shadow-md shadow-zinc-950 bg-lemon-jelly">
      <Navigation {...pageProps} />
      <div className="flex flex-col px-6 pb-6 min-h-svh">{children}</div>
    </div>
  );
};
