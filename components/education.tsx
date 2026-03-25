import { FadeIn } from "./fade-in";
import { ExternalLink } from "lucide-react";

const DEGREES = [
  {
    school: "University of Southampton, UK",
    degree: "MSc Artificial Intelligence",
    period: "2018 — 2019",
    detail:
      "Graduated with Distinction (First Class). Focus on Machine Learning, Deep Learning, Computer Vision, and Reinforcement Learning. Dissertation on applying NLP techniques to code generation in Python.",
  },
  {
    school: "ORT University, Uruguay",
    degree: "BSc Software Systems Engineering",
    period: "2013 — 2018",
    detail:
      "Graduated with a cumulative grade of 87/100. Courses in software architecture, data structures, algorithms, theoretical CS, and machine learning.",
  },
];

const CERTIFICATIONS = [
  {
    name: "Scalable ML on Big Data using Apache Spark",
    issuer: "Coursera",
    date: "2020",
    url: "https://coursera.org/account/accomplishments/verify/JJQD5ZJYEFRM",
  },
  {
    name: "Production Machine Learning Systems",
    issuer: "Coursera",
    date: "2019",
    url: "https://coursera.org/account/accomplishments/verify/STRM4KJE8TBV",
  },
  {
    name: "End-to-End ML with TensorFlow on GCP",
    issuer: "Coursera",
    date: "2019",
    url: "https://coursera.org/account/accomplishments/verify/QRRE4PTJMSA6",
  },
  {
    name: "Machine Learning",
    issuer: "Coursera — Stanford",
    date: "2017",
    url: "https://coursera.org/account/accomplishments/verify/JJP8SLT8E86D",
  },
  {
    name: "Cambridge English: Proficiency (CPE)",
    issuer: "Cambridge Assessment",
    date: "",
    url: "https://cambridgeenglish.org/exams/proficiency/",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--color-accent)] mb-12">
            Education
          </h2>
        </FadeIn>

        <div className="space-y-10 mb-16">
          {DEGREES.map((deg) => (
            <FadeIn key={deg.school}>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg font-semibold">{deg.school}</h3>
                  <span className="text-sm text-[var(--muted)] shrink-0">
                    {deg.period}
                  </span>
                </div>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-3">
                  {deg.degree}
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  {deg.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h3 className="text-sm font-medium uppercase tracking-wide text-[var(--muted)] mb-6">
            Certifications
          </h3>
          <div className="grid gap-3">
            {CERTIFICATIONS.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--card)] hover:border-[var(--muted)] transition-all group"
              >
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{cert.name}</p>
                  <p className="text-xs text-[var(--muted)]">
                    {cert.issuer}
                    {cert.date && ` · ${cert.date}`}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="shrink-0 text-[var(--muted)] group-hover:text-[var(--color-accent)] transition-colors"
                />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
