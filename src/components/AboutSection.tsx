import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Project info */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mono mb-4"
                style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.3)", color: "hsl(var(--primary))" }}>
                About the Project
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span style={{ color: "hsl(var(--foreground))" }}>Final Year </span>
                <span className="gradient-text">CS Project</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                This project addresses the critical challenge of student academic attrition in Indian universities, particularly in Hyderabad's engineering colleges.
                By applying advanced ML techniques including ensemble methods and deep learning, we provide institutions with a proactive intelligence system.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { label: "Project Title", value: "ML Approach for Tracking & Predicting Student Performance" },
                { label: "Domain", value: "Machine Learning · Educational Data Mining" },
                { label: "University Focus", value: "B.Tech Engineering Colleges, Hyderabad" },
                { label: "Degree", value: "B.Tech in Artificial Intelligence & Machine Learning" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <span className="text-xs mono mt-0.5 whitespace-nowrap" style={{ color: "hsl(var(--primary))" }}>{label}:</span>
                  <span className="text-sm" style={{ color: "hsl(var(--foreground))" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Author card */}
          <div className="card-dark rounded-2xl p-8 glow-border">
            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0"
                style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}>
                SC
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: "hsl(var(--foreground))" }}>Sai Charan</h3>
                <p className="text-sm" style={{ color: "hsl(var(--primary))" }}>B.Tech AI/ML · Final Year</p>
                <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>Hyderabad, Telangana</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
              Passionate CS student specializing in Machine Learning and Data Science. This project combines a love for education, data, and AI to create real-world impact for universities across Hyderabad and India.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Machine Learning & Deep Learning",
                "Educational Data Mining",
                "Python, TensorFlow, Scikit-learn",
                "AI/ML Engineering",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--primary))" }} />
                  <span className="text-sm" style={{ color: "hsl(var(--foreground))" }}>{skill}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/saicharan2025" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg btn-outline-primary text-sm">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/saicharan" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "hsl(var(--secondary))", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border))" }}>
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:saicharan@example.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "hsl(var(--secondary))", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border))" }}>
                <Mail className="w-4 h-4" />
              </a>
              <a href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "hsl(var(--secondary))", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border))" }}>
                <BookOpen className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
