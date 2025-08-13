import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

const items = [
  { 
    school: "Stanford University", 
    degree: "Master of Science in Computer Science", 
    period: "2021 – 2023", 
    gpa: "3.8/4.0",
    logo: "/placeholder.svg",
    link: "#" 
  },
  { 
    school: "MIT", 
    degree: "Bachelor of Science in Software Engineering", 
    period: "2017 – 2021", 
    gpa: "3.9/4.0",
    logo: "/placeholder.svg",
    link: "#" 
  },
];

export default function Education() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <section id="education" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Education</h2>
      <div ref={ref} className={`space-y-6 transition-all duration-800 ${inView ? 'opacity-100' : 'opacity-0'}`}>
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
                alt={`${e.school} logo`} 
                className="w-16 h-16 rounded-lg object-cover border"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{e.school}</h3>
                    <p className="text-muted-foreground">{e.degree}</p>
                    <p className="text-sm text-accent font-medium">GPA: {e.gpa}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{e.period}</p>
                </div>
                <Button variant="outline" size="sm" className="mt-4 font-button hover-scale" asChild>
                  <a href={e.link} target="_blank" rel="noopener">View Certificate</a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
