import { Database, Cpu, Zap, BarChart } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Database,
    title: "Upload UCLA Dataset",
    description: "Upload the student performance dataset containing course marks for subjects like Math33A, Math33B, PHYS1A, MAE103, etc. The system loads and validates all 77 student records (or 1013 for extension).",
    tags: ["dataset.txt", "UCLA Data", "77 Records"],
  },
  {
    num: "02",
    icon: Cpu,
    title: "Matrix Factorization",
    description: "Builds feature vectors by clustering related courses. Creates a matrix where rows are students and columns are course marks. If student hasn't taken a course, value is 0. Data split into 80% training (61 records) and 20% testing (16 records).",
    tags: ["Course Clustering", "Feature Vectors", "80/20 Split"],
  },
  {
    num: "03",
    icon: Zap,
    title: "Train ML Algorithms",
    description: "Trains four algorithms sequentially: SVM (43.75% acc), Random Forest (56.25% acc), Logistic Regression (56.25% acc), and the proposed EPP algorithm using BaggingClassifier with Random Forest as base (62.5% acc).",
    tags: ["SVM", "Random Forest", "EPP Algorithm"],
  },
  {
    num: "04",
    icon: BarChart,
    title: "Predict Performance",
    description: "Upload new student test records with ongoing course marks. EPP model predicts GPA as HIGH or LOW. Extension also predicts performance level (Excellent/Good/Average) and recommends future career courses.",
    tags: ["GPA: HIGH/LOW", "Career Suggest", "MSE Graph"],
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative fade-in-section">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mono mb-4"
            style={{ background: "hsl(var(--accent) / 0.1)", border: "1px solid hsl(var(--accent) / 0.3)", color: "hsl(var(--accent))" }}>
            Pipeline Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span style={{ color: "hsl(var(--foreground))" }}>How </span>
            <span className="gradient-text">StudentPerfAI</span>
            <span style={{ color: "hsl(var(--foreground))" }}> Works</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            From raw UCLA dataset to GPA prediction using the proposed Ensemble-based Progressive Prediction algorithm.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3), transparent)" }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, icon: Icon, title, description, tags }, i) => (
              <div key={num} className="card-dark rounded-2xl p-6 relative group hover:-translate-y-2 transition-all duration-300">
                <div className="step-number">{num}</div>
                <div className="mt-2 mb-4 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: i % 2 === 0 ? "hsl(var(--primary) / 0.15)" : "hsl(var(--accent) / 0.15)",
                    border: `1px solid ${i % 2 === 0 ? "hsl(var(--primary) / 0.3)" : "hsl(var(--accent) / 0.3)"}`,
                  }}>
                  <Icon className="w-5 h-5" style={{ color: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))" }} />
                </div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "hsl(var(--foreground))" }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>{description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full mono"
                      style={{ background: "hsl(var(--secondary))", color: "hsl(var(--muted-foreground))", border: "1px solid hsl(var(--border))" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
