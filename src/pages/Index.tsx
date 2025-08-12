import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Courses from "@/components/portfolio/Courses";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ChatButton from "@/components/portfolio/ChatButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Your Name — Portfolio";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Professional portfolio of Your Name: projects, experience, and contact.');
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: ["https://github.com/your", "https://www.linkedin.com/in/your"],
    jobTitle: "Your Title",
    worksFor: { "@type": "Organization", name: "Your Org" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Courses />
        <Experience />
        <Projects />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;
