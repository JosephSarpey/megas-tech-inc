"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import BackToTop from "@/components/ui/BackToTop";
import ProjectsBackground from "@/components/animations/ProjectsBackground";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Hero />
      <About />
      <ProjectsBackground>
        <section
          id="projects"
          style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
          }}
          className="md:py-28"
        >
          <Projects />
        </section>
      </ProjectsBackground>
      <Services />
      <Testimonials />
      <Contact />
      <BackToTop />
    </main>
  );
}
