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

const Page: React.FC<PageProps> = (props) => {
  const { t } = useTranslation()
  const lectures = [
    {
      section: "1.1 Nomenclature",
      video: "wbnTnBQNDr4",
      pages: [1],
    },
    {
      section: "1.2 Driving Factors",
      video: "abrGvSbKEjM",
      pages: [1, 2],
    },

    {
      section: "1.3 Scaling Under Size-Synchrony Antagonism",
      video: "8f4aibO5vTI",
      pages: [2],
    },

    {
      section: "2.1 Polkadot",
      video: "jFUQje4puAM",
      pages: [2, 3],
    },

    {
      section: "2.2 Ethereum",
      video: "45c2oQTs-P8",
      pages: [3, 4],
    },
    {
      section: "2.3 Fragmented Meta-Networks",
      video: "AUQZ38Wgl4c",
      pages: [4, 5],
    },
    {
      section: "2.4 High-Performance Fully Synchronous Networks",
      video: "dhO53bV2b8c",
      pages: [5],
    },
    {
      section: "3.1 Typography",
      video: "nPKq_5ChZv8",
      pages: [5],
    },
    {
      section: "3.2 Functions and Operators",
      video: "qOw4XOu_n_w",
      pages: [6],
    },
  ]

  const [activeLectureIndex, setActiveLectureIndex] = React.useState(0)
  const [graypaperVisible, setGraypaperVisible] = React.useState(false)
  const activeLecture = lectures[activeLectureIndex]

  return (
    <Layout>
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
      {lectures[activeLectureIndex] && (
        <div>
          <h3>{activeLecture.section}</h3>
          <LiteYouTubeEmbed
            iframeClass="mt-0 pt-0"
            id={activeLecture.video}
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
      )}
      <div className="mt-4 flex justify-between gap-8">
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
