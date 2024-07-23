import React, { useState } from "react"
import {
  Worker,
  Viewer,
  ScrollMode,
  SpecialZoomLevel,
  Tooltip,
  Position,
  MinimalButton,
  Icon,
} from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"

import { zoomPlugin } from "@react-pdf-viewer/zoom"
import "@react-pdf-viewer/zoom/lib/styles/index.css"

import {
  pageNavigationPlugin,
  RenderGoToPageProps,
} from "@react-pdf-viewer/page-navigation"
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
  const fullScreenPluginInstance = fullScreenPlugin()
  const { EnterFullScreenButton } = fullScreenPluginInstance
  const { ZoomInButton, ZoomOutButton } = zoomPluginInstance
  const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance

  return (
    <div className={cn("relative", className)}>
      <div className="pdf-controls absolute right-0 top-0 z-10 flex justify-center gap-2 pr-1 pt-1">
        <GoToPreviousPage>
          {(props: RenderGoToPageProps) => (
            <Tooltip
              position={Position.BottomCenter}
              target={
                <MinimalButton onClick={props.onClick}>
                  <Icon size={16}>
                    <path d="M18.4.5,5.825,11.626a.5.5,0,0,0,0,.748L18.4,23.5" />
                  </Icon>
                </MinimalButton>
              }
              content={() => "Previous page"}
              offset={{ left: 0, top: 8 }}
            />
          )}
        </GoToPreviousPage>
        <GoToNextPage>
          {(props: RenderGoToPageProps) => (
            <Tooltip
              position={Position.BottomCenter}
              target={
                <MinimalButton onClick={props.onClick}>
                  <Icon size={16}>
                    <path
                      d="M18.4.5,5.825,11.626a.5.5,0,0,0,0,.748L18.4,23.5"
                      transform="rotate(180 12 12)"
                    />
                  </Icon>
                </MinimalButton>
              }
              content={() => "Next Page"}
              offset={{ left: 0, top: 8 }}
            />
          )}
        </GoToNextPage>
        <ZoomOutButton />
        <ZoomInButton />
        <EnterFullScreenButton />
      </div>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
      >
        <div className="pdf-viewer-container">
          <Viewer
            key={initialPage}
            theme="dark"
            fileUrl={pdfUrl}
            scrollMode={ScrollMode.Horizontal}
            plugins={[
              fullScreenPluginInstance,
              zoomPluginInstance,
              pageNavigationPluginInstance,
            ]}
            defaultScale={SpecialZoomLevel.PageWidth}
            initialPage={initialPage || 0}
          />
        </div>
      </Worker>
    </div>
  )
}

export default PdfViewer
