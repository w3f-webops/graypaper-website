import React, { ButtonHTMLAttributes } from "react"
import { cn } from "../utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-sm border border-white p-2 transition-all hover:bg-white/30",
        {
          "cursor-default border-gray-500 text-gray-500 hover:bg-black":
            props.disabled,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
