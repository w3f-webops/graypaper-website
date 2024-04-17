import React from "react"
import { Favicon } from "./Favicon"
import { OpenGraph } from "./OpenGraph"

export const CommonHead: React.FC = () => (
  <>
    <OpenGraph />

    <Favicon />

    <meta
      name="theme-color"
      content="#0E0E0E"
      media="(prefers-color-scheme: light)"
    />
    <meta
      name="theme-color"
      content="#0E0E0E"
      media="(prefers-color-scheme: dark)"
    />

    <meta
      name="keywords"
      content="Ethereum, Polkadot, JAM, Gray Paper, Specification, Virtual Machine, Smart-Contract, PDF"
    />
    <meta name="author" content="Dr. Gavin Wood" />
    <link rel="canonical" href="https://www.graypaper.com" />
  </>
)
