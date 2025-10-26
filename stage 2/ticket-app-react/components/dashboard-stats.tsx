import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Ticket } from "@/app/dashboard/page"

interface DashboardStatsProps {
  tickets: Ticket[]
}

export function DashboardStats({ tickets }: DashboardStatsProps) {
  const totalTickets = tickets.length
  const openTickets = tickets.filter((t) => t.status === "open").length
  const inProgressTickets = tickets.filter((t) => t.status === "in-progress").length
  const closedTickets = tickets.filter((t) => t.status === "closed").length

  const stats = [
    {
      title: "Total Tickets",
      value: totalTickets,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Open",
      value: openTickets,
      color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      title: "In Progress",
      value: inProgressTickets,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Closed",
      value: closedTickets,
      color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${stat.color} inline-block px-3 py-1 rounded-lg`}>{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
