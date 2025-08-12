import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const items = [
  { title: "Project One", desc: "Brief description of what it does and impact.", live: "#", code: "#" },
  { title: "Project Two", desc: "Brief description of what it does and impact.", live: "#", code: "#" },
  { title: "Project Three", desc: "Brief description of what it does and impact.", live: "#", code: "#" },
];

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Projects</h2>
      <div ref={ref} data-inview={inView} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
        {items.map((p, i) => (
          <article key={i} className="rounded-xl border bg-card p-5 shadow-sm opacity-0 group-data-[inview=true]:opacity-100 group-data-[inview=true]:animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <img src="/placeholder.svg" alt={`${p.title} preview`} loading="lazy" className="w-full aspect-video object-cover rounded-md mb-3" />
            <h3 className="font-heading text-lg text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-3 flex gap-3">
              <Button variant="secondary" size="sm" className="font-button hover-scale" asChild>
                <a href={p.live} target="_blank" rel="noopener"><ExternalLink className="size-4 mr-1"/> Live</a>
              </Button>
              <Button variant="outline" size="sm" className="font-button hover-scale" asChild>
                <a href={p.code} target="_blank" rel="noopener"><Github className="size-4 mr-1"/> Code</a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
