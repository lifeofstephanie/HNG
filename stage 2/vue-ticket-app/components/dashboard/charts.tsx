"use client"

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const lineData = [
  { name: "Jan", tickets: 400, resolved: 240 },
  { name: "Feb", tickets: 520, resolved: 380 },
  { name: "Mar", tickets: 480, resolved: 420 },
  { name: "Apr", tickets: 620, resolved: 500 },
  { name: "May", tickets: 750, resolved: 680 },
  { name: "Jun", tickets: 890, resolved: 820 },
]

const barData = [
  { name: "Bug", count: 240 },
  { name: "Feature", count: 180 },
  { name: "Support", count: 320 },
  { name: "Enhancement", count: 150 },
]

export default function Charts() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg border border-border bg-card">
        <h3 className="font-semibold mb-4">Ticket Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="tickets" stroke="var(--color-primary)" strokeWidth={2} />
            <Line type="monotone" dataKey="resolved" stroke="var(--color-success)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-6 rounded-lg border border-border bg-card">
        <h3 className="font-semibold mb-4">Tickets by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
              }}
            />
            <Bar dataKey="count" fill="var(--color-primary)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
