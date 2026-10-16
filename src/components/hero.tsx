import Image from "next/image"
import Link from "next/link"
import { cn } from "cn"
import { ArrowRight, BadgeCheck, Clock, ShieldCheck, Star } from "lucide-react"

import { EstimateForm } from "@/components/estimate-form"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import heroImage from "../../public/images/hero-san-diego-sunset.jpg"

const ctaStyle = "h-11 px-5 has-data-[icon=inline-end]:pr-4"

function CtaArrow() {
  return (
    <ArrowRight
      data-icon="inline-end"
      aria-hidden="true"
      className="transition-transform duration-200 group-hover/button:translate-x-0.5"
    />
  )
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative -mt-16 pb-16 sm:pb-24"
    >
      <div className="relative isolate overflow-hidden bg-neutral-900 pt-16">
        <Image
          src={heroImage}
          alt="San Diego coastal homes and shoreline at sunset"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover object-[36%_center] lg:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-black/50 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/50 to-black/20 lg:bg-linear-to-r lg:from-black/80 lg:via-black/45 lg:to-black/0"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 hidden h-48 bg-linear-to-t from-black/50 to-transparent lg:block"
        />

        <div className="mx-auto flex min-h-[38rem] max-w-7xl flex-col justify-end px-4 pt-16 pb-36 sm:min-h-[42rem] sm:px-6 lg:min-h-[46rem] lg:justify-center lg:px-8 lg:pb-44">
          <div className="flex max-w-2xl flex-col items-start gap-6 text-white">
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              Comfort you can count on, every season.
            </h1>

            <p
              className="max-w-xl text-base leading-relaxed text-pretty text-white/80 sm:text-lg"
            >
              Furnace, AC, and heat pump repair, installs, and maintenance from
              a local team that shows up on time and stands behind every job.
            </p>

            <div
              className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row"
            >
              <a
                href="#estimate"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  ctaStyle,
                  "bg-white text-neutral-900"
                )}
              >
                Get a Free Estimate
                <CtaArrow />
              </a>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  ctaStyle,
                  "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white dark:border-white/40 dark:bg-transparent dark:hover:bg-white/10"
                )}
              >
                View Services
                <CtaArrow />
              </Link>
            </div>

            <ul
              className="flex items-center gap-x-3.5 pt-1 text-xs whitespace-nowrap text-white/80 sm:gap-x-6 sm:text-sm"
            >
              <li className="flex items-center gap-1.5 sm:gap-2">
                <Star
                  className="size-3.5 fill-amber-400 text-amber-400 sm:size-4"
                  aria-hidden="true"
                />
                <span>
                  <span className="font-medium text-white">
                    {siteConfig.reviews.rating}
                  </span>{" "}
                  {siteConfig.reviews.source}
                  <span className="max-[359px]:hidden"> rating</span>
                </span>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="size-3.5 sm:size-4" aria-hidden="true" />
                Licensed<span className="max-sm:hidden"> &amp; insured</span>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2">
                <BadgeCheck className="size-3.5 sm:size-4" aria-hidden="true" />
                Upfront pricing
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        id="estimate"
        className="relative z-10 mx-auto -mt-24 max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:-mt-28 lg:px-8"
      >
        <div className="grid gap-8 rounded-3xl border bg-card p-5 text-card-foreground shadow-sm sm:p-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:p-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-muted-foreground">
                Free, no-obligation estimate
              </p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Let our team earn your trust.
              </h2>
              <p className="text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
                Tell us a little about your home and what&apos;s going on.
                We&apos;ll get back to you within one business hour with honest,
                upfront pricing.
              </p>
            </div>

            <div className="mt-auto flex items-center gap-4 rounded-2xl bg-muted p-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-from to-brand-to text-white shadow-sm shadow-brand-to/25">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  We offer
                </span>
                <span className="font-heading font-semibold">
                  24/7 emergency service
                </span>
                <a
                  href={siteConfig.phone.href}
                  className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </div>

          <EstimateForm />
        </div>
      </div>
    </section>
  )
}
