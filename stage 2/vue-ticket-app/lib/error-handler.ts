export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode = 400,
  ) {
    super(message)
    this.name = "AppError"
  }
}

export const errorMessages: Record<string, string> = {
  INVALID_CREDENTIALS: "Invalid email or password",
  USER_EXISTS: "User with this email already exists",
  USER_NOT_FOUND: "User not found",
  TICKET_NOT_FOUND: "Ticket not found",
  UNAUTHORIZED: "You are not authorized to perform this action",
  VALIDATION_ERROR: "Please check your input and try again",
  NETWORK_ERROR: "Network error. Please check your connection",
  SERVER_ERROR: "Server error. Please try again later",
  UNKNOWN_ERROR: "An unexpected error occurred",
}

export const handleError = (error: unknown): { message: string; code: string } => {
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
    }
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: "UNKNOWN_ERROR",
    }
  }

  return {
    message: errorMessages.UNKNOWN_ERROR,
    code: "UNKNOWN_ERROR",
  }
}

export const logError = (error: unknown, context?: string): void => {
  const { message, code } = handleError(error)
  console.error(`[${code}]${context ? ` ${context}:` : ""} ${message}`)
}
