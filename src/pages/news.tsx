import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"

const newsData: Array<{ date: string, title: string, link: string }> = [
  {
    date: "11/07/2024",
    title: "Polkadot Decoded—Introduction to JAM & the JAM Prize by Gavin Wood",
    link: "https://www.youtube.com/live/eaCY6k_oKII?feature=shared&t=4450",
  },
  {
    date: "10/07/2024",
    title: "Building True Unstoppability: Protocol-Hosted Decentralised Protocol Development",
    link: "https://ethcc.io/archive/Building-True-Unstoppability-Protocol-Hosted-Decentralised-Protocol-Development"
  },
  {
    date: "30/06/2024",
    title: "Space Monkeys 152—JAM—Audience Questions on the Next DOT",
    link: "https://www.youtube.com/watch?v=pCPD2A4dM3c"
  },
  {
    date: "17/06/2024",
    title: "SNB-CIF Conference May 2024: Keynote Lecture by Gavin Wood",
    link: "https://www.snb.ch/en/services-events/digital-services/researchtv-events/researchtv-2024-05-24_1"
  },
  {
    date: "14/06/2024",
    title: "Apply now for the JAM Implementers’ Prize: A 10 Million DOT Opportunity",
    link: "https://medium.com/web3foundation/apply-now-for-the-jam-implementers-prize-a-10-million-dot-opportunity-3a2fd753e16d"
  },
  {
    date: "09/06/2024",
    title:
      "Behind the Code: Web3 Thinkers—Gavin Wood: A Difficult Balance & the DOT JAM Mission",
    link: "https://www.youtube.com/watch?v=spOeQl0Z_fw",
  },
  {
    date: "31/05/2024",
    title: "ETHPrague—JAM",
    link: "https://live.ethprague.com/ethprague/watch?session=665833c8036a981493b0bf19",
  },
  {
    date: "27/05/2024",
    title: "OpenGov—Proposal #682 for JAM Ratification Confirmed",
    link: "https://polkadot.polkassembly.io/referenda/682",
  },
  {
    date: "23/05/2024",
    title: "Charity Auction—Annotated JAM Graypaper sold for over $17,000",
    link: "https://gavinwood.gbm.auction",
  },
  {
    date: "09/05/2024",
    title: "X Space—Gavin Wood on JAM: The next disruptor in Web3",
    link: "https://twitter.com/Polkadot/status/1788614918796607848",
  },
  {
    date: "06/05/2024",
    title: "Charity Bid-to-Earn Auction—May 16th, 2024",
    link: "https://gavinwood.gbm.auction",
  },
  {
    date: "29/04/2024",
    title: "TOKEN2049—Polkadot's Future: The Big JAM Presentation",
    link: "https://www.youtube.com/watch?v=xTMiE0UcZUo",
  },
  {
    date: "28/04/2024",
    title: "Gavin Wood: The Gray Paper Interview—JAM & the Future of Polkadot",
    link: "https://www.youtube.com/watch?v=O3kRAVBTkfs",
  },
  {
    date: "19/04/2024",
    title:
      "JAM Session: Gavin Wood Reveals Bold Vision for Polkadot's Next Revolution",
    link: "https://polkadot.network/blog/jam-new-vision-for-polkadot-gavin-wood",
  },
  {
    date: "18/04/2024",
    title: "Polkadot Wiki—Polkadot's JAM Chain",
    link: "https://wiki.polkadot.network/docs/learn-jam-chain",
  },
  {
    date: "18/04/2024",
    title:
      "OpenGov—Proposal #682 for JAM Ratification, Conformance, Performance by Polkadot Fellows",
    link: "https://polkadot.polkassembly.io/referenda/682",
  },
  {
    date: "18/04/2024",
    title: "TOKEN2049—The Big JAM Slides Released",
    link: "/The_Big_JAM.pdf",
  },
  {
    date: "18/04/2024",
    title: "Announcing the JAM Implementer’s Prize",
    link: "https://medium.com/web3foundation/announcing-the-jam-implementers-prize-e79f8ebc506d",
  },
]

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <article>
        <h2 id="news">{t("News")}</h2>

        <table className="borders-custom">
          <tbody>
            {newsData.map((newsItem, index) => (
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
    </>
  )
}
