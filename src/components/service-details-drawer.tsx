"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
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
  const closeTimeoutRef = useRef<number | null>(null)
  const service = services.find((item) => item.href === serviceHref)

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => setOpen(true))

    return () => {
      window.cancelAnimationFrame(animationFrame)
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [serviceHref])

  if (!service) {
    throw new Error(`No service found for "${serviceHref}".`)
  }

  const Icon = service.icon

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen)
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    if (!nextOpen) {
      closeTimeoutRef.current = window.setTimeout(
        () => router.replace("/services", { scroll: false }),
        260
      )
    }
  }

  return (
    <Drawer
      open={open}
      onOpenChange={handleOpenChange}
      swipeDirection="down"
    >
      <DrawerContent className="data-[swipe-axis=y]:top-1/2 data-[swipe-axis=y]:bottom-auto data-[swipe-axis=y]:mx-auto data-[swipe-axis=y]:mb-0 data-[swipe-axis=y]:w-[calc(100%-1.5rem)] data-[swipe-axis=y]:max-w-2xl data-[swipe-axis=y]:-translate-y-1/2 data-[swipe-axis=y]:overflow-hidden data-[swipe-axis=y]:rounded-3xl data-[swipe-axis=y]:border data-[swipe-axis=y]:[--drawer-content-max-height:min(86dvh,44rem)] data-[swipe-axis=y]:shadow-2xl data-starting-style:duration-[550ms] data-ending-style:duration-[250ms] motion-reduce:duration-0">
        <div className="relative">
          <ServicePlaceholder icon={Icon} variant="feature" />
          <DrawerClose
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close service details"
                className="absolute top-4 right-4 size-10 rounded-full border border-white/70 bg-background/85 text-foreground shadow-sm backdrop-blur-md hover:bg-background"
              />
            }
          >
            <X aria-hidden="true" />
          </DrawerClose>
          <span className="absolute right-5 bottom-4 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-background/85 px-3 py-1.5 text-[11px] font-medium text-foreground shadow-sm backdrop-blur-md">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            Service overview
          </span>
        </div>

        <div className="flex min-h-0 flex-col gap-4 p-4 sm:gap-5 sm:p-6">
          <DrawerHeader className="gap-1.5 p-0">
            <DrawerTitle className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
              {service.title}
            </DrawerTitle>
            <DrawerDescription className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-xl bg-muted px-3.5 py-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground sm:text-sm">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {siteConfig.serviceArea}
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground sm:text-sm">
              <BadgeCheck className="size-4 shrink-0" aria-hidden="true" />
              Free estimates
            </span>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "h-11 sm:flex-1",
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
                className: "h-11 sm:flex-1",
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
