import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

const items = [
  { school: "University Name", degree: "B.Sc. in Something", period: "2019 – 2023", link: "#" },
  { school: "High School", degree: "Science", period: "2017 – 2019", link: "#" },
];

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <section id="education" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Education</h2>
      <div ref={ref} data-inview={inView} className="space-y-4">
        {items.map((e, i) => (
          <article key={i} className="rounded-xl border bg-card p-5 shadow-sm data-[inview=true]:animate-fade-slide-up opacity-0 data-[inview=true]:opacity-100" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-heading text-xl text-foreground">{e.school}</h3>
                <p className="text-muted-foreground">{e.degree}</p>
              </div>
              <p className="text-sm text-muted-foreground">{e.period}</p>
            </div>
            <Button variant="outline" className="mt-3 font-button hover-scale" asChild>
              <a href={e.link} target="_blank" rel="noopener">Certificate</a>
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
