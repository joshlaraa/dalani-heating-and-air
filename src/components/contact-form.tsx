"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, CircleCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/site-config"

const controlStyle = "h-11 bg-background"

export function ContactForm() {
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
            Thanks{submittedName ? `, ${submittedName}` : ""}! We got your
            message.
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Someone from our team will get back to you within one business
            hour. For anything urgent, call{" "}
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
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FieldGroup className="grid gap-4 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor="contact-firstName">First name</FieldLabel>
          <Input
            id="contact-firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="Jane"
            required
            className={controlStyle}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-lastName">Last name</FieldLabel>
          <Input
            id="contact-lastName"
            name="lastName"
            autoComplete="family-name"
            placeholder="Smith"
            required
            className={controlStyle}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            required
            className={controlStyle}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-phone">Phone</FieldLabel>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(760) 783-9401"
            className={controlStyle}
          />
        </Field>
        <Field className="sm:col-span-2">
          <FieldLabel htmlFor="contact-message">How can we help?</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell us what's going on with your system, or ask us anything."
            required
            className="bg-background"
          />
        </Field>
      </FieldGroup>

      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We reply within one business hour.
        </p>
        <Button type="submit" size="lg" className="group/submit h-11 px-6">
          Send Message
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
