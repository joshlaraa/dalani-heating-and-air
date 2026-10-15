import type { LucideIcon } from "lucide-react"

import { cn } from "cn"

export function ServicePlaceholder({
  icon: Icon,
  variant = "card",
}: {
  icon: LucideIcon
  variant?: "card" | "feature"
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate flex w-full items-center justify-center bg-muted",
        variant === "card"
          ? "aspect-[1.8] min-h-40 overflow-visible"
          : "aspect-[2.2] min-h-40 overflow-hidden sm:min-h-48"
      )}
    >
      {/*
        Static background: one flat two-tone gradient. No blurred shapes and no
        bright "via" band, so nothing shimmers when the card is hovered, pressed,
        or animated. To change the look, edit the from-/to- colors on this line.
      */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-br from-brand-from/15 to-brand-to/20" />
      <div className="pointer-events-none absolute inset-4 z-0 rounded-2xl border border-white/60" />

      <span className="absolute top-4 left-5 z-10 text-[10px] font-semibold tracking-[0.16em] text-foreground/40 uppercase">
        Dalani heating &amp; air
      </span>
      {variant === "card" ? (
        <span className="absolute bottom-0 left-1/2 z-10 flex size-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-md sm:size-14">
          <Icon className="size-5 sm:size-6" />
        </span>
      ) : (
        <span className="relative z-10 flex size-20 items-center justify-center rounded-3xl border border-white/70 bg-background text-foreground shadow-lg sm:size-24">
          <Icon className="size-9 sm:size-10" />
        </span>
      )}
    </div>
  )
}