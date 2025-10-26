"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { validateSignupForm, validateEmail, validatePassword, validatePasswordMatch } from "@/lib/validation"
import { handleError } from "@/lib/error-handler"

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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
    } else if (field === "confirmPassword") {
      setConfirmPassword(value)
      const error = validatePasswordMatch(password, value)
      setErrors((prev) => ({
        ...prev,
        confirmPassword: error || "",
      }))
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError("")
    setLoading(true)

    try {
      // Validate form
      const validationErrors = validateSignupForm(email, password, confirmPassword)
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

      // Check if user already exists
      if (storedUsers.some((u: any) => u.email === email)) {
        setGeneralError("Email already registered")
        setLoading(false)
        return
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        password,
      }

      storedUsers.push(newUser)
      localStorage.setItem("users", JSON.stringify(storedUsers))

      // Auto-login
      localStorage.setItem("user", JSON.stringify({ email: newUser.email, id: newUser.id }))
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
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>Join TicketFlow and start managing tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
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

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  disabled={loading}
                  className={errors.confirmPassword ? "border-destructive" : ""}
                  aria-invalid={!!errors.confirmPassword}
                  aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                />
                {errors.confirmPassword && (
                  <p id="confirmPassword-error" className="text-sm text-destructive">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Sign Up"}
              </Button>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
