import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Phone,
  type LucideIcon,
} from "lucide-react"

import { ServiceDetailsDrawer } from "@/components/service-details-drawer"
import { buttonVariants } from "@/components/ui/button"
import { services, siteConfig, type ServiceLink } from "@/lib/site-config"

export function ServicesSection({
  selectedService,
}: {
  selectedService?: ServiceLink
}) {
  return (
    <>
      <section
        aria-labelledby="services-heading"
        className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="flex flex-col gap-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end lg:gap-16">
            <div className="flex max-w-3xl flex-col items-start gap-4">
              <p className="text-sm font-medium text-muted-foreground">
                Heating, cooling &amp; home comfort
              </p>
              <h1
                id="services-heading"
                className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
              >
                The right service for every season.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                From a quick repair to a new system, explore the ways Dalani
                Heating &amp; Air can help keep your home comfortable.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl bg-muted p-5 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background text-foreground shadow-xs">
                  <BadgeCheck className="size-4.5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Straightforward service across San Diego County.
                </p>
              </div>
              <a
                href={siteConfig.phone.href}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <Phone data-icon="inline-start" aria-hidden="true" />
                Call {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.href} service={service} />
            ))}
          </ul>

          <div className="flex flex-col gap-5 rounded-3xl bg-neutral-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex max-w-2xl flex-col gap-2">
              <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                Not sure where to start?
              </h2>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Tell us what is going on and our team can help you find the
                right next step.
              </p>
            </div>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "shrink-0",
              })}
            >
              Talk to our team
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetailsDrawer serviceHref={selectedService.href} />
      )}
    </>
  )
}

function ServiceCard({ service }: { service: ServiceLink }) {
  const Icon: LucideIcon = service.icon

  return (
    <li>
      <Link
        href={service.href}
        scroll={false}
        aria-label={`Learn more about ${service.title}`}
        className="group flex h-full min-h-56 flex-col items-start gap-6 rounded-2xl border bg-card p-5 text-card-foreground shadow-xs transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:p-6"
      >
        <span className="flex size-11 items-center justify-center rounded-xl bg-muted text-foreground transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="flex flex-1 flex-col gap-2">
          <span className="font-heading text-lg font-semibold tracking-tight">
            {service.title}
          </span>
          <span className="text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </span>
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          Explore service
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    </li>
  )
}
