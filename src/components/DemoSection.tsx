import { useState } from "react";

const BASE_RESULTS = {
  algorithms: [
    { name: "SVM", accuracy: 43.75, mse: 56.25 },
    { name: "Random Forest", accuracy: 56.25, mse: 43.75 },
    { name: "Logistic Regression", accuracy: 56.25, mse: 43.75 },
    { name: "EPP (Proposed)", accuracy: 62.5, mse: 37.5 },
  ],
  predictions: [
    { data: "[0.27, 1.45, 1.03, 1.69, 1.04, 0.08, 399.67, 441.83, 704.35, ...]", result: "HIGH" },
    { data: "[1.31, 0.38, -1.78, 1.13, -0.64, -1.23, 0, 477.21, 0, 630.17, ...]", result: "LOW" },
    { data: "[0.51, 1.45, -0.24, 2.00, 0.44, -0.49, 330.89, 469.75, 688.65, ...]", result: "HIGH" },
    { data: "[1.06, 1.45, 1.03, 1.20, 2.77, 0, 0, 490.38, 592.57, ...]", result: "HIGH" },
  ],
  datasetSize: 77,
  trainSize: 61,
  testSize: 16,
};

const EXTENSION_RESULTS = {
  algorithms: [
    { name: "SVM", accuracy: 68.97, mse: 0.68 },
    { name: "Random Forest", accuracy: 39.41, mse: 0.73 },
    { name: "Logistic Regression", accuracy: 68.97, mse: 0.68 },
    { name: "EPP (Proposed)", accuracy: null, mse: 0.60 },
  ],
  predictions: [
    { performance: "Excellent", course: "Database Developer" },
    { performance: "Excellent", course: "Portal Administrator" },
    { performance: "Good", course: "Network Engineer" },
    { performance: "Excellent", course: "Business Intelligence Analyst" },
    { performance: "Very Good", course: "Network Security Administrator" },
    { performance: "Average", course: "Technical Engineer" },
    { performance: "Good", course: "Technical Services/Help Desk" },
  ],
  datasetSize: 1013,
  trainSize: 810,
  testSize: 203,
};

const metrics = [
  { label: "EPP Best Accuracy", value: "62.5%", sub: "Base Dataset", color: "primary" },
  { label: "Lowest MSE", value: "37.5%", sub: "EPP Algorithm", color: "accent" },
  { label: "Extension Dataset", value: "1,013", sub: "Student Records", color: "primary" },
  { label: "Extension EPP MSE", value: "0.598", sub: "Best Performance", color: "accent" },
];

function getPerformanceColor(perf: string) {
  if (perf === "Excellent") return "hsl(180 100% 40%)";
  if (perf === "Very Good") return "hsl(180 100% 35% / 0.7)";
  if (perf === "Good") return "hsl(45 100% 50% / 0.6)";
  return "hsl(25 100% 55% / 0.6)";
}

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState<"base" | "extension">("base");

  return (
    <section id="demo" className="py-24 fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mono mb-4"
            style={{ background: "hsl(var(--accent) / 0.1)", border: "1px solid hsl(var(--accent) / 0.3)", color: "hsl(var(--accent))" }}>
            Results & Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Model Results</span>
            <span style={{ color: "hsl(var(--foreground))" }}> & Predictions</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Actual outputs from the ML pipeline — base module (UCLA 77 records) and extension module (1013 records).
          </p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map(({ label, value, sub, color }) => (
            <div key={label} className="metric-card rounded-2xl p-4 text-center">
              <div className="text-xs mb-1 mono" style={{ color: "hsl(var(--muted-foreground))" }}>{label}</div>
              <div className="text-2xl font-bold mb-1" style={{ color: color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))" }}>{value}</div>
              <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="card-dark rounded-2xl overflow-hidden">
          <div className="flex items-center gap-1 p-4 border-b" style={{ borderColor: "hsl(var(--border))" }}>
            {(["base", "extension"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: activeTab === tab ? "hsl(var(--primary) / 0.15)" : "transparent",
                  color: activeTab === tab ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                  border: activeTab === tab ? "1px solid hsl(var(--primary) / 0.3)" : "1px solid transparent",
                }}
              >
                {tab === "base" ? "📊 Base Module (77 records)" : "🚀 Extension (1013 records)"}
              </button>
            ))}
          </div>

          <div className="p-4" style={{ minHeight: "320px" }}>
            {activeTab === "base" ? (
              <div className="space-y-6">
                {/* Algorithm comparison bars */}
                <div>
                  <h4 className="text-sm font-semibold mb-3" style={{ color: "hsl(var(--foreground))" }}>Algorithm Accuracy & MSE Comparison</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {BASE_RESULTS.algorithms.map(({ name, accuracy, mse }) => (
                      <div key={name} className="rounded-xl p-3" style={{ background: "hsl(var(--secondary))" }}>
                        <div className="flex justify-between text-xs mb-2">
                          <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>{name}</span>
                          <span className="mono" style={{ color: name.includes("EPP") ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}>
                            {accuracy}% Acc
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full mb-1" style={{ background: "hsl(var(--background))" }}>
                          <div className="h-full rounded-full" style={{ width: `${accuracy}%`, background: name.includes("EPP") ? "hsl(var(--primary))" : "hsl(var(--accent))" }} />
                        </div>
                        <div className="text-xs mono text-right" style={{ color: "hsl(var(--muted-foreground))" }}>MSE: {mse}%</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs mono p-2 rounded-lg" style={{ background: "hsl(var(--secondary))", color: "hsl(var(--muted-foreground))" }}>
                    Dataset: {BASE_RESULTS.datasetSize} records · Training: {BASE_RESULTS.trainSize} · Testing: {BASE_RESULTS.testSize}
                  </div>
                </div>

                {/* Prediction results */}
                <div>
                  <h4 className="text-sm font-semibold mb-3" style={{ color: "hsl(var(--foreground))" }}>EPP Prediction Results (New Students)</h4>
                  <div className="space-y-2">
                    {BASE_RESULTS.predictions.map(({ data, result }, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "hsl(var(--secondary))" }}>
                        <div className="text-xs mono flex-1 truncate" style={{ color: "hsl(var(--muted-foreground))" }}>{data}</div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold mono shrink-0"
                          style={{
                            background: result === "HIGH" ? "hsl(180 100% 40% / 0.2)" : "hsl(0 70% 50% / 0.2)",
                            color: result === "HIGH" ? "hsl(180 100% 40%)" : "hsl(0 70% 50%)",
                            border: `1px solid ${result === "HIGH" ? "hsl(180 100% 40% / 0.3)" : "hsl(0 70% 50% / 0.3)"}`,
                          }}>
                          GPA: {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Extension algorithm results */}
                <div>
                  <h4 className="text-sm font-semibold mb-3" style={{ color: "hsl(var(--foreground))" }}>Extension Algorithm Performance</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {EXTENSION_RESULTS.algorithms.map(({ name, accuracy, mse }) => (
                      <div key={name} className="rounded-xl p-3" style={{ background: "hsl(var(--secondary))" }}>
                        <div className="flex justify-between text-xs mb-2">
                          <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>{name}</span>
                          <span className="mono" style={{ color: name.includes("EPP") ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}>
                            {accuracy !== null ? `${accuracy}% Acc` : "—"}
                          </span>
                        </div>
                        <div className="text-xs mono" style={{ color: "hsl(var(--muted-foreground))" }}>MSE: {mse}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-xs mono p-2 rounded-lg" style={{ background: "hsl(var(--secondary))", color: "hsl(var(--muted-foreground))" }}>
                    Dataset: {EXTENSION_RESULTS.datasetSize} records · Training: {EXTENSION_RESULTS.trainSize} · Testing: {EXTENSION_RESULTS.testSize}
                  </div>
                </div>

                {/* Extension predictions with course recommendations */}
                <div>
                  <h4 className="text-sm font-semibold mb-3" style={{ color: "hsl(var(--foreground))" }}>Performance Prediction & Course Recommendations</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left pb-3 pr-4 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>#</th>
                          <th className="text-left pb-3 pr-4 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>Performance</th>
                          <th className="text-left pb-3 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>Recommended Course</th>
                        </tr>
                      </thead>
                      <tbody>
                        {EXTENSION_RESULTS.predictions.map(({ performance, course }, i) => (
                          <tr key={i}>
                            <td className="py-2 pr-4 text-xs mono" style={{ color: "hsl(var(--muted-foreground))" }}>{i + 1}</td>
                            <td className="py-2 pr-4">
                              <span className="px-2 py-1 rounded text-xs font-bold"
                                style={{ background: getPerformanceColor(performance), color: "hsl(var(--foreground))" }}>
                                {performance}
                              </span>
                            </td>
                            <td className="py-2 text-xs font-medium" style={{ color: "hsl(var(--foreground))" }}>{course}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                    <span>Performance legend:</span>
                    {[
                      { color: "hsl(180 100% 40%)", label: "Excellent" },
                      { color: "hsl(180 100% 35% / 0.7)", label: "Very Good" },
                      { color: "hsl(45 100% 50% / 0.6)", label: "Good" },
                      { color: "hsl(25 100% 55% / 0.6)", label: "Average" },
                    ].map(({ color, label }) => (
                      <div key={label} className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded" style={{ background: color }} />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
