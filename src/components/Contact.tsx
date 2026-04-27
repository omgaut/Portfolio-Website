import { Github, Linkedin, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";

const links = [
  {
    label: "Email",
    value: "omgaut2020@gmail.com",
    href: "mailto:omgaut2020@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/om-gautam",
    href: "https://www.linkedin.com/in/om-gautam/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@omgaut",
    href: "https://github.com/omgaut",
    icon: Github,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-50 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
          / Contact
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Let's <span className="text-gradient">build</span> something.
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Open to internships, research collaborations, and ambitious side
          projects. Reach out — I reply fast.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-border bg-card hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-5 h-5 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-mono text-xs text-muted-foreground mb-1">
                {label}
              </p>
              <p className="text-sm font-medium truncate">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;