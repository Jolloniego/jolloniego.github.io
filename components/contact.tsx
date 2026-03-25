import { FadeIn } from "./fade-in";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--card)]">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-accent)]/10 mb-4">
              <Mail size={20} className="text-[var(--color-accent)]" />
            </div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--color-accent)] mb-3">
              Contact
            </h2>
            <p className="text-[var(--muted)] text-lg">
              Have something in mind? I&apos;d love to hear from you.
            </p>
          </div>

          <form
            action="https://formspree.io/f/mjvpqjlj"
            method="POST"
            className="max-w-md mx-auto space-y-4"
          >
            <input type="hidden" name="_subject" value="Contact from personal website" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <div>
              <input
                type="email"
                name="_replyto"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
