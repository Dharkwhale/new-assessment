import * as React from "react"
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl bg-muted shadow-sm dark:border-gray-800 dark:bg-muted dark:text-accent ",
        className,
      )}
      {...props}
    />
  )
} 