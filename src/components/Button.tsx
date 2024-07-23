import React, { ButtonHTMLAttributes } from "react"
import { cn } from "../utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export function Button({ children, className, icon, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-sm border border-white p-2 transition-all hover:bg-white/30",
        {
          "cursor-default border-gray-500 text-gray-500 hover:bg-black":
            props.disabled,
        },
        {
          "flex h-8 w-8 items-center justify-center rounded-md border border-none p-1 text-sm text-black hover:bg-gray-200":
            icon,
        },
        {
          "text-gray-400 hover:bg-transparent": icon && props.disabled,
        },
        className,
      )}
      {...props}
    >
      {children || icon}
    </button>
  )
}
