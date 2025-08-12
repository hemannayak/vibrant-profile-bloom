import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <section id="about" className="container mx-auto py-20">
      <div
        ref={ref}
        data-inview={inView}
        className="grid md:grid-cols-2 gap-8 items-center opacity-0 data-[inview=true]:opacity-100 data-[inview=true]:animate-fade-slide-up"
      >
        <img
          src="/placeholder.svg"
          alt="Your Name profile photo"
          loading="lazy"
          className="w-full aspect-video object-cover rounded-xl transition-transform duration-300 hover:scale-[1.02] shadow"
        />
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">About Me</h2>
          <p className="mt-4 text-muted-foreground">
            A short bio about your background, passions, and what you’re looking for. Keep it concise and compelling.
          </p>
        </div>
      </div>
    </section>
  );
}
