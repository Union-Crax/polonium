"use client"

import { useState, useRef, useEffect } from "react"
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
      {/* Banner Image - GIF */}
      <div className="w-full h-60 relative overflow-hidden">
        <img
          src="https://files.catbox.moe/6l34wa.gif"
          alt="Banner"
          className="w-full h-full object-cover"
          style={{ width: "100%", height: "240px" }}
        />
      </div>

      {/* Profile Content */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Profile Picture - GIF */}
        <div className="absolute -top-24 left-8">
          <div className="rounded-full border-8 border-[#1e1f22] overflow-hidden h-48 w-48 shadow-lg">
            <img src="https://files.catbox.moe/7s20w2.gif" alt="Lou's profile" className="w-full h-full object-cover" />
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
            <h2 className="text-xl font-semibold mb-4 text-white">About Me</h2>
            <p className="text-gray-300 leading-relaxed">OK. How about now?</p>
            <p className="text-gray-300 mt-4 leading-relaxed">Next week is better.</p>
          </div>

          {/* Video Section - Larger */}
          <div className="mt-8">
            <div className="bg-[#2b2d31] rounded-lg overflow-hidden">
              {!isPlaying ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group"
                  onClick={handlePlayVideo}
                  style={{ maxHeight: "80vh" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <Play size={48} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium">Click to play video</p>
                  </div>
                </div>
              ) : (
                <div className="w-full" style={{ maxHeight: "80vh" }}>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={false}
                    playsInline
                    className="w-full h-full object-contain"
                    src="https://files.catbox.moe/s9f654.mp4"
                    onEnded={() => setIsPlaying(false)}
                    style={{ maxHeight: "80vh" }}
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
