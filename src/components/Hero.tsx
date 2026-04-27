import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow animate-glow-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.1),transparent_50%)] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs text-muted-foreground mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for AI engineering roles
        </div>

        <h1
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Om <span className="text-gradient">Gautam</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground mb-3 font-mono animate-fade-in-up"
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          AI Engineer <span className="text-primary mx-2">/</span> Builder
        </p>

        <p
          className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Building intelligent systems at scale.
        </p>

        <div
          className="flex items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="group px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            View Work
          </a>
          <div className="flex items-center gap-2">
            {[
              { href: "mailto:omgaut2020@gmail.com", icon: Mail, label: "Email" },
              { href: "https://github.com/omgaut", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/om-gautam/", icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;