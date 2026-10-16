"use client"

import { useSyncExternalStore } from "react"
import { Clock } from "lucide-react"

const hours = [
  { day: "Monday", hours: "8:00 AM–5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM–5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM–5:00 PM" },
  { day: "Thursday", hours: "8:00 AM–5:00 PM" },
  { day: "Friday", hours: "8:00 AM–5:00 PM" },
  { day: "Saturday", hours: "8:00 AM–5:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

function subscribe(callback: () => void) {
  const interval = window.setInterval(callback, 60_000)
  return () => window.clearInterval(interval)
}

function getCurrentDay() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "America/Los_Angeles",
  }).format(new Date())
}

export function BusinessHours() {
  const currentDay = useSyncExternalStore(subscribe, getCurrentDay, () => "")

  return (
    <section
      aria-labelledby="business-hours-heading"
      className="flex flex-1 flex-col rounded-2xl border bg-card p-5 shadow-sm"
    >
      <h2
        id="business-hours-heading"
        className="flex items-center gap-3 font-heading text-lg font-semibold tracking-tight"
      >
        <span className="flex size-9 items-center justify-center rounded-xl bg-muted text-foreground">
          <Clock className="size-4" aria-hidden="true" />
        </span>
        Business hours
      </h2>
      <ul className="mt-4 flex flex-1 flex-col justify-evenly gap-1">
        {hours.map(({ day, hours: openingHours }) => {
          const isToday = day === currentDay

          return (
            <li
              key={day}
              aria-current={isToday ? "date" : undefined}
              className={`flex min-h-10 items-center justify-between rounded-xl px-3 py-2 text-sm ${
                isToday
                  ? "bg-brand-from/10 font-semibold text-brand-to ring-1 ring-brand-to/20"
                  : "text-muted-foreground"
              }`}
            >
              <span>{day}</span>
              <span>{openingHours}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
