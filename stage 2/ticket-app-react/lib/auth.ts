export interface User {
  id: string
  email: string
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const user = localStorage.getItem("user")
  return user ? JSON.parse(user) : null
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user")
  }
}
