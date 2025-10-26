export default function RecentTickets() {
  const tickets = [
    { id: 1, title: "Login page not loading", status: "open", priority: "high" },
    { id: 2, title: "Add dark mode support", status: "in_progress", priority: "medium" },
    { id: 3, title: "Fix typo in docs", status: "closed", priority: "low" },
    { id: 4, title: "Performance optimization", status: "in_progress", priority: "high" },
    { id: 5, title: "Update API documentation", status: "open", priority: "medium" },
  ]

  const statusColors = {
    open: "bg-red-50 text-red-700",
    in_progress: "bg-yellow-50 text-yellow-700",
    closed: "bg-green-50 text-green-700",
  }

  const priorityColors = {
    high: "text-red-600",
    medium: "text-yellow-600",
    low: "text-green-600",
  }

  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <h3 className="font-semibold mb-4">Recent Tickets</h3>
      <div className="space-y-3">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <p className="text-sm font-medium truncate">{ticket.title}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className={`text-xs px-2 py-1 rounded ${statusColors[ticket.status as keyof typeof statusColors]}`}>
                {ticket.status.replace("_", " ")}
              </span>
              <span className={`text-xs font-medium ${priorityColors[ticket.priority as keyof typeof priorityColors]}`}>
                {ticket.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
