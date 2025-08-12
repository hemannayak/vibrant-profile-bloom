import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-20" aria-hidden />
      <div className="container mx-auto py-28 sm:py-36">
        <p className="text-sm text-muted-foreground animate-fade-slide-up" style={{ animationDelay: '0.1s' }}>Hi, I’m</p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-2 animate-fade-slide-up" style={{ animationDelay: '0.2s' }}>
          Your Name
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-muted-foreground max-w-2xl animate-fade-slide-up" style={{ animationDelay: '0.35s' }}>
          Title • Tagline that highlights your strengths and the value you bring.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-slide-up" style={{ animationDelay: '0.5s' }}>
          <Button className="font-button hover-scale" variant="secondary" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button className="font-button hover-scale" variant="outline" asChild>
            <a href="#resume" aria-label="View Resume">View Resume</a>
          </Button>
          <div className="flex items-center gap-2 ml-1">
            <a className="inline-flex p-2 rounded-full hover:bg-muted transition-colors" href="#" aria-label="GitHub">
              <Github className="size-5 text-foreground" />
            </a>
            <a className="inline-flex p-2 rounded-full hover:bg-muted transition-colors" href="#" aria-label="LinkedIn">
              <Linkedin className="size-5 text-foreground" />
            </a>
            <a className="inline-flex p-2 rounded-full hover:bg-muted transition-colors" href="#contact" aria-label="Email">
              <Mail className="size-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
