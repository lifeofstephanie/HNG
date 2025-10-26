import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32" aria-label="Hero section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Manage tickets with ease
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg text-balance">
              Streamline your workflow with our powerful ticket management system. Track, prioritize, and resolve issues
              faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get started free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn more</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">No credit card required. Start managing tickets in minutes.</p>
          </div>

          <div
            className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-border flex items-center justify-center"
            role="img"
            aria-label="Dashboard preview illustration"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground">Dashboard preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
