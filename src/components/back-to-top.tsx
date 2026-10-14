"use client"

import { ArrowUp } from "lucide-react"

import { Button } from "@/components/ui/button"

export function BackToTop() {
  return (
    <Button
      variant="outline"
      onClick={() => window.scrollTo({ top: 0 })}
      className="group/top self-start border-border bg-transparent px-3 text-xs text-muted-foreground sm:self-auto hover:bg-white/10 hover:text-foreground dark:bg-transparent dark:hover:bg-white/10"
    >
      Back to top
      <ArrowUp
        data-icon="inline-end"
        aria-hidden="true"
        className="size-3.5 transition-transform duration-200 group-hover/top:-translate-y-0.5"
      />
    </Button>
  )
}
