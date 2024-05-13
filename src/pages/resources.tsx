import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <article>
        <h2 id="Resources">{t("Resources")}</h2>
        {/* <nav className="toc">
          <ol>
            <li>
              <a href="#news">{t("News")}</a>
            </li>
            <li>
              <a href="#download">{t("Download")}</a>
            </li>
            <li>
              <a href="#contribute">{t("Contribute")}</a>
            </li>
          </ol>
        </nav> */}
        <h3 id="news">{t("News")}</h3>

        <table className="borders-custom">
          <tbody>
            <tr>
              <td>09/05/2024</td>
              <td>
                <a
                  href="https://twitter.com/Polkadot/status/1788614918796607848"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  X Space&#8212;Gavin Wood on JAM: The next disruptor in Web3
                </a>
              </td>
            </tr>
            <tr>
              <td>06/05/2024</td>
              <td>
                <a
                  href="https://gavinwood.gbm.auction"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Charity Bid-to-Earn Auction&#8212;May 16th, 2024
                </a>
              </td>
            </tr>
            <tr>
              <td>29/04/2024</td>
              <td>
                <a
                  href="https://www.youtube.com/watch?v=xTMiE0UcZUo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  TOKEN2049&#8212;Polkadot's Future: The Big JAM Presentation
                </a>
              </td>
            </tr>
            <tr>
              <td>28/04/2024</td>
              <td>
                <a
                  href="https://www.youtube.com/watch?v=O3kRAVBTkfs"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Gavin Wood: The Gray Paper Interview&#8212;JAM & the Future of
                  Polkadot
                </a>
              </td>
            </tr>
            <tr>
              <td>18/04/2024</td>
              <td>
                <a
                  href="https://wiki.polkadot.network/docs/learn-jam-chain"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Polkadot Wiki&#8212;Polkadot's JAM Chain
                </a>
              </td>
            </tr>
            <tr>
              <td>18/04/2024</td>
              <td>
                <a
                  href="https://polkadot.polkassembly.io/referenda/682"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  OpenGov&#8212;Proposal #682 for JAM Ratification, Conformance,
                  Performance by Polkadot Fellows
                </a>
              </td>
            </tr>
            <tr>
              <td>18/04/2024</td>
              <td>
                <a
                  href="/The_Big_JAM.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  TOKEN2049&#8212;The Big JAM Slides Released
                </a>
              </td>
            </tr>
            <tr>
              <td>18/04/2024</td>
              <td>
                <a
                  href="https://medium.com/web3foundation/announcing-the-jam-implementers-prize-e79f8ebc506d"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Announcing the JAM Implementer’s Prize
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 id="download">{t("Download")}</h3>
        <p>{t("Resources.Download")}</p>
        <p className="flex flex-col gap-4 pl-5 sm:pl-10">
          <a href="/graypaper.pdf" download={true}>
            <code>https://graypaper.com/graypaper.pdf</code>
          </a>
          <a href="/graypaper_inverted.pdf" download={true}>
            <code>https://graypaper.com/graypaper_inverted.pdf</code>
          </a>
          <a href="/graypaper_no_background.pdf" download={true}>
            <code>https://graypaper.com/graypaper_no_background.pdf</code>
          </a>
        </p>
        <p>{t("Resources.Latex")}</p>
        <p className="pl-5 sm:pl-10">
          <a
            href="https://github.com/gavofyork/graypaper"
            rel="noopener noreferrer"
          >
            <code>https://github.com/gavofyork/graypaper</code>
          </a>
        </p>
        <h3 id="contribute">{t("Contribute")}</h3>
        <p dangerouslySetInnerHTML={{ __html: t("Resources.Contribute") }} />
        <div className="flex flex-col items-start gap-4 pl-5 sm:pl-10">
          <a
            href="https://matrix.to/#/#jam:polkadot.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>#jam:polkadot.io</code>
          </a>
          <a
            href="https://matrix.to/#/#graypaper:polkadot.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>#graypaper:polkadot.io</code>
          </a>
        </div>
      </article>
    </Layout>
  )
}

export default Page

export const Head: HeadFC<{}, { langKey?: string }> = (props) => {
  const { t, i18n } = useTranslation(undefined)
  return (
    <>
      <CommonHead />
      <html id="html" lang={i18n.language} />
      <title id="title">{`JAM ${t("Resources")}`}</title>
      <meta
        id="description"
        name="description"
        content={"All the resources you need to join the JAM."}
      />
    </>
  )
}
