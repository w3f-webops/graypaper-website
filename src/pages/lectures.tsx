import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { CommonHead } from "../components/Head/CommonHead"
import { Layout } from "../components/Layout"
import { Button } from "../components/Button"

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { toDoubleDigit } from "../utils"

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import { PdfControls } from "../components/PdfControls"
import { lectures } from "../data"

import { Worker, Viewer } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"
import { zoomPlugin } from "@react-pdf-viewer/zoom"
import "@react-pdf-viewer/zoom/lib/styles/index.css"
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation"
import "@react-pdf-viewer/page-navigation/lib/styles/index.css"
import PdfViewer from "../components/PdfViewer"

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()

  const [activeLectureIndex, setActiveLectureIndex] = React.useState(0)
  const [graypaperVisible, setGraypaperVisible] = React.useState(false)
  const activeLecture = lectures[activeLectureIndex]

  return (
    <Layout>
      <div className="text-xs"></div>
      <h2 id="lectures">{t("Lectures")}</h2>

      <label htmlFor="select-lecture">Select a lecture</label>
      <select
        id="select-lecture"
        className="mt-1 block rounded-sm p-2 text-sm text-black"
        onChange={(e) => setActiveLectureIndex(parseInt(e.target.value))}
        value={activeLectureIndex}
      >
        {lectures.map((lecture, index) => (
          <option key={index} value={index}>
            {lecture.section}
          </option>
        ))}
      </select>
      {activeLecture && (
        <div>
          <h3 className="mb-0">{activeLecture.section}</h3>
          <p className="mb-4 mt-0 w-full text-sm font-normal text-gray-400">
            {activeLecture.subtitle}
          </p>
          <LiteYouTubeEmbed
            iframeClass="mt-0 pt-0"
            id={activeLecture.videoId}
            title={activeLecture.section}
          />
        </div>
      )}
      <Button
        className="mt-4 w-full"
        onClick={() => setGraypaperVisible(!graypaperVisible)}
      >
        {graypaperVisible ? "Hide" : "Show"} Sections in Graypaper{" "}
        {graypaperVisible ? "↑" : "↓"}
      </Button>
      {graypaperVisible && (
        <PdfViewer
          key={activeLecture.pages[0]}
          pdfUrl={"/graypaper_no_background.pdf"}
          initialPage={activeLecture.pages[0] - 1}
          className="mt-4"
        />
      )}
      {/* {graypaperVisible && (
        <div className="relative mt-4">
          <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <PdfControls />
                <TransformComponent>
                  <img
                    src={`/svg_graypaper_no_background/graypaper_no_background-${toDoubleDigit(activeLecture.pages[0])}.svg`}
                    alt={`Page ${activeLecture.pages[0]}`}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      )} */}
      <div className="mt-4 flex justify-between gap-4">
        <Button
          onClick={() =>
            setActiveLectureIndex(Math.max(0, activeLectureIndex - 1))
          }
          disabled={activeLectureIndex === 0}
          className="w-1/2"
        >
          ← Previous Section
          <span className="text-muted block text-xs">
            {lectures[activeLectureIndex - 1]?.section}
          </span>
        </Button>
        {/* <div className="border-none p-2 text-center">
          <span className="block">{activeLecture.section}</span>
          <span className="block whitespace-nowrap text-xs">
            ({activeLectureIndex + 1} of {lectures.length})
          </span>
        </div> */}
        <Button
          onClick={() =>
            setActiveLectureIndex(
              Math.min(activeLectureIndex + 1, lectures.length - 1),
            )
          }
          disabled={activeLectureIndex === lectures.length - 1}
          className="w-1/2"
        >
          Next Section →
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
      <title id="title">{`JAM ${t("Tour")}`}</title>

      {/* TODO remove once content is available */}
      <meta name="robots" content="noindex, nofollow" />
      {/* <meta
        id="description"
        name="description"
        content={""}
      /> */}
    </>
  )
}
