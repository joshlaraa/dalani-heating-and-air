import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dalani-heating-and-air.vercel.app"),
  title: "Dalani Heating & Air | San Diego County HVAC",
  description:
    "Local heating and cooling service across San Diego County. Call Dalani Heating & Air at (760) 783-9401 for 24/7 emergency service and free estimates.",
  openGraph: {
    type: "website",
    siteName: "Dalani Heating & Air",
    title: "Dalani Heating & Air | San Diego County HVAC",
    description:
      "Local heating and cooling service across San Diego County. Call (760) 783-9401 for 24/7 emergency service and free estimates.",
    images: [
      {
        url: "/images/share-card.png",
        width: 1200,
        height: 630,
        alt: "Dalani Heating & Air — local HVAC service across San Diego County. Call (760) 783-9401.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dalani Heating & Air | San Diego County HVAC",
    description:
      "Local heating and cooling service across San Diego County. Call (760) 783-9401 for 24/7 emergency service and free estimates.",
    images: ["/images/share-card.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div id="main" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
