import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "Block",
    role: "Incoming Software Engineer Intern",
    dates: "Summer 2026",
    impact:
      "Building AI agents for security compliance automation across distributed systems.",
    tags: ["AI Agents", "Security", "LLMs"],
  },
  {
    company: "Fidelity Investments",
    role: "Software Engineer Intern",
    dates: "Summer 2025",
    impact:
      "Shipped low-latency trading services and internal ML tooling used across investment teams.",
    tags: ["Java", "Kafka", "ML Infra"],
  },
  {
    company: "Info Origin",
    role: "Software Engineer Intern",
    dates: "2024",
    impact:
      "Built agentic RAG pipeline with LangChain and vLLM, reducing response latency by 35%.",
    tags: ["LangChain", "vLLM", "RAG"],
  },
  {
    company: "Georgia Tech — GROWER Lab",
    role: "Lead Undergraduate Researcher",
    dates: "2023 — Present",
    impact:
      "Leading research on distributed ML systems and inference optimization for large models.",
    tags: ["Distributed ML", "Research", "PyTorch"],
  },
  {
    company: "Building-U",
    role: "Software Engineer Intern",
    dates: "2023",
    impact:
      "Engineered full-stack features serving 10K+ students with personalized learning paths.",
    tags: ["React", "Node", "Postgres"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Experience" title="Where I've built." />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10 group">
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:shadow-glow transition-all" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl font-semibold">
                    {exp.role}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.dates}
                  </span>
                </div>
                <p className="text-foreground/75 leading-relaxed mb-3">
                  {exp.impact}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;