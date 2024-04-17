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
        <div className="flex h-[50vh] flex-col items-center justify-center">
          <p>
            <i>{t("Coming soon")}</i>
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
      <title id="title">{t("Prize")}</title>
      {/* <meta
        id="description"
        name="description"
        content={""}
      /> */}
    </>
  )
}
