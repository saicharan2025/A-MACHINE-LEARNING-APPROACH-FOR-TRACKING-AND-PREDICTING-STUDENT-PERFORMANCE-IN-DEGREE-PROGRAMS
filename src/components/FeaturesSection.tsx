import { LayoutDashboard, Brain, Upload, LineChart, Map, ShieldAlert } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Matrix Factorization",
    description: "Clusters related courses using latent factor models to build efficient feature vectors. Handles students with different course selections by forming a unified matrix representation.",
    color: "primary",
  },
  {
    icon: LayoutDashboard,
    title: "Ensemble-based Progressive Prediction",
    description: "Proposed EPP algorithm combines base classifiers (Random Forest) with BaggingClassifier ensemble to achieve superior prediction accuracy of 62.5% with lowest MSE of 37.5%.",
    color: "accent",
  },
  {
    icon: Upload,
    title: "Dataset Upload & Processing",
    description: "Upload UCLA student dataset (77 records) or extension dataset (1013 records). Automatic matrix factorization, train/test split (80/20), and feature vector generation.",
    color: "primary",
  },
  {
    icon: LineChart,
    title: "GPA Prediction (HIGH/LOW)",
    description: "Predicts whether a student's future course GPA will be HIGH or LOW based on their ongoing course marks and past performance using the trained EPP model.",
    color: "accent",
  },
  {
    icon: Map,
    title: "Course Recommendation",
    description: "Extension module predicts academic performance level (Excellent/Very Good/Good/Average) and suggests recommended future career paths like Database Developer, Network Engineer, etc.",
    color: "primary",
  },
  {
    icon: ShieldAlert,
    title: "Multi-Algorithm Comparison",
    description: "Runs SVM, Random Forest, Logistic Regression, and proposed EPP algorithm in parallel, comparing accuracy and MSE to demonstrate EPP's superiority over base classifiers.",
    color: "accent",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mono mb-4"
            style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)", color: "hsl(var(--primary))" }}>
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span style={{ color: "hsl(var(--foreground))" }}>Key Features of </span>
            <span className="gradient-text">StudentPerfAI</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            A complete ML pipeline from data-driven course clustering to ensemble prediction for student performance tracking.
          </p>
        </div>

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
