"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
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
  const service = services.find((item) => item.href === serviceHref)

  if (!service) {
    throw new Error(`No service found for "${serviceHref}".`)
  }

  const Icon = service.icon

  return (
    <Drawer
      open
      onOpenChange={(open) => {
        if (!open) router.replace("/services", { scroll: false })
      }}
      swipeDirection="down"
    >
      <DrawerContent className="data-[swipe-axis=y]:mx-auto data-[swipe-axis=y]:mb-3 data-[swipe-axis=y]:w-[calc(100%-1.5rem)] data-[swipe-axis=y]:max-w-2xl data-[swipe-axis=y]:overflow-hidden data-[swipe-axis=y]:rounded-3xl data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-1.5rem)] data-[swipe-axis=y]:shadow-2xl sm:data-[swipe-axis=y]:top-1/2 sm:data-[swipe-axis=y]:bottom-auto sm:data-[swipe-axis=y]:-translate-y-1/2 sm:data-[swipe-axis=y]:mb-0 sm:data-[swipe-axis=y]:[--drawer-content-max-height:min(86dvh,44rem)] sm:data-[swipe-axis=y]:border">
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

        <div className="flex min-h-0 flex-col gap-5 overflow-y-auto p-5 sm:gap-6 sm:p-7">
          <DrawerHeader className="gap-2 p-0">
            <DrawerTitle className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {service.title}
            </DrawerTitle>
            <DrawerDescription className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </DrawerDescription>
          </DrawerHeader>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {service.details}
          </p>

          <div className="grid gap-3 rounded-2xl bg-muted p-4 sm:grid-cols-2 sm:gap-4 sm:p-5">
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground shadow-xs">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Local service
                </span>
                <span className="text-sm font-medium">
                  {siteConfig.serviceArea}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground shadow-xs">
                <BadgeCheck className="size-4" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  No obligation
                </span>
                <span className="text-sm font-medium">
                  Free, upfront estimates
                </span>
              </div>
            </div>
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
