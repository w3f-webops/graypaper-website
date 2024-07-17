import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  const lectures = [
    {
      date: "19/06/2024",
      location: "National University of Singapore",
      link: "https://lu.ma/6hz84cdt",
    },
  ]

  return (
    <Layout>
      <article>
        <h2 id="lectures">{t("Lectures")}</h2>

        <p>Intro</p>

        <h3 id="dates">{t("Dates")}</h3>
        <table className="borders-custom">
          <tbody>
            {lectures.map((event, index) => (
              <tr key={index}>
                <td>
                  {event.link ? (
                    <a
                      href={event.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {event.date}
                    </a>
                  ) : (
                    event.date
                  )}
                </td>
                <td>
                  {event.link ? (
                    <a
                      href={event.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {event.location}
                    </a>
                  ) : (
                    event.location
                  )}
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
