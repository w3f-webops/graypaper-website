import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import Graypaper from "../images/graypaper.png"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Layout {...props}>
      <article>
        <nav className="toc">
          <h2 id="Resources">{t("Resources")}</h2>
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
        </nav>
        <h3 id="news">1. {t("News")}</h3>
        <table className="borders-custom">
          <tbody>
            <tr>
              <td>18/04/2024</td>
              <td>
                <a
                  href="https://github.com/paritytech/polkajam"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline"
                >
                  Graypaper JAM specification published
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h3 id="download">2. {t("Download")}</h3>
        <p>{t("Resources.Download")}</p>
        <p className="pl-10">
          <a href={Graypaper} className="underline" rel="noopener noreferrer">
            https://graypaper.com/graypaper.pdf
          </a>
        </p>
        <h3 id="contribute">3. {t("Contribute")}</h3>
        <p dangerouslySetInnerHTML={{ __html: t("Resources.Contribute") }} />
        <p className="pl-10">
          <a
            className="underline"
            href="https://matrix.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            #jam:parity.io
          </a>
        </p>
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
      <title id="title">Resources</title>
      <meta
        id="description"
        name="description"
        content={"All the resources you need to join the JAM."}
      />
    </>
  )
}
