import { HeadFC } from "gatsby";
import React from "react";
import { OpenGraph } from "./OpenGraph";

interface CreateHeadProps {
  title: string;
}

export const createHead =
  ({ title }: CreateHeadProps): HeadFC =>
  () =>
    (
      <>
        <title>{title}</title>

        <link rel="stylesheet" href="https://latex.now.sh/style.css"></link>
        <meta
          name="description"
          content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
        />

        <OpenGraph />
      </>
    );
