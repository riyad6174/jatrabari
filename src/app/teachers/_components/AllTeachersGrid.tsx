"use client";

import { useState } from 'react';
import { teachers, type Teacher } from '@/lib/data';
import { TeacherCard } from '@/components/shared/TeacherCard';
import { TeacherProfileModal } from '@/components/shared/TeacherProfileModal';

export function AllTeachersGrid() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProfile = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teachers.map((teacher) => (
          <TeacherCard 
            key={teacher.id} 
            teacher={teacher} 
            onViewProfile={() => handleViewProfile(teacher)} 
          />
        ))}
      </div>
      {selectedTeacher && (
        <TeacherProfileModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          teacher={selectedTeacher}
        />
      )}
    </>
  );
}
