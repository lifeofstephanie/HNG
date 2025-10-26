"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EditTicketDialog } from "@/components/edit-ticket-dialog"
import type { Ticket } from "@/app/dashboard/page"
import { Trash2, Edit2 } from "lucide-react"

interface TicketListProps {
  tickets: Ticket[]
  onDelete: (id: string) => void
  onUpdate: (ticket: Ticket) => void
}

export function TicketList({ tickets, onDelete, onUpdate }: TicketListProps) {
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "closed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      case "medium":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (tickets.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-muted-foreground">No tickets yet. Create one to get started!</p>
      </Card>
    )
  }

  return (
    <>
      <div className="space-y-3">
        {tickets.map((ticket) => (
          <Card key={ticket.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{ticket.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{ticket.description}</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                  <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" onClick={() => setEditingTicket(ticket)} className="gap-1">
                  <Edit2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Edit</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(ticket.id)}
                  className="gap-1 text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Delete</span>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {editingTicket && (
        <EditTicketDialog
          ticket={editingTicket}
          onClose={() => setEditingTicket(null)}
          onUpdate={(updated) => {
            onUpdate(updated)
            setEditingTicket(null)
          }}
        />
      )}
    </>
  )
}
