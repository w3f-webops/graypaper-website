import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import JamLogo from "../images/jam-pen.png";
import Graypaper from "../images/graypaper.png";
import Background from "../images/background.png";
import Wordmark from "../images/wordmark.png";
import { StaticImage } from "gatsby-plugin-image";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="flex flex-row justify-end gap-4 w-full">
        <a href="#News">
          <button>News</button>
        </a>
        <a href={Graypaper}>
          <button>Download</button>
        </a>

        <a href="https://matrix.org/">
          <button>Resources</button>
        </a>
      </div>
      <div className="flex flex-col items-center pr-[25px] md:pr-[80px]">
        <StaticImage
          src="../images/jam-pen.png"
          alt="JAM Logo"
          placeholder="blurred"
          layout="fixed"
          width={400}
        />
      </div>
      <h2>JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM</h2>

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

          <h2 id="Implement">Implementations</h2>
          <p>
            <i>Coming soon...</i>
          </p>

          <h2 id="Prize">Prize</h2>
          <p>
            <i>Coming soon...</i>
          </p>

          <div className="flex flex-col items-end py-10">
            <img className="h-10" src={Wordmark} alt="Polkadot Wordmark" />
          </div>
        </article>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>JAM</title>

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

    <body
      className="latex-dark bg-cover bg-black"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    />
  </>
);
