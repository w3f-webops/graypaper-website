import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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
