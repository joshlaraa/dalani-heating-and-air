import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ServicesSection } from "@/components/services-section"
import { services } from "@/lib/site-config"

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

function findService(slug: string) {
  return services.find((service) => service.href === `/services/${slug}`)
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.href.split("/").pop() ?? "",
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = findService(slug)

  if (!service) {
    return { title: "Service not found | Dalani Heating & Air" }
  }

  return {
    title: `${service.title} | Dalani Heating & Air`,
    description: service.details,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = findService(slug)

  if (!service) notFound()

  return <ServicesSection selectedService={service} />
}
