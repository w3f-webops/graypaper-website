import { HeadFC } from "gatsby";
import React from "react";
import { OpenGraph } from "./OpenGraph";

interface CreateHeadProps {
  title: string;
  lang?: string;
}

export const createHead =
  ({ title, lang }: CreateHeadProps): HeadFC =>
  () =>
    (
      <>
        <html lang={lang ?? "en"} />
        <title>{title}</title>

        <link rel="stylesheet" href="https://latex.now.sh/style.css"></link>
        <meta
          name="description"
          content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <OpenGraph />
      </>
    );
