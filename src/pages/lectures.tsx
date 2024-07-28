import { type HeadFC, type PageProps } from "gatsby"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

import { lectures } from "../data/lectures"
import { LectureSelect } from "../components/LectureSelect"
import { Layout } from "../components/Layout"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import { Button } from "../components/Button"
import { t } from "i18next"
import slugify from "slugify"

const ClientSidePdfDoc = React.lazy(() => import("../components/PdfDoc"))

const Page: React.FC<PageProps> = ({ location }) => {
  const isSSR = typeof window === "undefined"

  useEffect(() => {
    if (!isSSR) {
      const params = new URLSearchParams(location.search)
      const sectionParam = params.get("section")

      if (sectionParam) {
        const index = lectures.findIndex(
          (lecture) => slugify(lecture.section) === sectionParam,
        )
        if (index !== -1) {
          setActiveLectureIndex(index)
        }
      }
    }
  }, [location.search, isSSR])

  const [graypaperVisible, setGraypaperVisible] = React.useState(false)
  const [activeLectureIndex, setActiveLectureIndex] = React.useState(0)

  const activeLecture = lectures[activeLectureIndex || 0]

  return (
    <Layout wide>
      <div className="mx-auto md:w-3/4">
        <h2 id="lectures" className="text-center">
          {t("Lectures")}
        </h2>
        <LectureSelect
          activeLectureIndex={lectures.findIndex(
            (l) => l.section === activeLecture.section,
          )}
          setActiveLectureIndex={setActiveLectureIndex}
        />
      </div>

      {activeLecture && (
        <div className="mt-4">
          <LiteYouTubeEmbed
            iframeClass="mt-0 pt-0"
            id={activeLecture.videoId}
            title={activeLecture.section}
            poster="maxresdefault"
          />
          <p className="mt-1 w-full text-right text-sm font-normal text-gray-400">
            {t(activeLecture.i18nSubtitle)}
          </p>
        </div>
      )}
      <div className="mx-auto mt-4 md:w-3/4">
        <Button
          className="w-full"
          onClick={() => setGraypaperVisible(!graypaperVisible)}
        >
          {graypaperVisible
            ? t("Hide Gray Paper")
            : t("Show Section in Gray Paper")}{" "}
          <span className="font-unbounded text-sm opacity-90">
            {graypaperVisible ? "↑" : "↓"}
          </span>
        </Button>
      </div>
      {graypaperVisible && (
        <>
          {!isSSR && (
            <React.Suspense fallback={<div />}>
              <ClientSidePdfDoc
                pdfUrl="/graypaper_no_background.pdf"
                initialPageNumber={activeLecture.pages[0]}
              />
            </React.Suspense>
          )}
        </>
      )}
      <div className="mx-auto mt-4 flex justify-between gap-4 md:w-3/4">
        {/* <Button
          onClick={() =>
            navigate(
              `/lectures/${slugify(lectures[activeLectureIndex - 1].section)}`,
            )
          }
          disabled={activeLectureIndex === 0}
          className="w-1/2"
        >
          <span className="!font-unbounded opacity-90">←</span>{" "}
          {t("Previous Section")}
          <span className="text-muted block text-xs">
            {lectures[activeLectureIndex - 1]?.section}
          </span>
        </Button> */}
        {/* <Button
          onClick={() =>
            navigate(
              `/lectures/${slugify(lectures[activeLectureIndex + 1].section)}`,
            )
          }
          disabled={activeLectureIndex === lectures.length - 1}
          className="w-1/2"
        >
          {t("Next Section")}{" "}
          <span className="!font-unbounded opacity-90">→</span>
          <span className="text-muted block text-xs">
            {lectures[activeLectureIndex + 1]?.section}
          </span>
        </Button> */}
      </div>
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
      <title id="title">{`JAM ${t("Lectures")}`}</title>
      <meta
        id="description"
        name="description"
        content={"Lectures of the JAM Graypaper by Gavin Wood"}
      />
    </>
  )
}
