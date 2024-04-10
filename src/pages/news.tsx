import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Graypaper from "../images/graypaper.png";
import Background from "../images/background.png";
import Wordmark from "../images/wordmark.png";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/Header";

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Header />

      <main>
        <article>
          <h2 id="News">News</h2>
          <table className="borders-custom">
            <tr>
              <td>18/04/2024</td>
              <a href="https://github.com/paritytech/polkajam" target="_blank">
                <td>Graypaper JAM specification published</td>
              </a>
            </tr>
          </table>
        </article>
      </main>
    </>
  );
};

export default Page;

export const Head: HeadFC = () => (
  <>
    <title>JAM News</title>

    <link rel="stylesheet" href="https://latex.now.sh/style.css"></link>
    <meta
      name="description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content="https://polkadot.network" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="JAM Graypaper" />
    <meta
      property="og:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta
      property="og:image"
      content="https://opengraph.b-cdn.net/production/documents/83d1980a-1bb3-4db3-b64f-f05851e9cee0.png?token=nM98IeTAMa5qe5b0KkcqMGUxotMv6sbTNHKogUPKiIQ&height=630&width=1200&expires=33248677595"
    />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="polkadot.network" />
    <meta property="twitter:url" content="https://polkadot.network" />
    <meta name="twitter:title" content="JAM Graypaper" />
    <meta
      name="twitter:description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />
    <meta
      name="twitter:image"
      content="https://opengraph.b-cdn.net/production/documents/83d1980a-1bb3-4db3-b64f-f05851e9cee0.png?token=nM98IeTAMa5qe5b0KkcqMGUxotMv6sbTNHKogUPKiIQ&height=630&width=1200&expires=33248677595"
    />
  </>
);
