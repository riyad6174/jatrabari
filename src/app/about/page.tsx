import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'gallery-7');
  
    return (
    <div className="bg-card">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Jatrabari Preparatory School</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our school's foundations, our guiding principles, and our commitment to shaping the future of our young learners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                {aboutImage && (
                    <div className="shadow-xl">
                        <Image 
                            src={aboutImage.imageUrl}
                            alt={aboutImage.description}
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            data-ai-hint={aboutImage.imageHint}
                        />
                    </div>
                )}
            </div>
            <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Our History</h2>
                <p className="text-muted-foreground mb-4">
                    Founded in 2003, Jatrabari Preparatory School was established with the vision of creating a premier early learning center that blends a joyful, play-based approach with a strong emphasis on foundational skills and moral development.
                </p>
                <p className="text-muted-foreground">
                    From a humble beginning, we have grown into a trusted name in preparatory education, recognized for our caring environment, dedicated teachers, and happy, confident students. We remain true to our principle of making learning a joyful journey.
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                    Our mission is to provide a holistic and engaging early education that equips children with foundational knowledge, social skills, and a love for learning, enabling them to lead happy lives and become responsible citizens.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-4">Core Values</h2>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                        <span><strong>Care:</strong> Providing a safe, supportive, and nurturing environment for every child.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                        <span><strong>Curiosity:</strong> Encouraging children to ask questions, explore, and discover the world around them.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                        <span><strong>Respect:</strong> Fostering a community where diversity is valued and every individual is treated with kindness and dignity.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                        <span><strong>Joyful Learning:</strong> Making education a fun and engaging experience through play, creativity, and interactive activities.</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
