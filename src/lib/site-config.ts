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
    display: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  estimateHref: "/free-estimate",
}

export const services: ServiceLink[] = [
  {
    title: "Heating",
    href: "/services/heating",
    description: "Furnace repair, replacement, and tune-ups.",
    icon: Heater,
  },
  {
    title: "Air Conditioning",
    href: "/services/air-conditioning",
    description: "AC installs, repairs, and seasonal service.",
    icon: Snowflake,
  },
  {
    title: "Heat Pumps",
    href: "/services/heat-pumps",
    description: "Efficient year-round heating and cooling.",
    icon: Fan,
  },
  {
    title: "Ductless Mini-Splits",
    href: "/services/ductless",
    description: "Zoned comfort without the ductwork.",
    icon: AirVent,
  },
  {
    title: "Indoor Air Quality",
    href: "/services/indoor-air-quality",
    description: "Filtration, purifiers, and humidity control.",
    icon: Wind,
  },
  {
    title: "Repairs & Maintenance",
    href: "/services/maintenance",
    description: "Fast diagnostics and preventive care.",
    icon: Wrench,
  },
]

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services", items: services },
  { title: "Contact Us", href: "/contact" },
]

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}
