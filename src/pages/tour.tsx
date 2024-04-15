import type { PageProps } from "gatsby"
import * as React from "react"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import { useTranslation } from "react-i18next"
const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Layout {...props}>
      <article>
        <h2 id="Tour">{t("Tour")}</h2>
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

export const Head = () => (
  <>
    <title>Tour</title>
    <CommonHead />
  </>
)
