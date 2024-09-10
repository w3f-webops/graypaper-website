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

  const params = new URLSearchParams(location.search)
  const sectionParam = params.get("section")

  const initialIndex = sectionParam
    ? lectures.findIndex((lecture) => slugify(lecture.section) === sectionParam)
    : 0

  const [graypaperVisible, setGraypaperVisible] = React.useState(false)
  const [activeLectureIndex, setActiveLectureIndex] = React.useState(
    initialIndex !== -1 ? initialIndex : 0,
  )

  // Update URL when activeLectureIndex changes
  useEffect(() => {
    if (activeLectureIndex !== -1) {
      const section = slugify(lectures[activeLectureIndex].section)
      const url = new URL(window.location.href)
      url.searchParams.set("section", section)
      window.history.pushState({}, "", url.toString())
    }
  }, [activeLectureIndex])

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
        <Button
          onClick={() =>
            setActiveLectureIndex(
              activeLectureIndex === 0
                ? lectures.length - 1
                : activeLectureIndex - 1,
            )
          }
          disabled={activeLectureIndex === 0}
          className="w-1/2"
        >
          <span className="!font-unbounded opacity-90">←</span>{" "}
          {t("Previous Section")}
          <span className="block text-xs text-muted">
            {lectures[activeLectureIndex - 1]?.section}
          </span>
        </Button>
        <Button
          onClick={() =>
            setActiveLectureIndex(
              activeLectureIndex === lectures.length - 1
                ? 0
                : activeLectureIndex + 1,
            )
          }
          disabled={activeLectureIndex === lectures.length - 1}
          className="w-1/2"
        >
          {t("Next Section")}{" "}
          <span className="!font-unbounded opacity-90">→</span>
          <span className="block text-xs text-muted">
            {lectures[activeLectureIndex + 1]?.section}
          </span>
        </Button>
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
