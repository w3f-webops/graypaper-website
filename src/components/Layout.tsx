import React, { ReactNode } from "react"
import "../i18n"
import Navigation from "./Navigation"

export interface LayoutProps {
  children: ReactNode
  isRoot?: boolean
}
export const Layout: React.FC<LayoutProps> = ({ children, ...layoutProps }) => {
  return (
    <div className="bg-lemon-jelly shadow-md shadow-zinc-950">
      <Navigation {...layoutProps} />
      <main className="flex min-h-svh flex-col px-6 pb-6">{children}</main>
    </div>
  )
}
