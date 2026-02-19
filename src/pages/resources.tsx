import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  const additionalResources = [
    {
      title: "Kian Paimani—Demystifying JAM",
      link: "https://blog.kianenigma.nl/posts/tech/demystifying-jam/",
    },
    {
      title: "JAM Brains—Unofficial knowledge base for aspiring JAM developers",
      link: "https://docs.jamcha.in/",
    },
    {
      title: "Polkadot Wiki—Polkadot's JAM Chain",
      link: "https://wiki.polkadot.network/docs/learn-jam-chain",
    },
    {
      title: "Test Vectors for the JAM Protocol",
      link: "https://github.com/w3f/jamtestvectors/",
    },
  ]

  return (
    <Layout>
      <article>
        <h2 id="Resources" className="text-center">
          {t("Resources")}
        </h2>
        <h3 className="text-xl" id="download">
          {t("Gray Paper")}
        </h3>
        <p>{t("Latest version")}:</p>
        <p className="flex flex-col gap-3 pl-5 md:pl-10">
          <a href="/graypaper.pdf" target="_blank" rel="noopener noreferrer">
            <code>graypaper.com/graypaper.pdf</code>
          </a>
        </p>

        <p>{t("Resources.Latex")}</p>
        <p className="pl-5 sm:pl-10">
          <a
            href="https://github.com/gavofyork/graypaper"
            rel="noopener noreferrer"
          >
            <code>github.com/gavofyork/graypaper</code>
          </a>
        </p>

        <p>{t("Resources.UnofficialVersions")}</p>
        <p className="flex flex-col gap-3 pl-5 md:pl-10">
          <a
            href="https://www.lollipop.builders/JAM-Graypaper-Chinese.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{t("Resources.ChineseTranslation")}</code>
          </a>
        </p>
        <h3 className="text-xl" id="contribute">
          {t("Contribute")}
        </h3>
        <p dangerouslySetInnerHTML={{ __html: t("Resources.Contribute") }} />
        <div className="flex flex-col items-start gap-3 pl-5 sm:pl-10">
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
        <h3 className="text-xl" id="additional-resources">
          {t("Additional Resources")}
        </h3>
        <ul className="list-disc space-y-3 pl-5 md:pl-10">
          {additionalResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} rel="noopener noreferrer" target="_blank">
                {`${resource.title}`}
              </a>
              <sup>{`${index + 1}`}</sup>
            </li>
          ))}
        </ul>
        <div className="flex flex-row flex-wrap gap-x-2 text-xs">
          {additionalResources.map((r, index) => (
            <div key={index}>
              <sup>{`  ${index + 1}`}</sup>
              <a href={r.link}>{r.link}</a>
            </div>
          ))}
        </div>

        <h3 className="text-xl" id="interview">
          {t("Interview")}
        </h3>
        <iframe
          className="aspect-video h-auto w-full"
          src="https://www.youtube.com/embed/O3kRAVBTkfs?si=auiYGd6pQfrYV2D4"
          title="Gavin Wood: The Gray Paper Interview - JAM & the Future of Polkadot - Behind the Code: Web3 Thinkers"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <h3 className="text-xl" id="Documentary">
          {t("Documentary")}
        </h3>
        <iframe
          className="aspect-video h-auto w-full"
          src="https://www.youtube.com/embed/x4t25vu0hmg"
          title="The Universal Machine - Gavin Wood & The JAM Gray Paper World Tour Documentary"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
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
        content={t("Resources.MetaDescription")}
      />
    </>
  )
}
