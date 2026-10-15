import type { Metadata } from "next"

import { AboutSection } from "@/components/about-section"

export const metadata: Metadata = {
  title: "About Us | Dalani Heating & Air",
  description:
    "Get to know Dalani Heating & Air, your local heating and cooling team serving San Diego County with straightforward recommendations and reliable service.",
}

export default function AboutPage() {
  return <AboutSection headingLevel="h1" />
}
