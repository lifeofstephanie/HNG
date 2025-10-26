"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { validateLoginForm, validateEmail, validatePassword } from "@/lib/validation"
import { handleError } from "@/lib/error-handler"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [generalError, setGeneralError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    if (field === "email") {
      setEmail(value)
      const error = validateEmail(value)
      setErrors((prev) => ({
        ...prev,
        email: error || "",
      }))
    } else if (field === "password") {
      setPassword(value)
      const error = validatePassword(value)
      setErrors((prev) => ({
        ...prev,
        password: error || "",
      }))
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError("")
    setLoading(true)

    try {
      // Validate form
      const validationErrors = validateLoginForm(email, password)
      if (validationErrors.length > 0) {
        const errorMap: Record<string, string> = {}
        validationErrors.forEach((err) => {
          errorMap[err.field] = err.message
        })
        setErrors(errorMap)
        setLoading(false)
        return
      }

      // Get stored users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const user = storedUsers.find((u: any) => u.email === email && u.password === password)

      if (!user) {
        setGeneralError("Invalid email or password")
        setLoading(false)
        return
      }

      // Store current user session
      localStorage.setItem("user", JSON.stringify({ email: user.email, id: user.id }))
      router.push("/dashboard")
    } catch (err) {
      setGeneralError(handleError(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Sign in to your TicketFlow account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {generalError && (
                <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  {generalError}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={loading}
                  className={errors.email ? "border-destructive" : ""}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  disabled={loading}
                  className={errors.password ? "border-destructive" : ""}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : undefined}
                />
                {errors.password && (
                  <p id="password-error" className="text-sm text-destructive">
                    {errors.password}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
