import { type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { createHead } from "../components/Head";
import { Layout } from "../components/Layout";
import Graypaper from "../images/graypaper.png";
import { OpenGraph } from "../components/OpenGraph";

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <Layout {...props}>
      <div className="flex flex-col items-center mt-10 sm:mt-20 sm:pr-[25px] md:pr-[30px]">
        <StaticImage
          className="w-[90%]  sm:w-[400px]"
          src="../images/jam-pen-polkadot.png"
          alt="JAM Logo"
          placeholder="blurred"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full md:w-3/4">
          <h1 className="text-center font-bold text-lg sm:text-2xl md:text-3xl mt-8">
            <span className="whitespace-nowrap">JOIN-ACCUMULATE MACHINE:</span>
            <br />A SEMI-COHERENT SCALABLE TRUSTLESS VM
          </h1>
          <div className="abstract indent-pars">
            <p className="no-indent">
              <span style={{ fontVariant: "small-caps" }}>Abstract.</span> We
              present a comprehensive and formal definition of{" "}
              <span className="jam">
                <span>J</span>am
              </span>
              , a protocol combining elements of both <i>Polkadot</i> and{" "}
              <i>Ethereum</i>. In a single coherent model,{" "}
              <span className="jam">
                <span>J</span>am
              </span>{" "}
              provides a global singleton permissionless object
              environment&#8212;much like the smart-contract environment
              pioneered by Ethereum&#8212;paired with secure sideband
              computation parallelized over a scalable node network, a
              proposition pioneered by Polkadot.
            </p>
            <p>
              <span className="jam">
                <span>J</span>am
              </span>{" "}
              introduces a decentralized hybrid system offering smart-contract
              functionality structured around a secure and scalable
              in-core/on-chain dualism. While the smart-contract functionality
              implies some similarities with Ethereum&#x2019;s paradigm, the
              overall model of the service offered is driven largely by
              underlying architecture of Polkadot.
            </p>
            <p>
              <span className="jam">
                <span>J</span>am
              </span>{" "}
              is permissionless in nature, allowing anyone to deploy code as a
              service on it for a fee commensurate with the resources this code
              utilizes and to induce execution of this code through the
              procurement and allocation of <i>core-time</i>, a metric of
              resilient and ubiquitous computation, somewhat similar to the
              purchasing of gas in Ethereum. We already envision a
              Polkadot-compatible <i>CoreChains</i> service.
            </p>
          </div>
          <div className="abstract">
            <p className="text-center">
              <a href={Graypaper}>Read the Graypaper</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = (
  <>
    <html lang="en" />
    <title>JAM</title>

    <meta
      name="description"
      content="JOIN-ACCUMULATE MACHINE: A SEMI-COHERENT SCALABLE TRUSTLESS VM"
    />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <OpenGraph />
  </>
);
