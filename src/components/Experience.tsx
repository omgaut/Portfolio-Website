import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "Block",
    role: "Incoming Software Engineer Intern",
    dates: "Summer 2026",
    location: "Remote",
    impact:
      "Building AI agents for security compliance automation across distributed systems.",
  },
  {
    company: "Fidelity Investments",
    role: "Software Engineer Intern",
    dates: "Summer 2025",
    location: "Boston, MA",
    impact:
      "Shipped low-latency trading services and internal ML tooling used across investment teams.",
  },
  {
    company: "Info Origin",
    role: "Software Engineer Intern",
    dates: "2024",
    location: "Remote",
    impact:
      "Built agentic RAG pipeline with LangChain and vLLM, reducing response latency by 35%.",
  },
  {
    company: "Georgia Tech — GROWER Lab",
    role: "Lead Undergraduate Researcher",
    dates: "2023 — Present",
    location: "Atlanta, GA",
    impact:
      "Leading research on distributed ML systems and inference optimization for large models.",
  },
  {
    company: "Building-U",
    role: "Software Engineer Intern",
    dates: "2023",
    location: "Remote",
    impact:
      "Engineered full-stack features serving 10K+ students with personalized learning paths.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Experience" title="Where I've built." />

        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <div key={i} className="group">
              <p className="font-mono text-xs tracking-widest text-primary mb-4 uppercase">
                {exp.dates}
              </p>
              <h3 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground mb-3 leading-[1.05]">
                {exp.role}
              </h3>
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-6">
                {exp.company} · {exp.location}
              </p>
              <p className="text-lg md:text-xl text-foreground/75 leading-relaxed max-w-3xl">
                {exp.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;