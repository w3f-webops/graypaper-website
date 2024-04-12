import React from "react";
import { Favicon } from "./Favicon";
import { OpenGraph } from "./OpenGraph";

export const CommonHead: React.FC = () => (
  <>
    <html lang="en" />

    <meta
      name="description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />

    <OpenGraph />

    <Favicon />
  </>
);
