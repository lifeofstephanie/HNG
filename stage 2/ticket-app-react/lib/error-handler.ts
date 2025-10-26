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

export function handleError(error: unknown): string {
  if (error instanceof AppError) {
    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return "An unexpected error occurred. Please try again."
}

export const ErrorCodes = {
  INVALID_EMAIL: "INVALID_EMAIL",
  INVALID_PASSWORD: "INVALID_PASSWORD",
  USER_NOT_FOUND: "USER_NOT_FOUND",
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  TICKET_NOT_FOUND: "TICKET_NOT_FOUND",
  INVALID_TICKET_DATA: "INVALID_TICKET_DATA",
  UNAUTHORIZED: "UNAUTHORIZED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
}
