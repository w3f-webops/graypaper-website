import { Link, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  const events = [
    {
      date: "19/06/2024",
      location: "National University of Singapore",
      link: "https://lu.ma/6hz84cdt",
    },
    {
      date: "10/06/2024",
      location: "Seoul National University, South Korea",
      link: "https://lu.ma/1x6q3bo5",
    },
    {
      date: "08/06/2024",
      location: "University of Tokyo, Japan",
      link: "https://lu.ma/9d9lf7po",
    },
    {
      date: "23/05/2024",
      location: "ETH Zürich, Switzerland",
      link: "https://finsuretech.ethz.ch/events/finsuretech-talks-.html",
    },
    {
      date: "14/05/2024",
      location: "Stanford, United States",
      link: "https://lu.ma/gavinlecture",
    },
    {
      date: "10/05/2024",
      location: "Buenos Aires, Argentina",
      link: "https://lu.ma/973rb5f1",
    },
  ]

  return (
    <Layout>
      <article>
        <h2 id="tour" className="text-center">
          {t("Tour")}
        </h2>

        <p>
          {t("Tour Description")}
        </p>
        <p>
          Recordings of this tour are shared on the{" "}
          <a href="https://www.youtube.com/@JamPrizeTour" target="_blank">
            <span className="jam">
              <span>J</span>am
            </span>{" "}
            Prize Tour YouTube Channel
          </a>
          . See the <Link to="/lectures">Lectures</Link> section for studying
          the Gray Paper along with the Tour material.
        </p>

        <h3 id="dates">{t("Dates")}</h3>
        <table className="borders-custom">
          <tbody>
            {events.map((event, index) => (
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
    </>
  )
}
