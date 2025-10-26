"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const user = localStorage.getItem("user")
    setIsLoggedIn(!!user)
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
    router.push("/")
  }

  if (!mounted) return null

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-foreground">
          TicketFlow
        </Link>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard">
                <Button variant={pathname === "/dashboard" ? "default" : "ghost"}>Dashboard</Button>
              </Link>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant={pathname === "/login" ? "default" : "ghost"}>Login</Button>
              </Link>
              <Link href="/signup">
                <Button variant={pathname === "/signup" ? "default" : "default"}>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
