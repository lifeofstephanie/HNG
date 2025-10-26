"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        style={{ zIndex: -1 }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z" fill="url(#waveGradient)" />
        <path d="M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z" fill="var(--color-primary)" opacity="0.05" />
      </svg>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-medium text-primary">Welcome to TicketFlow</p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Manage Your Tickets with Ease
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            A powerful ticket management system designed to streamline your workflow and boost productivity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
