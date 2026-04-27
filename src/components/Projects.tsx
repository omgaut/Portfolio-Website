import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "Tabl — AI CAD Generation Software",
    description:
      "Shipped a containerized text-to-CAD pipeline supporting 500+ concurrent generations and a multi-stage RAG system over 15K+ CAD docs.",
    stack: ["React", "AWS", "TypeScript", "Redis", "Three.js"],
    link: "https://github.com/omgaut",
  },
  {
    name: "AI Executive Assistant Agent (HackMIT)",
    description:
      "Built an iMessage-accessible GPT agent with LangChain orchestration and per-user knowledge graphs from Gmail, Outlook, and Notion data.",
    stack: ["TypeScript", "Python", "LangChain", "MCP", "Neo4j"],
    link: "https://github.com/omgaut",
  },
  {
    name: "AI-Driven Financial Market Anomaly Detector",
    description:
      "Trained an XGBoost-based anomaly detector on 1M+ market datapoints and built an end-to-end inference pipeline with PCA, RFE, and deployment via Next.js.",
    stack: ["Python", "XGBoost", "Scikit-Learn", "Next.js"],
    link: "https://github.com/omgaut",
  },
  {
    name: "Network Traffic Forecasting with Multi-Layer LSTMs",
    description:
      "Built an end-to-end time-series forecasting pipeline on 500K+ rows and improved model error by 14.9% with distributed stacked LSTMs.",
    stack: ["Python", "TensorFlow", "JAX", "Pandas"],
    link: "https://github.com/omgaut",
  },
  {
    name: "GlucoGuide — Health Consulting",
    description:
      "Health consulting platform for diabetes, utilizing TensorFlow and scikit-learn for prediction models.",
    stack: ["TensorFlow", "Scikit-Learn", "Python"],
    link: "https://github.com/omgaut",
  },
  {
    name: "RoboInvesting Platform",
    description:
      "Developed an AI financial advisory app with the MERN stack, training a financial sentiment model with NLTK and scikit-learn (95% accuracy) and integrating FinBERT for tone detection on market insights scraped with Selenium.",
    stack: ["MERN", "NLTK", "Scikit-Learn", "FinBERT", "Selenium"],
    link: "https://github.com/omgaut",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Projects" title="Selected work." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 border-r border-b border-border bg-card-variant hover:bg-card transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                  // {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-9 h-9 rounded-full border border-primary/60 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight leading-tight mb-5">
                {p.name}
              </h3>

              <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-8 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border border-border text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;