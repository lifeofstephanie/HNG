export default function Features() {
  const features = [
    {
      title: "Real-time Updates",
      description: "See ticket changes instantly across your team",
      icon: "⚡",
    },
    {
      title: "Smart Prioritization",
      description: "Automatically organize tickets by urgency and impact",
      icon: "📊",
    },
    {
      title: "Team Collaboration",
      description: "Comment, assign, and collaborate seamlessly",
      icon: "👥",
    },
    {
      title: "Advanced Search",
      description: "Find any ticket in seconds with powerful filters",
      icon: "🔍",
    },
    {
      title: "Custom Workflows",
      description: "Create workflows that match your process",
      icon: "⚙️",
    },
    {
      title: "Analytics & Reports",
      description: "Track metrics and generate detailed reports",
      icon: "📈",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30" aria-label="Features section">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful features for modern teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage tickets efficiently and keep your team aligned
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary"
            >
              <div className="text-3xl mb-4" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
