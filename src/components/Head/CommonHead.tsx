import React from "react"
import { Favicon } from "./Favicon"
import { OpenGraph } from "./OpenGraph"

export const CommonHead: React.FC = () => (
  <>
    <OpenGraph />

    <Favicon />
  </>
)
