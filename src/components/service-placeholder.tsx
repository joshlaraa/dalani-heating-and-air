import type { LucideIcon } from "lucide-react"
import Image from "next/image"

import { cn } from "cn"

export function ServicePlaceholder({
  icon: Icon,
  image,
  variant = "card",
}: {
  icon: LucideIcon
  image: { src: string; alt: string; position?: string }
  variant?: "card" | "feature"
}) {
  return (
    <div
      aria-hidden="true"
      style={variant === "feature" ? { aspectRatio: "20 / 11" } : undefined}
      className={cn(
        "relative isolate flex w-full items-center justify-center bg-muted",
        variant === "card"
          ? "aspect-[1.8] min-h-40 overflow-visible"
          : "h-full min-h-0 overflow-hidden"
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={
          variant === "card"
            ? "(min-width: 1024px) 30vw, 50vw"
            : "(min-width: 640px) 768px, 100vw"
        }
        className={cn(
          "z-0 object-cover",
          variant === "feature" && "scale-125"
        )}
        style={{ objectPosition: image.position }}
      />
      {variant === "card" ? (
        <span className="absolute bottom-0 left-1/2 z-10 flex size-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-md sm:size-14">
          <Icon className="size-5 sm:size-6" />
        </span>
      ) : null}
    </div>
  )
}