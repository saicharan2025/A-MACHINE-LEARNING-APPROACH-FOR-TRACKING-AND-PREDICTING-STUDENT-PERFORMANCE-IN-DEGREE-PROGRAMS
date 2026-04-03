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
                <span className="gradient-text">B.Tech Project</span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                Based on the IEEE paper "A Machine Learning Approach for Tracking and Predicting Student Performance in Degree Programs" by Jie Xu, Kyeong Ho Moon, and Mihaela van der Schaar. 
                The project implements Matrix Factorization for course clustering and a proposed Ensemble-based Progressive Prediction (EPP) algorithm to predict student GPA as HIGH or LOW.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { label: "Paper", value: "IEEE JSTSP 2017 — ML Approach for Student Performance" },
                { label: "Base Module", value: "UCLA Dataset (77 records, 12 subjects, GPA: HIGH/LOW)" },
                { label: "Extension", value: "1013 records with performance level & course recommendation" },
                { label: "Key Algorithm", value: "Ensemble-based Progressive Prediction (EPP)" },
                { label: "Best Results", value: "EPP: 62.5% Accuracy, 37.5% MSE (base) | 0.598 MSE (ext)" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <span className="text-xs mono mt-0.5 whitespace-nowrap" style={{ color: "hsl(var(--primary))" }}>{label}:</span>
                  <span className="text-sm" style={{ color: "hsl(var(--foreground))" }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Problems solved */}
            <div className="card-dark rounded-xl p-4">
              <h4 className="text-sm font-semibold mb-2" style={{ color: "hsl(var(--primary))" }}>3 Key Problems Solved</h4>
              <div className="space-y-2 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                <p>1. Students differ in course selection → <span style={{ color: "hsl(var(--foreground))" }}>Matrix Factorization clusters related courses</span></p>
                <p>2. Courses aren't equally predictive → <span style={{ color: "hsl(var(--foreground))" }}>Data-driven feature vectors from course relevance</span></p>
                <p>3. Need evolving predictions → <span style={{ color: "hsl(var(--foreground))" }}>EPP uses past + ongoing performance data</span></p>
              </div>
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
              AI/ML Engineer specializing in Machine Learning and Data Science. This project implements the IEEE paper's proposed EPP algorithm using Python, Scikit-learn, and Tkinter to predict student academic performance.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Machine Learning & Ensemble Methods",
                "Matrix Factorization & Clustering",
                "Python, Scikit-learn, Pandas, Matplotlib",
                "Educational Data Mining",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--primary))" }} />
                  <span className="text-sm" style={{ color: "hsl(var(--foreground))" }}>{skill}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a href="https://github.com/saicharan2025?tab=repositories" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg btn-outline-primary text-sm">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/saicharan" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "hsl(var(--secondary))", color: "hsl(var(--foreground))", border: "1px solid hsl(var(--border))" }}>
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="mailto:saic6806@gmail.com"
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
