import { marqueeNotices } from "@/lib/data";
import { Megaphone } from "lucide-react";

export function NoticeMarquee() {
  // We need to repeat the content to create a seamless loop
  const notices = [...marqueeNotices, ...marqueeNotices];

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center h-12 overflow-hidden">
        <div className="flex-shrink-0 flex items-center">
          <Megaphone className="h-5 w-5 mr-3" />
          <span className="font-bold text-sm uppercase">Latest:</span>
        </div>
        <div className="flex-grow overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {notices.map((notice, index) => (
              <p key={index} className="mx-8 text-sm flex-shrink-0">
                {notice}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
