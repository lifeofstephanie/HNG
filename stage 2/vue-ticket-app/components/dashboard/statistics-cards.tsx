export default function StatisticsCards() {
  const stats = [
    {
      label: "Total Tickets",
      value: "1,234",
      change: "+12%",
      icon: "📋",
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Open Tickets",
      value: "342",
      change: "-5%",
      icon: "🔓",
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      label: "In Progress",
      value: "156",
      change: "+8%",
      icon: "⚙️",
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Resolved",
      value: "736",
      change: "+23%",
      icon: "✓",
      color: "bg-green-50 text-green-600",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-green-600 mt-2">{stat.change} from last month</p>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
