import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'gallery-1');

    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">A Foundation of Fun and Learning</h2>
                        <p className="text-muted-foreground">
                            Established in 2003, Jatrabari Preparatory School is dedicated to providing a quality early childhood education that prepares students for a lifetime of learning. We believe in nurturing curiosity, creativity, and kindness.
                        </p>
                        <p className="text-muted-foreground">
                            Our vibrant campus, caring teachers, and play-based curriculum create a joyful environment where children are inspired to explore, learn, and grow to their full potential.
                        </p>
                        <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                           <Link href="/about">Discover Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                    <div>
                        {aboutImage && (
                            <div className="shadow-xl">
                                <Image 
                                    src={aboutImage.imageUrl}
                                    alt={aboutImage.description}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover aspect-[3/2]"
                                    data-ai-hint={aboutImage.imageHint}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
