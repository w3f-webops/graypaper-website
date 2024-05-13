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
              <td>10/05/2024</td>
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
