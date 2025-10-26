import { withAuth } from "@/components/auth/protected-route"
import TicketsList from "@/components/tickets/tickets-list"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function TicketsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Tickets</h1>
            <p className="text-muted-foreground mt-1">Manage and track all your tickets</p>
          </div>
          <Button asChild>
            <Link href="/tickets/new">Create Ticket</Link>
          </Button>
        </div>
        <TicketsList />
      </main>
    </div>
  )
}

export default withAuth(TicketsPage)
