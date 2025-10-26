export interface ValidationError {
  field: string
  message: string
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(email: string): string | null {
  if (!email) return "Email is required"
  if (!emailRegex.test(email)) return "Please enter a valid email address"
  return null
}

export function validatePassword(password: string): string | null {
  if (!password) return "Password is required"
  if (password.length < 6) return "Password must be at least 6 characters"
  return null
}

export function validatePasswordMatch(password: string, confirmPassword: string): string | null {
  if (password !== confirmPassword) return "Passwords do not match"
  return null
}

export function validateTicketTitle(title: string): string | null {
  if (!title || !title.trim()) return "Title is required"
  if (title.trim().length < 3) return "Title must be at least 3 characters"
  if (title.trim().length > 100) return "Title must be less than 100 characters"
  return null
}

export function validateTicketDescription(description: string): string | null {
  if (!description || !description.trim()) return "Description is required"
  if (description.trim().length < 10) return "Description must be at least 10 characters"
  if (description.trim().length > 1000) return "Description must be less than 1000 characters"
  return null
}

export function validateLoginForm(email: string, password: string): ValidationError[] {
  const errors: ValidationError[] = []

  const emailError = validateEmail(email)
  if (emailError) errors.push({ field: "email", message: emailError })

  const passwordError = validatePassword(password)
  if (passwordError) errors.push({ field: "password", message: passwordError })

  return errors
}

export function validateSignupForm(email: string, password: string, confirmPassword: string): ValidationError[] {
  const errors: ValidationError[] = []

  const emailError = validateEmail(email)
  if (emailError) errors.push({ field: "email", message: emailError })

  const passwordError = validatePassword(password)
  if (passwordError) errors.push({ field: "password", message: passwordError })

  const matchError = validatePasswordMatch(password, confirmPassword)
  if (matchError) errors.push({ field: "confirmPassword", message: matchError })

  return errors
}

export function validateTicketForm(title: string, description: string): ValidationError[] {
  const errors: ValidationError[] = []

  const titleError = validateTicketTitle(title)
  if (titleError) errors.push({ field: "title", message: titleError })

  const descriptionError = validateTicketDescription(description)
  if (descriptionError) errors.push({ field: "description", message: descriptionError })

  return errors
}
