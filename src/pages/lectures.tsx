import { navigate, type HeadFC, type PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import { Button } from "../components/Button"

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

import { lectures } from "../data/lectures"
import { LectureSelect } from "../components/LectureSelect"
import slugify from "slugify"

const ClientSidePdfDoc = React.lazy(() => import("../components/PdfDoc"))

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()

  const isSSR = typeof window === "undefined"

  const [activeLectureIndex, setActiveLectureIndex] = useState(0)
  const [graypaperVisible, setGraypaperVisible] = useState(false)
  const activeLecture = lectures[activeLectureIndex]
  const activePage = activeLecture.pages[0]

  // Set active lecture from URL
  useEffect(() => {
    const sectionFromPath = window.location.pathname
      .split("/lectures/")[1]
      ?.replace(/\/$/, "")

    console.log("sectionFromPath", sectionFromPath)
    if (sectionFromPath) {
      const foundLecture = lectures.find(
        (lecture) => slugify(lecture.section) === sectionFromPath,
      )
      if (foundLecture) {
        setActiveLectureIndex(
          lectures.findIndex(
            (lecture) =>
              slugify(lecture.section) === slugify(foundLecture.section),
          ),
        )
      }
    }
  }, [!isSSR && window.location.pathname])

  return (
    <Layout wide>
      <div className="mx-auto md:w-3/4">
        <h2 id="lectures" className="mb-8 text-center">
          {t("Lectures")}
        </h2>
        <LectureSelect activeLectureIndex={activeLectureIndex} />
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
                initialPageNumber={activePage}
              />
            </React.Suspense>
          )}
        </>
      )}
      <div className="mx-auto mt-4 flex justify-between gap-4 md:w-3/4">
        <Button
          onClick={() =>
            setActiveLectureIndex(Math.max(0, activeLectureIndex - 1))
          }
          disabled={activeLectureIndex === 0}
          className="w-1/2"
        >
          <span className="!font-unbounded opacity-90">←</span>{" "}
          {t("Previous Section")}
          <span className="text-muted block text-xs">
            {lectures[activeLectureIndex - 1]?.section}
          </span>
        </Button>
        <Button
          onClick={() =>
            setActiveLectureIndex(
              Math.min(activeLectureIndex + 1, lectures.length - 1),
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
