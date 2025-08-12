const items = [
  { quote: "They were fantastic to work with—delivered beyond expectations.", name: "Jane Doe", role: "PM" },
  { quote: "Great attention to detail and communication.", name: "John Smith", role: "Tech Lead" },
  { quote: "Would highly recommend for front-end projects.", name: "Alex Kim", role: "Founder" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Testimonials</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure key={i} className="rounded-xl border bg-card p-5 shadow-sm animate-fade-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <blockquote className="text-muted-foreground">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-foreground font-medium">{t.name} • <span className="text-muted-foreground">{t.role}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
