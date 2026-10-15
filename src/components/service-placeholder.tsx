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
        "relative isolate flex w-full items-center justify-center overflow-hidden bg-muted",
        variant === "card"
          ? "aspect-[1.8] min-h-40"
          : "aspect-[2.2] min-h-40 sm:min-h-48"
      )}
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-brand-frost/20 via-muted to-brand-from/20" />
      <div className="absolute -top-16 -right-12 -z-10 size-44 rounded-full bg-brand-frost/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-12 -z-10 size-48 rounded-full bg-brand-to/15 blur-3xl" />
      <div className="absolute inset-4 rounded-2xl border border-white/50" />
      <span className="absolute top-4 left-5 text-[10px] font-semibold tracking-[0.16em] text-foreground/40 uppercase">
        Dalani heating &amp; air
      </span>
      {variant === "card" ? (
        <span className="absolute bottom-0 left-1/2 flex size-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-md sm:size-14">
          <Icon className="size-5 sm:size-6" />
        </span>
      ) : (
        <span className="flex size-20 items-center justify-center rounded-3xl border border-white/70 bg-background/85 text-foreground shadow-lg shadow-brand-to/10 backdrop-blur-md sm:size-24">
          <Icon className="size-9 sm:size-10" />
        </span>
      )}
    </div>
  )
}
