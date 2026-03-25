import { FadeIn } from "./fade-in";

const EXPERIENCES = [
  {
    company: "Zapia AI",
    role: "Co-Founder & Head of Engineering",
    period: "Mar 2023 — Present",
    description:
      "Building a GenAI-powered personal assistant for Latin America. Scaled to 6M+ users, raised $19.3M from Prosus Ventures, Endeavor Catalyst, Factory HQ, and Anthos Capital. Leading all backend engineering and infrastructure.",
    url: "https://zapia.com",
  },
  {
    company: "Landing AI",
    role: "Senior Machine Learning Engineer",
    period: "Nov 2021 — Mar 2023",
    description:
      "Worked on core ML functionality for LandingLens. Designed and implemented large-image support for the platform, enabling new training and inference workflows across all clients.",
    url: "https://landing.ai",
  },
  {
    company: "Tryolabs",
    role: "Lead Machine Learning Engineer",
    period: "Oct 2019 — Nov 2021",
    description:
      "Led client engagements, project delivery, and pre-sales across Computer Vision, NLP, tabular ML, and recommendation systems for US-based companies. Worked hands-on with GCP, AWS, PyTorch, OpenCV, Docker, and FastAPI.",
    url: "https://tryolabs.com",
  },
  {
    company: "ORT University",
    role: "Professor — Postgraduate Courses",
    period: "2016 — 2021",
    description:
      "Taught Deep Learning (Bengio & Goodfellow curriculum), Reinforcement Learning (Sutton & Barto), Intelligent Agents, Foundations of Computing, and Programming Languages at both undergraduate and postgraduate levels.",
    url: "https://www.ort.edu.uy",
  },
  {
    company: "Kaszek Ventures",
    role: "Product & Growth Analyst",
    period: "Jan 2017 — Aug 2018",
    description:
      "Fulfilled internal tech needs and analyzed portfolio company data. Built and deployed an anomaly detection system for web traffic across all portfolio companies.",
    url: "https://www.kaszek.com",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--card)]">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--color-accent)] mb-12">
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {EXPERIENCES.map((exp) => (
            <FadeIn key={exp.company + exp.role}>
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold">
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <span className="text-sm text-[var(--muted)] shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-3">
                  {exp.role}
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
