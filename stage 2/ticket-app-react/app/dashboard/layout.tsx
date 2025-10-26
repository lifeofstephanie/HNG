"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (!user) {
      router.push("/login")
    }
  }, [router])

  return <>{children}</>
}
