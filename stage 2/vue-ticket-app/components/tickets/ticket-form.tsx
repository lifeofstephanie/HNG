"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { validateTicketForm, getFieldError } from "@/lib/validation"
import { FormError } from "@/components/form-error"
import { FieldError } from "@/components/field-error"

export default function TicketForm({ initialData }: { initialData?: any }) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    priority: initialData?.priority || "medium",
    status: initialData?.status || "open",
    assignee: initialData?.assignee || "",
  })
  const [errors, setErrors] = useState<any[]>([])
  const [generalError, setGeneralError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError("")
    setErrors([])
    setLoading(true)

    const validation = validateTicketForm(formData.title, formData.description)
    if (!validation.isValid) {
      setErrors(validation.errors)
      setLoading(false)
      return
    }

    try {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]")
      const newTicket = {
        id: initialData?.id || Math.random().toString(36).substr(2, 9),
        ...formData,
        createdAt: initialData?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      if (initialData) {
        const index = tickets.findIndex((t: any) => t.id === initialData.id)
        tickets[index] = newTicket
      } else {
        tickets.push(newTicket)
      }

      localStorage.setItem("tickets", JSON.stringify(tickets))
      router.push("/tickets")
    } catch (err) {
      setGeneralError("Failed to save ticket. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg border border-border bg-card">
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium">
          Title *
        </label>
        <Input
          id="title"
          name="title"
          placeholder="Brief description of the issue"
          value={formData.title}
          onChange={handleChange}
          disabled={loading}
          className={getFieldError(errors, "title") ? "border-destructive" : ""}
        />
        <FieldError message={getFieldError(errors, "title")} />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium">
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Detailed description of the ticket"
          value={formData.description}
          onChange={handleChange}
          disabled={loading}
          rows={6}
          className={`w-full px-3 py-2 rounded-lg border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary ${getFieldError(errors, "description") ? "border-destructive" : "border-border"}`}
        />
        <FieldError message={getFieldError(errors, "description")} />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label htmlFor="priority" className="block text-sm font-medium">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            disabled={loading}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="block text-sm font-medium">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            disabled={loading}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="assignee" className="block text-sm font-medium">
            Assignee
          </label>
          <Input
            id="assignee"
            name="assignee"
            placeholder="Assign to..."
            value={formData.assignee}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
      </div>

      <FormError message={generalError} />

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : initialData ? "Update Ticket" : "Create Ticket"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()} disabled={loading}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
