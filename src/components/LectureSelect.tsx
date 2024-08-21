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
import { useTranslation } from "react-i18next"

export const LectureSelect = ({
  activeLectureIndex,
  setActiveLectureIndex,
}: {
  activeLectureIndex: number
  setActiveLectureIndex: (index: number) => void
}) => {
  const { t } = useTranslation()
  const handleSelectChange = (val: string) => {
    const selectedIndex = parseInt(val) || 0
    setActiveLectureIndex(selectedIndex)
  }

  return (
    <>
      <label className="">{t('Select Lecture')}</label>
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
