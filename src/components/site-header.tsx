"use client"

import { useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"
import { ArrowRight, Clock, Phone } from "lucide-react"

import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"
import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  isActivePath,
  mainNav,
  siteConfig,
  type ServiceLink,
} from "@/lib/site-config"

const SCROLL_THRESHOLD = 8

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true })
  return () => window.removeEventListener("scroll", callback)
}

function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false
  )
}

const topLevelItemStyle =
  "text-muted-foreground hover:text-foreground focus:text-foreground data-active:text-foreground data-popup-open:text-foreground"

export function SiteHeader() {
  const scrolled = useScrolled()
  const pathname = usePathname()
  const transparent = pathname === "/" && !scrolled

  return (
    <header
      data-slot="site-header"
      data-scrolled={scrolled}
      data-transparent={transparent}
      className="sticky top-0 z-40 w-full border-b border-transparent bg-background/80 text-foreground backdrop-blur-xl transition-[border-color,box-shadow,background-color,color,backdrop-filter] duration-500 ease-out data-[scrolled=true]:border-border data-[scrolled=true]:bg-background/85 data-[scrolled=true]:shadow-[0_1px_12px_-4px_rgb(0_0_0/0.08)] data-[transparent=true]:bg-transparent data-[transparent=true]:backdrop-blur-none"
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Logo className="justify-self-start" />
        <DesktopNav />
        <div className="flex items-center gap-1.5 justify-self-end">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 px-4 has-data-[icon=inline-start]:pl-3.5"
            )}
          >
            <Phone data-icon="inline-start" aria-hidden="true" />
            Contact Us
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function DesktopNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <NavigationMenu
      open={open}
      onOpenChange={setOpen}
      className="hidden lg:flex"
      aria-label="Main"
    >
      <NavigationMenuList className="gap-0.5">
        {mainNav.map((item) => {
          const active = isActivePath(pathname, item.href)

          if (item.items) {
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuTrigger
                  className={cn(topLevelItemStyle, active && "text-foreground")}
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ServicesMenu
                    items={item.items}
                    allHref={item.href}
                    pathname={pathname}
                    onNavigate={() => setOpen(false)}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          }

          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                active={active}
                render={<Link href={item.href} />}
                className={cn(navigationMenuTriggerStyle(), topLevelItemStyle)}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ServicesMenu({
  items,
  allHref,
  pathname,
  onNavigate,
}: {
  items: ServiceLink[]
  allHref: string
  pathname: string
  onNavigate: () => void
}) {
  return (
    <div className="grid w-[740px] grid-cols-[220px_1fr] gap-1.5 p-1">
      <NavigationMenuLink
        href={siteConfig.phone.href}
        onClick={onNavigate}
        className="relative flex-col items-start justify-end gap-3 overflow-hidden rounded-md bg-primary p-5 text-primary-foreground hover:bg-primary/90 focus:bg-primary/90"
      >
        <span className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 ring-1 ring-primary-foreground/15">
          <Clock className="size-4.5" aria-hidden="true" />
        </span>
        <span className="flex flex-col gap-1">
          <span className="font-heading text-base font-semibold">
            24/7 Emergency Service
          </span>
          <span className="text-xs leading-relaxed text-primary-foreground/70">
            No heat or no cooling? A technician can be on the way today.
          </span>
        </span>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium">
          <Phone className="size-3.5" aria-hidden="true" />
          {siteConfig.phone.display}
        </span>
      </NavigationMenuLink>
      <div className="flex flex-col">
        <ul className="grid grid-cols-2 gap-0.5">
          {items.map((service) => (
            <li key={service.href}>
              <ServiceMenuLink
                service={service}
                active={isActivePath(pathname, service.href)}
                onNavigate={onNavigate}
              />
            </li>
          ))}
        </ul>
        <NavigationMenuLink
          render={<Link href={allHref} />}
          onClick={onNavigate}
          className="group/all mt-auto justify-between px-3 text-sm in-data-[slot=navigation-menu-content]:rounded-full font-medium text-muted-foreground hover:text-foreground focus:text-foreground"
        >
          View all services
          <ArrowRight
            className="size-3.5 transition-transform duration-200 group-hover/all:translate-x-0.5"
            aria-hidden="true"
          />
        </NavigationMenuLink>
      </div>
    </div>
  )
}

function ServiceMenuLink({
  service,
  active,
  onNavigate,
}: {
  service: ServiceLink
  active: boolean
  onNavigate: () => void
}) {
  const Icon = service.icon

  return (
    <NavigationMenuLink
      active={active}
      render={<Link href={service.href} />}
      onClick={onNavigate}
      className="group/service items-start gap-3 p-3"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground shadow-xs transition-colors duration-200 group-hover/service:text-foreground group-data-active/service:text-foreground">
        <Icon className="size-4.5" aria-hidden="true" />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="font-medium leading-snug">{service.title}</span>
        <span className="text-xs leading-snug text-muted-foreground">
          {service.description}
        </span>
      </span>
    </NavigationMenuLink>
  )
}
