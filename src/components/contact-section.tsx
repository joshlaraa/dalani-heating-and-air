import type { ReactNode } from "react"
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
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
    <li className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
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
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-10">
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

          <ul className="flex flex-col gap-6">
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

          <div className="flex items-center gap-4 rounded-2xl bg-muted p-4 lg:mt-auto">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-from to-brand-to text-white shadow-sm shadow-brand-to/25">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-heading font-semibold">
                No heat or no AC?
              </span>
              <span className="text-sm text-muted-foreground">
                We offer 24/7 emergency service. Call for the fastest response.
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-card p-5 text-card-foreground shadow-[0_24px_60px_-20px_rgb(0_0_0/0.25)] ring-1 ring-foreground/10 sm:p-8 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
