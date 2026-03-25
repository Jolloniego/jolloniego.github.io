import { FadeIn } from "./fade-in";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons";

const PROJECTS = [
  {
    title: "Paper Implementations",
    description:
      "Re-implementing research papers across different ML domains with a focus on simplicity and reproducibility. All implementations are limited to a Colab runtime environment for easy access.",
    tags: ["PyTorch", "Deep Learning", "Research"],
    github: "https://github.com/Jolloniego/paper-implementations",
  },
  {
    title: "Deep Learning Notebooks",
    description:
      "Collection of teaching notebooks covering deep learning topics from computer vision to NLP, developed for postgraduate courses at ORT University.",
    tags: ["Jupyter", "Teaching", "PyTorch"],
    github: "https://github.com/Jolloniego/dl-notebooks",
  },
  {
    title: "Deep Learning for Code Completion",
    description:
      "MSc dissertation project applying NLP techniques to code generation in Python. Explored line-level and block-level completion using deep learning, comparing models trained on different tasks.",
    tags: ["NLP", "Code Generation", "MSc Project"],
    github: "https://github.com/Jolloniego/code-completion",
  },
  {
    title: "Few-Shot Optimization",
    description:
      'Reproduction of "Optimization as a Model for Few-Shot Learning" (ICLR 2017). Group project implementing novel neural network architectures for meta-learning.',
    tags: ["Meta-Learning", "Research", "ICLR"],
    github:
      "https://github.com/COMP6248-Reproducability-Challenge/few-shot-optimization",
    report:
      "https://drive.google.com/file/d/1mhsXq6oewwhm2CgVCRtGy7puPHd1PJtP/view",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--card)]">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--color-accent)] mb-12">
            Projects
          </h2>
        </FadeIn>

        <div className="grid gap-6">
          {PROJECTS.map((project) => (
            <FadeIn key={project.title}>
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--muted)] transition-all">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-[var(--card)] text-[var(--muted)] hover:text-[var(--color-accent)] transition-all"
                        aria-label="View report"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-[var(--card)] text-[var(--muted)] hover:text-[var(--color-accent)] transition-all"
                      aria-label="View on GitHub"
                    >
                      <GitHubIcon size={16} />
                    </a>
                  </div>
                </div>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--card)] text-[var(--muted)] border border-[var(--border)]"
                    >
                      {tag}
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
