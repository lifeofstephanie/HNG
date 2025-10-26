import { withAuth } from "@/components/auth/protected-route"
import TicketForm from "@/components/tickets/ticket-form"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function NewTicketPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/tickets">← Back to Tickets</Link>
          </Button>
          <h1 className="text-3xl font-bold">Create New Ticket</h1>
          <p className="text-muted-foreground mt-1">Fill in the details below to create a new ticket</p>
        </div>
        <div className="max-w-2xl">
          <TicketForm />
        </div>
      </main>
    </div>
  )
}

export default withAuth(NewTicketPage)
