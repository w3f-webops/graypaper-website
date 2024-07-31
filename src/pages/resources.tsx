import type { HeadFC, PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  const additionalResources = [
    {
      title: "ETHPrague—JAM Presentation",
      link: "https://live.ethprague.com/ethprague/watch?session=665833c8036a981493b0bf19",
    },
    {
      title: "TOKEN2049—Polkadot's Future: The Big JAM Presentation",
      link: "https://www.youtube.com/watch?v=xTMiE0UcZUo",
    },
    {
      title: "Polkadot Wiki—Polkadot's JAM Chain",
      link: "https://wiki.polkadot.network/docs/learn-jam-chain",
    },
    {
      title: "Kian Paimani—Demystifying JAM",
      link: "https://blog.kianenigma.nl/posts/tech/demystifying-jam/",
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
          {t("Graypaper PDF")}
        </h3>
        <p>
          Latest version: <code>DRAFT 0.3.2 JULY 31, 2024</code>
        </p>
        <p className="flex flex-col gap-3 pl-5 md:pl-10">
          <a href="/graypaper.pdf" download={true}>
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
        <p>
          A version without the dark background is provided for your
          convenience. The{" "}
          <a
            href="https://github.com/gavofyork/graypaper/releases"
            rel="noopener noreferrer"
          >
            most recent official released version
          </a>{" "}
          on GitHub is the decisive version.
        </p>

        <p className="flex flex-col gap-3 pl-5 md:pl-10">
          <a href="/graypaper_no_background.pdf" download={true}>
            <code>graypaper.com/graypaper_no_background.pdf</code>
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
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
        <h3 className="text-xl" id="interview">
          {t("Interview")}
        </h3>
        <iframe
          className="aspect-video h-auto w-full"
          src="https://www.youtube.com/embed/O3kRAVBTkfs?si=auiYGd6pQfrYV2D4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
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
        content={"All the resources you need to join the JAM."}
      />
    </>
  )
}
