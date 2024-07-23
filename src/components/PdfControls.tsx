import React from "react"
import { Button } from "./Button"

import { ZoomIn, ZoomOut } from "lucide-react"

interface PdfControlsProps {
  scale: number
  minScale: number
  pageNumber: number
  numPages?: number
  onZoomIn: () => void
  onZoomOut: () => void
  onNextPage: () => void
  onPrevPage: () => void
}

export const PdfControls: React.FC<PdfControlsProps> = ({
  scale,
  minScale,
  pageNumber,
  numPages,
  onZoomIn,
  onZoomOut,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="pdf-controls absolute right-0 top-0 z-10 flex p-1">
      <Button
        onClick={onZoomIn}
        disabled={scale >= 3.0}
        icon={
          <ZoomIn
            strokeWidth={1}
            height={18}
            width={18}
            stroke="currentColor"
          />
        }
      />
      <Button
        onClick={onZoomOut}
        disabled={scale <= minScale}
        icon={
          <ZoomOut
            strokeWidth={1}
            height={18}
            width={18}
            stroke="currentColor"
          />
        }
      />
      <Button onClick={onPrevPage} icon={"←"} disabled={pageNumber <= 1} />
      <Button
        onClick={onNextPage}
        disabled={numPages ? pageNumber >= numPages : true}
        icon={"→"}
      />
    </div>
  )
}
