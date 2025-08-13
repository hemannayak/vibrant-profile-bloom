import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    company: "Google",
    role: "Senior Frontend Developer",
    period: "2023 – Present",
    logo: "/placeholder.svg",
    points: [
      "Led development of responsive web applications using React, TypeScript, and Tailwind CSS",
      "Improved application performance by 40% through code optimization and lazy loading",
      "Mentored 5 junior developers and established front-end best practices",
      "Collaborated with UX/UI teams to implement pixel-perfect designs"
    ],
    offer: "#",
    certificate: "#",
  },
  {
    company: "Microsoft",
    role: "Frontend Developer",
    period: "2021 – 2023",
    logo: "/placeholder.svg",
    points: [
      "Developed and maintained large-scale React applications with 50k+ daily users",
      "Implemented automated testing strategies reducing bugs by 60%",
      "Built reusable component library adopted across 10+ teams",
      "Optimized bundle size resulting in 30% faster load times"
    ],
    offer: "#",
    certificate: "#",
  },
  {
    company: "Meta",
    role: "Junior Frontend Developer",
    period: "2019 – 2021",
    logo: "/placeholder.svg",
    points: [
      "Implemented new features for user-facing web applications",
      "Collaborated with cross-functional teams in agile environment",
      "Wrote comprehensive unit and integration tests",
      "Participated in code reviews and knowledge sharing sessions"
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
      <div ref={ref} className="space-y-6">
        {items.map((e, i) => (
          <article 
            key={i} 
            className={`rounded-xl border bg-card p-6 shadow-sm transition-all duration-800 ${
              inView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <div className="flex items-start gap-4">
              <img 
                src={e.logo} 
                alt={`${e.company} logo`} 
                className="w-16 h-16 rounded-lg object-cover border bg-white p-2"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{e.role}</h3>
                    <p className="text-lg text-accent font-medium">{e.company}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {e.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="font-button hover-scale" asChild>
                    <a href={e.offer} target="_blank" rel="noopener">Offer Letter</a>
                  </Button>
                  <Button variant="outline" size="sm" className="font-button hover-scale" asChild>
                    <a href={e.certificate} target="_blank" rel="noopener">Certificate</a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
