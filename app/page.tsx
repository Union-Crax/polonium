"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ExpiryCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Initialize the matrix rain effect
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const characters = "01"

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    function updateCountdown() {
      const expiryDate = new Date("2025-09-01T00:00:00Z").getTime()
      const now = new Date().getTime()
      const difference = expiryDate - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 -z-5" />

      <div className="container max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
            This website is no longer maintained and the domain will expire soon.
          </h1>

          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg text-white mb-2">The project continues at our new home:</p>
            <Button
              onClick={() => (window.location.href = "https://union-crax.xyz")}
              className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all"
              size="lg"
            >
              Redirect to UC
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <Card key={item.label} className="bg-black/50 border border-gray-700 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center p-4">
                  <span className="text-3xl md:text-4xl font-bold text-white mb-2">{item.value}</span>
                  <span className="text-sm text-gray-300">{item.label}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 w-full">
            <p className="text-gray-300 mb-6 text-lg">It was nice while it lasted</p>

            <Card className="bg-black/30 border border-gray-700 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-4">Special thanks to:</h2>
              <ul className="text-gray-300 space-y-2">
                <li>- Lou for the idea</li>
                <li>- myst for the amazing site</li>
                <li>- 5Litt and all the other uploaders</li>
                <li>- pipo, mori and all the OG supporters</li>
                <li>- And of course all the amazing people that supported us!</li>
              </ul>
              <p className="mt-4 text-white font-medium">The Polonium Team</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
