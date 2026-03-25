import { FadeIn } from "./fade-in";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--color-accent)] mb-4">
            About
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
            <p>
              I&apos;m a software engineer, startup founder, and former college professor
              with a deep passion for AI and its real-world applications. With an{" "}
              <span className="text-[var(--foreground)] font-medium">
                MSc in Artificial Intelligence
              </span>{" "}
              from the University of Southampton (Distinction) and a background in
              software systems engineering, I&apos;ve spent the last decade working at the
              intersection of research and production systems.
            </p>
            <p>
              Currently, I&apos;m the{" "}
              <span className="text-[var(--foreground)] font-medium">
                Co-Founder &amp; Head of Engineering at Zapia AI
              </span>
              , where we&apos;re building a GenAI-powered personal assistant for Latin
              America — serving{" "}
              <span className="text-[var(--foreground)] font-medium">6M+ users</span>{" "}
              and backed by Prosus Ventures, Endeavor Catalyst, and Factory HQ, with{" "}
              <span className="text-[var(--foreground)] font-medium">$19.3M raised</span>.
            </p>
            <p>
              Before Zapia, I worked on core ML systems at Landing AI (Andrew Ng&apos;s
              company), led client projects and pre-sales efforts at Tryolabs across
              computer vision, NLP, and recommendation systems, and taught postgraduate
              courses in Deep Learning and Reinforcement Learning at ORT University.
              I&apos;m also an angel investor, backing startups like{" "}
              <a href="https://www.lumepic.com" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] font-medium hover:text-[var(--color-accent)] transition-colors">Lumepic</a> and{" "}
              <a href="https://www.viatik.com" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] font-medium hover:text-[var(--color-accent)] transition-colors">Viatik</a>.
            </p>
            <p>
              I thoroughly enjoy every step of the ML pipeline — from framing problems
              and validating ideas to shipping production systems that impact millions of
              users. When I&apos;m not building, I&apos;m probably on a tennis court,
              grinding ranked League of Legends, perfecting my neapolitan pizza dough, or
              chipping away at my ever-growing pile of research papers and non-fiction books.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
