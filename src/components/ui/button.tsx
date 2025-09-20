import * as React from "react"
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export type ButtonVariant = "default" | "ghost"
export type ButtonSize = "sm" | "md"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "ghost"
      ? "bg-gray-200/10  hover:bg-gray-300 dark:hover:bg-gray-300 text-inherit"
      : "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-white"

  const sizeClass = size === "sm" ? "h-8 px-2 text-sm" : "h-10 px-4 text-sm"

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 disabled:pointer-events-none disabled:opacity-50",
        variantClass,
        sizeClass,
        className,
      )}
      {...props}
    />
  )
} 