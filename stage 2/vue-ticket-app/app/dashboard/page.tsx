import { withAuth } from "@/components/auth/protected-route"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import StatisticsCards from "@/components/dashboard/statistics-cards"
import RecentTickets from "@/components/dashboard/recent-tickets"
import Charts from "@/components/dashboard/charts"

function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <StatisticsCards />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Charts />
          </div>
          <div>
            <RecentTickets />
          </div>
        </div>
      </main>
    </div>
  )
}

export default withAuth(DashboardPage)
