import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <article>
        <h2 id="Resources">{t("Resources")}</h2>
        <h3 id="download">{t("Download")}</h3>
        <p>{t("Resources.Download")}</p>
        <p className="flex flex-col gap-4 pl-5 sm:pl-10">
          <a href="/graypaper.pdf" download={true}>
            <code>https://graypaper.com/graypaper.pdf</code>
          </a>
          <a href="/graypaper_inverted.pdf" download={true}>
            <code>https://graypaper.com/graypaper_inverted.pdf</code>
          </a>
          <a href="/graypaper_no_background.pdf" download={true}>
            <code>https://graypaper.com/graypaper_no_background.pdf</code>
          </a>
        </p>
        <p>{t("Resources.Latex")}</p>
        <p className="pl-5 sm:pl-10">
          <a
            href="https://github.com/gavofyork/graypaper"
            rel="noopener noreferrer"
          >
            <code>https://github.com/gavofyork/graypaper</code>
          </a>
        </p>
        <h3 id="contribute">{t("Contribute")}</h3>
        <p dangerouslySetInnerHTML={{ __html: t("Resources.Contribute") }} />
        <div className="flex flex-col items-start gap-4 pl-5 sm:pl-10">
          <a
            href="https://matrix.to/#/#jam:polkadot.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>#jam:polkadot.io</code>
          </a>
          <a
            href="https://matrix.to/#/#graypaper:polkadot.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>#graypaper:polkadot.io</code>
          </a>
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
      <title id="title">{`JAM ${t("Resources")}`}</title>
      <meta
        id="description"
        name="description"
        content={"All the resources you need to join the JAM."}
      />
    </>
  )
}
