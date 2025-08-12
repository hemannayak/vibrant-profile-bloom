import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I’ll get back to you soon." });
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="container mx-auto py-20">
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">Let’s Connect</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="rounded-xl border bg-card p-5 shadow-sm space-y-3">
          <Input required name="name" placeholder="Your name" aria-label="Your name" />
          <Input required type="email" name="email" placeholder="Your email" aria-label="Your email" />
          <Textarea required name="message" placeholder="Your message" aria-label="Your message" className="min-h-32" />
          <Button type="submit" className="font-button hover-scale" variant="secondary">Send Message</Button>
        </form>
        <aside className="rounded-xl border bg-card p-5 shadow-sm">
          <p className="text-muted-foreground">Prefer email or socials?</p>
          <div className="mt-3 flex items-center gap-3">
            <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-muted transition-colors" href="#"><Github className="size-5"/> GitHub</a>
            <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-muted transition-colors" href="#"><Linkedin className="size-5"/> LinkedIn</a>
            <a className="inline-flex items-center gap-2 rounded-full px-3 py-2 hover:bg-muted transition-colors" href="mailto:you@example.com"><Mail className="size-5"/> Email</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
