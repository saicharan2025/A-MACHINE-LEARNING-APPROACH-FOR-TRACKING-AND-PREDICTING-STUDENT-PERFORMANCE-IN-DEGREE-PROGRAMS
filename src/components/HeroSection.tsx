import { useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, AlertTriangle, BarChart2, Github } from "lucide-react";
import dashboardImg from "@/assets/dashboard-preview.png";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Animated particles
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 229, ${p.alpha})`;
        ctx.fill();
      });

      // Connect nearby particles
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 229, 229, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 section-glow pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mono"
              style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)", color: "hsl(var(--primary))" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-slow" style={{ background: "hsl(var(--primary))" }} />
              B.Tech Final Year Project · AI/ML
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span style={{ color: "hsl(var(--foreground))" }}>ML-Powered</span>
              <br />
              <span className="gradient-text">Student Performance</span>
              <br />
              <span style={{ color: "hsl(var(--foreground))" }}>Intelligence</span>
            </h1>

            <p className="text-lg leading-relaxed max-w-xl" style={{ color: "hsl(var(--muted-foreground))" }}>
              Predict GPA trajectories, detect at-risk students early, and uncover performance trends using state-of-the-art Machine Learning — Random Forest, LSTM, and ensemble models.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: TrendingUp, label: "GPA Prediction", value: "94.2% Acc" },
                { icon: AlertTriangle, label: "Dropout Risk", value: "91.8% F1" },
                { icon: BarChart2, label: "Trend Analysis", value: "Real-time" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg card-dark">
                  <Icon className="w-4 h-4" style={{ color: "hsl(var(--primary))" }} />
                  <div>
                    <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{label}</div>
                    <div className="text-xs font-semibold" style={{ color: "hsl(var(--foreground))" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-sm font-semibold"
              >
                View Live Demo <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://github.com/saicharan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-outline-primary text-sm font-semibold"
              >
                <Github className="w-4 h-4" /> GitHub Repo
              </a>
            </div>
          </div>

          {/* Right: Dashboard preview */}
          <div className="relative animate-float hidden lg:block">
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "var(--shadow-glow)" }} />
            <img
              src={dashboardImg}
              alt="StudentPerfAI Dashboard"
              className="w-full rounded-2xl glow-border object-cover"
              style={{ maxHeight: "420px" }}
            />
            {/* Floating metric badges */}
            <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl metric-card text-center animate-pulse-slow">
              <div className="mono text-xs" style={{ color: "hsl(var(--primary))" }}>Predicted GPA</div>
              <div className="font-bold text-lg" style={{ color: "hsl(var(--foreground))" }}>8.2 / 10</div>
            </div>
            <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl metric-card">
              <div className="mono text-xs" style={{ color: "hsl(var(--accent))" }}>At-Risk Students</div>
              <div className="font-bold text-lg" style={{ color: "hsl(var(--foreground))" }}>↓ 23%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
