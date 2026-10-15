import Link from "next/link"
import { ArrowRight, Clock, MapPin, Tag, type LucideIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const values: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: MapPin,
    title: "Local to San Diego County",
    description:
      "A local team providing heating and cooling service throughout San Diego County.",
  },
  {
    icon: Tag,
    title: "Upfront recommendations",
    description:
      "Clear options and honest, upfront pricing help you choose what works for your home.",
  },
  {
    icon: Clock,
    title: "Here when you need us",
    description:
      "From everyday repairs to 24/7 emergency service, we help keep your home comfortable.",
  },
]

export function AboutSection({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2"
}) {
  const Heading = headingLevel

  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <p className="text-sm font-medium text-muted-foreground">
            About Dalani
          </p>
          <Heading
            id="about-heading"
            className="max-w-2xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            Home comfort, with a team you can count on.
          </Heading>
          <div className="flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            <p>
              Dalani Heating &amp; Air is a local team helping San Diego County
              homeowners stay comfortable through every season. We work on
              heating, air conditioning, and heat pump systems, with service
              tailored to your home and what it needs.
            </p>
            <p>
              We believe good service starts with listening, clear
              recommendations, and upfront pricing. Whether it&apos;s time for
              a repair, a new system, or routine maintenance, our goal is to
              make the next step feel straightforward.
            </p>
          </div>
          <Link
            href="/contact"
            className={buttonVariants({ size: "lg" })}
          >
            Get to know our team
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative isolate overflow-hidden rounded-3xl bg-neutral-950 p-6 text-white shadow-[0_24px_60px_-20px_rgb(0_0_0/0.25)] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -top-28 -right-24 -z-10 size-72 rounded-full bg-brand-to/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 -z-10 size-72 rounded-full bg-brand-frost/20 blur-3xl"
          />
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <siteConfig.logoIcon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-white/75">
                Comfort starts with trust
              </span>
            </div>
            <p className="max-w-md font-heading text-2xl leading-snug font-medium text-balance sm:text-3xl">
              Thoughtful service. Reliable comfort. No guesswork.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
              <div className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-semibold tracking-tight">
                  {siteConfig.reviews.rating}
                </span>
                <span className="text-sm text-white/65">
                  {siteConfig.reviews.source} rating
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading text-3xl font-semibold tracking-tight">
                  {siteConfig.reviews.count}
                </span>
                <span className="text-sm text-white/65">customer reviews</span>
              </div>
            </div>
            <p className="text-sm text-white/65">{siteConfig.serviceArea}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {values.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="flex flex-col items-start gap-4 rounded-2xl border bg-card p-5 text-card-foreground sm:p-6"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground">
              <Icon className="size-4.5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-lg font-semibold tracking-tight">
                {title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
