import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Music, MessageSquare, Database, User } from "lucide-react"
import { cookies } from "next/headers"

export default function Home() {
  const cookieStore = cookies()
  const tarifa = cookieStore.get("tarifa")?.value || "None"

  const hasFinder = ["Dark", "Shadow"].includes(tarifa)
  const hasGenerator = ["Shade", "Shadow"].includes(tarifa)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {hasFinder && (
        <Card>
          <CardHeader>
            <Search className="h-6 w-6 mb-2" />
            <CardTitle>Finder</CardTitle>
            <CardDescription>Find Minecraft accounts across multiple databases</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Search for usernames and get detailed information including passwords, IPs, and premium status.</p>
          </CardContent>
          <CardFooter>
            <Link href="/finder" className="w-full">
              <Button className="w-full">Try Finder</Button>
            </Link>
          </CardFooter>
        </Card>
      )}
      {hasGenerator && (
        <Card>
          <CardHeader>
            <Database className="h-6 w-6 mb-2" />
            <CardTitle>Generator</CardTitle>
            <CardDescription>Generate premium Minecraft accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access different tiers of accounts: Medusa, Kraken, Nessy, Aquam, and Poseidon.</p>
          </CardContent>
          <CardFooter>
            <Link href="/generator" className="w-full">
              <Button className="w-full">Try Generator</Button>
            </Link>
          </CardFooter>
        </Card>
      )}
      <Card>
        <CardHeader>
          <Music className="h-6 w-6 mb-2" />
          <CardTitle>Music Player</CardTitle>
          <CardDescription>Play music from YouTube</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Search and play music from YouTube with queue management and playback controls.</p>
        </CardContent>
        <CardFooter>
          <Link href="/music" className="w-full">
            <Button className="w-full">Try Music Player</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <MessageSquare className="h-6 w-6 mb-2" />
          <CardTitle>Support</CardTitle>
          <CardDescription>Get help from our staff</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Direct messaging system to contact staff for support and assistance.</p>
        </CardContent>
        <CardFooter>
          <Link href="/support" className="w-full">
            <Button className="w-full">Contact Support</Button>
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <User className="h-6 w-6 mb-2" />
          <CardTitle>Player Info</CardTitle>
          <CardDescription>Get detailed Minecraft player information</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Look up player details including UUID, skin, premium status, and name history.</p>
        </CardContent>
        <CardFooter>
          <Link href="/player-info" className="w-full">
            <Button className="w-full">Look Up Player</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

