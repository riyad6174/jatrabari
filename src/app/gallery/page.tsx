import { PlaceHolderImages } from "@/lib/placeholder-images";
import { galleryImageIds } from "@/lib/data";
import Image from "next/image";

export default function GalleryPage() {
    const images = galleryImageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

    return (
        <div className="bg-card">
            <div className="container py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Gallery</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Explore the joyful moments that define life at Jatrabari Preparatory School. See our little learners in action.
                </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {images.map((image) => image && (
                        <div key={image.id} className="group overflow-hidden shadow-lg">
                            <Image 
                                src={image.imageUrl}
                                alt={image.description}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover aspect-video transition-transform duration-300 group-hover:scale-110"
                                data-ai-hint={image.imageHint}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
