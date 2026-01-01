import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { notices } from "@/lib/data";
import { CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";

export function NoticeBoard() {
    const latestNotices = notices.slice(0, 4);

    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Notice Board</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Stay updated with the latest announcements and events.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {latestNotices.map((notice) => (
                        <Card key={notice.id} className="shadow-lg flex flex-col h-full">
                            <CardHeader>
                                <CardTitle className="text-lg font-headline h-16">{notice.title}</CardTitle>
                                <CardDescription className="flex items-center text-sm">
                                    <CalendarDays className="mr-2 h-4 w-4" />
                                    {new Date(notice.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground line-clamp-3">{notice.content}</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/90">
                                    <Link href={`/notice/${notice.id}`}>
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
