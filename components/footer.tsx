import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Juan Olloniego
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Jolloniego"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-olloniego-3a0856b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
