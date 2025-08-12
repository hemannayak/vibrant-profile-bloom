import { useInView } from "@/hooks/useInView";

type Skill = { name: string; level: number };
const groups: { title: string; skills: Skill[] }[] = [
  { title: "Technical", skills: [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
  ]},
  { title: "Web Dev", skills: [
    { name: "CSS / Tailwind", level: 92 },
    { name: "Node.js", level: 70 },
  ]},
  { title: "Leadership", skills: [
    { name: "Mentoring", level: 80 },
    { name: "Communication", level: 86 },
  ]},
];

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <SkillGroup key={g.title} title={g.title} skills={g.skills} />
        ))}
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <article
      ref={ref}
      data-inview={inView}
      className="rounded-xl border bg-card p-5 shadow-sm opacity-0 data-[inview=true]:opacity-100 data-[inview=true]:animate-fade-slide-up"
    >
      <h3 className="font-heading text-xl text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((s) => (
          <li key={s.name}>
            <div className="flex justify-between text-sm"><span>{s.name}</span><span>{s.level}%</span></div>
            <div className="h-2 bg-muted rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-primary transition-[width] duration-1000 ease-in-out"
                style={{ width: inView ? `${s.level}%` : 0 }}
                aria-label={`${s.name} proficiency`}
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
