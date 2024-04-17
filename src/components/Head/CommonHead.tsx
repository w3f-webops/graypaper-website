import React from "react"
import { Favicon } from "./Favicon"
import { OpenGraph } from "./OpenGraph"

export const CommonHead: React.FC = () => (
  <>
    <OpenGraph />

    <Favicon />

    <meta
      name="keywords"
      content="Ethereum, Polkadot, JAM, Gray Paper, Specification, Virtual Machine, Smart-Contract, PDF"
    />
    <meta name="author" content="Dr. Gavin Wood" />
    <link rel="canonical" href="https://www.graypaper.com" />
  </>
)
