import { withAuth } from "@/components/auth/protected-route"
import TicketDetail from "@/components/tickets/ticket-detail"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function TicketDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/tickets">← Back to Tickets</Link>
        </Button>
        <TicketDetail ticketId={params.id} />
      </main>
    </div>
  )
}

export default withAuth(TicketDetailPage)
