import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-10 px-6 border-t border-border text-center text-xs font-mono text-muted-foreground">
        © {new Date().getFullYear()} Om Gautam — Built with care.
      </footer>
    </main>
  );
};

export default Index;
