"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { DashboardStats } from "@/components/dashboard-stats"
import { TicketList } from "@/components/ticket-list"
import { CreateTicketDialog } from "@/components/create-ticket-dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export interface Ticket {
  id: string
  title: string
  description: string
  status: "open" | "in-progress" | "closed"
  priority: "low" | "medium" | "high"
  createdAt: string
  updatedAt: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateDialog, setShowCreateDialog] = useState(false)

  useEffect(() => {
    // Check authentication
    const user = localStorage.getItem("user")
    if (!user) {
      router.push("/login")
      return
    }

    // Load tickets from localStorage
    const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]")
    setTickets(storedTickets)
    setLoading(false)
  }, [router])

  const handleCreateTicket = (newTicket: Ticket) => {
    const updatedTickets = [...tickets, newTicket]
    setTickets(updatedTickets)
    localStorage.setItem("tickets", JSON.stringify(updatedTickets))
    setShowCreateDialog(false)
  }

  const handleDeleteTicket = (id: string) => {
    const updatedTickets = tickets.filter((t) => t.id !== id)
    setTickets(updatedTickets)
    localStorage.setItem("tickets", JSON.stringify(updatedTickets))
  }

  const handleUpdateTicket = (updatedTicket: Ticket) => {
    const updatedTickets = tickets.map((t) => (t.id === updatedTicket.id ? updatedTicket : t))
    setTickets(updatedTickets)
    localStorage.setItem("tickets", JSON.stringify(updatedTickets))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage your tickets and track progress</p>
          </div>
          <Button onClick={() => setShowCreateDialog(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            New Ticket
          </Button>
        </div>

        <DashboardStats tickets={tickets} />

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Recent Tickets</h2>
          <TicketList tickets={tickets} onDelete={handleDeleteTicket} onUpdate={handleUpdateTicket} />
        </div>
      </main>

      <CreateTicketDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onCreateTicket={handleCreateTicket}
      />
    </div>
  )
}
