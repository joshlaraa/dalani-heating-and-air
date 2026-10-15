"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, MapPin, Phone, X } from "lucide-react"

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
      <DrawerContent className="data-[swipe-axis=y]:mx-auto data-[swipe-axis=y]:w-[calc(100%-1.5rem)] data-[swipe-axis=y]:max-w-2xl data-[swipe-axis=y]:rounded-t-3xl sm:data-[swipe-axis=y]:top-1/2 sm:data-[swipe-axis=y]:bottom-auto sm:data-[swipe-axis=y]:-translate-y-1/2 sm:data-[swipe-axis=y]:max-h-[min(80dvh,40rem)] sm:data-[swipe-axis=y]:rounded-3xl sm:data-[swipe-axis=y]:border">
        <DrawerHeader className="flex-row items-start justify-between gap-4 border-b p-5 sm:p-7">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-muted text-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1.5">
              <DrawerTitle className="font-heading text-2xl font-semibold tracking-tight">
                {service.title}
              </DrawerTitle>
              <DrawerDescription className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </DrawerDescription>
            </div>
          </div>
          <DrawerClose
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close service details"
                className="size-9 shrink-0"
              />
            }
          >
            <X aria-hidden="true" />
          </DrawerClose>
        </DrawerHeader>

        <div className="flex min-h-0 flex-col gap-6 overflow-y-auto p-5 sm:p-7">
          <p className="text-base leading-relaxed text-muted-foreground">
            {service.details}
          </p>

          <div className="flex items-start gap-3 rounded-2xl bg-muted p-4">
            <MapPin
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.serviceArea}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "h-11 sm:flex-1",
              })}
            >
              Request service
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
