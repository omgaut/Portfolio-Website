import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "Block",
    role: "Software Engineer Intern",
    dates: "Summer 2026",
    location: "San Francisco, CA",
    impact:
      "Building AI agents for security compliance automation across distributed systems.",
  },
  {
    company: "Fidelity Investments",
    role: "Software Engineer Intern",
    dates: "Summer 2025",
    location: "Durham, NC",
    impact:
      "Shipped low-latency trading services and internal ML tooling used across investment teams.",
  },
  {
    company: "Georgia Tech Grid Resilience & Emergency Response (GROWER) Lab",
    role: "Lead Undergraduate Researcher",
    dates: "2025 — 2026",
    location: "Atlanta, GA",
    impact:
      "Leading research on power outage analysis and data collection.",
  },
  {
    company: "Building-U",
    role: "Software Engineer Intern",
    dates: "2023",
    location: "Remote",
    impact:
      "Engineered full-stack features for personalized learning paths.",
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
              <h3 className="font-serif text-2xl md:text-4xl font-normal tracking-tight text-foreground mb-3 leading-tight">
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
