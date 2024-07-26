import React from "react"
import { Lecture, lectures } from "../data/lectures"
import { Layout } from "./Layout"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import { LectureSelect } from "./LectureSelect"
import { Button } from "./Button"
import { t } from "i18next"
import { navigate } from "gatsby"
import slugify from "slugify"

const ClientSidePdfDoc = React.lazy(() => import("./PdfDoc"))

export default function LectureView({
  pageContext,
}: {
  pageContext: { lectureSection: string }
}) {
  const lectureSection = pageContext?.lectureSection
  const [graypaperVisible, setGraypaperVisible] = React.useState(false)
  const isSSR = typeof window === "undefined"

  const lectureIndex = lectures.findIndex((l) => l.section === lectureSection)
  const lecture = lectures[lectureIndex || 0]

  return (
    <Layout wide>
      <div className="mx-auto md:w-3/4">
        <h2 id="lectures" className="text-center">
          {t("Lectures")}
        </h2>
        <LectureSelect
          activeLectureIndex={lectures.findIndex(
            (l) => l.section === lecture.section,
          )}
        />
      </div>

      {lecture && (
        <div className="mt-4">
          <LiteYouTubeEmbed
            iframeClass="mt-0 pt-0"
            id={lecture.videoId}
            title={lecture.section}
            poster="maxresdefault"
          />
          <p className="mt-1 w-full text-right text-sm font-normal text-gray-400">
            {t(lecture.i18nSubtitle)}
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
                initialPageNumber={lecture.pages[0]}
              />
            </React.Suspense>
          )}
        </>
      )}
      <div className="mx-auto mt-4 flex justify-between gap-4 md:w-3/4">
        <Button
          onClick={() =>
            navigate(`/lectures/${slugify(lectures[lectureIndex - 1].section)}`)
          }
          disabled={lectureIndex === 0}
          className="w-1/2"
        >
          <span className="!font-unbounded opacity-90">←</span>{" "}
          {t("Previous Section")}
          <span className="text-muted block text-xs">
            {lectures[lectureIndex - 1]?.section}
          </span>
        </Button>
        <Button
          onClick={() =>
            navigate(`/lectures/${slugify(lectures[lectureIndex + 1].section)}`)
          }
          disabled={lectureIndex === lectures.length - 1}
          className="w-1/2"
        >
          {t("Next Section")}{" "}
          <span className="!font-unbounded opacity-90">→</span>
          <span className="text-muted block text-xs">
            {lectures[lectureIndex + 1]?.section}
          </span>
        </Button>
      </div>
    </Layout>
  )
}
