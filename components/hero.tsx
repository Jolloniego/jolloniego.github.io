"use client";

import { useEffect, useRef } from "react";
import { GitHubIcon, LinkedInIcon } from "./icons";

const STATS = [
  { value: "6M+", label: "Users" },
  { value: "$19.3M", label: "Raised" },
  { value: "10+", label: "Years in AI" },
];

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const rect = glowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.setProperty("--glow-x", `${x}px`);
      glowRef.current.style.setProperty("--glow-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={glowRef}
      className="hero-section relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      {/* Ambient glow that follows cursor */}
      <div className="hero-glow absolute pointer-events-none" />

      {/* Secondary fixed glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[var(--color-accent)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl w-full pt-20 z-10">
        <div className="animate-fade-up">
          <p className="text-[var(--color-accent)] font-medium mb-4 text-sm tracking-wide uppercase">
            Co-Founder &amp; Head of Engineering
          </p>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-up-delay-1">
          Juan <span className="hero-gradient-text">Olloniego</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-[var(--muted)] max-w-2xl leading-relaxed animate-fade-up-delay-2">
          Building GenAI products at massive scale for Latin America at{" "}
          <a
            href="https://zapia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] hover:text-[var(--color-accent)] transition-colors font-medium"
          >
            Zapia AI
          </a>
        </p>

        {/* Stats row */}
        <div className="mt-10 flex flex-wrap gap-8 animate-fade-up-delay-2">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-3">
          <a
            href="https://github.com/Jolloniego"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--card)] hover:border-[var(--muted)] transition-all"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/juan-olloniego-3a0856b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--card)] hover:border-[var(--muted)] transition-all"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
