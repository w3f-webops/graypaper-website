import { Link, type HeadFC, type PageProps } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import { isEventInFuture } from "../utils"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  const events = [
    {
      date: "05/03/2025",
      location: "Shenzhen University, Shenzhen, China",
      link: "https://lu.ma/JAM_Shenzhen",
      video: "https://www.youtube.com/watch?v=Y7Ubw1k0PBA",
    },
    {
      date: "03/03/2025",
      location: "Zhejiang University, Hangzhou, China",
      link: "https://lu.ma/JAM_Hangzhou",
      video: "https://www.youtube.com/watch?v=GW62bwW1-kk",
    },
    {
      date: "28/02/2025",
      location: "Fudan University, Shanghai, China",
      link: "https://lu.ma/JAM_Shanghai",
      video: "https://www.youtube.com/watch?v=JGeKdpYEZs4",
    },
    {
      date: "26/02/2025",
      location: "Peking University, Beijing, China",
      link: "https://lu.ma/JAM_Beijing",
    },
    {
      date: "19/02/2025",
      location:
        "National Taiwan University for Science and Technology, Taipei, Taiwan",
      link: "https://lu.ma/JAM_Taipei",
      video: "https://www.youtube.com/watch?v=aTS4yjFsJd0",
    },
    {
      date: "17/02/2025",
      location: "Cyber Arena, Hong Kong",
      link: "https://lu.ma/JAM_Hong_Kong",
    },
    {
      date: "13/02/2025",
      location: "IIT Bombay, Mumbai, India",
      link: "https://lu.ma/JAM_Mumbai",
    },
    {
      date: "12/02/2025",
      location: "IIT Delhi, New Delhi, India",
      link: "https://lu.ma/JAM_New_Delhi",
    },
    {
      date: "10/02/2025",
      location: "University of Cambridge, England",
      link: "https://lu.ma/JAM_Cambridge",
    },
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

        <p>{t("Tour Description")}</p>

        <p dangerouslySetInnerHTML={{ __html: t("Tour YouTube") }} />

        <iframe
          className="aspect-video h-auto w-full"
          src="https://www.youtube.com/embed/FgxNRMtcpCM"
          title="The Universal Machine - Gavin Wood & The JAM Gray Paper World Tour Documentary "
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <h3 id="dates">{t("Dates")}</h3>
        <table className="borders-custom">
          <tbody>
            {events.map((event, index) => {
              const isFuture = isEventInFuture(event.date)

              return (
                <tr key={event.date}>
                  <td>{event.date}</td>

                  <td>
                    {isFuture ? (
                      <a
                        href={event.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        key={index}
                      >
                        {event.location}
                      </a>
                    ) : event.video ? (
                      <a
                        href={event.video}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event.location}
                      </a>
                    ) : (
                      event.location
                    )}
                  </td>
                </tr>
              )
            })}
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
    </>
  )
}
