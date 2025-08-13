import { useInView } from "@/hooks/useInView";

const items = [
  { 
    title: "Google Developer Challenge Winner", 
    date: "2024", 
    description: "1st place among 5000+ participants",
    icon: "🏆",
    image: "/placeholder.svg"
  },
  { 
    title: "Open Source Contributor", 
    date: "2023", 
    description: "Top 100 contributors on GitHub",
    icon: "⭐",
    image: "/placeholder.svg"
  },
  { 
    title: "Tech Conference Speaker", 
    date: "2023", 
    description: "Presented at React Summit 2023",
    icon: "🎤",
    image: "/placeholder.svg"
  },
  { 
    title: "Dean's List Scholar", 
    date: "2022", 
    description: "Academic excellence recognition",
    icon: "🎓",
    image: "/placeholder.svg"
  },
  { 
    title: "Startup Accelerator Graduate", 
    date: "2022", 
    description: "Y Combinator cohort completion",
    icon: "🚀",
    image: "/placeholder.svg"
  },
  { 
    title: "Innovation Award", 
    date: "2021", 
    description: "Best AI project at university",
    icon: "💡",
    image: "/placeholder.svg"
  },
];

export default function Achievements() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <section id="achievements" className="relative py-20 bg-texture-subtle">
      <div className="absolute inset-0 bg-texture-dots opacity-30"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-12 text-center">
          Achievements & Recognition
        </h2>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a, i) => (
            <article 
              key={i} 
              className={`group relative rounded-xl border bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-all duration-500 ${
                inView 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={a.image} 
                  alt={`${a.title} image`} 
                  loading="lazy" 
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 text-2xl bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                  {a.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground">{a.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {a.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}