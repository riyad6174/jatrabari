"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { teachers, type Teacher } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TeacherCard } from "../shared/TeacherCard";
import { TeacherProfileModal } from "../shared/TeacherProfileModal";
import { ArrowRight } from "lucide-react";

export function TeacherSlider() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const handleViewProfile = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-4 md:mb-0">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Meet Our Teachers</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl">Dedicated educators who nurture our young learners.</p>
            </div>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/teachers">View All Teachers <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent>
            {teachers.slice(0, 6).map((teacher) => (
              <CarouselItem key={teacher.id} className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1 h-full">
                  <TeacherCard
                    teacher={teacher}
                    onViewProfile={() => handleViewProfile(teacher)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>

      {selectedTeacher && (
        <TeacherProfileModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          teacher={selectedTeacher}
        />
      )}
    </section>
  );
}
