import { useEffect, useRef, useState } from "react";

const GPA_DATA = [6.2, 6.8, 7.1, 7.5, 7.8, 8.0, 8.2];
const PREDICTED = [null, null, null, null, null, 8.0, 8.2, 8.5, 8.7];
const SEMESTERS = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];

const HEATMAP_DATA = [
  { subject: "Mathematics", scores: [72, 80, 78, 85, 88, 91] },
  { subject: "Data Structures", scores: [65, 70, 75, 80, 82, 85] },
  { subject: "ML Fundamentals", scores: [80, 85, 90, 92, 95, 97] },
  { subject: "Database Mgmt", scores: [55, 60, 68, 72, 75, 78] },
  { subject: "Algorithms", scores: [70, 74, 78, 83, 86, 90] },
];

const metrics = [
  { label: "Predicted Next GPA", value: "8.7 / 10", sub: "+0.5 from current", color: "primary" },
  { label: "Dropout Risk Score", value: "4.2%", sub: "Low Risk ✓", color: "accent" },
  { label: "Class Rank", value: "#12 / 60", sub: "Top 20%", color: "primary" },
  { label: "Model Accuracy", value: "94.2%", sub: "Validation Set", color: "accent" },
];

function getHeatColor(score: number) {
  if (score >= 90) return "hsl(180 100% 40%)";
  if (score >= 80) return "hsl(180 100% 35% / 0.7)";
  if (score >= 70) return "hsl(45 100% 50% / 0.6)";
  if (score >= 60) return "hsl(25 100% 55% / 0.6)";
  return "hsl(0 70% 50% / 0.6)";
}

export default function DemoSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = useState<"gpa" | "heatmap">("gpa");
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 1500;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setAnimProgress(p);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [activeTab]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || activeTab !== "gpa") return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    const H = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    const pad = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartW = w - pad.left - pad.right;
    const chartH = h - pad.top - pad.bottom;

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    for (let i = 0; i <= 5; i++) {
      const y = pad.top + (chartH / 5) * i;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(pad.left + chartW, y);
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;
      ctx.stroke();
      const val = (10 - (i * 2)).toFixed(0);
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.fillText(val, 0, y + 4);
    }

    const xStep = chartW / (SEMESTERS.length - 1);
    const toY = (v: number) => pad.top + chartH - ((v - 5) / 5) * chartH;

    // Actual GPA line
    ctx.beginPath();
    GPA_DATA.forEach((v, i) => {
      const x = pad.left + i * xStep;
      const y = toY(v);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "hsl(180, 100%, 45%)";
    ctx.lineWidth = 2.5;
    ctx.shadowColor = "hsl(180, 100%, 45%)";
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Predicted dashed line
    ctx.beginPath();
    ctx.setLineDash([6, 4]);
    PREDICTED.forEach((v, i) => {
      if (v === null) return;
      const x = pad.left + i * xStep;
      const y = toY(v);
      const prevNull = PREDICTED[i - 1] === null || i === 0;
      prevNull ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "hsl(258, 90%, 66%)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);

    // Dots
    GPA_DATA.forEach((v, i) => {
      const x = pad.left + i * xStep;
      const y = toY(v);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "hsl(180, 100%, 45%)";
      ctx.fill();
    });

    // X labels
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "11px JetBrains Mono, monospace";
    SEMESTERS.forEach((s, i) => {
      ctx.fillText(s, pad.left + i * xStep - 8, h - 8);
    });

    // Legend
    ctx.fillStyle = "hsl(180, 100%, 45%)";
    ctx.fillRect(pad.left, 4, 20, 2);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "11px Space Grotesk, sans-serif";
    ctx.fillText("Actual GPA", pad.left + 26, 9);

    ctx.strokeStyle = "hsl(258, 90%, 66%)";
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(pad.left + 100, 5);
    ctx.lineTo(pad.left + 120, 5);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fillText("Predicted", pad.left + 126, 9);
  }, [activeTab, animProgress]);

  return (
    <section id="demo" className="py-24 fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mono mb-4"
            style={{ background: "hsl(var(--accent) / 0.1)", border: "1px solid hsl(var(--accent) / 0.3)", color: "hsl(var(--accent))" }}>
            Interactive Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Sample Predictions</span>
            <span style={{ color: "hsl(var(--foreground))" }}> & Insights</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
            Real model outputs for a sample student — Sai Charan, B.Tech AI/ML, Semester 6.
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

        {/* Chart tabs */}
        <div className="card-dark rounded-2xl overflow-hidden">
          <div className="flex items-center gap-1 p-4 border-b" style={{ borderColor: "hsl(var(--border))" }}>
            {(["gpa", "heatmap"] as const).map((tab) => (
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
                {tab === "gpa" ? "📈 GPA Trend" : "🗺️ Subject Heatmap"}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2 text-xs mono" style={{ color: "hsl(var(--muted-foreground))" }}>
              <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: "hsl(var(--primary))" }} />
              Live Simulation
            </div>
          </div>

          <div className="p-4" style={{ minHeight: "320px" }}>
            {activeTab === "gpa" ? (
              <canvas ref={canvasRef} className="w-full" style={{ height: "280px" }} />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 pr-4 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>Subject</th>
                      {["S1", "S2", "S3", "S4", "S5", "S6"].map((s) => (
                        <th key={s} className="text-center pb-3 px-2 text-xs mono" style={{ color: "hsl(var(--muted-foreground))" }}>{s}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {HEATMAP_DATA.map(({ subject, scores }) => (
                      <tr key={subject}>
                        <td className="py-2 pr-4 text-xs font-medium whitespace-nowrap" style={{ color: "hsl(var(--foreground))" }}>{subject}</td>
                        {scores.map((score, j) => (
                          <td key={j} className="py-1 px-2 text-center">
                            <div
                              className="rounded w-10 h-8 flex items-center justify-center text-xs font-bold mono mx-auto"
                              style={{
                                background: getHeatColor(score),
                                color: "hsl(var(--foreground))",
                              }}
                            >
                              {score}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center gap-2 mt-4 text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                  <span>Score legend:</span>
                  {[
                    { color: "hsl(180 100% 40%)", label: "90+" },
                    { color: "hsl(180 100% 35% / 0.7)", label: "80-89" },
                    { color: "hsl(45 100% 50% / 0.6)", label: "70-79" },
                    { color: "hsl(25 100% 55% / 0.6)", label: "60-69" },
                    { color: "hsl(0 70% 50% / 0.6)", label: "<60" },
                  ].map(({ color, label }) => (
                    <div key={label} className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded" style={{ background: color }} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
