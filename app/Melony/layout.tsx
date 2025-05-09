import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Melony's Profile",
  description: "Personal profile page for Melony",
}

export default function MelonyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-[#1e1f22]">{children}</div>
}
