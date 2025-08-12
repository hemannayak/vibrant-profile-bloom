import { Github, ExternalLink } from "lucide-react";
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
      <div ref={ref} data-inview={inView} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <article key={i} className="rounded-xl border bg-card p-5 shadow-sm opacity-0 data-[inview=true]:opacity-100 data-[inview=true]:animate-flip-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <img src="/placeholder.svg" alt={`${p.title} preview`} loading="lazy" className="w-full aspect-video object-cover rounded-md mb-3" />
            <h3 className="font-heading text-lg text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-3 flex gap-3">
              <a className="story-link inline-flex items-center gap-1 text-sm" href={p.live} target="_blank" rel="noopener"><ExternalLink className="size-4"/> Live</a>
              <a className="story-link inline-flex items-center gap-1 text-sm" href={p.code} target="_blank" rel="noopener"><Github className="size-4"/> Code</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
