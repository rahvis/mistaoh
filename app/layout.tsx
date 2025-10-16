import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Prompt } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { ScrollToTop } from "@/components/scroll-to-top"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
  display: "swap",
})

const prompt = Prompt({
  subsets: ["latin"],
  variable: "--font-prompt",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mista Oh - Authentic Korean Restaurant in Flatiron, NYC",
  description:
    "Experience authentic Korean cuisine at Mista Oh in Flatiron, New York. Family-owned restaurant serving traditional Korean dishes with love.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${prompt.variable}`}>
      <body>
        <CartProvider>
          <ScrollToTop />
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
