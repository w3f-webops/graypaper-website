import React, { ReactNode } from "react"
import Navigation from "./Navigation"
import { PageProps } from "gatsby"
import "../i18n"

interface LayoutProps extends Omit<PageProps, "children"> {
  children: ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children, ...pageProps }) => {
  return (
    <div className="bg-lemon-jelly shadow-md shadow-zinc-950">
      <Navigation {...pageProps} />
      <div className="flex min-h-svh flex-col px-6 pb-6">{children}</div>
    </div>
  )
}
