import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "cn"
import { Mail, MapPin, Phone } from "lucide-react"

import { Logo } from "@/components/logo"
import { legalNav, mainNav, services, siteConfig } from "@/lib/site-config"

const footerLinkStyle =
  "rounded-full text-sm text-muted-foreground transition-colors duration-200 outline-none hover:text-foreground focus-visible:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="text-sm font-medium">{title}</h3>
      {children}
    </div>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="dark bg-neutral-950 text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-3 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-3 lg:col-span-4">
            <Logo className="self-start" />
            <p className="max-w-xs text-sm leading-relaxed text-pretty text-muted-foreground">
              Locally owned heating and cooling. Repairs, installs, and
              maintenance done right the first time.
            </p>
          </div>

          <FooterColumn title="Services" className="lg:col-span-3">
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className={footerLinkStyle}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Company" className="lg:col-span-2">
            <ul className="flex flex-col gap-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkStyle}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact" className="col-span-2 md:col-span-1 lg:col-span-3">
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={siteConfig.phone.href}
                  className={cn(
                    footerLinkStyle,
                    "inline-flex items-center gap-2 font-medium text-foreground"
                  )}
                >
                  <Phone className="size-3.5" aria-hidden="true" />
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={cn(footerLinkStyle, "inline-flex items-center gap-2")}
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden="true" />
                {siteConfig.serviceArea}
              </li>
            </ul>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-4 border-t py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <p>
              &copy; {year} {siteConfig.name}
            </p>
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(footerLinkStyle, "text-xs")}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
