import SectionHeader from "./SectionHeader";

const stack = [
  "Swift/SwiftUI", "Java", "Python", "C/C++", "C#", "Go", "JavaScript", "TypeScript",
  "SQL", "Bash", "CUDA", "PyTorch", "TensorFlow", "JAX", "Scikit-Learn", "React",
  "FastAPI", "LangChain", "Tauri", "PostgreSQL", "MongoDB", "Snowflake", "Neo4j",
  "Docker", "Kubernetes", "AWS", "GCP", "Azure", "Linux",
];

const Stack = () => {
  return (
    <section id="stack" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-muted-foreground tracking-widest mb-6">
          // STACK & INTERESTS
        </p>
        <div className="flex flex-wrap gap-3">
          {stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] tracking-widest uppercase px-4 py-3 rounded-md bg-skills-tile border border-border/70 text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;