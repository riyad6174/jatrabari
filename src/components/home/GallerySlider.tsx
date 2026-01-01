"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryImageIds } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function GallerySlider() {
  const images = galleryImageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-4 md:mb-0">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">School Life</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl">A glimpse into the vibrant moments at our school.</p>
            </div>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/gallery">View Full Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
        
        <Carousel className="w-full"
            opts={{
                align: "start",
                loop: true,
            }}
        >
          <CarouselContent>
            {images.map((image, index) => image && (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden shadow-lg">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="aspect-[3/2] w-full h-auto object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
