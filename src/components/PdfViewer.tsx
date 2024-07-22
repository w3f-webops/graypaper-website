import React, { useState } from "react"
import { Worker, Viewer } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"

import { zoomPlugin } from "@react-pdf-viewer/zoom"
import "@react-pdf-viewer/zoom/lib/styles/index.css"

import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation"
import "@react-pdf-viewer/page-navigation/lib/styles/index.css"

import { version as pdfjsVersion } from "pdfjs-dist"

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"

import { fullScreenPlugin } from "@react-pdf-viewer/full-screen"
import "@react-pdf-viewer/full-screen/lib/styles/index.css"
import { cn } from "../utils"

const PdfViewer = ({
  pdfUrl,
  initialPage,
  className,
}: {
  pdfUrl: string
  initialPage?: number
  className?: string
}) => {
  const zoomPluginInstance = zoomPlugin()
  const pageNavigationPluginInstance = pageNavigationPlugin()
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const fullScreenPluginInstance = fullScreenPlugin()
  const { EnterFullScreenButton } = fullScreenPluginInstance
  const { ZoomInButton, ZoomOutButton } = zoomPluginInstance
  const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance
  //   const { JumpToNextPageButton, JumpToPreviousPageButton } =
  //     pageNavigationPluginInstance

  return (
    <div className={cn("relative", className)}>
      <div className="pdf-controls absolute right-0 top-0 z-10 flex justify-center gap-2 pr-1 pt-1">
        <GoToPreviousPage />
        <GoToNextPage />
        <ZoomOutButton />
        <ZoomInButton />
        <EnterFullScreenButton />
      </div>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
      >
        <div className="pdf-viewer-container">
          <Viewer
            fileUrl={pdfUrl}
            plugins={[
              fullScreenPluginInstance,
              zoomPluginInstance,
              pageNavigationPluginInstance,
            ]}
            initialPage={initialPage || 0}
          />
        </div>
      </Worker>
    </div>
  )
}

export default PdfViewer
