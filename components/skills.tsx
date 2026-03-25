import { FadeIn } from "./fade-in";

const SKILL_GROUPS = [
  {
    label: "AI & ML",
    skills: [
      "GenAI / LLMs",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Reinforcement Learning",
      "ML Systems Design",
    ],
  },
  {
    label: "Languages & Frameworks",
    skills: [
      "Python",
      "PyTorch",
      "Scikit-Learn",
      "FastAPI",
      "NumPy",
      "Pandas",
      "OpenCV",
      "TypeScript",
    ],
  },
  {
    label: "Infrastructure",
    skills: ["GCP", "AWS", "Docker", "Linux", "Git", "CI/CD"],
  },
  {
    label: "Other",
    skills: [
      "System Architecture",
      "Team Leadership",
      "Technical Hiring",
      "Teaching",
      "SQL",
      "Haskell",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--color-accent)] mb-12">
            Skills
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {SKILL_GROUPS.map((group) => (
            <FadeIn key={group.label}>
              <div>
                <h3 className="text-sm font-medium text-[var(--muted)] mb-3">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-full border border-[var(--border)] hover:bg-[var(--card)] hover:border-[var(--muted)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
