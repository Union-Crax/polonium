"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border-2 border-purple-200 transition-colors"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 transition-transform duration-200" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-purple-400 transition-transform duration-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
