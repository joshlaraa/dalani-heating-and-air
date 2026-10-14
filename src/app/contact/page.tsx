import type { Metadata } from "next"

import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact | Dalani Heating & Air",
  description:
    "Call, email, or message Dalani Heating & Air. Local HVAC service across San Diego County with 24/7 emergency support.",
}

export default function ContactPage() {
  return <ContactSection />
}
