"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { validateSignupForm, getFieldError } from "@/lib/validation"
import { FormError } from "@/components/form-error"
import { FieldError } from "@/components/field-error"

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<any[]>([])
  const [generalError, setGeneralError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError("")
    setErrors([])
    setLoading(true)

    const validation = validateSignupForm(formData.name, formData.email, formData.password, formData.confirmPassword)
    if (!validation.isValid) {
      setErrors(validation.errors)
      setLoading(false)
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const user = {
        name: formData.name,
        email: formData.email,
        id: Math.random().toString(36).substr(2, 9),
      }
      localStorage.setItem("user", JSON.stringify(user))

      router.push("/dashboard")
    } catch (err) {
      setGeneralError("Signup failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Full name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          className={getFieldError(errors, "name") ? "border-destructive" : ""}
        />
        <FieldError message={getFieldError(errors, "name")} />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          className={getFieldError(errors, "email") ? "border-destructive" : ""}
        />
        <FieldError message={getFieldError(errors, "email")} />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          className={getFieldError(errors, "password") ? "border-destructive" : ""}
        />
        <FieldError message={getFieldError(errors, "password")} />
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-medium">
          Confirm password
        </label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={loading}
          className={getFieldError(errors, "confirmPassword") ? "border-destructive" : ""}
        />
        <FieldError message={getFieldError(errors, "confirmPassword")} />
      </div>

      <FormError message={generalError} />

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By signing up, you agree to our Terms of Service and Privacy Policy
      </p>
    </form>
  )
}
