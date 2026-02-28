const techStack = [
  {
    category: "ML & AI",
    color: "primary",
    items: [
      { name: "Python 3.11", icon: "🐍" },
      { name: "Scikit-learn", icon: "⚙️" },
      { name: "TensorFlow", icon: "🔮" },
      { name: "XGBoost", icon: "🚀" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
    ],
  },
  {
    category: "Backend",
    color: "accent",
    items: [
      { name: "Flask / Django", icon: "🌐" },
      { name: "REST API", icon: "🔗" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis Cache", icon: "⚡" },
      { name: "Celery", icon: "🌿" },
      { name: "JWT Auth", icon: "🔑" },
    ],
  },
  {
    category: "Frontend",
    color: "primary",
    items: [
      { name: "React 18", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Chart.js", icon: "📊" },
      { name: "Recharts", icon: "📈" },
      { name: "React Query", icon: "🔄" },
    ],
  },
  {
    category: "DevOps",
    color: "accent",
    items: [
      { name: "AWS EC2", icon: "☁️" },
      { name: "Heroku", icon: "🟣" },
      { name: "Docker", icon: "🐳" },
      { name: "GitHub Actions", icon: "🤖" },
      { name: "Nginx", icon: "🔧" },
      { name: "Prometheus", icon: "📡" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mono mb-4"
            style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)", color: "hsl(var(--primary))" }}>
            Technology Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span style={{ color: "hsl(var(--foreground))" }}>Built With </span>
            <span className="gradient-text">Industry Standards</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Production-grade tools and frameworks used across the entire ML pipeline.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map(({ category, color, items }) => (
            <div key={category} className="card-dark rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full"
                  style={{ background: color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))" }} />
                <h3 className="font-semibold text-sm"
                  style={{ color: color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))" }}>
                  {category}
                </h3>
              </div>
              <div className="space-y-2">
                {items.map(({ name, icon }) => (
                  <div key={name} className="tech-badge flex items-center gap-3 px-3 py-2 rounded-lg cursor-default">
                    <span className="text-base">{icon}</span>
                    <span className="text-sm font-medium" style={{ color: "hsl(var(--foreground))" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
