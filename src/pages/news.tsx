import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import { news } from "../data/news"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <article>
        <h2 id="news" className="text-center">
          {t("News")}
        </h2>

        <table className="borders-custom">
          <tbody>
            {news.map((newsItem, index) => (
              <tr key={index}>
                <td>{newsItem.date}</td>
                <td>
                  <a
                    href={newsItem.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {newsItem.title}
                  </a>
                </td>
              </tr>
            ))}
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
      <title id="title">{`JAM ${t("News")}`}</title>
      <meta
        id="description"
        name="description"
        content={"Recent and past news about the JAM."}
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="JAM News RSS Feed"
        href="/news/rss.xml"
      />
    </>
  )
}
