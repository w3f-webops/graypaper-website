import { type HeadFC, type PageProps } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

import { lectures } from "../data/lectures"
import LectureView from "../components/LectureView"

const Page: React.FC<PageProps> = (props) => (
  <LectureView pageContext={{ lectureSection: lectures[0].section }} />
)

export default Page

export const Head: HeadFC<{}, { langKey?: string }> = (props) => {
  const { t, i18n } = useTranslation(undefined)
  return (
    <>
      <CommonHead />
      <html id="html" lang={i18n.language} />
      <title id="title">{`JAM ${t("Lectures")}`}</title>
      <meta
        id="description"
        name="description"
        content={"Lectures of the JAM Graypaper by Gavin Wood"}
      />
    </>
  )
}
