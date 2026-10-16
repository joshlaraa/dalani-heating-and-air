"use client"

import { useEffect, useState, type CSSProperties } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"
import { ClipboardCheck, Clock, Menu, Phone, XIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import {
  isActivePath,
  mainNav,
  siteConfig,
  type NavItem,
} from "@/lib/site-config"

const DESKTOP_QUERY = "(min-width: 1024px)"

const mobileLinkStyle =
  "flex h-11 items-center gap-3 rounded-xl px-4 text-base font-medium text-muted-foreground transition-[background-color,color,scale] duration-200 outline-none select-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.98] active:bg-muted active:text-foreground aria-[current=page]:bg-muted aria-[current=page]:text-foreground"

const enterStyle =
  "animate-in fade-in slide-in-from-right-6 fill-mode-backwards duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:animate-none"

function enterDelay(index: number): CSSProperties {
  return { animationDelay: `${120 + index * 45}ms` }
}

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const close = () => setOpen(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY)
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    mediaQuery.addEventListener("change", onChange)
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [])

  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
      <DrawerTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label="Open menu"
            className="size-10 lg:hidden"
          />
        }
      >
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="data-[swipe-axis=x]:[--drawer-content-width:85%]">
        <DrawerHeader className="h-16 shrink-0 flex-row items-center justify-between border-b px-4 py-0">
          <Logo onClick={close} />
          <DrawerClose
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                className="size-10"
              />
            }
          >
            <XIcon />
          </DrawerClose>
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          <DrawerDescription className="sr-only">
            Site navigation for {siteConfig.name}
          </DrawerDescription>
        </DrawerHeader>

        <nav
          aria-label="Mobile"
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4"
        >
          <ul className="flex flex-col gap-0.5">
            {mainNav.map((item, index) => (
              <li
                key={item.href}
                className={enterStyle}
                style={enterDelay(index)}
              >
                {item.items ? (
                  <MobileSubmenu
                    item={item}
                    pathname={pathname}
                    onNavigate={close}
                  />
                ) : (
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={
                      isActivePath(pathname, item.href) ? "page" : undefined
                    }
                    className={mobileLinkStyle}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Separator />
        <DrawerFooter
          className={cn(
            enterStyle,
            "gap-3 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          )}
          style={enterDelay(mainNav.length)}
        >
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3.5" aria-hidden="true" />
            24/7 emergency service available
          </p>
          <div className="flex flex-col gap-2">
            <a
              href={siteConfig.phone.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11"
              )}
            >
              <Phone data-icon="inline-start" aria-hidden="true" />
              Call Now
            </a>
            <Link
              href={siteConfig.estimateHref}
              onClick={close}
              className={cn(buttonVariants({ size: "lg" }), "h-11")}
            >
              <ClipboardCheck data-icon="inline-start" aria-hidden="true" />
              Get a Free Estimate
            </Link>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function MobileSubmenu({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem
  pathname: string
  onNavigate: () => void
}) {
  const active = isActivePath(pathname, item.href)
  const [value, setValue] = useState<string[]>(active ? [item.href] : [])

  return (
    <Accordion value={value} onValueChange={setValue}>
      <AccordionItem value={item.href}>
        <AccordionTrigger
          className={cn(
            mobileLinkStyle,
            "py-0 hover:no-underline focus-visible:border-transparent",
            active && "text-foreground"
          )}
        >
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="pt-1 pb-2 [&_a]:no-underline">
          <ul className="ml-4 flex flex-col gap-0.5 border-l pl-2">
            {item.items?.map((child) => {
              const Icon = child.icon
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={onNavigate}
                    aria-current={
                      isActivePath(pathname, child.href) ? "page" : undefined
                    }
                    className={cn(
                      mobileLinkStyle,
                      "h-auto min-h-10 px-3 py-2 text-[0.95rem] leading-snug"
                    )}
                  >
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    {child.title}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  mobileLinkStyle,
                  "h-10 px-3 text-[0.95rem] text-foreground underline-offset-4 hover:bg-transparent hover:underline"
                )}
              >
                View all services
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
