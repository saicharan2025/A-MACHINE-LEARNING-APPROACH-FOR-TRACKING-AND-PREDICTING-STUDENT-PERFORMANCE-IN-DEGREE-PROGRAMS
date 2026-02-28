import { LayoutDashboard, Brain, Upload, LineChart, Map, ShieldAlert } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Real-Time Dashboards",
    description: "Live performance dashboards with per-student, per-cohort, and per-subject analytics. Instantly updated as new data flows in.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "ML Prediction Models",
    description: "Regression models for GPA forecasting and classification algorithms (Random Forest, SVM) for at-risk student detection.",
    color: "accent",
  },
  {
    icon: Upload,
    title: "CSV Data Upload",
    description: "Drag-and-drop upload for grades, attendance, and assignment data. Automatic validation, preprocessing, and feature engineering.",
    color: "primary",
  },
  {
    icon: LineChart,
    title: "GPA Trend Charts",
    description: "Interactive line charts displaying semester-wise GPA progression, rolling averages, and predicted future trajectories.",
    color: "accent",
  },
  {
    icon: Map,
    title: "Subject Heatmaps",
    description: "Color-coded performance heatmaps across all subjects, semesters, and student cohorts to identify weaknesses at a glance.",
    color: "primary",
  },
  {
    icon: ShieldAlert,
    title: "Dropout Risk Alerts",
    description: "Early warning system using LSTM time-series models to flag students with high dropout probability before it's too late.",
    color: "accent",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mono mb-4"
            style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)", color: "hsl(var(--primary))" }}>
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span style={{ color: "hsl(var(--foreground))" }}>Everything You Need for </span>
            <span className="gradient-text">Smart Analytics</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            A complete intelligent system for academic institutions to monitor, predict, and improve student outcomes.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color }, i) => (
            <div
              key={title}
              className="card-dark rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: color === "primary" ? "hsl(var(--primary) / 0.15)" : "hsl(var(--accent) / 0.15)",
                  border: `1px solid ${color === "primary" ? "hsl(var(--primary) / 0.3)" : "hsl(var(--accent) / 0.3)"}`,
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))" }}
                />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "hsl(var(--foreground))" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
