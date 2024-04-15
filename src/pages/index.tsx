import { HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import Graypaper from "../images/graypaper.png"
import { OpenGraph } from "../components/Head/OpenGraph"

const IndexPage: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Layout {...props}>
      <div className="mt-10 flex flex-col items-center sm:mt-20 sm:pr-[25px] md:pr-[30px]">
        <StaticImage
          className="w-[90%]  sm:w-[400px]"
          src="../images/jam-pen-polkadot.png"
          alt="JAM Logo"
          placeholder="blurred"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-3/4">
          <h1
            className="mt-8 text-center text-lg font-bold uppercase sm:text-2xl md:text-3xl"
            dangerouslySetInnerHTML={{ __html: t("Graypaper.Title") }}
          />

          <div className="abstract indent-pars">
            <p
              className="no-indent"
              dangerouslySetInnerHTML={{ __html: t("Abstract.p1") }}
            />
            <p dangerouslySetInnerHTML={{ __html: t("Abstract.p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("Abstract.p3") }} />
          </div>
          <div className="abstract">
            <p className="text-center">
              <a href={Graypaper}>{t("CTA.Download")}</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC<{}, { langKey?: string }> = (props) => {
  const { t, i18n } = useTranslation(undefined)
  return (
    <>
      <CommonHead />
      <html id="html" lang={i18n.language} />
      <title id="title">JAM</title>
      <meta
        id="description"
        name="description"
        content={t("Graypaper.Title")}
      />
    </>
  )
}
