import {
  AirVent,
  Fan,
  Flame,
  Heater,
  Snowflake,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  title: string
  href: string
}

export type ServiceLink = NavLink & {
  description: string
  details: string
  icon: LucideIcon
}

export type NavItem = NavLink & {
  items?: ServiceLink[]
}

export const siteConfig = {
  name: "Dalani Heating & Air",
  shortName: "Dalani",
  tagline: "Heating & Air",
  logoIcon: Flame,
  phone: {
    display: "(760) 783-9401",
    href: "tel:+7607839401",
  },
  email: "hello@dalaniheating.com",
  serviceArea: "Serving all of San Diego County",
  estimateHref: "/free-estimate",
  reviews: {
    rating: "5.0",
    count: "300+",
    source: "Google",
  },
}

export const legalNav: NavLink[] = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
]

export const services: ServiceLink[] = [
  {
    title: "Heating",
    href: "/services/heating",
    description: "Furnace repair, replacement, and tune-ups.",
    details:
      "Get help with furnace repairs, replacement options, and seasonal tune-ups to keep your home comfortable when temperatures drop.",
    icon: Heater,
  },
  {
    title: "Air Conditioning",
    href: "/services/air-conditioning",
    description: "AC installs, repairs, and seasonal service.",
    details:
      "From troubleshooting and repairs to new installations and seasonal service, find the right support for your home's air conditioning.",
    icon: Snowflake,
  },
  {
    title: "Heat Pumps",
    href: "/services/heat-pumps",
    description: "Efficient year-round heating and cooling.",
    details:
      "Heat pumps provide heating and cooling in one system. Get help with service, repairs, and installation for year-round home comfort.",
    icon: Fan,
  },
  {
    title: "Ductless Mini-Splits",
    href: "/services/ductless",
    description: "Zoned comfort without the ductwork.",
    details:
      "Ductless mini-splits offer zoned heating and cooling without adding ductwork. We can help with installation, service, and repairs.",
    icon: AirVent,
  },
  {
    title: "Indoor Air Quality",
    href: "/services/indoor-air-quality",
    description: "Filtration, purifiers, and humidity control.",
    details:
      "Explore filtration, air purifiers, and humidity control options to support a more comfortable indoor environment.",
    icon: Wind,
  },
  {
    title: "Repairs & Maintenance",
    href: "/services/maintenance",
    description: "Fast diagnostics and preventive care.",
    details:
      "When something is not working as it should, get help diagnosing the issue. Routine maintenance can also help keep your heating and cooling system on track.",
    icon: Wrench,
  },
]

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services", items: services },
  { title: "Contact", href: "/contact" },
]

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}
