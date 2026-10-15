import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Flame,
  MapPin,
  Phone,
  Snowflake,
  Tag,
  type LucideIcon,
} from "lucide-react"

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

const stats = [
  { value: siteConfig.reviews.rating, label: `${siteConfig.reviews.source} rating` },
  { value: siteConfig.reviews.count, label: "customer reviews" },
  { value: "24/7", label: "emergency service" },
  { value: "Free", label: "estimates" },
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
      <div className="flex flex-col gap-14 lg:gap-20">
        {/* Story + service area map */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              <Flame className="size-4 text-brand-from" aria-hidden="true" />
              <Snowflake className="size-4 text-brand-frost" aria-hidden="true" />
              About Dalani Heating &amp; Air
            </p>
            <Heading
              id="about-heading"
              className="max-w-2xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
            >
              Home comfort, with a team you can count on.
            </Heading>
            <div className="flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              <p>
                Dalani Heating &amp; Air is a local team helping San Diego
                County homeowners stay comfortable through every season. We
                work on heating, air conditioning, and heat pump systems, with
                service tailored to your home and what it needs.
              </p>
              <p>
                We believe good service starts with listening, clear
                recommendations, and upfront pricing. Whether it&apos;s time
                for a repair, a new system, or routine maintenance, our goal is
                to make the next step feel straightforward.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Get a free estimate
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.phone.href}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <Phone data-icon="inline-start" aria-hidden="true" />
                Call {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <CoverageMap />
        </div>

        {/* Trust strip: hairlines only, no boxes */}
        <div className="grid grid-cols-2 gap-px overflow-hidden border-y bg-border lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-1 bg-background px-4 py-6 sm:px-6 sm:py-8"
            >
              <span className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {value}
              </span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* How we work */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <span
              aria-hidden="true"
              className="h-0.5 w-full rounded-full bg-linear-to-r from-brand-from via-brand-to to-brand-frost"
            />
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                How we work
              </h2>
              <p className="max-w-2xl text-base text-muted-foreground">
                Whatever the season, the approach stays the same.
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            {values.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground">
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-muted-foreground tabular-nums">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Stylized street-grid map. Pure SVG + CSS: no images, no blur filters, and
 * the only animation is a small pulse on the pin (transform/opacity only).
 */
function CoverageMap() {
  return (
    <div
      role="img"
      aria-label="Map showing Dalani Heating & Air serving San Diego, California"
      className="relative isolate aspect-[5/4] w-full overflow-hidden rounded-2xl border bg-background"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 360 280"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        {/* City blocks */}
        <g className="fill-foreground/[0.07] stroke-foreground/10" strokeWidth="1">
          <rect x="126" y="42" width="43" height="41" rx="7" />
          <rect x="37" y="112" width="54" height="56" rx="7" />
          <rect x="18" y="154" width="28" height="33" rx="5" />
          <rect x="270" y="23" width="49" height="28" rx="6" />
          <rect x="288" y="56" width="35" height="69" rx="7" />
          <rect x="270" y="196" width="64" height="50" rx="7" />
        </g>
        {/* Minor streets */}
        <g className="stroke-foreground/10" strokeWidth="1.5" fill="none">
          <path d="M54 0V280M161 0V280M198 0V280M305 0V280" />
          <path d="M0 56H360M0 140H360M0 224H360" />
        </g>
        {/* Major roads */}
        <g
          className="stroke-foreground/15"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M108 0V280M251 0V280" />
          <path d="M0 98H360M0 182H360" />
        </g>
      </svg>

      {/* Soft fade so the caption stays readable */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-background via-background/85 to-transparent" />

      {/* Pin */}
      <div className="absolute top-1/2 left-1/2 size-9 -translate-x-1/2 -translate-y-[85%]">
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-brand-to/25 motion-reduce:animate-none"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 24 32"
          className="relative size-9 text-brand-to drop-shadow-md"
        >
          <path
            fill="currentColor"
            d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z"
          />
          <circle cx="12" cy="12" r="4.5" fill="white" />
        </svg>
      </div>

      {/* 24/7 badge */}
      <span className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full border bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
        <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
        24/7 SERVICE
      </span>

      {/* Caption */}
      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1.5 sm:inset-x-6 sm:bottom-6">
        <p className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
          San Diego, CA
        </p>
        <p className="font-mono text-xs text-muted-foreground sm:text-sm">
          32.7157° N, 117.1611° W
        </p>
        <span
          aria-hidden="true"
          className="mt-1 h-px w-full bg-linear-to-r from-brand-to/60 to-transparent"
        />
      </div>
    </div>
  )
}