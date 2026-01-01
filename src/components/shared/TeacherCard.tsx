import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Teacher } from "@/lib/data";

interface TeacherCardProps {
  teacher: Teacher;
  onViewProfile: (teacher: Teacher) => void;
}

export function TeacherCard({ teacher, onViewProfile }: TeacherCardProps) {
  const teacherImage = PlaceHolderImages.find(p => p.id === teacher.imageId);

  return (
    <Card className="shadow-lg overflow-hidden text-center group flex flex-col h-full">
      <div className="overflow-hidden relative aspect-[4/5] w-full">
        {teacherImage && (
            <Image
                src={teacherImage.imageUrl}
                alt={`Portrait of ${teacher.name}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={teacherImage.imageHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        )}
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
            <h3 className="text-lg font-bold font-headline">{teacher.name}</h3>
            <p className="text-sm text-accent">{teacher.designation}</p>
            <p className="text-sm text-muted-foreground">{teacher.department}</p>
        </div>
        <Button 
          variant="outline" 
          className="mt-4"
          onClick={() => onViewProfile(teacher)}
        >
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
}
