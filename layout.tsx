import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Dark Finder Web",
  description: "The web version of the Dark Finder Discord bot",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const isLoggedIn = cookieStore.get("isLoggedIn")
  const tarifa = cookieStore.get("tarifa")

  if (!isLoggedIn) {
    redirect("/login") // This now correctly points to the (auth) group
  }

  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dark Finder Web</h1>
            <div>
              Tarifa: <span className="font-bold">{tarifa?.value || "None"}</span>
            </div>
          </div>
        </header>
        <main className="container mx-auto mt-8">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'