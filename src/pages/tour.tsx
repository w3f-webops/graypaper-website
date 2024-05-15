import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <article>
        <h2 id="tour">{t("Tour")}</h2>

        <p>
          Gavin Wood will be appearing at universities around the world in a
          series of lectures to take viewers through the Gray Paper and explain
          each part in depth.
        </p>

        <h3 id="dates">{t("Dates")}</h3>
        <table className="borders-custom">
          <tbody>
            <tr>
              <td>18&#x2013;20/06/2024</td>
              <td>National University of Singapore</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://lu.ma/1x6q3bo5"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  12/06/2024
                </a>
              </td>
              <td>
                <a
                  href="https://lu.ma/1x6q3bo5"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Seoul National University, South Korea
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://lu.ma/9d9lf7po"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  08/06/2024
                </a>
              </td>
              <td>
                <a
                  href="https://lu.ma/9d9lf7po"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  University of Tokyo, Japan
                </a>
              </td>
            </tr>

            <tr>
              <a
                href="https://finsuretech.ethz.ch/events/finsuretech-talks-.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <td>23/05/2024</td>
              </a>

              <td>
                <a
                  href="https://finsuretech.ethz.ch/events/finsuretech-talks-.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ETH Zürich, Switzerland
                </a>
              </td>
            </tr>
            <tr>
              <td>14/05/2024</td>
              <td>Stanford, United States</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://lu.ma/973rb5f1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  10/05/2024
                </a>
              </td>
              <td>
                <a
                  href="https://lu.ma/973rb5f1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Buenos Aires, Argentina
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
      <title id="title">{`JAM ${t("Tour")}`}</title>

      {/* TODO remove once content is available */}
      <meta name="robots" content="noindex, nofollow" />
      {/* <meta
        id="description"
        name="description"
        content={""}
      /> */}
    </>
  )
}
