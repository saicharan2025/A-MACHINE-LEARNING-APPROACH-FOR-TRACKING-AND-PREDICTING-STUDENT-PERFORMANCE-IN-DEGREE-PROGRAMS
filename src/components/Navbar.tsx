import { useState, useEffect } from "react";
import { Menu, X, Brain } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Demo", href: "#demo" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
              <Brain className="w-4 h-4" style={{ color: "hsl(var(--primary-foreground))" }} />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="gradient-text">StudentPerf</span>
              <span style={{ color: "hsl(var(--foreground))" }}>AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-secondary"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#demo")}
              className="ml-2 px-4 py-2 text-sm rounded-lg btn-primary font-semibold"
            >
              Live Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-sm"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#demo")}
              className="w-full mt-2 px-4 py-3 rounded-lg btn-primary text-sm font-semibold"
            >
              Live Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
