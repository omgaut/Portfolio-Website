import { ArrowUpRight, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "Tabl",
    tagline: "AI CAD Generation",
    description:
      "Generative pipeline that turns natural-language prompts into editable parametric CAD models.",
    metric: "Reduced CAD prototyping time by 60%",
    stack: ["PyTorch", "Diffusion", "FastAPI", "Three.js"],
    github: "https://github.com/omgaut",
  },
  {
    name: "Amygdala",
    tagline: "AI Executive Assistant",
    description:
      "Agentic assistant that orchestrates calendar, email, and research tasks across multiple tools.",
    metric: "Saves 8+ hrs/week per user",
    stack: ["LangGraph", "OpenAI", "Postgres", "Next.js"],
    github: "https://github.com/omgaut",
  },
  {
    name: "Veritas",
    tagline: "LLM Evaluation System",
    description:
      "Multi-stage RAG pipeline indexing 15K+ documents with hallucination scoring and replay.",
    metric: "Cut token cost by 75%",
    stack: ["vLLM", "Qdrant", "Ray", "TypeScript"],
    github: "https://github.com/omgaut",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Projects" title="Selected work." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative p-6 rounded-2xl border border-border bg-card-variant hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card overflow-hidden"
            >
              {/* glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                    <p className="text-sm text-primary font-mono mt-1">
                      {p.tagline}
                    </p>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </a>
                </div>

                <p className="text-sm text-foreground/75 leading-relaxed mb-5 min-h-[60px]">
                  {p.description}
                </p>

                <div className="pb-4 mb-4 border-b border-border">
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    Impact
                  </p>
                  <p className="text-sm font-medium text-foreground">{p.metric}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;