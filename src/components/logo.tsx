import Link from "next/link"
import { cn } from "cn"
import { Snowflake } from "lucide-react"

import { siteConfig } from "@/lib/site-config"

export function Logo({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  const Icon = siteConfig.logoIcon

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "group/logo flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <span className="relative flex size-8 items-center justify-center rounded-full bg-linear-to-br from-brand-from to-brand-to text-white shadow-sm shadow-brand-to/25 ring-1 ring-black/5 ring-inset transition-transform duration-300 group-hover/logo:scale-105">
        <Icon className="size-4.5 fill-white/25" aria-hidden="true" />
        <span className="absolute -right-1 -bottom-1 flex size-3.5 items-center justify-center rounded-full bg-brand-frost text-white ring-2 ring-background">
          <Snowflake className="size-2.5" aria-hidden="true" />
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[0.95rem] font-semibold tracking-tight">
          {siteConfig.shortName}
        </span>
        <span className="text-[0.7rem] font-medium tracking-wide text-muted-foreground uppercase transition-colors duration-500">
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  )
}
