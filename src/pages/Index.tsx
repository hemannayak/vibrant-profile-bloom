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
import AIChatbot from "@/components/portfolio/AIChatbot";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Pangoth Hemanth Nayak — Portfolio";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Professional portfolio of Pangoth Hemanth Nayak: projects, experience, and contact.');
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pangoth Hemanth Nayak",
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: [
      "https://github.com/hemannayak",
      "https://www.linkedin.com/in/pangoth-hemanth-nayak-13195228b/",
      "https://www.instagram.com/heyy__heman",
      "https://www.instagram.com/hem_writess/?__pwa=1"
    ],
    jobTitle: "",
    worksFor: { "@type": "Organization", name: "" }
  };

  return (
    <div className="min-h-screen bg-background bg-texture-professional text-foreground">
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
      <AIChatbot />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;
