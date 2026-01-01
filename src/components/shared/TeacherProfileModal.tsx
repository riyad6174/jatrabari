"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Teacher } from "@/lib/data";

interface TeacherProfileModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  teacher: Teacher;
}

export function TeacherProfileModal({
  isOpen,
  setIsOpen,
  teacher,
}: TeacherProfileModalProps) {
  const teacherImage = PlaceHolderImages.find(p => p.id === teacher.imageId);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {teacherImage && (
                <Image
                    src={teacherImage.imageUrl}
                    alt={`Portrait of ${teacher.name}`}
                    width={150}
                    height={150}
                    className="w-[150px] h-[150px] object-cover flex-shrink-0"
                    data-ai-hint={teacherImage.imageHint}
                />
            )}
            <div>
              <DialogTitle className="text-2xl font-headline">{teacher.name}</DialogTitle>
              <DialogDescription className="mt-1">
                {teacher.designation} <br/>
                {teacher.department}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="py-4">
          <h4 className="font-bold mb-2 font-headline">About</h4>
          <p className="text-sm text-muted-foreground">{teacher.bio}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
