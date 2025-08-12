import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    company: "Company A",
    role: "Frontend Developer",
    period: "2023 – Present",
    points: [
      "Built responsive UIs with React and Tailwind.",
      "Improved performance and accessibility.",
    ],
    offer: "#",
    certificate: "#",
  },
  {
    company: "Company B",
    role: "Intern Developer",
    period: "2022 – 2023",
    points: [
      "Implemented features and wrote unit tests.",
      "Collaborated with designers and PMs.",
    ],
    offer: "#",
    certificate: "#",
  },
];

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <section id="experience" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Experience</h2>
      <div ref={ref} data-inview={inView} className="grid md:grid-cols-2 gap-6">
        {items.map((e, i) => (
          <article key={i} className="rounded-xl border bg-card p-5 shadow-sm opacity-0 data-[inview=true]:opacity-100 data-[inview=true]:animate-fade-slide-up" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading text-xl text-foreground">{e.role}</h3>
                <p className="text-muted-foreground">{e.company}</p>
              </div>
              <p className="text-sm text-muted-foreground">{e.period}</p>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-muted-foreground">
              {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
            <div className="mt-4 flex gap-3">
              <Button variant="outline" className="font-button hover-scale" asChild><a href={e.offer} target="_blank" rel="noopener">Offer Letter</a></Button>
              <Button variant="outline" className="font-button hover-scale" asChild><a href={e.certificate} target="_blank" rel="noopener">Certificate</a></Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
