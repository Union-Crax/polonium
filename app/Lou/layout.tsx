import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lou",
  description: "Learn more about Lou",
}

export default function LouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-[#1e1f22]">{children}</div>
}
