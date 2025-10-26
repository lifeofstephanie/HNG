interface FormErrorProps {
  message?: string
  className?: string
}

export function FormError({ message, className = "" }: FormErrorProps) {
  if (!message) return null

  return <div className={`p-3 bg-destructive/10 text-destructive text-sm rounded-lg ${className}`}>{message}</div>
}
