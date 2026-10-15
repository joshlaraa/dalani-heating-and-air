import type { Metadata } from "next"

import { ServicesSection } from "@/components/services-section"

export const metadata: Metadata = {
  title: "Heating & Cooling Services | Dalani Heating & Air",
  description:
    "Explore heating, air conditioning, heat pump, ductless, indoor air quality, repair, and maintenance services from Dalani Heating & Air in San Diego County.",
}

export default function ServicesPage() {
  return <ServicesSection />
}
