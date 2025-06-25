import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Cute Femboys - Safe LGBTQ+ Discord Community",
  description:
    "A welcoming and safe Discord server for femboys, LGBTQ+ individuals, and allies. Join our inclusive community for support, friendship, and self-expression.",
  keywords: ["discord", "lgbtq", "femboy", "community", "safe space", "inclusive"],
  openGraph: {
    title: "The Cute Femboys - Safe LGBTQ+ Discord Community",
    description: "A welcoming and safe Discord server for femboys, LGBTQ+ individuals, and allies.",
    type: "website",
    images: ["/images/banner.jpg"],
  },
}

export default function TheCuteFemboysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      {children}
    </ThemeProvider>
  )
}
