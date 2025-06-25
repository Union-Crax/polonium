import { NextResponse } from "next/server"

export const revalidate = 60 // cache the result for 60 seconds

const DISCORD_WIDGET_URL = "https://canary.discord.com/api/guilds/1375820203383980143/widget.json"

export async function GET() {
  try {
    const res = await fetch(DISCORD_WIDGET_URL, { next: { revalidate } })
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch widget" }, { status: 500 })
    }
    const data = await res.json()
    return NextResponse.json(data, {
      status: 200,
      headers: { "cache-control": `s-maxage=${revalidate}` },
    })
  } catch (e) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}
