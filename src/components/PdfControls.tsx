import React from "react"
import { useControls } from "react-zoom-pan-pinch"
import { Button } from "./Button"

export function PdfControls() {
  const { zoomIn, zoomOut, resetTransform } = useControls()

  return (
    <div className="tools absolute right-0 top-0 z-10">
      <Button
        className="h-8 w-8 rounded-md bg-black p-1"
        onClick={() => zoomIn()}
      >
        +
      </Button>
      <Button
        className="h-8 w-8 rounded-md bg-black p-1"
        onClick={() => zoomOut()}
      >
        -
      </Button>
    </div>
  )
}
