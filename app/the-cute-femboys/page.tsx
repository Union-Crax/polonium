"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, MessageCircle, Star } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "./components/theme-toggle"

interface DiscordWidget {
  id: string
  name: string
  instant_invite: string
  channels: Array<{
    id: string
    name: string
    position: number
  }>
  members: Array<{
    id: string
    username: string
    discriminator: string
    avatar: string | null
    status: string
    avatar_url: string
  }>
  presence_count: number
}

export default function TheCuteFemboysPage() {
  const [discordData, setDiscordData] = useState<DiscordWidget | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch("/api/discord-widget")
        if (response.ok) {
          const data = await response.json()
          setDiscordData(data)
        }
      } catch (error) {
        console.error("Failed to fetch Discord data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDiscordData()
  }, [])

  return (
    <div className="tcf-root min-h-screen bg-gradient-to-br from-red-100 via-orange-50 via-yellow-50 via-green-50 via-blue-50 via-indigo-50 to-purple-100 dark:from-red-950/20 dark:via-orange-950/20 dark:via-yellow-950/20 dark:via-green-950/20 dark:via-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 transition-colors duration-500">
      <ThemeToggle />

      {/* Hero Section with Banner */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="The Cute Femboys Discord Server Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 dark:from-black/80 dark:via-black/50 dark:to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white max-w-4xl">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Image
                src="/images/server-icon.webp"
                alt="Server Icon"
                width={60}
                height={60}
                className="sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg ring-4 ring-rainbow-500/30"
              />
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
              The Cute Femboys
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl opacity-90 font-medium">
              A Safe Haven for LGBTQ+ Community 🏳️‍🌈
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 -mt-8 sm:-mt-12 md:-mt-16 relative z-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Welcome Card */}
          <Card className="lg:col-span-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-2xl border-2 border-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-800/50 dark:to-purple-800/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />
                Welcome to Our Community
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                A safe and inclusive space for everyone 🌈
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                Welcome to{" "}
                <strong className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  The Cute Femboys
                </strong>{" "}
                Discord server! We're more than just a community – we're a family that celebrates diversity,
                self-expression, and authenticity. Our server is designed to be a safe haven where femboys, LGBTQ+
                individuals, and allies can connect, share experiences, and support each other.
              </p>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-700 dark:text-green-400 text-sm sm:text-base">
                      Safe Space
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Zero tolerance for harassment, discrimination, or hate speech
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-700 dark:text-blue-400 text-sm sm:text-base">
                      Inclusive Community
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      All identities, orientations, and expressions welcome
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-700 dark:text-purple-400 text-sm sm:text-base">
                      Open Dialogue
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Share experiences, ask questions, and get support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border border-yellow-200 dark:border-yellow-800">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-yellow-700 dark:text-yellow-400 text-sm sm:text-base">
                      Self-Expression
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Be yourself without judgment or fear
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <h3 className="font-semibold mb-3 text-base sm:text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  What We Offer:
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 text-xs sm:text-sm">
                    Fashion & Style Tips
                  </Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0 text-xs sm:text-sm">
                    Supportive Community
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 text-xs sm:text-sm">
                    LGBTQ+ Resources
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs sm:text-sm">
                    Gaming Together
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-xs sm:text-sm">
                    Art & Creativity
                  </Badge>
                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 text-xs sm:text-sm">
                    Mental Health Support
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Discord Widget Card */}
          <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-2xl border-2 border-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800/50 dark:to-purple-800/50">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Users className="h-5 w-5 text-indigo-500" />
                Server Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-4 border-transparent border-t-indigo-500 border-r-purple-500 border-b-pink-500 border-l-blue-500 mx-auto"></div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Loading server info...</p>
                </div>
              ) : discordData ? (
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {discordData.presence_count}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Members Online
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200">
                      Active Channels:
                    </h4>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {discordData.channels.slice(0, 5).map((channel) => (
                        <div
                          key={channel.id}
                          className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 p-2 rounded bg-gray-50 dark:bg-gray-700/50"
                        >
                          <span className="text-gray-400 font-mono">#</span>
                          <span className="truncate">{channel.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {discordData.instant_invite && (
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200"
                      onClick={() => window.open(discordData.instant_invite, "_blank")}
                    >
                      Join Our Server 🚀
                    </Button>
                  )}
                </div>
              ) : (
                <div className="text-center py-4 sm:py-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Unable to load server stats</p>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 sm:py-3 text-sm sm:text-base"
                    onClick={() => window.open("https://discord.gg/your-invite-link", "_blank")}
                  >
                    Join Our Server 🚀
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Community Guidelines */}
        <Card className="mt-6 sm:mt-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-2xl border-2 border-gradient-to-r from-green-200 to-blue-200 dark:from-green-800/50 dark:to-blue-800/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
              Community Guidelines
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Help us maintain a safe and welcoming environment for everyone 🛡️
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 text-sm sm:text-base">
                  ✅ We Encourage:
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <li>• Respectful and kind communication</li>
                  <li>• Supporting fellow community members</li>
                  <li>• Sharing positive experiences and advice</li>
                  <li>• Being authentic and true to yourself</li>
                  <li>• Asking questions and seeking help</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30 border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3 text-sm sm:text-base">
                  ❌ Zero Tolerance For:
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <li>• Harassment, bullying, or discrimination</li>
                  <li>• Hate speech or slurs of any kind</li>
                  <li>• Inappropriate or explicit content</li>
                  <li>• Doxxing or sharing personal information</li>
                  <li>• Spam or self-promotion without permission</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
            Ready to Join Our Family? 🏳️‍🌈
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
            Take the first step towards finding your community. We can't wait to meet you and welcome you into our safe,
            supportive space where you can truly be yourself. 💖
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
            onClick={() => window.open(discordData?.instant_invite || "https://discord.gg/your-invite-link", "_blank")}
          >
            Join The Cute Femboys Discord ✨
          </Button>
        </div>
      </div>
    </div>
  )
}
