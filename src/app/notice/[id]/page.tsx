import { notices } from '@/lib/data';
import { notFound } from 'next/navigation';
import { CalendarDays, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  const notice = notices.find((n) => n.id === parseInt(params.id));

  if (!notice) {
    notFound();
  }

  return (
    <div className="bg-card">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            {notice.title}
          </h1>

          <div className="flex items-center text-muted-foreground mt-4 mb-8">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span className="text-sm">
              {new Date(notice.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>{notice.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
