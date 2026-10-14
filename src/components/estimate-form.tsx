"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, CircleCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { services, siteConfig } from "@/lib/site-config"

const serviceOptions = [
  ...services.map((service) => ({
    label: service.title,
    value: service.href.split("/").pop() ?? service.href,
  })),
  { label: "Something else", value: "other" },
]

const controlStyle = "h-11 bg-background"

export function EstimateForm() {
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setSubmittedName(String(data.get("firstName") ?? "").trim())
  }

  if (submittedName !== null) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center gap-5 animate-in fade-in slide-in-from-bottom-2 duration-500 motion-reduce:animate-none"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
          <CircleCheck className="size-6" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-heading text-xl font-semibold tracking-tight">
            Thanks{submittedName ? `, ${submittedName}` : ""}! Your request is
            in.
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            A comfort specialist will reach out within one business hour. Need
            help sooner? Call us at{" "}
            <a
              href={siteConfig.phone.href}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {siteConfig.phone.display}
            </a>
            .
          </p>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="h-11 px-5"
          onClick={() => setSubmittedName(null)}
        >
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FieldGroup className="grid gap-4 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor="firstName">First name</FieldLabel>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="Jane"
            required
            className={controlStyle}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="lastName">Last name</FieldLabel>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="Smith"
            required
            className={controlStyle}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            required
            className={controlStyle}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(760) 783-9401"
            required
            className={controlStyle}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="zip">ZIP code</FieldLabel>
          <Input
            id="zip"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="[0-9]{5}"
            maxLength={5}
            placeholder="12345"
            required
            className={controlStyle}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="service">Service needed</FieldLabel>
          <Select name="service" items={serviceOptions} required>
            <SelectTrigger
              id="service"
              className={`${controlStyle} w-full data-[size=default]:h-11`}
            >
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              {serviceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>

      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          No obligation. We never share your information.
        </p>
        <Button type="submit" size="lg" className="group/submit h-11 px-6">
          Get My Free Estimate
          <ArrowRight
            data-icon="inline-end"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover/submit:translate-x-0.5"
          />
        </Button>
      </div>
    </form>
  )
}
