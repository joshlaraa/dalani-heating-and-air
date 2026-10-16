import type { ReactNode } from "react"
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { BusinessHours } from "@/components/business-hours"
import { siteConfig } from "@/lib/site-config"

function ContactDetail({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon
  label: string
  children: ReactNode
}) {
  return (
    <li className="flex items-start gap-4 py-4 first:pt-5 last:pb-5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </span>
        {children}
      </div>
    </li>
  )
}

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        <div className="order-first flex flex-col gap-6 lg:order-first">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-muted-foreground">
              Contact Dalani Heating &amp; Air
            </p>
            <h1
              id="contact-heading"
              className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              How can we help with your home comfort?
            </h1>
            <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              Need a repair, an estimate, or help choosing the right service?
              Call, email, or send us a message. Our local San Diego County team
              will get back to you within one business hour.
            </p>
          </div>
          <div className="rounded-3xl border bg-card p-5 text-card-foreground shadow-sm sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:order-last">
          <section
            aria-labelledby="contact-info-heading"
            className="rounded-2xl border bg-card px-5 shadow-sm"
          >
            <h2
              id="contact-info-heading"
              className="pt-5 font-heading text-lg font-semibold tracking-tight"
            >
              Contact information
            </h2>
            <ul className="divide-y">
              <ContactDetail icon={Phone} label="Call or text">
                <a
                  href={siteConfig.phone.href}
                  className="font-heading font-semibold underline-offset-4 hover:underline"
                >
                  {siteConfig.phone.display}
                </a>
              </ContactDetail>
              <ContactDetail icon={Mail} label="Email">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </ContactDetail>
              <ContactDetail icon={MapPin} label="Service area">
                <span className="font-medium">{siteConfig.serviceArea}</span>
              </ContactDetail>
            </ul>
          </section>

          <BusinessHours />
        </div>
      </div>
    </section>
  )
}
