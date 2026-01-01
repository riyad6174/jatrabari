import { Eye } from "lucide-react";

export function VisionSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Eye className="mx-auto h-12 w-12 text-accent mb-4" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Vision</h2>
          <blockquote className="mt-6 text-xl md:text-2xl font-light text-primary-foreground/80 italic">
            "To be a leading preparatory school, recognized for nurturing compassionate, curious, and confident young learners who are ready to excel in their future academic endeavors."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
