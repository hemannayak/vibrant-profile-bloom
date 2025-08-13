import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const items = [
  { 
    title: "E-Commerce Platform", 
    desc: "Full-stack React application with Stripe integration, managing 10k+ products and real-time inventory tracking.", 
    image: "/placeholder.svg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "#", 
    code: "#" 
  },
  { 
    title: "Task Management App", 
    desc: "Collaborative project management tool with real-time updates, file sharing, and team communication features.", 
    image: "/placeholder.svg",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    live: "#", 
    code: "#" 
  },
  { 
    title: "AI Chat Application", 
    desc: "Intelligent chatbot with natural language processing, sentiment analysis, and multi-language support.", 
    image: "/placeholder.svg",
    tech: ["React", "Python", "OpenAI", "FastAPI"],
    live: "#", 
    code: "#" 
  },
  { 
    title: "Social Media Dashboard", 
    desc: "Analytics dashboard for social media management with data visualization and automated reporting.", 
    image: "/placeholder.svg",
    tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    live: "#", 
    code: "#" 
  },
  { 
    title: "Fitness Tracking App", 
    desc: "Mobile-first progressive web app for workout tracking with AR body scanning and nutrition planning.", 
    image: "/placeholder.svg",
    tech: ["React Native", "Three.js", "Firebase", "ML Kit"],
    live: "#", 
    code: "#" 
  },
  { 
    title: "Blockchain Wallet", 
    desc: "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and hardware wallet connectivity.", 
    image: "/placeholder.svg",
    tech: ["React", "Web3.js", "Solidity", "MetaMask"],
    live: "#", 
    code: "#" 
  },
];

export default function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Projects</h2>
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <article 
            key={i} 
            className={`group rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ${
              inView 
                ? 'opacity-100 translate-y-0 rotate-0' 
                : 'opacity-0 translate-y-8 rotate-1'
            }`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={p.image} 
                alt={`${p.title} preview`} 
                loading="lazy" 
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.tech.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="inline-flex items-center rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {tech}
                  </span>
                ))}
                {p.tech.length > 3 && (
                  <span className="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    +{p.tech.length - 3}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="flex-1 font-button hover-scale" asChild>
                  <a href={p.live} target="_blank" rel="noopener">
                    <ExternalLink className="size-4 mr-1"/> Live
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 font-button hover-scale" asChild>
                  <a href={p.code} target="_blank" rel="noopener">
                    <Github className="size-4 mr-1"/> Code
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
