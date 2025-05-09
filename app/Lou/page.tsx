"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export default function LouProfile() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    setIsPlaying(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  useEffect(() => {
    // Preload the video
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#1e1f22] text-white">
      {/* Banner Image */}
      <div className="w-full h-60 bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 400" xmlns="https://files.catbox.moe/jcsjil.gif">
            <path
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#ffffff"
              fillOpacity="0.2"
            ></path>
          </svg>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Profile Picture */}
        <div className="absolute -top-24 left-8">
          <div className="rounded-full border-8 border-[#1e1f22] overflow-hidden h-48 w-48 shadow-lg">
            <Image
              src="https://files.catbox.moe/7s20w2.gif"
              alt="Lou's Profile Picture"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="pt-28 pb-8">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white">Lou</h1>
          </div>
          <p className="text-gray-400 mt-1">unioncrax_official • he/they - femboy</p>

          {/* Detailed Description Section */}
          <div className="mt-8 bg-[#2b2d31] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white"></h2>
            <p className="text-gray-300 leading-relaxed">
              OK. How about now?
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">next week is better.</p>
          </div>

          {/* Video Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-white"></h2>
            <div className="bg-[#2b2d31] rounded-lg overflow-hidden">
              {!isPlaying ? (
                <div className="relative aspect-video bg-black cursor-pointer group" onClick={handlePlayVideo}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <Play size={36} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium">Click to play video</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-black">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={false}
                    playsInline
                    className="w-full h-full object-contain"
                    src="https://files.catbox.moe/s9f654.mp4"
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
