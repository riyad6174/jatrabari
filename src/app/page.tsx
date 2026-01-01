import { Hero } from "@/components/home/Hero";
import { NoticeMarquee } from "@/components/home/NoticeMarquee";
import { AboutSection } from "@/components/home/AboutSection";
import { MessagesSection } from "@/components/home/MessagesSection";
import { VisionSection } from "@/components/home/VisionSection";
import { NoticeBoard } from "@/components/home/NoticeBoard";
import { TeacherSlider } from "@/components/home/TeacherSlider";
import { GallerySlider } from "@/components/home/GallerySlider";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <NoticeMarquee />
      <AboutSection />
      <MessagesSection />
      <VisionSection />
      <NoticeBoard />
      <TeacherSlider />
      <GallerySlider />
    </div>
  );
}
