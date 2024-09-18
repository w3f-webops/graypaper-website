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
        <h2 id="Prize" className="text-center">
          {t("Prize.headline")}
        </h2>

        <div className="flex flex-col gap-4">
          <p dangerouslySetInnerHTML={{ __html: t("Prize.description") }}></p>

          <div className="flex flex-row items-center justify-center pt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/web3foundation/announcing-the-jam-implementers-prize-e79f8ebc506d"
            >
              {t("Prize.cta")}
            </a>
          </div>

          <p dangerouslySetInnerHTML={{ __html: t("Prize.resources") }}></p>

          <div className="flex w-full">
            <div className="flex flex-col items-start gap-3 pl-5 sm:pl-10">
              <a
                target="_blank"
                href="https://jam.web3.foundation/"
                rel="noopener noreferrer"
              >
                jam.web3.foundation
              </a>
              <a
                target="_blank"
                href="https://jam.web3.foundation/rules"
                rel="noopener noreferrer"
              >
                jam.web3.foundation/rules
              </a>
              <a
                target="_blank"
                href="https://hackmd.io/@polkadot/jamprize"
                rel="noopener noreferrer"
              >
                Gav's Unofficial JAM Prize Notes
              </a>
              <a
                target="_blank"
                href="https://github.com/w3f/jam-milestone-delivery"
                rel="noopener noreferrer"
              >
                Milestone Delivery
              </a>
            </div>
          </div>
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
