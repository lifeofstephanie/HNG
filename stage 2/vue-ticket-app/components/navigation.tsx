"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl" aria-label="TicketHub home">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
            ✓
          </div>
          <span className="hidden sm:inline">TicketHub</span>
        </Link>

        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto flex-col md:flex-row items-stretch md:items-center gap-0 md:gap-8 bg-background md:bg-transparent border-b md:border-0 border-border`}
        >
          <Link
            href="#features"
            className="px-4 md:px-0 py-3 md:py-0 text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="px-4 md:px-0 py-3 md:py-0 text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#docs"
            className="px-4 md:px-0 py-3 md:py-0 text-sm text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Docs
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
