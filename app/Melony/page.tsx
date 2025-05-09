"use client"

import { useState, useRef, useEffect } from "react"

export default function MelonyProfile() {
  return (
    <div className="min-h-screen bg-[#1e1f22] text-white">
      {/* Banner Image - Refined to eliminate black borders and show all text */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          paddingBottom: "40%",
          maxHeight: "240px",
          background: "#000",
        }}
      >
        <img
          src="https://files.catbox.moe/9r1vsh.png"
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
      </div>

      {/* Profile Content */}
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Profile Picture - GIF */}
        <div className="absolute -top-24 left-8">
          <div className="rounded-full border-8 border-[#1e1f22] overflow-hidden h-48 w-48 shadow-lg">
            <img src="https://files.catbox.moe/kvwd7d.png" alt="Melony's profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* User Info */}
        <div className="pt-28 pb-8">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white">Lou</h1>
          </div>
          <p className="text-gray-400 mt-1">melony_the_watermelon • Suicidal/Watermelon</p>

          {/* Detailed Description Section */}
          <div className="mt-8 bg-[#2b2d31] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">About Me</h2>
            <p className="text-gray-300 leading-relaxed">Steam friend code: 1294631105</p>
            <p className="text-gray-300 mt-4 leading-relaxed">Sub To 3FS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
