import React, { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { lectures } from "../data/lectures"
import { navigate } from "gatsby"
import slugify from "slugify"

const handleSelectChange = (val: string) => {
  const selectedIndex = parseInt(val) || 0
  navigate(`/lectures/${slugify(lectures[selectedIndex].section)}`)
}

export const LectureSelect = ({
  activeLectureIndex,
}: {
  activeLectureIndex: number
}) => {
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
