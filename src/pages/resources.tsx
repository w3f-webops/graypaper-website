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

        <nav>
          <ol className=" space-y-3 pl-5 md:pl-10">
            <li>
              <a href="#download">Download</a>
            </li>
            <li>
              <a href="#contribute">Contribute</a>
            </li>
            <li>
              <a href="#interview">Interview</a>
            </li>
            <li>
              <a href="#additional-resources">Additional Resources</a>
            </li>
          </ol>
        </nav>

        <h3 className="text-xl" id="download">
          1. {t("Download")}
        </h3>
        <p>{t("Resources.Download")}</p>
        <p className="flex flex-col gap-3 pl-5 md:pl-10">
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

        <h3 className="text-xl" id="contribute">
          2. {t("Contribute")}
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

        <h3 className="text-xl" id="interview">
          3. {t("Interview")}
        </h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O3kRAVBTkfs?si=auiYGd6pQfrYV2D4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <h3 className="text-xl" id="additional-resources">
          4. {t("Additional Resources")}
        </h3>
        <ul className="list-disc  space-y-3 pl-5 md:pl-10">
          <li>
            <a
              href="https://www.youtube.com/watch?v=xTMiE0UcZUo"
              rel="noopener noreferrer"
              target="_blank"
            >
              TOKEN2049&#8212;Polkadot's Future: The Big JAM Presentation
            </a>
          </li>
          <li>
            <a
              href="https://wiki.polkadot.network/docs/learn-jam-chain"
              rel="noopener noreferrer"
              target="_blank"
            >
              Polkadot Wiki&#8212;Polkadot's JAM Chain
            </a>
          </li>
          <li>
            <a
              href="https://polkadot.polkassembly.io/referenda/682"
              rel="noopener noreferrer"
              target="_blank"
            >
              OpenGov&#8212;Proposal #682 for JAM Ratification, Conformance,
              Performance by Polkadot Fellows
            </a>
          </li>
        </ul>
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
