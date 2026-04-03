const techStack = [
  {
    category: "ML Algorithms",
    color: "primary",
    items: [
      { name: "SVM (Support Vector Machine)", icon: "🎯" },
      { name: "Random Forest", icon: "🌲" },
      { name: "Logistic Regression", icon: "📐" },
      { name: "EPP (Ensemble Prediction)", icon: "🚀" },
      { name: "BaggingClassifier", icon: "🎒" },
      { name: "Matrix Factorization", icon: "🔢" },
    ],
  },
  {
    category: "Python Libraries",
    color: "accent",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Scikit-learn", icon: "⚙️" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Matplotlib", icon: "📊" },
      { name: "Tkinter (GUI)", icon: "🖥️" },
    ],
  },
  {
    category: "Dataset & Features",
    color: "primary",
    items: [
      { name: "UCLA Student Dataset", icon: "🎓" },
      { name: "77 Student Records", icon: "📋" },
      { name: "12 Course Subjects", icon: "📚" },
      { name: "Extension: 1013 Records", icon: "📈" },
      { name: "GPA: HIGH/LOW Labels", icon: "🏷️" },
      { name: "Course Recommendations", icon: "💡" },
    ],
  },
  {
    category: "Evaluation Metrics",
    color: "accent",
    items: [
      { name: "Mean Square Error (MSE)", icon: "📉" },
      { name: "Accuracy (%)", icon: "✅" },
      { name: "Train/Test Split (80/20)", icon: "✂️" },
      { name: "MSE Comparison Graph", icon: "📊" },
      { name: "Confusion Matrix", icon: "🔲" },
      { name: "Cross-Validation", icon: "🔄" },
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
            <span className="gradient-text">ML & Python</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Algorithms, libraries, and evaluation metrics used across the ML prediction pipeline.
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
