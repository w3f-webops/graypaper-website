import React, { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { lectures } from "../data/lectures"
import slugify from "slugify"

export const LectureSelect = ({
  activeLectureIndex,
  setActiveLectureIndex,
}: {
  activeLectureIndex: number
  setActiveLectureIndex: (index: number) => void
}) => {
  const handleSelectChange = (val: string) => {
    const selectedIndex = parseInt(val) || 0
    const section = slugify(lectures[selectedIndex].section)
    const url = new URL(window.location.href)
    url.searchParams.set("section", section)
    window.history.pushState({}, "", url.toString())
    setActiveLectureIndex(selectedIndex)
  }

  return (
    <>
      <label className="">Select a Lecture</label>
      <Select
        onValueChange={handleSelectChange}
        value={`${activeLectureIndex}`}
      >
        <SelectTrigger className="h-18 mt-1 flex flex-nowrap text-left font-unbounded text-xl font-bold ">
          <SelectValue>{lectures[activeLectureIndex].section}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {lectures.map((lecture, index) => (
            <SelectItem key={index} value={`${index}`}>
              {lecture.section}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
