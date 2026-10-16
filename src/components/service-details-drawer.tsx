"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ArrowRight, BadgeCheck, MapPin, Phone, X } from "lucide-react"

import { ServicePlaceholder } from "@/components/service-placeholder"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { services, siteConfig } from "@/lib/site-config"

export function ServiceDetailsDrawer({
  serviceHref,
}: {
  serviceHref: string
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const service = services.find((item) => item.href === serviceHref)

  // Mount closed, then open on the next frame so the open transition plays.
  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => setOpen(true))
    return () => window.cancelAnimationFrame(animationFrame)
  }, [serviceHref])

  if (!service) {
    throw new Error(`No service found for "${serviceHref}".`)
  }

  const Icon = service.icon

  // Only change the URL AFTER the close animation has finished, so the route
  // change (and page re-render) never competes with the animation.
  function handleOpenChangeComplete(isOpen: boolean) {
    if (!isOpen) {
      router.replace("/services", { scroll: false })
    }
  }

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      onOpenChangeComplete={handleOpenChangeComplete}
      swipeDirection="down"
    >
      {/*
        Size: up to 48rem wide on desktop, nearly full width on phones, and
        never taller than 92% of the screen. The banner height scales with the
        screen height (clamp + dvh), so everything fits without scrolling.
      */}
      <DrawerContent className="transition-[transform,opacity] duration-300 motion-reduce:duration-0 data-starting-style:opacity-0 data-ending-style:opacity-0! data-ending-style:duration-200 data-[swipe-axis=y]:top-1/2 data-[swipe-axis=y]:bottom-auto! data-[swipe-axis=y]:mx-auto data-[swipe-axis=y]:mb-0 data-[swipe-axis=y]:flex data-[swipe-axis=y]:h-auto! data-[swipe-axis=y]:max-h-[min(92dvh,48rem)]! data-[swipe-axis=y]:w-[calc(100%-1.5rem)] data-[swipe-axis=y]:max-w-3xl data-[swipe-axis=y]:origin-center! data-[swipe-axis=y]:-translate-y-1/2 data-[swipe-axis=y]:flex-col data-[swipe-axis=y]:overflow-hidden data-[swipe-axis=y]:rounded-3xl data-[swipe-axis=y]:border data-[swipe-axis=y]:[--closed-transform:translate3d(0,1.25rem,0)_scale(0.96)]! data-[swipe-axis=y]:[--drawer-content-max-height:min(92dvh,48rem)] data-[swipe-axis=y]:shadow-2xl">
        {/*
          Banner. The [&>div] / [&>div>span.relative] selectors resize the
          placeholder and its icon box from here, so no other file changes.
          Phone: icon box 64px so it never collides with the label or badge.
        */}
        <div className="relative aspect-[20/11] w-full shrink-0 overflow-hidden">
          <ServicePlaceholder
            icon={Icon}
            image={service.image}
            variant="feature"
          />
          <DrawerClose
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close service details"
                className="absolute top-4 right-4 size-10 rounded-xl border border-white/70 bg-background/90 text-foreground shadow-sm hover:bg-background"
              />
            }
          >
            <X aria-hidden="true" />
          </DrawerClose>
        </div>

        {/* overflow-y-auto is only a safety net for very short screens */}
        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-5 sm:gap-6 sm:p-8">
          <DrawerHeader className="gap-2 p-0">
            <DrawerTitle className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {service.title}
            </DrawerTitle>
            <DrawerDescription className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.description}
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl bg-muted px-4 py-3.5 sm:px-5 sm:py-4">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground sm:text-base">
              <MapPin className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
              {siteConfig.serviceArea}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground sm:text-base">
              <BadgeCheck
                className="size-4 shrink-0 sm:size-5"
                aria-hidden="true"
              />
              Free estimates
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href={siteConfig.estimateHref}
              className={buttonVariants({
                size: "lg",
                className: "h-12 text-base sm:h-14 sm:flex-1",
              })}
            >
              Get a free estimate
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
            <a
              href={siteConfig.phone.href}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "h-12 text-base sm:h-14 sm:flex-1",
              })}
            >
              <Phone data-icon="inline-start" aria-hidden="true" />
              Call {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}