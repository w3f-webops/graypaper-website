import React, { useState, useRef, useCallback, useEffect } from "react"

import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"
import { PdfControls } from "./PdfControls"
import { LoaderCircle } from "lucide-react"

if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
}

interface PdfViewerProps {
  pdfUrl: string
  initialPageNumber: number
}

export default function PdfDoc({ pdfUrl, initialPageNumber }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>()
  const [scale, setScale] = useState(1.0)
  const [pageNumber, setPageNumber] = useState<number>(initialPageNumber)
  const [pageWidth, setPageWidth] = useState<number>(0)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current && pageWidth) {
        const containerWidth = containerRef.current.offsetWidth
        setScale(containerWidth / pageWidth)
      }
    }

    window.addEventListener("resize", updateScale)
    updateScale()
    return () => window.removeEventListener("resize", updateScale)
  }, [pageWidth])

  useEffect(() => {
    setPageNumber(initialPageNumber)
  }, [initialPageNumber])

  const minScale = containerRef.current
    ? containerRef.current.offsetWidth / pageWidth
    : 1.0

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  const onPageLoadSuccess = useCallback((page: any) => {
    setPageWidth(page.originalWidth)
  }, [])

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.2)
  }

  const handleZoomOut = () => {
    setScale((prevScale) => (prevScale > 0.2 ? prevScale - 0.2 : prevScale))
  }

  const handleNextPage = () => {
    setPageNumber((prevPageNumber) =>
      numPages && prevPageNumber < numPages
        ? prevPageNumber + 1
        : prevPageNumber,
    )
  }

  const handlePrevPage = () => {
    setPageNumber((prevPageNumber) =>
      prevPageNumber > 1 ? prevPageNumber - 1 : prevPageNumber,
    )
  }

  return (
    <div className="pdf-container relative mt-4" ref={containerRef}>
      <PdfControls
        scale={scale}
        minScale={minScale}
        pageNumber={pageNumber}
        numPages={numPages}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        className="overflow-scroll"
        loading={<LoaderCircle className="animate-spin" />}
      >
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          scale={scale}
          onLoadSuccess={onPageLoadSuccess}
        />
      </Document>
    </div>
  )
}
