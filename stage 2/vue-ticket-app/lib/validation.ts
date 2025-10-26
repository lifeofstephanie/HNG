export interface ValidationError {
  field: string
  message: string
}

export interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): ValidationError[] => {
  const errors: ValidationError[] = []

  if (password.length < 8) {
    errors.push({
      field: "password",
      message: "Password must be at least 8 characters long",
    })
  }

  if (!/[A-Z]/.test(password)) {
    errors.push({
      field: "password",
      message: "Password must contain at least one uppercase letter",
    })
  }

  if (!/[0-9]/.test(password)) {
    errors.push({
      field: "password",
      message: "Password must contain at least one number",
    })
  }

  return errors
}

export const validateLoginForm = (email: string, password: string): ValidationResult => {
  const errors: ValidationError[] = []

  if (!email) {
    errors.push({ field: "email", message: "Email is required" })
  } else if (!validateEmail(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" })
  }

  if (!password) {
    errors.push({ field: "password", message: "Password is required" })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export const validateSignupForm = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
): ValidationResult => {
  const errors: ValidationError[] = []

  if (!name || name.trim().length === 0) {
    errors.push({ field: "name", message: "Name is required" })
  } else if (name.length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" })
  }

  if (!email) {
    errors.push({ field: "email", message: "Email is required" })
  } else if (!validateEmail(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" })
  }

  const passwordErrors = validatePassword(password)
  errors.push(...passwordErrors)

  if (!confirmPassword) {
    errors.push({ field: "confirmPassword", message: "Please confirm your password" })
  } else if (password !== confirmPassword) {
    errors.push({ field: "confirmPassword", message: "Passwords do not match" })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export const validateTicketForm = (title: string, description: string): ValidationResult => {
  const errors: ValidationError[] = []

  if (!title || title.trim().length === 0) {
    errors.push({ field: "title", message: "Title is required" })
  } else if (title.length < 5) {
    errors.push({ field: "title", message: "Title must be at least 5 characters" })
  } else if (title.length > 200) {
    errors.push({ field: "title", message: "Title must not exceed 200 characters" })
  }

  if (!description || description.trim().length === 0) {
    errors.push({ field: "description", message: "Description is required" })
  } else if (description.length < 10) {
    errors.push({ field: "description", message: "Description must be at least 10 characters" })
  } else if (description.length > 5000) {
    errors.push({ field: "description", message: "Description must not exceed 5000 characters" })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export const getFieldError = (errors: ValidationError[], field: string): string | undefined => {
  return errors.find((e) => e.field === field)?.message
}
