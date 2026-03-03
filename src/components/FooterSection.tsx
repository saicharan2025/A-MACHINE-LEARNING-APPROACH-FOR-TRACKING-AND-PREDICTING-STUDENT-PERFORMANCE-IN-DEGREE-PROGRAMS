import { useState } from "react";
import { Brain, Github, Mail, ExternalLink, Send } from "lucide-react";

export default function FooterSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer className="py-20 border-t" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Brand + CTA */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl btn-primary flex items-center justify-center">
                <Brain className="w-5 h-5" style={{ color: "hsl(var(--primary-foreground))" }} />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                <span className="gradient-text">StudentPerf</span>
                <span style={{ color: "hsl(var(--foreground))" }}>AI</span>
              </span>
            </div>

            <p className="text-base leading-relaxed max-w-md" style={{ color: "hsl(var(--muted-foreground))" }}>
              A Machine Learning powered platform for academic performance tracking and prediction. Built for Hyderabad's universities. Powered by AI.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-sm font-semibold animate-glow-pulse"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </button>
              <a
                href="https://github.com/saicharan2025?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-outline-primary text-sm font-semibold"
              >
                <Github className="w-4 h-4" /> View on GitHub
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: "Accuracy", value: "94.2%" },
                { label: "Students Tracked", value: "2,400+" },
                { label: "Institutions", value: "12+" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="card-dark rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
              <h3 className="font-semibold text-lg" style={{ color: "hsl(var(--foreground))" }}>Get in Touch</h3>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ background: "hsl(var(--primary) / 0.15)", border: "1px solid hsl(var(--primary) / 0.3)" }}>
                  <Send className="w-5 h-5" style={{ color: "hsl(var(--primary))" }} />
                </div>
                <h4 className="font-semibold mb-1" style={{ color: "hsl(var(--foreground))" }}>Message Sent!</h4>
                <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-1.5 mono" style={{ color: "hsl(var(--muted-foreground))" }}>Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-1"
                      style={{
                        background: "hsl(var(--secondary))",
                        border: "1px solid hsl(var(--border))",
                        color: "hsl(var(--foreground))",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary) / 0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5 mono" style={{ color: "hsl(var(--muted-foreground))" }}>Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                      style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }}
                      onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary) / 0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1.5 mono" style={{ color: "hsl(var(--muted-foreground))" }}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Questions, collaborations, or feedback..."
                    rows={4}
                    required
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none transition-all duration-200"
                    style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))", color: "hsl(var(--foreground))" }}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary) / 0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl btn-primary text-sm font-semibold">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "hsl(var(--border))" }}>
          <p className="text-xs mono" style={{ color: "hsl(var(--muted-foreground))" }}>
            © 2024 <span style={{ color: "hsl(var(--primary))" }}>StudentPerfAI</span> · Sai Charan · <a href="mailto:saic6806@gmail.com" className="hover:underline" style={{ color: "hsl(var(--primary))" }}>saic6806@gmail.com</a>
          </p>
          <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            Built with React · TailwindCSS · TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
