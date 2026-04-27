import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="About" title="A bit about me." />
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
          I'm <span className="text-foreground font-medium">Om</span>, a computer
          science student at <span className="text-primary">Georgia Tech</span> focused on
          building AI systems and entrepreneurship. I'm interested in designing scalable
          machine learning infrastructure, developing intelligent agents, and creating
          impactful products.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Focus", v: "AI Systems" },
            { k: "School", v: "Georgia Tech" },
            { k: "Stack", v: "Python · TS · Rust" },
            { k: "Status", v: "Building" },
          ].map((s) => (
            <div
              key={s.k}
              className="p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors"
            >
              <p className="font-mono text-xs text-muted-foreground mb-1">{s.k}</p>
              <p className="text-sm font-medium">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;