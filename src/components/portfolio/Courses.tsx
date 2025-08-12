import { useInView } from "@/hooks/useInView";

const items = [
  { title: "Course Title A", org: "Coursera", date: "Jun 2024", link: "#" },
  { title: "Course Title B", org: "edX", date: "Mar 2024", link: "#" },
  { title: "Course Title C", org: "Udemy", date: "Jan 2024", link: "#" },
];

export default function Courses() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <section id="courses" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Courses & Certifications</h2>
      <div ref={ref} data-inview={inView} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c, i) => (
          <article key={i} className="rounded-xl border bg-card p-5 shadow-sm opacity-0 data-[inview=true]:opacity-100 data-[inview=true]:animate-fade-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <img src="/placeholder.svg" alt={`${c.org} logo`} loading="lazy" className="w-full aspect-video object-cover rounded-md mb-3" />
            <h3 className="font-heading text-lg text-foreground">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.org} • {c.date}</p>
            <a className="story-link mt-2 inline-block text-sm" href={c.link} target="_blank" rel="noopener">View</a>
          </article>
        ))}
      </div>
    </section>
  );
}
