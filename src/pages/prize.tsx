import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import { useTranslation } from "react-i18next"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <article>
        <h2 id="Prize">{t("Prize")}</h2>
        <div className="flex h-[50vh] flex-col">
          <p>
            The Web3 Foundation announces the JAM Implementer&#x2019;s Prize, a
            10 Million DOT prize pool aimed at fostering diversity in the
            development of the JAM protocol. The goal of this prize is to
            encourage the creation of multiple client implementations, enhancing
            the network’s resilience.
          </p>
          <p>
            <a href="https://medium.com/web3foundation/announcing-the-jam-implementers-prize-e79f8ebc506d">
              Read the announcement.
            </a>
          </p>

          <p>
            The foundation is still finalizing the details of the application
            process, and more information will be published soon here and on the
            Web3 Foundation JAM Page.
          </p>
          <p>
            <a href="https://jam.web3.foundation/">
              https://jam.web3.foundation/
            </a>
          </p>

          <p>
            If you’re interested in applying for the JAM Implementer&#x2019;s
            Prize, please fill out{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvisUospNv_ZUG-RMgCvPD1gp7rtX80Z65NpaQyvovBEf7Zg/viewform">
              this form
            </a>
            .
          </p>
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
      <title id="title">{`JAM ${t("Prize")}`}</title>

      <meta name="robots" content="noindex, nofollow" />
      <meta
        id="description"
        name="description"
        content={
          "A 10 Million DOT prize pool aimed at fostering diversity in the development of the JAM protocol."
        }
      />
    </>
  )
}
