import { GitHubIcon, LinkedInIcon } from "./icons";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-3xl w-full pt-20">
        <div className="animate-fade-up">
          <p className="text-[var(--color-accent)] font-medium mb-4 text-sm tracking-wide uppercase">
            Co-Founder &amp; Head of Engineering
          </p>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-up-delay-1">
          Juan Olloniego
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
