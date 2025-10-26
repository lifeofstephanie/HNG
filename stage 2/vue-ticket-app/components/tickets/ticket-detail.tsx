"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import TicketForm from "./ticket-form"

interface Ticket {
  id: string
  title: string
  description: string
  status: "open" | "in_progress" | "closed"
  priority: "low" | "medium" | "high"
  createdAt: string
  updatedAt: string
  assignee?: string
}

export default function TicketDetail({ ticketId }: { ticketId: string }) {
  const router = useRouter()
  const [ticket, setTicket] = useState<Ticket | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem("tickets") || "[]")
    const found = tickets.find((t: Ticket) => t.id === ticketId)
    setTicket(found || null)
    setLoading(false)
  }, [ticketId])

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]")
      const filtered = tickets.filter((t: Ticket) => t.id !== ticketId)
      localStorage.setItem("tickets", JSON.stringify(filtered))
      router.push("/tickets")
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (!ticket) {
    return <div className="text-center py-8 text-muted-foreground">Ticket not found</div>
  }

  if (isEditing) {
    return <TicketForm initialData={ticket} />
  }

  const statusColors = {
    open: "bg-red-50 text-red-700",
    in_progress: "bg-yellow-50 text-yellow-700",
    closed: "bg-green-50 text-green-700",
  }

  const priorityColors = {
    high: "text-red-600 font-bold",
    medium: "text-yellow-600",
    low: "text-green-600",
  }

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg border border-border bg-card">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{ticket.title}</h1>
            <div className="flex gap-3 flex-wrap">
              <span className={`text-sm px-3 py-1 rounded-full ${statusColors[ticket.status]}`}>
                {ticket.status.replace("_", " ")}
              </span>
              <span className={`text-sm font-medium ${priorityColors[ticket.priority]}`}>
                Priority: {ticket.priority}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-1">Description</h3>
            <p className="text-base whitespace-pre-wrap">{ticket.description}</p>
          </div>

          {ticket.assignee && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">Assigned to</h3>
              <p className="text-base">{ticket.assignee}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">Created</h3>
              <p className="text-base">{new Date(ticket.createdAt).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">Last Updated</h3>
              <p className="text-base">{new Date(ticket.updatedAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
