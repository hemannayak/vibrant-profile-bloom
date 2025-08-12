import { useInView } from "@/hooks/useInView";

const items = [
  { title: "Hackathon Winner", date: "2024" },
  { title: "Top Contributor", date: "2023" },
  { title: "Dean’s List", date: "2022" },
];

export default function Achievements() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <section id="achievements" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Achievements</h2>
      <div ref={ref} data-inview={inView} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
        {items.map((a, i) => (
          <article key={i} className="rounded-xl border bg-card p-5 shadow-sm opacity-0 group-data-[inview=true]:opacity-100 group-data-[inview=true]:animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <img src="/placeholder.svg" alt={`${a.title} image`} loading="lazy" className="w-full aspect-video object-cover rounded-md mb-3" />
            <h3 className="font-heading text-lg text-foreground">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
