import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ClientData } from "./data/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toDoubleDigit(number: number) {
  return number < 10 ? "0" + number : number.toString()
}

export const isEventInFuture = (dateStr: string) => {
  // Convert DD/MM/YYYY to MM/DD/YYYY for proper Date parsing
  const [day, month, year] = dateStr.split("/")
  const eventDate = new Date(`${month}/${day}/${year}`)
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time part for date comparison
  return eventDate >= today
}

export function uniqueArray<T>(array: T[]): T[] {
  return [...new Set(array)]
}

/** Link to the Fellowship referendum that approved the client's current milestone. */
export const milestoneReferendumUrl = (client: ClientData) => {
  if (client.milestone === 0) return undefined
  const index = client.milestoneReferenda?.[client.milestone]
  if (index === undefined) return undefined
  return `https://collectives.subsquare.io/fellowship/referenda/${index}`
}
